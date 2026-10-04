# 公众号排版组件库 —— 凯冰·静动叙事

> 凯冰主 IP 的正式公众号主题。从她平静、专注、轻微倔强的角色气质出发，以“静场留白、关系错位、冷暖面积反差”形成独立视觉语言。参考对象只提供留白、层级与阅读舒适度等抽象原则，不继承其衬线杂志标题、英文刊头、居中金句或装饰横线。人物形象是内容的一部分，不是从帽子红星、路径、丝带等测试素材中拆出的装饰符号。

## 设计变量速查表

| 角色 | 色值 / 规则 | 用途 |
|---|---|---|
| 纸面暖白 | `#FFFDF8` | 全局背景 |
| 凯冰藏青 | `#26354A` | 标题、主结构、核心结论 |
| 正文蓝灰 | `#2C3748` | 正文阅读 |
| 冰蓝 | `#A6C8E6` / `#EAF4FA` | 章节编号、细线、默认关键词标记 |
| 象牙白 | `#F4EFE7` | 生活感笔记与暖色层次 |
| 克制暗红 | `#B5443E` | 栏目字、身份与转折提示 |
| 暖灰线 | `#E7E2D8` | 开放分隔与表格边界 |
| 弱文字 | `#7B8592` / `#8B96A4` | 图注、标签、辅助信息 |
| 字体 | 系统黑体 / 苹方；数字可用系统等宽体 | 平静、直接，不使用借来的杂志衬线腔调 |
| 正文 | `17px / 2.05` | 长文阅读默认密度 |
| 圆角 | `0–16px` | 仅语义明确的换气块使用 |
| 阴影 | 不使用 | 依靠留白、细线、字号和色温建立层级 |

正文关键词默认标记：`border-bottom:3px solid #A6C8E6;font-weight:700;color:#26354A;padding:0 1px 2px;`

## 使用纪律

- 只排版输入内容，不新增导语、目录、结论、作者信息、CTA 或角色台词。
- 开放式正文是主角；连续卡片不得超过 2 个，章节之间至少回到一次开放正文。
- 冰蓝是默认强调；暗红只做身份与关键转折，面积始终小于冰蓝和藏青。
- 不以机械居中制造精致感；封面、章节和引语通过 17% 左右的横向错位形成真正的非对称秩序。
- 固定识别语法是“静场大留白、冷色大面积、暖色小面积、内容关系错位”，不是某个单独装饰符号。
- 章节与金句使用系统黑体，不使用 Georgia、宋体斜体、英文刊头或居中杂志引语。
- 不使用竖向引导线、路线图式串联、飘带、三色节奏条或红星装饰。
- 凯冰图片只在原文已提供图片时出现，不自动注入仓库角色图。
- 原文给出 V2.1 标准形象时，适合封面和主视觉；V2.2 Q 版适合正文场景。
- 角色 PNG 自带不透明底色时，不放入异色卡片；使用暖白开放舞台或仅加底部细线。
- 插图前后保留充足白空间，不加厚框、重阴影、花边或大面积彩底。
- 同组 3 张以上图片可横向滑动；超过约 12 行或 500 字的 Prompt、记录和补充材料使用定高滚动窗。

## 组件

### 1. 全局容器

```html
<section style="max-width:677px;margin:0 auto;padding:42px 25px 58px;box-sizing:border-box;background:#FFFDF8;color:#2C3748;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif;line-height:2;letter-spacing:0.12px;overflow-x:hidden;">
  <!-- 文章组件 -->
</section>
```

### 2. 静场刊首

只使用原文已有的栏目、标题和副标题；缺失项删除。

```html
<section style="margin:0 0 66px;">
  <section style="margin:0 0 25px;"><span style="display:inline-block;width:56px;height:7px;background:#26354A;"><span leaf=""><br></span></span><span style="display:inline-block;width:7px;height:7px;margin-left:7px;background:#B5443E;"><span leaf=""><br></span></span></section>
  <p style="margin:0 0 33px;text-align:right;font-size:10px;color:#B5443E;letter-spacing:2px;font-weight:700;"><span leaf="">原文栏目</span></p>
  <p style="margin:0 0 17px;width:88%;font-size:24px;font-weight:800;line-height:1.55;color:#26354A;letter-spacing:0.5px;"><span leaf="">文章标题</span></p>
  <p style="margin:0 0 0 17%;width:76%;font-size:15px;line-height:2;color:#687486;"><span leaf="">原文副标题</span></p>
</section>
```

### 3. 人物留白封面

仅在原文已有凯冰主视觉时使用。人物自带底色时保持开放，不套异色背景。

```html
<section style="margin:0 0 64px;">
  <section style="margin:0 0 27px;padding:22px 18px 15px;background:#FFFFFF;border-top:1px solid #EEF0EF;border-bottom:1px solid #A6C8E6;text-align:center;"><span leaf=""><img src="图片URL" style="max-width:248px;height:auto;display:block;margin:0 auto;"></span></section>
  <p style="margin:0 0 8px;text-align:right;font-size:9px;color:#B5443E;letter-spacing:2px;font-weight:700;"><span leaf="">原文栏目</span></p>
  <p style="margin:0;text-align:right;font-size:21px;font-weight:800;line-height:1.6;color:#26354A;"><span leaf="">文章标题</span></p>
</section>
```

### 4. 开篇导语

```html
<section style="margin:0 9% 46px 0;padding:21px 18% 21px 0;border-top:1px solid #A6C8E6;border-bottom:1px solid #E7E2D8;">
  <p style="margin:0 0 8px;font-size:10px;color:#7799AE;letter-spacing:2px;"><span leaf="">原文导语标题</span></p>
  <p style="margin:0;font-size:17px;font-weight:650;line-height:2.05;color:#334358;"><span leaf="">原文导语</span></p>
</section>
```

### 5. 开放式正文

```html
<section style="margin:0 0 27px;"><p style="margin:0;font-size:17px;line-height:2.05;color:#2C3748;"><span leaf="">原文段落</span></p></section>
```

### 6. 轻盈章节标题

```html
<section style="margin:66px 0 31px;display:flex;align-items:flex-start;"><p style="margin:0;width:54px;padding:12px 0;background:#EAF4FA;text-align:center;font-family:'SF Mono',Consolas,monospace;font-size:11px;font-weight:700;color:#567C99;letter-spacing:1px;"><span leaf="">01</span></p><section style="margin-left:17px;padding:3px 0 13px;flex:1;border-bottom:1px solid #D7E7EE;"><p style="margin:0;font-size:21px;font-weight:800;line-height:1.6;color:#26354A;letter-spacing:0.4px;"><span leaf="">章节标题</span></p></section></section>
```

### 7. 非对称章节标题

与组件 6 交替使用，避免每章机械重复。

```html
<section style="margin:66px 0 31px;display:flex;align-items:flex-start;"><section style="padding:3px 0 13px;flex:1;border-bottom:1px solid #E6DDD8;text-align:right;"><p style="margin:0;font-size:21px;font-weight:800;line-height:1.6;color:#26354A;letter-spacing:0.4px;"><span leaf="">章节标题</span></p></section><p style="margin:0 0 0 17px;width:54px;padding:12px 0;background:#F6EAE7;text-align:center;font-family:'SF Mono',Consolas,monospace;font-size:11px;font-weight:700;color:#B5443E;letter-spacing:1px;"><span leaf="">02</span></p></section>
```

### 8. 精细小节标题

```html
<section style="margin:38px 0 19px;display:flex;align-items:center;"><span style="display:inline-block;width:8px;height:20px;background:#A6C8E6;"><span leaf=""><br></span></span><p style="margin:0 0 0 11px;font-size:17px;font-weight:800;line-height:1.7;color:#26354A;"><span leaf="">小节标题</span></p></section>
```

### 9. 行内强调

```html
<span style="padding:0 1px 2px;border-bottom:3px solid #A6C8E6;font-weight:700;color:#26354A;"><span leaf="">原文重点短语</span></span>
```

最关键转折才可改用暗红：

```html
<span style="padding:0 1px 2px;border-bottom:3px solid #B5443E;font-weight:750;color:#26354A;"><span leaf="">原文关键转折</span></span>
```

### 10. 独立短句

只使用原文已有引用或金句。

```html
<section style="margin:48px 0 48px 11%;display:flex;align-items:flex-start;"><p style="margin:0;width:42px;font-size:34px;font-weight:300;line-height:1;color:#A6C8E6;"><span leaf="">“</span></p><p style="margin:3px 0 0;flex:1;font-size:18px;font-weight:750;line-height:2;color:#26354A;"><span leaf="">原文短句</span></p></section>
```

### 11. 冰蓝摘要

```html
<section style="margin:0 0 46px 8%;padding:24px 22px;background:#EEF5F9;border-radius:14px 0 0 14px;"><p style="margin:0 0 8px;text-align:right;font-size:9px;color:#648AA7;letter-spacing:2px;font-weight:700;"><span leaf="">原文摘要标题</span></p><p style="margin:0;font-size:16px;line-height:2.05;color:#334358;"><span leaf="">原文摘要</span></p></section>
```

### 12. 纸边笔记

```html
<section style="margin:0 9% 31px 0;padding:20px 20px 18px;background:#F4EFE7;border-radius:0 12px 12px 0;"><p style="margin:0 0 7px;text-align:right;font-size:9px;color:#8F7658;letter-spacing:2px;font-weight:700;"><span leaf="">原文注记标题</span></p><p style="margin:0;font-size:15px;line-height:2;color:#5F5A4F;"><span leaf="">原文补充说明</span></p></section>
```

### 13. 冷静资料

```html
<section style="margin:0 0 31px 9%;padding:20px 21px;background:#EEF5F9;border-radius:12px 0 0 12px;"><p style="margin:0 0 8px;font-size:10px;color:#648AA7;letter-spacing:2px;font-weight:700;"><span leaf="">原文资料标题</span></p><p style="margin:0;font-size:15px;line-height:2;color:#425268;"><span leaf="">原文事实、范围或来源说明</span></p></section>
```

### 14. 温和转折

```html
<section style="margin:0 7% 31px;padding:18px 0;border-top:2px solid #B5443E;border-bottom:1px solid #E6D9D6;"><p style="margin:0 0 7px;font-size:10px;color:#B5443E;letter-spacing:2px;font-weight:700;"><span leaf="">原文转折标题</span></p><p style="margin:0;font-size:15px;line-height:2;color:#66565A;"><span leaf="">原文边界、风险或转折说明</span></p></section>
```

### 15. 深蓝锚点

整篇原则上只使用一次。

```html
<section style="margin:46px 0 46px 8%;padding:27px 24px;background:#26354A;border-radius:12px 0 0 12px;"><p style="margin:0 0 10px;font-size:9px;color:#A6C8E6;letter-spacing:2px;font-weight:700;"><span leaf="">原文结论标题</span></p><p style="margin:0;font-size:17px;font-weight:700;line-height:2;color:#FFFFFF;"><span leaf="">原文核心结论</span></p></section>
```

### 16. 自然编号列表

```html
<section style="margin:0 0 31px;"><p style="margin:0 0 12px;font-size:15px;line-height:1.95;color:#2C3748;"><span style="display:inline-block;min-width:30px;color:#648AA7;font-family:'SF Mono',Consolas,monospace;font-size:11px;"><span leaf="">01</span></span><span leaf="">原文列表项一</span></p><p style="margin:0 0 12px;font-size:15px;line-height:1.95;color:#2C3748;"><span style="display:inline-block;min-width:30px;color:#648AA7;font-family:'SF Mono',Consolas,monospace;font-size:11px;"><span leaf="">02</span></span><span leaf="">原文列表项二</span></p><p style="margin:0;font-size:15px;line-height:1.95;color:#2C3748;"><span style="display:inline-block;min-width:30px;color:#648AA7;font-family:'SF Mono',Consolas,monospace;font-size:11px;"><span leaf="">03</span></span><span leaf="">原文列表项三</span></p></section>
```

### 17. 索引清单

```html
<section style="margin:0 0 32px;border-top:1px solid #E7E2D8;"><p style="margin:0;padding:15px 2px;border-bottom:1px solid #E7E2D8;font-size:14px;color:#2C3748;"><span style="display:inline-block;min-width:42px;color:#B5443E;font-size:10px;font-weight:700;letter-spacing:1px;"><span leaf="">A /</span></span><span leaf="">原文清单项</span></p><p style="margin:0;padding:15px 2px;border-bottom:1px solid #E7E2D8;font-size:14px;color:#2C3748;"><span style="display:inline-block;min-width:42px;color:#B5443E;font-size:10px;font-weight:700;letter-spacing:1px;"><span leaf="">B /</span></span><span leaf="">原文清单项</span></p></section>
```

### 18. 编辑步骤

步骤彼此独立，不用纵向线串联。

```html
<section style="margin:0 0 33px 8%;padding:21px 21px 19px;background:#EEF5F9;border-radius:12px 0 0 12px;"><p style="margin:0 0 7px;text-align:right;font-family:'SF Mono',Consolas,monospace;font-size:11px;font-weight:700;color:#6F99B6;"><span leaf="">01</span></p><p style="margin:0 0 7px;font-size:17px;font-weight:800;color:#26354A;"><span leaf="">原文步骤标题</span></p><p style="margin:0;font-size:14px;line-height:1.95;color:#687486;"><span leaf="">原文步骤说明</span></p></section>
```

### 19. 阶段记录

```html
<section style="margin:0 0 33px;border-top:1px solid #E7E2D8;"><p style="margin:0;padding:14px 2px;border-bottom:1px solid #E7E2D8;font-size:14px;"><span style="display:inline-block;min-width:76px;color:#8A94A2;font-size:11px;"><span leaf="">阶段一</span></span><span leaf="">原文阶段说明</span></p><p style="margin:0;padding:14px 2px;border-bottom:2px solid #A6C8E6;font-size:14px;font-weight:700;"><span style="display:inline-block;min-width:76px;color:#B5443E;font-size:11px;"><span leaf="">现在</span></span><span leaf="">原文当前阶段</span></p></section>
```

### 20. 前后对照

```html
<section style="margin:0 0 35px;"><section style="margin:0 12% 10px 0;padding:20px;background:#F7F7F5;border-radius:0 12px 12px 0;"><p style="margin:0 0 6px;font-size:9px;color:#94989F;letter-spacing:2px;"><span leaf="">调整前</span></p><p style="margin:0;font-size:14px;line-height:1.9;color:#697486;"><span leaf="">原文调整前内容</span></p></section><section style="margin-left:12%;padding:20px;background:#EEF5F9;border-radius:12px 0 0 12px;"><p style="margin:0 0 6px;text-align:right;font-size:9px;color:#648AA7;letter-spacing:2px;"><span leaf="">调整后</span></p><p style="margin:0;font-size:14px;font-weight:700;line-height:1.9;color:#26354A;"><span leaf="">原文调整后内容</span></p></section></section>
```

### 21. 开放单图

无原文图注时删除图注段落。凯冰角色图不套异色底。

```html
<section style="margin:44px 0 11px;text-align:center;"><span leaf=""><img src="图片URL" style="max-width:100%;height:auto;display:block;margin:0 auto;border-radius:7px;"></span></section><p style="margin:0 0 40px;text-align:right;font-size:10px;color:#8B96A4;letter-spacing:1px;"><span leaf="">原文图片说明</span></p>
```

### 22. 多图横向滑动

```html
<section style="margin:0 0 36px;"><p style="margin:0 0 10px;text-align:right;font-size:10px;color:#8B96A4;"><span leaf="">左右滑动查看 →</span></p><section style="overflow-x:auto;overflow-y:hidden;white-space:nowrap;-webkit-overflow-scrolling:touch;padding:0 0 6px;font-size:0;"><section style="display:inline-block;width:86%;vertical-align:top;margin-right:11px;white-space:normal;padding:7px;background:#F2F8FB;border-radius:9px;"><span leaf=""><img src="图片URL-1" style="width:100%;height:auto;display:block;margin:0 auto;"></span></section><section style="display:inline-block;width:86%;vertical-align:top;white-space:normal;padding:7px;background:#FBF7E9;border-radius:9px;"><span leaf=""><img src="图片URL-2" style="width:100%;height:auto;display:block;margin:0 auto;"></span></section></section></section>
```

### 23. 浅色代码纸

不使用终端拟物和侧边竖条。

```html
<section style="margin:0 0 28px;padding:18px 20px;background:#F1F6F8;border:1px solid #E5ECEF;border-radius:10px;"><p style="margin:0 0 10px;text-align:right;font-size:9px;color:#7B9AAD;letter-spacing:2px;"><span leaf="">代码</span></p><p style="margin:0;font-family:'SF Mono',Consolas,monospace;font-size:13px;line-height:1.8;color:#334358;"><span leaf="">原文代码行</span></p></section>
```

### 24. 长文阅读窗

```html
<section style="margin:0 0 35px;border:1px solid #DEE5E8;border-radius:10px;overflow:hidden;background:#FFFFFF;"><section style="display:flex;align-items:center;justify-content:space-between;padding:11px 20px;background:#F3F8FA;border-bottom:1px solid #DEE5E8;"><p style="margin:0;font-size:11px;color:#687486;"><span leaf="">原文内容标题</span></p><p style="margin:0;font-size:10px;color:#8FA7B5;"><span leaf="">上下滑动查看 ↓</span></p></section><section style="max-height:230px;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:16px 20px;"><p style="margin:0;font-size:13px;line-height:1.9;color:#334358;"><span leaf="">原文长内容</span></p></section></section>
```

### 25. 数据锚点

```html
<section style="margin:0 0 35px;padding:20px 2px;border-top:2px solid #26354A;border-bottom:1px solid #E7E2D8;"><p style="margin:0 0 7px;font-size:9px;color:#B5443E;letter-spacing:2px;font-weight:700;"><span leaf="">原文指标名</span></p><p style="margin:0 0 5px;text-align:right;font-family:'SF Mono',Consolas,monospace;font-size:24px;font-weight:700;color:#26354A;"><span leaf="">原文数值</span></p><p style="margin:0;font-size:12px;color:#7B8592;"><span leaf="">原文指标说明</span></p></section>
```

### 26. 编辑数据表

只用于原文真实表格语义。

```html
<table style="width:100%;margin:0 0 35px;border-collapse:collapse;font-size:13px;color:#334358;"><thead><tr><th style="padding:10px 8px;border-top:2px solid #26354A;border-bottom:1px solid #9AA8B4;text-align:left;font-weight:700;"><span leaf="">原文字段</span></th><th style="padding:10px 8px;border-top:2px solid #26354A;border-bottom:1px solid #9AA8B4;text-align:right;font-weight:700;"><span leaf="">原文结果</span></th></tr></thead><tbody><tr><td style="padding:10px 8px;border-bottom:1px solid #E7E2D8;"><span leaf="">原文内容</span></td><td style="padding:10px 8px;border-bottom:1px solid #E7E2D8;text-align:right;"><span leaf="">原文内容</span></td></tr></tbody></table>
```

### 27. 开放问答

只在原文已有问答时使用。

```html
<section style="margin:0 0 35px;border-top:2px solid #26354A;"><section style="padding:17px 0;border-bottom:1px solid #E7E2D8;"><p style="margin:0 0 8px;font-size:15px;font-weight:800;color:#26354A;"><span style="color:#B5443E;margin-right:8px;"><span leaf="">问</span></span><span leaf="">原文问题</span></p><p style="margin:0;font-size:14px;line-height:1.95;color:#687486;"><span leaf="">原文回答</span></p></section></section>
```

### 28. 作者落款

只排版原文已有作者信息。

```html
<section style="margin:46px 0 32px;padding:18px 0;border-top:1px solid #E7E2D8;border-bottom:1px solid #E7E2D8;text-align:right;"><p style="margin:0 0 6px;font-size:14px;font-weight:700;color:#26354A;"><span leaf="">原文作者名</span></p><p style="margin:0;font-size:11px;color:#8B96A4;"><span leaf="">原文作者介绍</span></p></section>
```

### 29. 结尾余白

只在原文已有总结或结尾句时使用。

```html
<section style="margin:52px 0 20px;padding:25px 0 0;border-top:1px solid #A6C8E6;text-align:right;"><p style="margin:0 0 11px;font-size:9px;color:#B5443E;letter-spacing:2px;font-weight:700;"><span leaf="">原文结尾标题</span></p><p style="margin:0 0 0 17%;font-size:17px;font-weight:750;line-height:2;color:#26354A;"><span leaf="">原文结尾内容</span></p></section>
```

## 完整文章模板骨架

```text
全局容器
├─ 封面（静场刊首 / 人物留白封面，按原文是否有主视觉二选一）
├─ 原文已有时：开篇导语或冰蓝摘要
├─ 开放式正文
├─ 章节标题（轻盈 / 非对称，交替使用）
│  ├─ 正文与行内强调
│  ├─ 原文存在时：短句 / 笔记 / 资料 / 转折 / 深蓝锚点
│  ├─ 原文存在时：列表 / 清单 / 步骤 / 阶段 / 对照
│  └─ 原文存在时：图片 / 横滑图组 / 长文窗 / 代码 / 数据
├─ 后续章节重复；每两张卡片后回到开放正文
└─ 原文已有时：FAQ / 作者信息 / 结尾余白
```

## 文章类型 → 组件组合配方

配方只决定视觉组件，不增删原文内容。

| 文章类型 | 核心组件 | 可选点缀 |
|---|---|---|
| 教程 / 操作指南 | 正文 5 + 编辑步骤 18 + 代码纸 23 | 索引清单 17、横滑图组 22、长文窗 24 |
| AI 工作流 / 方法论 | 章节标题 6/7 + 正文 5 + 冷静资料 13 | 编辑步骤 18、深蓝锚点 15 |
| 工具测评 / 案例实战 | 前后对照 20 + 冷静资料 13 + 开放单图 21 | 数据锚点 25、温和转折 14 |
| 观点 / 深度分析 | 正文 5 + 独立短句 10 + 冷静资料 13 | 深蓝锚点 15、结尾余白 29 |
| 数据复盘 / 报告 | 数据锚点 25 + 数据表 26 + 阶段记录 19 | 冷静资料 13、前后对照 20 |
| 个人思考 / 随笔 | 正文 5 + 开放单图 21 + 结尾余白 29 | 独立短句 10、纸边笔记 12 |
| 访谈 / 人物 | 人物封面 3 + 独立短句 10 + 正文 5 | 阶段记录 19、作者落款 28 |

## Markdown → 组件映射规则

| Markdown / 原文结构 | 组件 |
|---|---|
| `# 标题` | 2 或 3，按是否有原文主视觉选择 |
| `## 标题` | 6 与 7 交替 |
| `### 标题` | 8 |
| 普通段落 | 5 |
| `**重点**` / `==概念==` | 9，默认冰蓝；关键判断才用奶油黄 |
| `> 引用` | 10；普通补充说明可用 12 |
| 摘要 / 导语 | 4 或 11 |
| 信息来源 / 事实边界 | 13 |
| 注意 / 风险 / 转折 | 14 |
| 原文明确核心结论 | 15，整篇原则上一次 |
| 无序列表 / 有序列表 | 16；需要索引感时用 17 |
| 步骤 | 18，逐项独立呈现 |
| 阶段 / 时间顺序 | 19 |
| 前后、修改前后、方案变化 | 20 |
| 单图 / 原文图注 | 21 |
| 同组连续 3 张以上图片 | 22 |
| 代码围栏 | 23 |
| 超过约 12 行或 500 字的 Prompt、记录、补充材料 | 24 |
| 原文指标 / 数据 | 25；真实表格用 26 |
| 原文 FAQ / 作者信息 / 总结 | 27 / 28 / 29 |
| `---` | 使用一条 `#E7E2D8` 细横线与上下留白，不生成装饰图案 |
