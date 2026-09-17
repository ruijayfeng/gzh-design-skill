# 公众号排版组件库 —— 词员外·现代水墨

> 默认个人主题。面向大众内容，使用暖白宣纸、墨色细线、朱砂点睛和少量水墨识别；不把正文改写成古风或账房话术。

## 设计变量速查表

| 角色 | 色值 / 规则 | 用途 |
|---|---|---|
| 墨色 | `#2B2B28` | 标题、深色锚点、主要边框 |
| 宣纸暖白 | `#F8F3E8` | 全局背景 |
| 正文色 | `#3F403B` | 正文阅读 |
| 朱砂红 | `#C0392B` | 章节标记、下划线、操作提示 |
| 暖灰浅底 | `#F1E9DC` | 旁注、步骤、轻量卡片 |
| 旧纸边线 | `#D8CDBC` | 分隔线、弱边框 |
| 冷静蓝灰 | `#3B5998` | 结论和信息说明，低频 |
| 正文字体 | 系统黑体 | 现代、大众、易读 |
| 标题字体 | `Songti SC` / `STSong` / `serif` | 只用于标题、金句和印章 |
| 圆角 | `0–6px` | 以直角和小圆角为主 |
| 阴影 | 默认不用 | 依靠留白、边框和色块分层 |

正文关键词标记：`border-bottom:2px solid #D98B7F;font-weight:600;`

## 使用纪律

- 只排版输入内容，不新增导语、目录、金句、作者信息、结论或 CTA。
- 现代中文为主；“员外一句”只在原文已有对应金句时使用，每篇最多一次。
- 一篇普通文章使用 1–2 类卡片即可；教程长文最多 3 类，避免组件展览。
- 图像由原文或其他 skill 提供。本主题只处理留白、细边框、小圆角、图注、对照和滚动收纳。
- 同组 3 张以上图片可横向滑动；超过约 12 行或 500 字的提示词、记录和补充材料可放入定高滚动窗。

## 组件

### 1. 全局容器

```html
<section style="max-width:677px;margin:0 auto;background:#F8F3E8;color:#3F403B;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif;line-height:1.9;letter-spacing:0.3px;overflow-x:hidden;">
  <!-- 文章组件 -->
</section>
```

### 2. 现代水墨封面

只填入原文已有的栏目名、标题、副标题和标签；缺少的行直接删除。

```html
<section style="margin:0 0 34px;padding:32px 24px 24px;background:#F8F3E8;border-top:5px solid #2B2B28;border-bottom:1px solid #BEB4A4;">
  <p style="margin:0 0 18px;font-size:11px;color:#786F63;letter-spacing:2px;"><span leaf="">栏目名称</span></p>
  <p style="margin:0 0 12px;font-family:'Songti SC','STSong',serif;font-size:24px;font-weight:700;line-height:1.45;color:#2B2B28;"><span leaf="">文章标题</span></p>
  <p style="margin:0 0 20px;font-size:14px;color:#68675F;line-height:1.8;"><span leaf="">原文副标题</span></p>
  <p style="margin:0;"><span style="display:inline-block;padding:3px 10px;background:#C0392B;color:#FFF8ED;font-size:11px;letter-spacing:2px;"><span leaf="">原文标签</span></span></p>
</section>
```

### 3. 水墨插图封面

```html
<section style="margin:0 18px 34px;padding:8px;background:#F4EFE3;border:1px solid #CFC4B2;">
  <span leaf=""><img src="图片URL" style="max-width:100%;height:auto;display:block;margin:0 auto;"></span>
  <section style="padding:16px 14px 10px;">
    <p style="margin:0 0 7px;font-size:10px;color:#C0392B;letter-spacing:2px;"><span leaf="">原文栏目</span></p>
    <p style="margin:0;font-family:'Songti SC','STSong',serif;font-size:20px;font-weight:700;color:#2B2B28;line-height:1.5;"><span leaf="">文章标题</span></p>
  </section>
</section>
```

### 4. 正文与开场

```html
<section style="margin:0 24px 22px;">
  <p style="margin:0;font-size:15px;line-height:1.95;color:#3F403B;"><span leaf="">原文段落</span></p>
</section>
```

原文连续开场段落仍逐段使用同一正文组件，不新增“嗨，大家好”等开场话术。

### 5. 章节标题

```html
<section style="margin:44px 24px 22px;">
  <p style="margin:0;font-size:20px;font-weight:700;color:#2B2B28;line-height:1.55;border-left:4px solid #C0392B;padding-left:12px;"><span leaf="">章节标题</span></p>
</section>
```

### 6. 小节标题

```html
<section style="margin:30px 24px 15px;">
  <p style="margin:0;font-size:16px;font-weight:700;color:#2B2B28;border-left:3px solid #C0392B;padding-left:11px;line-height:1.6;"><span leaf="">小节标题</span></p>
</section>
```

### 7. 行内强调

```html
<span style="border-bottom:2px solid #D98B7F;font-weight:600;color:#2B2B28;"><span leaf="">原文重点短语</span></span>
```

```html
<span style="background:#E8E2D7;padding:1px 5px;font-weight:600;color:#2B2B28;"><span leaf="">原文概念</span></span>
```

### 8. 员外一句

只用于原文已有的核心金句，每篇最多一次；不自动补署名。

```html
<section style="margin:30px 24px;padding:24px 20px;background:#2B2B28;border-left:5px solid #C0392B;">
  <p style="margin:0 0 10px;font-size:11px;color:#D98B7F;letter-spacing:2px;"><span leaf="">员外一句</span></p>
  <p style="margin:0;font-family:'Songti SC','STSong',serif;font-size:18px;font-weight:600;color:#FFF8ED;line-height:1.85;"><span leaf="">原文金句</span></p>
</section>
```

### 9. 补充说明

```html
<section style="margin:0 24px 24px;padding:14px 16px;background:#F1E9DC;border-left:3px solid #C0392B;">
  <p style="margin:0 0 5px;font-size:11px;color:#C0392B;font-weight:700;"><span leaf="">补充说明</span></p>
  <p style="margin:0;font-size:14px;color:#55554F;line-height:1.85;"><span leaf="">原文补充内容</span></p>
</section>
```

### 10. 事实与来源说明

```html
<section style="margin:0 24px 24px;padding:16px 18px;border:1px solid #2B2B28;background:#FBF7EF;">
  <p style="margin:0 0 7px;font-size:11px;color:#C0392B;font-weight:700;letter-spacing:2px;"><span leaf="">事实与来源</span></p>
  <p style="margin:0;font-size:14px;color:#3F403B;line-height:1.85;"><span leaf="">原文中的数据来源、观察范围或事实说明</span></p>
</section>
```

### 11. 核心观点

```html
<section style="margin:0 24px 24px;padding:16px 18px;background:#E6E9E4;border-top:2px solid #3B5998;">
  <p style="margin:0 0 7px;font-size:11px;color:#3B5998;font-weight:700;letter-spacing:2px;"><span leaf="">核心观点</span></p>
  <p style="margin:0;font-size:14px;color:#3F403B;line-height:1.85;"><span leaf="">原文核心观点</span></p>
</section>
```

### 12. 注意 / 常见误区

```html
<section style="margin:0 24px 24px;padding:16px 18px;background:#F5E4DF;border-left:4px solid #C0392B;">
  <p style="margin:0 0 6px;font-size:11px;color:#A32F24;font-weight:700;letter-spacing:2px;"><span leaf="">注意</span></p>
  <p style="margin:0;font-size:14px;color:#554B46;line-height:1.85;"><span leaf="">原文注意事项或误区说明</span></p>
</section>
```

### 13. 无序列表

```html
<section style="margin:0 24px 24px;">
  <p style="margin:0 0 10px;font-size:14px;color:#3F403B;"><span style="color:#C0392B;margin-right:9px;"><span leaf="">●</span></span><span leaf="">原文列表项一</span></p>
  <p style="margin:0 0 10px;font-size:14px;color:#3F403B;"><span style="color:#C0392B;margin-right:9px;"><span leaf="">●</span></span><span leaf="">原文列表项二</span></p>
  <p style="margin:0;font-size:14px;color:#3F403B;"><span style="color:#C0392B;margin-right:9px;"><span leaf="">●</span></span><span leaf="">原文列表项三</span></p>
</section>
```

### 14. 有序列表

```html
<section style="margin:0 24px 24px;">
  <p style="margin:0 0 12px;padding-bottom:10px;border-bottom:1px solid #DED5C7;font-size:14px;"><span style="display:inline-block;width:24px;height:24px;line-height:24px;text-align:center;border:1px solid #B9770E;border-radius:50%;color:#8C5B0B;margin-right:9px;"><span leaf="">一</span></span><span leaf="">原文步骤一</span></p>
  <p style="margin:0 0 12px;padding-bottom:10px;border-bottom:1px solid #DED5C7;font-size:14px;"><span style="display:inline-block;width:24px;height:24px;line-height:24px;text-align:center;border:1px solid #B9770E;border-radius:50%;color:#8C5B0B;margin-right:9px;"><span leaf="">二</span></span><span leaf="">原文步骤二</span></p>
  <p style="margin:0;font-size:14px;"><span style="display:inline-block;width:24px;height:24px;line-height:24px;text-align:center;border:1px solid #B9770E;border-radius:50%;color:#8C5B0B;margin-right:9px;"><span leaf="">三</span></span><span leaf="">原文步骤三</span></p>
</section>
```

### 15. 检查清单

```html
<section style="margin:0 24px 24px;padding:16px 18px;background:#FBF7EF;border:1px solid #CFC4B2;">
  <p style="margin:0 0 10px;font-size:11px;color:#C0392B;font-weight:700;letter-spacing:2px;"><span leaf="">检查清单</span></p>
  <p style="margin:0 0 8px;font-size:14px;"><span style="color:#C0392B;margin-right:8px;"><span leaf="">✓</span></span><span leaf="">原文检查项</span></p>
  <p style="margin:0;font-size:14px;"><span style="color:#9A9185;margin-right:8px;"><span leaf="">○</span></span><span leaf="">原文待完成项</span></p>
</section>
```

### 16. 步骤卡

```html
<section style="margin:0 24px 24px;padding:17px 18px;border-left:4px solid #2B2B28;background:#F1E9DC;">
  <p style="margin:0 0 6px;font-size:11px;color:#C0392B;font-weight:700;letter-spacing:2px;"><span leaf="">STEP 01</span></p>
  <p style="margin:0 0 5px;font-size:15px;font-weight:700;color:#2B2B28;"><span leaf="">原文步骤标题</span></p>
  <p style="margin:0;font-size:13px;color:#6E6A62;line-height:1.8;"><span leaf="">原文步骤说明</span></p>
</section>
```

### 17. 执行流程

```html
<section style="margin:0 24px 24px;padding:18px;background:#2B2B28;">
  <p style="margin:0 0 14px;font-size:11px;color:#D98B7F;letter-spacing:2px;"><span leaf="">执行流程</span></p>
  <p style="margin:0 0 10px;padding:9px 10px;background:#3A3A35;color:#FFF8ED;font-size:13px;"><span style="color:#D98B7F;margin-right:8px;"><span leaf="">01</span></span><span leaf="">原文流程节点一</span></p>
  <p style="margin:0 0 10px;padding:9px 10px;background:#3A3A35;color:#FFF8ED;font-size:13px;"><span style="color:#D98B7F;margin-right:8px;"><span leaf="">02</span></span><span leaf="">原文流程节点二</span></p>
  <p style="margin:0;padding:9px 10px;background:#3A3A35;color:#FFF8ED;font-size:13px;"><span style="color:#D98B7F;margin-right:8px;"><span leaf="">03</span></span><span leaf="">原文流程节点三</span></p>
</section>
```

### 18. 前后对照

```html
<section style="margin:0 24px 24px;border:1px solid #BEB4A4;background:#FBF7EF;">
  <section style="padding:14px 16px;border-bottom:1px solid #D8CDBC;">
    <p style="margin:0 0 4px;font-size:11px;color:#8A8175;"><span leaf="">调整前</span></p>
    <p style="margin:0;font-size:14px;color:#777166;"><span leaf="">原文调整前内容</span></p>
  </section>
  <section style="padding:14px 16px;">
    <p style="margin:0 0 4px;font-size:11px;color:#C0392B;font-weight:700;"><span leaf="">调整后</span></p>
    <p style="margin:0;font-size:14px;color:#2B2B28;"><span leaf="">原文调整后内容</span></p>
  </section>
</section>
```

### 19. 标准图片

原文无图注时删除图注段落。

```html
<section style="margin:0 24px 10px;overflow:hidden;border-radius:5px;text-align:center;">
  <span leaf=""><img src="图片URL" style="max-width:100%;height:auto;display:block;margin:0 auto;"></span>
</section>
<p style="margin:0 24px 28px;text-align:center;font-size:11px;color:#8A8175;"><span leaf="">原文图注</span></p>
```

### 20. 多图横向滑动组

```html
<section style="margin:0 24px 28px;">
  <p style="margin:0 0 8px;text-align:right;font-size:11px;color:#8A8175;"><span leaf="">左右滑动查看 →</span></p>
  <section style="overflow-x:auto;overflow-y:hidden;white-space:nowrap;-webkit-overflow-scrolling:touch;padding:0 0 6px;font-size:0;">
    <section style="display:inline-block;width:86%;vertical-align:top;margin-right:10px;white-space:normal;border:1px solid #D8CDBC;border-radius:5px;overflow:hidden;background:#F4EFE3;"><span leaf=""><img src="图片URL-1" style="width:100%;height:auto;display:block;margin:0 auto;"></span></section>
    <section style="display:inline-block;width:86%;vertical-align:top;margin-right:10px;white-space:normal;border:1px solid #D8CDBC;border-radius:5px;overflow:hidden;background:#F4EFE3;"><span leaf=""><img src="图片URL-2" style="width:100%;height:auto;display:block;margin:0 auto;"></span></section>
    <section style="display:inline-block;width:86%;vertical-align:top;white-space:normal;border:1px solid #D8CDBC;border-radius:5px;overflow:hidden;background:#F4EFE3;"><span leaf=""><img src="图片URL-3" style="width:100%;height:auto;display:block;margin:0 auto;"></span></section>
  </section>
</section>
```

### 21. 长文本滚动窗

```html
<section style="margin:0 24px 28px;border:1px solid #D8CDBC;border-radius:5px;overflow:hidden;background:#FBF7EF;">
  <section style="display:flex;align-items:center;justify-content:space-between;padding:10px 13px;background:#EFE8DC;border-bottom:1px solid #D8CDBC;">
    <p style="margin:0;font-size:13px;font-weight:700;color:#2B2B28;"><span leaf="">原文内容标题</span></p>
    <p style="margin:0;font-size:11px;color:#8A8175;"><span leaf="">上下滑动查看 ↓</span></p>
  </section>
  <section style="max-height:280px;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:13px 15px;">
    <p style="margin:0 0 9px;font-size:13px;line-height:1.75;color:#3F403B;"><span leaf="">原文长内容第一段</span></p>
    <p style="margin:0;font-size:13px;line-height:1.75;color:#3F403B;"><span leaf="">原文长内容后续段落</span></p>
  </section>
</section>
```

### 22. 纸页代码块

```html
<section style="margin:0 24px 28px;background:#EFE8DC;border-left:3px solid #C0392B;">
  <p style="margin:0;padding:8px 13px;border-bottom:1px solid #D8CDBC;font-size:10px;color:#8A8175;letter-spacing:2px;"><span leaf="">CODE</span></p>
  <section style="padding:12px 13px;">
    <p style="margin:0;font-family:Consolas,Monaco,monospace;font-size:13px;line-height:1.65;color:#2B2B28;"><span leaf="">原文代码行</span></p>
  </section>
</section>
```

### 23. 数据摘要

```html
<section style="margin:0 24px 28px;border-top:1px solid #2B2B28;border-bottom:1px solid #2B2B28;padding:16px 0;">
  <p style="margin:0 0 12px;font-size:11px;color:#C0392B;font-weight:700;letter-spacing:2px;"><span leaf="">原文数据标题</span></p>
  <p style="margin:0 0 8px;font-size:14px;"><span style="display:inline-block;width:38%;color:#8A8175;"><span leaf="">原文指标名</span></span><span style="font-family:'Songti SC','STSong',serif;font-size:20px;font-weight:700;color:#2B2B28;"><span leaf="">原文数值</span></span></p>
</section>
```

### 24. FAQ

只在原文已有问答时使用。

```html
<section style="margin:0 24px 28px;">
  <p style="margin:0 0 12px;font-size:11px;color:#C0392B;font-weight:700;letter-spacing:2px;"><span leaf="">常见问题</span></p>
  <section style="padding:13px 0;border-top:1px solid #BEB4A4;border-bottom:1px solid #BEB4A4;">
    <p style="margin:0 0 5px;font-size:14px;font-weight:700;color:#2B2B28;"><span leaf="">原文问题</span></p>
    <p style="margin:0;font-size:13px;color:#6E6A62;"><span leaf="">原文回答</span></p>
  </section>
</section>
```

### 25. 原文结尾摘要

只在原文已有总结时使用。

```html
<section style="margin:0 24px 28px;padding:20px;background:#2B2B28;">
  <p style="margin:0 0 7px;font-size:11px;color:#D98B7F;letter-spacing:2px;"><span leaf="">原文总结标题</span></p>
  <p style="margin:0;font-size:14px;color:#EEE7DB;line-height:1.9;"><span leaf="">原文总结内容</span></p>
</section>
```

### 26. 墨点分隔与尾印

```html
<section style="margin:32px 24px;text-align:center;">
  <p style="margin:0;font-size:12px;color:#C0392B;letter-spacing:8px;"><span leaf="">· · ·</span></p>
</section>
```

尾印是品牌装饰，仅在用户选择保留品牌结尾时使用：

```html
<section style="margin:0;padding:8px 24px 42px;text-align:center;">
  <p style="margin:0 0 12px;"><span style="display:inline-block;border:2px solid #C0392B;color:#C0392B;padding:5px 7px;font-family:'Songti SC','STSong',serif;font-size:14px;font-weight:700;line-height:1.15;"><span leaf="">词<br>元</span></span></p>
  <p style="margin:0;font-size:10px;color:#8A8175;letter-spacing:2px;"><span leaf="">词元之外，尚有余味</span></p>
</section>
```

## 完整文章模板骨架

```text
全局容器
├─ 封面（现代水墨 / 水墨插图，二选一；只有原文标题时才生成）
├─ 原文开场正文
├─ 章节标题
│  ├─ 正文与行内强调
│  ├─ 原文存在时：补充说明 / 事实来源 / 核心观点 / 注意
│  ├─ 原文存在时：列表 / 步骤 / 流程 / 对照
│  └─ 图片 / 横滑图组 / 长文本窗 / 代码块
├─ 后续章节重复
├─ 原文已有时：FAQ / 总结 / 署名 / CTA
└─ 可选品牌尾印
```

## 文章类型 → 组件组合配方

配方只决定视觉组件，不增删原文内容。

| 文章类型 | 核心组件 | 可选点缀 |
|---|---|---|
| 教程 / 操作指南 | 步骤卡 16 + 执行流程 17 + 代码块 22 | 检查清单 15、横滑图组 20、长文本窗 21 |
| 工具测评 / 经验复盘 | 前后对照 18 + 核心观点 11 + 标准图片 19 | 数据摘要 23、注意 12 |
| 方法论 / 知识整理 | 章节标题 5 + 补充说明 9 + 核心观点 11 | 列表 13/14、流程 17 |
| 观点 / 行业观察 | 章节标题 5 + 正文 4 + 行内强调 7 | 员外一句 8、事实来源 10 |
| 数据复盘 / 报告 | 事实来源 10 + 数据摘要 23 + 前后对照 18 | 核心观点 11、注意 12 |
| 个人随笔 | 章节标题 5 + 正文 4 + 墨点分隔 26 | 员外一句 8、标准图片 19 |

## Markdown → 组件映射规则

| Markdown / 原文结构 | 组件 |
|---|---|
| `# 标题` | 2 或 3，按是否有首图选择 |
| `## 标题` | 5 章节标题 |
| `### 标题` | 6 小节标题 |
| 普通段落 | 4 正文 |
| `**重点**` / `==概念==` | 7 行内强调，文字原样保留 |
| `> 引用` | 9 补充说明；原文明确为金句且全文仅一次时可用 8 |
| 无序列表 / 有序列表 | 13 / 14 |
| 任务清单 | 15 |
| 步骤 / 流程 | 16 / 17 |
| 前后、修改前后、方案对照 | 18 |
| 单图 / 原文图注 | 19 |
| 同组连续 3 张以上图片 | 20 |
| 超过约 12 行或 500 字的 Prompt、记录、补充材料 | 21 |
| 代码围栏 | 22 |
| 原文数据摘要 | 23 |
| 原文 FAQ | 24 |
| 原文总结 | 25 |
| `---` | 26 墨点分隔 |

