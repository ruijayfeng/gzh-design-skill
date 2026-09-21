# 词员外公众号排版 Skill

一个面向个人内容工作流的微信公众号纯排版 skill：**不改写文章，只把现有内容转换成可复制到公众号编辑器的 HTML**。

## 最简单的使用方式

```text
用词员外风格排版这篇文章：article.md
```

也可以使用保留的原版定制母版：

```text
用橄榄手记风格排版这篇文章：article.md
```

使用凯冰主 IP 风格：

```text
用凯冰风格排版这篇文章：article.md
```

如果文章正文已经在对话中，只要说“用词员外风格排版”即可。

## 三套主题

| 主题 | 定位 | 用途 |
|---|---|---|
| **词员外·现代水墨**（默认） | 暖白宣纸、墨色细线、朱砂点睛、现代中文 | 日常发布；AI、方法论、行业观察、知识整理、经验复盘 |
| **凯冰·明亮编辑**（主 IP） | 语义大字、宋体标题、纸白、明黄标记与蓝色引文 | AI 工作流、方法论、创作记录、个人思考 |
| **橄榄手记**（定制母版） | 编辑部内刊质感、组件类型完整、结构变化丰富 | 需要另一套成品风格时直接使用，或作为后续主题定制参考 |

完整预览位于 [`docs/gallery/index.html`](docs/gallery/index.html)。凯冰真实文章排版样张位于 [`docs/kevinbee-final/凯冰_排版预览.html`](docs/kevinbee-final/凯冰_排版预览.html)，可直接查看并复制富文本。

## 排版边界

本 skill 只负责：

- 标题、章节、段落、列表、引用、代码和图片的视觉排版；
- 同组多图的横向滑动收纳；
- 长提示词、操作记录和补充材料的定高滚动窗；
- 生成干净正文 HTML 和带“复制到公众号”按钮的预览页；
- 检查公众号不兼容标签、样式和文字包裹。

它不会：

- 写作、改写、润色、总结或重组文章；
- 自动补标题、导语、金句、作者介绍、CTA 或图注；
- 生成、修改或裁切图片；
- 为了展示组件而添加原文没有的内容。

允许新增“左右滑动查看”“上下滑动查看”等纯操作提示。凯冰主题还允许用户已要求的章节语义词，必须准确对应原章节，完整保留原题，不引入新观点。

## 输出与发布

排版完成后生成：

```text
文章名_排版_主题名.html
文章名_排版_主题名_预览.html
```

打开预览文件，点击右上角“复制到公众号”，再粘贴到微信公众号编辑器。干净正文 HTML 用于校验和手动兜底。

## 安装

```bash
npx skills add https://github.com/ruijayfeng/gzh-design-skill
```

或者项目级安装：

```bash
git clone https://github.com/ruijayfeng/gzh-design-skill.git .codex/skills/gzh-design-skill
```

## 目录

```text
gzh-design-skill/
├── SKILL.md
├── agents/openai.yaml
├── references/
│   ├── theme-index.md
│   ├── theme-ciyuanwai.md
│   ├── theme-kevinbee-editorial.md
│   ├── theme-olive-journal.md
│   ├── common-components.md
│   ├── format-normalize.md
│   ├── theme-generator.md
│   └── eval-cases.md
├── assets/
│   ├── sample-article.md
│   ├── preview-template.html
│   └── theme-previews/
├── docs/gallery/
└── scripts/
```

## 校验

```bash
python3 scripts/component_lint.py .
python3 scripts/validate_gzh_html.py 生成的正文.html
```

主题组件库必须达到 `0 ERROR`。内容标点相关 WARNING 只报告，不得以排版名义改写原文。

## 个性化说明

本仓库基于 [isjiamu/gzh-design-skill](https://github.com/isjiamu/gzh-design-skill) 定制，保留原项目的 AGPL-3.0 许可证、通用组件、格式转换和校验思路；主题集已精简为词员外个人主题与一套橄榄手记定制母版。

词员外主题使用的示例插图来自 [ruijayfeng/ciyuanwai-illustrations](https://github.com/ruijayfeng/ciyuanwai-illustrations)。

凯冰·明亮编辑参考阿真原版的语义大字、宋体层级和明亮阅读节奏，采用内容驱动的章节词与蓝色引文。凯冰形象图只作风格参考，禁止放进模板、预览或自动插入文章。旧候选和参考稿集中保存在工作区 `归档/凯冰旧方案/`，不进入正式主题路由。

运行 `node scripts/build_kevinbee_editorial.mjs` 可从现有示例文章重建项目级样张和仓库内 `docs/kevinbee-final/` 的发布副本。脚本校验原文字序，仅用于此样张，不是通用Markdown转换器。

## License

AGPL-3.0，详见 [LICENSE](LICENSE)。
