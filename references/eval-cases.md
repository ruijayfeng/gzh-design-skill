# 回归用例

## 路由

- “用凯冰风格排版这篇文章” / “默认风格” / 未指定主题 → `theme-kevinbee-compact.md`。
- “用橄榄手记排版这篇文章” → `theme-olive-journal.md`。
- 请求索引之外的主题 → 告知当前两套，不静默替代或恢复旧文件。
- 写作、润色、配图生成、普通网页制作 → 不属于本技能。
- 用户要求新主题 → 读取 theme-generator，按偏好确认后登记。

## 内容与视觉不变量

- 原文文字、段落、链接、图片路径及顺序全部保持，作者身份按原文。
- 不新增摘要、目录、FAQ、金句、署名、图注或 CTA。
- 凯冰普通正文容器与段落不指定字体、字号、行高、颜色、背景或左右内边距。
- 凯冰局部章题24px、语义词18px、章线1px；有意义的章词才能添加，原标题保留。
- 凯冰图像同宽、原比例、6px圆角，多图纵向；不使用人物参考插画。
- 预览外壳的阅读环境与复制按钮不在正文片段内。
- 橄榄手记的组件样式保持独立，不套用凯冰规则。
- 高光只按原文重点使用，不逐段机械标记；代码每行零外边距，不用 white-space:pre。
- 普通正文、核心结论与连续论证不放进滚动窗。

## 可验证循环

1. `node scripts/build_kevinbee_compact.mjs`，重复构建不产生内容差异。
2. `python3 scripts/component_lint.py .` → 0 ERROR。
3. `python3 scripts/test_verify_content.py` → 通过。
4. 对完整文章、图文示例与组件校验片段运行 validate_gzh_html。
5. 使用 assets/sample-article.md 与 assets/media-sample.md 分别运行 verify_content。
6. `python3 scripts/test_theme_state.py` → 恰好两套主题、路由与文件完整、无旧入口、53个凯冰区块同源。
7. 实际公众号粘贴后确认正文继承、图片边界、圆角、图注与重点。未做实测时如实说明。
