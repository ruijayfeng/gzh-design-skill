#!/usr/bin/env python3
"""Verify that a rendered WeChat HTML keeps Markdown text, links, and images."""
from __future__ import annotations
import argparse
from html.parser import HTMLParser
from pathlib import Path
import re
import sys

IMAGE = re.compile(r"!\[([^\]]*)\]\(([^)]+)\)")
LINK = re.compile(r"(?<!!)\[([^\]]+)\]\(([^)]+)\)")
TABLE_RULE = re.compile(r"^\s*\|?(?:\s*:?-+:?\s*\|)+\s*:?-+:?\s*\|?\s*$")
THEMATIC_RULE = re.compile(r"^ {0,3}(?:(?:-[ \t]*){3,}|(?:\*[ \t]*){3,}|(?:_[ \t]*){3,})$")


def normalize(value: str) -> str:
    return re.sub(r"\s+", "", value)


def plain_markdown(line: str) -> str:
    line = IMAGE.sub("", line)
    line = LINK.sub(lambda m: m.group(1), line)
    line = re.sub(r"^\s{0,3}#{1,6}\s+", "", line)
    line = re.sub(r"^\s*>\s?", "", line)
    line = re.sub(r"^\s*(?:[-+*]|\d+[.)])\s+", "", line)
    line = line.replace("**", "").replace("__", "").replace("~~", "")
    line = line.replace("==", "").replace("++", "").replace("`", "")
    line = re.sub(r"</?(?:u|em|strong|br)\b[^>]*>", "", line, flags=re.I)
    if "|" in line:
        line = "".join(cell.strip() for cell in line.strip().strip("|").split("|"))
    return normalize(line)


def source_fragments(markdown: str) -> list[str]:
    fragments: list[str] = []
    in_fence = False
    for line in markdown.splitlines():
        if line.lstrip().startswith("```"):
            in_fence = not in_fence
            continue
        if not in_fence and TABLE_RULE.match(line):
            continue
        if not in_fence and THEMATIC_RULE.match(line):
            continue
        plain = plain_markdown(line)
        if plain:
            fragments.append(plain)
    return fragments


class Rendered(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.skip = 0
        self.text: list[str] = []
        self.links: list[str] = []
        self.images: list[str] = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in {"style", "script", "head", "title"}:
            self.skip += 1
        if tag == "a" and attrs.get("href"):
            self.links.append(attrs["href"])
        if tag == "img" and attrs.get("src"):
            self.images.append(attrs["src"])

    def handle_endtag(self, tag):
        if tag in {"style", "script", "head", "title"} and self.skip:
            self.skip -= 1

    def handle_data(self, data):
        if not self.skip:
            self.text.append(data)


def verify(markdown: str, html: str) -> tuple[list[str], list[str]]:
    errors: list[str] = []
    warnings: list[str] = []
    rendered = Rendered()
    rendered.feed(html)
    visible = normalize("".join(rendered.text))
    cursor = 0
    for fragment in source_fragments(markdown):
        index = visible.find(fragment, cursor)
        if index < 0:
            errors.append(f"text missing or out of order: {fragment[:60]}")
        else:
            cursor = index + len(fragment)
    source_links = [url for _, url in LINK.findall(markdown)]
    source_images = [src for _, src in IMAGE.findall(markdown)]
    if rendered.links != source_links:
        errors.append(f"link targets differ: source={source_links!r}, html={rendered.links!r}")
    if rendered.images != source_images:
        errors.append(f"image order differs: source={source_images!r}, html={rendered.images!r}")
    if not source_images:
        warnings.append("source contains no images")
    return errors, warnings


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("markdown")
    ap.add_argument("html")
    args = ap.parse_args()
    md_path = Path(args.markdown)
    html_path = Path(args.html)
    errors, warnings = verify(md_path.read_text(encoding="utf-8"), html_path.read_text(encoding="utf-8"))
    for item in warnings:
        print("WARN", item)
    for item in errors:
        print("ERROR", item)
    print(f"checked content: {len(errors)} error(s), {len(warnings)} warning(s)")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
