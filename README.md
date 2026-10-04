# 公众号排版工作区

当前只保留两套正式主题，默认使用凯冰。

| 主题 | 定位 | 入口 |
|---|---|---|
| 凯冰·紧凑承接（原生正文版） | 原生正文＋章标题、高光与图像局部增强 | [完整文章](凯冰排版/完整文章_预览.html) · [图文示例](凯冰排版/图文示例_预览.html) · [组件全览](凯冰排版/组件全览.html) |
| 橄榄手记 | 独立保留的编辑手记风格 | [文章样张](橄榄手记/文章预览.html) |

## 使用

“用凯冰风格排版这篇文章：article.md”或“用橄榄手记排版这篇文章”。未指定时默认凯冰。只改变呈现，不代写或改写文章，不自动添加人物插画、作者介绍或图注。

打开文章预览，复制富文本，再粘贴到公众号编辑器。凯冰正文不指定字体、字号、行高、颜色或背景；预览外壳模拟阅读环境，浏览器复制可能携带计算样式，正式发布仍须做公众号粘贴检验。示意图片已标注为占位素材，不作为真实文章配图。

## 文件与版本

两套主题的组件规则、预览和示例均保存在本 Git 仓库。工作区可见的两个主题目录是当前文件的快捷入口，不是重复版本。

主题索引为 `references/theme-index.md`。凯冰组件与样张由 `scripts/build_kevinbee_compact.mjs` 同源维护；橄榄手记保持原有视觉规则。

当前工作区不留旧主题、探索稿或归档目录。历史在 Git 中：清理前完整资料标签为 `snapshot/designs-before-cleanup-2026-10-04`，资料位于该历史版本的 `history/workspace-before-two-themes/`。旧实验分支也保留在 Git，不留独立工作区。需要回看时从历史导出到临时位置，不恢复成日常主题入口。

## 检查

```bash
node scripts/build_kevinbee_compact.mjs
python3 scripts/component_lint.py .
python3 scripts/test_verify_content.py
python3 scripts/test_theme_state.py
```

正文另做 `validate_gzh_html.py` 与 `verify_content.py` 检查。检查通过不代表微信公众号实机完全还原。

本项目基于 isjiamu/gzh-design-skill 定制，保留格式转换、通用组件及校验能力。许可证 AGPL-3.0，见仓库 LICENSE。
