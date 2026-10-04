#!/usr/bin/env python3
"""Check the maintained two-theme state and native-body rendering invariants."""
from html.parser import HTMLParser
from pathlib import Path
import re
import unittest
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]


class Tree(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.nodes = []
        self.stack = []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        node = {'tag': tag, 'attrs': dict(attrs), 'children': [], 'text': ''}
        if self.stack:
            self.stack[-1]['children'].append(node)
        else:
            self.nodes.append(node)
        if tag not in ('img', 'br', 'hr', 'meta', 'link', 'input'):
            self.stack.append(node)

    def handle_endtag(self, tag):
        if self.stack and self.stack[-1]['tag'] == tag:
            self.stack.pop()

    def handle_data(self, data):
        for node in self.stack:
            node['text'] += data


def css(node):
    return {k.strip(): v.strip() for part in node['attrs'].get('style', '').split(';')
            if ':' in part for k, v in [part.split(':', 1)]}


def walk(nodes):
    for node in nodes:
        yield node
        yield from walk(node['children'])


class ThemeState(unittest.TestCase):
    def test_exactly_two_registered_themes(self):
        expected = {'theme-kevinbee-compact.md', 'theme-olive-journal.md'}
        actual = {p.name for p in (ROOT / 'references').glob('theme-*.md')}
        self.assertEqual(actual, expected | {'theme-index.md', 'theme-generator.md'})
        index = (ROOT / 'references/theme-index.md').read_text()
        registered = set(re.findall(r'references/(theme-[\w-]+\.md)', index))
        self.assertEqual(registered, expected)
        self.assertIn('默认', index.split('theme-kevinbee-compact.md')[0])
        self.assertFalse((ROOT / 'history').exists())
        self.assertFalse((ROOT / 'docs/kevinbee-final').exists())

    def test_no_retired_names_in_active_files(self):
        for directory in ('references', 'assets', 'docs', 'agents'):
            for file in (ROOT / directory).rglob('*'):
                if file.is_file() and file.suffix in ('.md', '.html', '.yaml'):
                    text = file.read_text()
                    self.assertNotIn('词员外', text, str(file))
                    self.assertNotIn('theme-kevinbee-editorial', text, str(file))
        previews = {p.name for p in (ROOT / 'assets/theme-previews').glob('*.html')}
        self.assertEqual(previews, {'theme-kevinbee-compact.html', 'theme-olive-journal.html'})

    def test_native_body_and_images(self):
        forbidden = {'font-family', 'font-size', 'line-height', 'color', 'background', 'padding'}
        for name in ('完整文章', '图文示例'):
            text = (ROOT / f'docs/kevinbee/{name}_正文.html').read_text()
            tree = Tree(text)
            self.assertEqual(len(tree.nodes), 1)
            body = tree.nodes[0]
            self.assertEqual(body['tag'], 'section')
            self.assertFalse(forbidden & css(body).keys())
            paragraphs = [n for n in body['children'] if n['tag'] == 'p' and 'font-weight' not in css(n)]
            self.assertTrue(paragraphs)
            for paragraph in paragraphs:
                self.assertFalse(forbidden & css(paragraph).keys())
            chapters = [n for n in body['children'] if 'border-top' in css(n)]
            self.assertEqual(len(chapters), 5 if name == '完整文章' else 3)
            for chapter in chapters:
                self.assertEqual(css(chapter)['border-top'], '1px solid #2659DE')
                self.assertEqual(css(chapter['children'][0])['font-size'], '18px')
                self.assertEqual(css(chapter['children'][1])['font-size'], '24px')
            images = [n for n in walk(tree.nodes) if n['tag'] == 'img']
            self.assertEqual(len(images), 0 if name == '完整文章' else 5)
            for node in images:
                style = css(node)
                self.assertEqual(style['width'], '100%')
                self.assertEqual(style['height'], 'auto')
                self.assertEqual(style['border-radius'], '6px')
                self.assertNotIn('object-fit', style)
            for node in walk(tree.nodes):
                self.assertNotIn(node['tag'], ('script', 'style', 'button', 'div'))
                self.assertFalse({'class', 'id'} & node['attrs'].keys())

    def test_catalogue_single_source(self):
        catalogue = (ROOT / 'docs/kevinbee/组件全览.html').read_text()
        self.assertEqual(catalogue, (ROOT / 'assets/theme-previews/theme-kevinbee-compact.html').read_text())
        ids = re.findall(r'id="(block-kbc-[^"]+)"', catalogue)
        self.assertEqual(len(ids), 53)
        self.assertEqual(len(set(ids)), 53)
        rules = (ROOT / 'references/theme-kevinbee-compact.md').read_text()
        snippets = re.findall(r'```html\s*\n(.*?)```', rules, re.S)
        self.assertEqual(len(snippets), 31)  # 30 core components + article skeleton
        for snippet in snippets[:-1]:
            self.assertIn(snippet.strip(), catalogue)

    def test_preview_copy_region_and_local_links(self):
        for file in (ROOT / 'docs').rglob('*.html'):
            text = file.read_text()
            tree = Tree(text)
            regions = [n for n in walk(tree.nodes) if n['attrs'].get('id') == 'gzh-content']
            if file.parent.name == 'kevinbee' and file.stem.endswith('_预览'):
                self.assertEqual(len(regions), 1)
                self.assertEqual(len(regions[0]['children']), 1)
                self.assertEqual(regions[0]['children'][0]['tag'], 'section')
            for node in walk(tree.nodes):
                href = node['attrs'].get('href', '')
                url = urlsplit(href)
                if url.path and not url.scheme and not url.netloc:
                    self.assertTrue((file.parent / unquote(url.path)).exists(), f'{file}: {href}')


if __name__ == '__main__':
    unittest.main()
