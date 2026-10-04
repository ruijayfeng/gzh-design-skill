# 主题索引

本文件是可用主题及路由的唯一来源。当前仅保留两套正式主题；没有指定主题时使用凯冰。

| 主题 | 主色 | 适用场景 | 组件库文件 | 正文下划线 CSS |
|---|---|---|---|---|
| 凯冰·紧凑承接（原生正文版，默认） | 编辑蓝 #2659DE + 浅黄 #FFF1BE | AI 工作流、个人思考、方法教程、图文案例；原生正文加局部增强 | `references/theme-kevinbee-compact.md` | `text-decoration:underline;text-decoration-color:#2659DE;text-underline-offset:3px;` |
| 橄榄手记 | 墨黑 #1e1f23 + 橙 #ed7b2f | 内刊、深度评测、系统说明与案例复盘 | `references/theme-olive-journal.md` | `border-bottom:2px solid #ed7b2f;font-weight:600;color:#23251d;` |

## 路由

- “凯冰”“紧凑承接”“原生正文版”“主 IP 风格”“默认风格” → `theme-kevinbee-compact.md`。
- “橄榄手记”“编辑手记母版”“定制母版” → `theme-olive-journal.md`。
- 未指定主题 → 凯冰，不询问。
- 请求索引之外的旧主题时，说明当前仅有以上两套，不能默默改用其他主题或重建旧文件。
- 新主题只在用户确认后登记。历史资料仅保存在 Git，日常入口与主题目录不展示旧版。

主题英文标识取组件库文件名去掉 `theme-` 与 `.md`。先读所选主题库，再读通用增量库；主题库同语义组件及其用户明确规则优先于通用默认。
