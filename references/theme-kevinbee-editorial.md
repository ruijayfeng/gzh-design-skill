# 凯冰 · 明亮编辑

主题标识：`kevinbee-editorial`。以纸色、宋体标题、淡蓝语义大字和明黄重点建立可识别的阅读节奏。用于凯冰的长文、创作记录、方法分享与产品思考。

## 一、设计变量速查表

| 变量 | 值 | 用途 |
|---|---|---|
| 纸色 | `#FFFCF5` | 全文容器 |
| 深字 | `#22324A` | 标题、正文 |
| 主蓝 | `#2768B2` | 结构、正文加粗、线条 |
| 语义大字 | `#C5D8EA` | 章节前的真实文字 |
| 明黄 | `#F3D55B` | 半高荧光、短线 |
| 淡黄 | `#FFF3CD` | 说明、摘录背景 |
| 点睛红 | `#C94E4C` | 原文警示、极少量装饰 |
| 次要字 | `#647083` | 图注、元信息 |
| 分隔线 | `#DFE4E6` | 数据、目录、次级分组 |
| 浅蓝底 | `#EDF3F8` | 技术、对照、信息 |
| 标题字体 | `Georgia,'Songti SC','STSong',serif` | 封面32px/1.55、900；章标题26px/1.55、900 |
| 语义字体 | `Georgia,'Songti SC','STSong',serif` | 64px/1.05，斜体，700，字距−1px |
| 正文字体 | `-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif` | 17px/1.95 |
| 版心 | 最大677px；上下46/40px，左右22px | 容器内部不再叠加全局横向padding |
| 节奏 | 段距20px；章前52px | 章节后24px；不逐段加卡片 |
| 圆角 | 引言14px，说明12px，代码10px | 无阴影 |
| 下划线 | `text-decoration:underline;text-decoration-color:#2768B2;text-underline-offset:4px;` | 原文下划线 |

字号例外：本主题根据用户明确要求保留阿真原版的大语义字和强字号差，封面32px、章题26px、语义字64px不受生成器通用24px上限约束。它们必须保持真实CSS文字，不转图、不缩小伪装、不加入品牌缩写。

语义大字是章节导航。根据现有标题和段落选一个真正相关的短词，允许自然中英对应；例如构思用Idea、打磨用Craft、结构用Structure、实践用Practice、成长用Growth。示例词不构成必选顺序。没有可靠对应词时用原章节中的2—4字短语或序号。不能新增立场、给内容改名，不能硬套Start/Change/Now。长词容纳不下时优先减字号至48px，不强行断成孤字。

用户提供的IP插画仅作风格参考，不能作为文章图、作者头像、装饰、Logo或章节元素自动插入。本主题不使用KB等品牌大字，也不对配色附会人物故事。

## 二、各组件完整 HTML

以下29个组件为核心库。组件占位文字是装配槽位，交付正文必须替换为原文内容；原文无该类内容就省略。图片槽位只接受原文章图片。核心视觉与`scripts/build_kevinbee_editorial.mjs`保持一致；额外技术组件为同主题的可复用扩展。

### 01. 纸色全局容器

```html
<section style="max-width:677px;box-sizing:border-box;margin:0 auto;padding:46px 22px 40px;background:#FFFCF5;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif;color:#22324A;overflow-wrap:break-word;">
  <p style="margin:0 0 20px;font-size:17px;line-height:1.95;color:#22324A;"><span leaf="">文章组件装配位置</span></p>
</section>
```

### 02. 居中封面

```html
<section style="padding:10px 0 14px;margin:0 0 22px;">
  <p style="margin:0;color:#22324A;font-family:Georgia,'Songti SC','STSong',serif;font-size:32px;font-weight:900;line-height:1.55;letter-spacing:0.3px;text-align:center;"><span leaf="">原文文章标题</span></p>
  <section style="text-align:center;font-size:0;line-height:4px;margin:24px 0;"><span style="display:inline-block;width:34px;height:4px;background:#2768B2;border-radius:2px;"><span leaf=""><br></span></span><span style="display:inline-block;width:17px;height:4px;background:#F3D55B;margin-left:6px;border-radius:2px;"><span leaf=""><br></span></span><span style="display:inline-block;width:5px;height:4px;background:#C94E4C;margin-left:6px;border-radius:2px;"><span leaf=""><br></span></span></section>
</section>
```

普通标题使用32px。标题超过22字符且含中文逗号时，在第一个已有逗号处分为前题与主标题：前题保留逗号，用20px宋体、700字重、1.7行高、下距10px、居中；主标题32px/1.55。原标题全部字符和标点保持原样，阅读顺序不变。没有自然分界就整体自然换行。原文已有副标题时用16px、次要字色、居中；不补栏目、英文刊名或期号。

### 03. 黄色引言

```html
<section style="margin:24px 0 28px;padding:25px 22px;border-radius:14px;background:#FFF3CD;text-align:center;">
  <p style="margin:0;font-family:Georgia,'Songti SC','STSong',serif;font-size:21px;font-weight:700;line-height:1.9;color:#22324A;"><span leaf="">原文开头的引用或引言内容</span></p>
</section>
```

用于开头原文引用或原有结尾短引言；普通首段保持正文。明黄色用于荧光和短线，整卡使用淡黄。

### 04. 语义章节

```html
<section style="margin:52px 0 24px;text-align:left;">
  <p style="margin:0 0 8px;font-family:Georgia,'Songti SC','STSong',serif;font-size:64px;font-style:italic;font-weight:700;line-height:1.05;letter-spacing:-1px;color:#C5D8EA;"><span leaf="">章节语义词</span></p>
  <p style="margin:0;font-family:Georgia,'Songti SC','STSong',serif;font-size:26px;font-weight:900;line-height:1.55;color:#22324A;"><span leaf="">原文章节标题</span></p>
  <section style="margin:14px 0 0;line-height:12px;"><span style="display:inline-block;width:48px;height:5px;border-radius:3px;background:#F3D55B;vertical-align:middle;"><span leaf=""><br></span></span><span style="font-family:Georgia,serif;font-size:12px;color:#6B7890;margin-left:12px;vertical-align:middle;"><span leaf="">01</span></span></section>
</section>
```

章节大字与标题统一左对齐，和正文共享左边界。章节标题两行时保持自然换行。序号按既有章节顺序递增。一个章节只出现一次大字；小节不重复舞台结构。

### 05. 次级标题

```html
<p style="margin:30px 0 16px;padding-left:12px;border-left:4px solid #2768B2;color:#22324A;font-size:19px;line-height:1.6;font-weight:700;"><span leaf="">原文小节标题</span></p>
```

### 06. 正文

```html
<p style="margin:0 0 20px;color:#22324A;font-size:17px;line-height:1.95;text-align:left;"><span leaf="">原文正文段落。保留全文原有文字、标点、段落与顺序。</span></p>
```

### 07. 蓝色加粗

```html
<strong style="font-weight:700;color:#2768B2;"><span leaf="">原文重点短语</span></strong>
```

### 08. 黄色半高荧光

```html
<span style="font-weight:700;background:linear-gradient(transparent 58%,#F3D55B 58%);padding:0 1px;"><span leaf="">原文重点短语</span></span>
```

### 09. 蓝色下划线

```html
<span style="text-decoration:underline;text-decoration-color:#2768B2;text-underline-offset:4px;"><span leaf="">原文重点短语</span></span>
```

07—09同一短语只选一种。优先保持原文已有强调；自动标记只对真正的观点词，不要求每段固定数量。

仅在03引言和29判断卡内，对不超过6字符的原文高亮短语追加`white-space:nowrap`，避免“能力商品”之类完整概念拆行。普通正文不强制不换行，长强调仍自然折行。原文删除线保留`text-decoration:line-through`，不改为荧光。

### 10. 开放引语

```html
<section style="margin:36px 0;">
  <p style="margin:0;font-family:Georgia,'Songti SC','STSong',serif;font-size:23px;font-weight:700;line-height:1.95;color:#22324A;text-align:center;"><span leaf="">原文引用内容</span></p>
  <section style="text-align:center;font-size:0;line-height:4px;margin:24px 0;"><span style="display:inline-block;width:34px;height:4px;background:#2768B2;border-radius:2px;"><span leaf=""><br></span></span><span style="display:inline-block;width:17px;height:4px;background:#F3D55B;margin-left:6px;border-radius:2px;"><span leaf=""><br></span></span><span style="display:inline-block;width:5px;height:4px;background:#C94E4C;margin-left:6px;border-radius:2px;"><span leaf=""><br></span></span></section>
</section>
```

原文有出处时追加13px次要字色段落，保留原文。主体判断引用使用29；开放引语为可选轻量变体。

### 11. 居中重点段落

```html
<section style="margin:36px 0;">
  <p style="margin:0;font-family:Georgia,'Songti SC','STSong',serif;font-size:23px;line-height:1.95;font-weight:700;color:#22324A;text-align:center;"><span leaf="">原文独立成段的关键判断</span></p>
</section>
```

不从正文复制一遍制造拉引语。全文最多两处，避免与章节连续相邻。

### 12. 淡黄说明

```html
<section style="margin:24px 0;padding:22px;border-radius:12px;background:#FFF3CD;">
  <p style="margin:0 0 10px;color:#22324A;font-size:16px;line-height:1.95;font-weight:700;"><span leaf="">原文说明标题</span></p>
  <p style="margin:0;color:#22324A;font-size:15px;line-height:1.95;"><span leaf="">原文补充说明</span></p>
</section>
```

### 13. 信息与警示

```html
<section style="margin:24px 0;padding:22px;border-radius:12px;background:#EAF2F9;">
  <p style="margin:0 0 10px;color:#22324A;font-size:16px;line-height:1.95;font-weight:700;"><span leaf="">原文信息标题</span></p>
  <p style="margin:0;color:#22324A;font-size:15px;line-height:1.95;"><span leaf="">原文提示内容</span></p>
</section>
```

原文明示提醒时底色改为`#FBECE7`；明示完成状态可改为`#EBF3EB`。不自动添加“注意”“成功”等标签。

### 14. 无序列表

```html
<section style="margin:0 0 26px;">
  <section style="margin:0 0 13px;"><span style="display:inline-block;vertical-align:top;width:24px;padding-top:2px;font-size:13px;line-height:30px;font-weight:700;color:#2768B2;"><span leaf="">•</span></span><section style="display:inline-block;vertical-align:top;width:calc(100% - 26px);"><p style="margin:0;font-size:17px;line-height:1.95;color:#22324A;"><span leaf="">原文第一项</span></p></section></section>
  <section style="margin:0 0 13px;"><span style="display:inline-block;vertical-align:top;width:24px;padding-top:2px;font-size:13px;line-height:30px;font-weight:700;color:#2768B2;"><span leaf="">•</span></span><section style="display:inline-block;vertical-align:top;width:calc(100% - 26px);"><p style="margin:0;font-size:17px;line-height:1.95;color:#22324A;"><span leaf="">原文第二项</span></p></section></section>
</section>
```

### 15. 有序步骤

```html
<section style="margin:0 0 26px;">
  <section style="margin:0 0 13px;"><span style="display:inline-block;vertical-align:top;width:24px;padding-top:2px;font-size:13px;line-height:30px;font-weight:700;color:#2768B2;"><span leaf="">01</span></span><section style="display:inline-block;vertical-align:top;width:calc(100% - 26px);"><p style="margin:0;font-size:17px;line-height:1.95;color:#22324A;"><span leaf="">原文步骤内容</span></p></section></section>
</section>
```

按原有顺序循环；原文步骤有标题时使用05加06，无标题列表不得把第一句改成标题。

### 16. 目录

```html
<section style="margin:0 0 32px;padding:20px 0;border-top:1px solid #DFE4E6;border-bottom:1px solid #DFE4E6;">
  <p style="margin:0 0 12px;font-size:14px;line-height:1.8;font-weight:700;color:#2768B2;"><span leaf="">原文目录标题</span></p>
  <p style="margin:0 0 8px;font-size:15px;line-height:1.9;color:#22324A;"><span leaf="">原文目录第一项</span></p>
  <p style="margin:0;font-size:15px;line-height:1.9;color:#22324A;"><span leaf="">原文目录第二项</span></p>
</section>
```

只在原文有目录或用户要求时使用，位置遵循原文，通常封面、引言之后。

### 17. 图片与GIF

```html
<section style="margin:26px 0;text-align:center;">
  <section style="display:inline-block;max-width:100%;overflow:hidden;border-radius:10px;">
    <span leaf=""><img src="原文图片URL" alt="原文图片说明" style="max-width:100%;height:auto;display:block;margin:0 auto;"></span>
  </section>
  <p style="margin:10px 0 20px;color:#647083;font-size:12px;line-height:1.95;text-align:center;"><span leaf="">原文图片说明</span></p>
</section>
```

GIF同结构保留原src；没有图注删图注，不增加GIF标签。不得使用IP参考图替换。

### 18. 同组横滑多图

```html
<section style="margin:26px 0;">
  <p style="margin:0 0 20px;font-size:12px;line-height:1.95;color:#647083;text-align:right;"><span leaf="">左右滑动查看 →</span></p>
  <section style="overflow-x:auto;overflow-y:hidden;white-space:nowrap;font-size:0;padding-bottom:8px;-webkit-overflow-scrolling:touch;">
    <section style="display:inline-block;width:86%;vertical-align:top;white-space:normal;margin-right:10px;border-radius:10px;overflow:hidden;"><span leaf=""><img src="原文图片URL1" alt="原文说明1" style="max-width:100%;height:auto;display:block;margin:0 auto;"></span></section>
    <section style="display:inline-block;width:86%;vertical-align:top;white-space:normal;margin-right:10px;border-radius:10px;overflow:hidden;"><span leaf=""><img src="原文图片URL2" alt="原文说明2" style="max-width:100%;height:auto;display:block;margin:0 auto;"></span></section>
    <section style="display:inline-block;width:86%;vertical-align:top;white-space:normal;border-radius:10px;overflow:hidden;"><span leaf=""><img src="原文图片URL3" alt="原文说明3" style="max-width:100%;height:auto;display:block;margin:0 auto;"></span></section>
  </section>
</section>
```

仅限同组3张及以上；原文有图注时，在各图下按17添加。长宽比差异大的图不强行合组。

### 19. 原文待补媒体

```html
<section style="padding:50px 18px;border:1px dashed #C8D3DC;background:#F2F6F8;border-radius:12px;margin:24px 0;text-align:center;">
  <p style="margin:0;color:#647083;font-size:14px;line-height:1.95;text-align:center;"><span leaf="">原文明确写出的待补图、视频或录屏指令</span></p>
</section>
```

只在原文明示待补素材时出现。

### 20. 浅色代码块

```html
<section style="margin:24px 0;padding:18px;border-radius:10px;background:#EDF3F8;overflow-wrap:anywhere;">
  <p style="margin:0;font-family:Consolas,monospace;font-size:13px;line-height:1.7;color:#22324A;white-space:normal;"><span leaf="">原文代码第一行</span></p>
  <p style="margin:0;font-family:Consolas,monospace;font-size:13px;line-height:1.7;color:#22324A;white-space:normal;"><span leaf="">　　原文代码第二行</span></p>
</section>
```

每行一段；原文缩进按通用组件规则保留，HTML特殊符号实体转义。默认不额外显示语言标签。短技术内容默认选浅色。

### 21. 深色代码块

```html
<section style="margin:24px 0;padding:18px;border-radius:10px;background:#22324A;overflow-wrap:anywhere;">
  <p style="margin:0;color:#F3F6FB;font-family:Consolas,monospace;font-size:13px;line-height:1.7;white-space:normal;"><span leaf="">原文代码第一行</span></p>
  <p style="margin:0;color:#F3F6FB;font-family:Consolas,monospace;font-size:13px;line-height:1.7;white-space:normal;"><span leaf="">　　原文代码第二行</span></p>
</section>
```

仅代码较密集的教程选用，全篇代码同款；不用装饰性终端圆点。

### 22. 行内代码

```html
<span style="font-family:Consolas,monospace;font-size:14px;background:#EDF2F6;padding:2px 4px;border-radius:3px;"><span leaf="">原文代码</span></span>
```

### 23. 长补充材料滚动窗

```html
<section style="margin:24px 0;">
  <p style="margin:0 0 20px;font-size:12px;line-height:1.95;color:#22324A;text-align:right;"><span leaf="">上下滑动查看 ↓</span></p>
  <section style="max-height:240px;overflow-y:auto;padding:18px;background:#EDF3F8;border-radius:10px;">
    <p style="margin:0 0 20px;color:#22324A;font-size:14px;line-height:1.95;"><span leaf="">原文补充材料第一段</span></p>
    <p style="margin:0 0 20px;color:#22324A;font-size:14px;line-height:1.95;"><span leaf="">原文补充材料后续段落</span></p>
  </section>
</section>
```

仅超过12行或500字且非连续主论证的补充材料。代码/Prompt内容改用20逐行样式。

### 24. 真实数据表

```html
<section style="margin:24px 0;overflow-x:auto;">
  <table style="width:100%;border-collapse:collapse;font-size:14px;color:#22324A;">
    <thead><tr><th style="padding:12px 8px;background:#FFF3CD;text-align:left;"><span leaf="">原文表头一</span></th><th style="padding:12px 8px;background:#FFF3CD;text-align:left;"><span leaf="">原文表头二</span></th></tr></thead>
    <tbody><tr><td style="padding:12px 8px;border-bottom:1px solid #DFE4E6;"><span leaf="">原文单元格一</span></td><td style="padding:12px 8px;border-bottom:1px solid #DFE4E6;"><span leaf="">原文单元格二</span></td></tr></tbody>
  </table>
</section>
```

表格仅用于真实数据；列数较多允许横滑，不截掉字段、不改成营销卡。

### 25. 上下对照

```html
<section style="margin:24px 0;">
  <section style="margin:24px 0;padding:22px;border-radius:12px;background:#EDF2F6;">
    <p style="margin:0 0 10px;color:#22324A;font-size:16px;line-height:1.95;font-weight:700;"><span leaf="">原文第一组标题</span></p>
    <p style="margin:0;color:#22324A;font-size:15px;line-height:1.95;"><span leaf="">原文第一组内容</span></p>
  </section>
  <section style="margin:24px 0;padding:22px;border-radius:12px;background:#FFF3CD;">
    <p style="margin:0 0 10px;color:#22324A;font-size:16px;line-height:1.95;font-weight:700;"><span leaf="">原文第二组标题</span></p>
    <p style="margin:0;color:#22324A;font-size:15px;line-height:1.95;"><span leaf="">原文第二组内容</span></p>
  </section>
</section>
```

双图对照在两组各插17组件；保持上下排列和原顺序。

### 26. 原文问答

```html
<section style="margin:24px 0;">
  <p style="margin:30px 0 16px;padding-left:12px;border-left:4px solid #2768B2;font-size:19px;line-height:1.6;font-weight:700;color:#22324A;"><span leaf="">原文问题</span></p>
  <p style="margin:0 0 20px;font-size:17px;line-height:1.95;color:#22324A;"><span leaf="">原文回答</span></p>
</section>
```

### 27. 结尾与署名

```html
<section style="margin:34px 0 0;padding:24px 0 0;border-top:1px solid #DFE4E6;">
  <p style="margin:0 0 20px;font-size:17px;line-height:1.95;color:#22324A;"><span leaf="">原文结尾段落</span></p>
  <p style="margin:0;color:#647083;font-size:14px;line-height:1.95;"><span leaf="">原文署名或作者介绍</span></p>
</section>
```

原文无署名删除该段。结尾仍按正文排，原有短引用结尾可用03淡黄卡；署名14px左对齐。不自动署名凯冰。

### 28. 原文延伸阅读与行动信息

```html
<section style="margin:24px 0;padding:22px;border-radius:12px;background:#EAF2F9;">
  <p style="margin:0 0 10px;color:#22324A;font-size:16px;line-height:1.95;font-weight:700;"><span leaf="">原文资源或行动标题</span></p>
  <p style="margin:0;color:#22324A;font-size:15px;line-height:1.95;word-break:break-all;"><span leaf="">原文链接、联系方式或互动文字</span></p>
</section>
```

原文有资源、联系方式才排；链接按原文显示，不伪造可点击按钮。延伸阅读清单用05加14；原有短互动文字用15px居中正文加02三色短条。

### 29. 蓝色判断卡

```html
<section style="margin:24px 0 28px;padding:25px 22px;border-radius:14px;background:#2768B2;">
  <p style="margin:0;font-family:Georgia,'Songti SC','STSong',serif;font-size:20px;font-weight:700;line-height:1.9;color:#FFFFFF;"><span leaf="">原文关键引用或独立判断</span></p>
</section>
```

样张中的正文关键引用使用此款。白字必须保持高对比，不能嵌入蓝色加粗而使文字消失；原文强调仅保留字重或选浅黄标记。不复制原文重复制造金句；全篇以一到两处为宜。

## 三、完整文章模板骨架

装配顺序始终服从原文。一般长文使用：01包裹全文 → 02原标题 → 03原文开头引用（若有）→ 16原文目录（若有且位于此处）→ 06开篇正文 → 每个既有二级标题用04 → 章内06、05及语义匹配组件 → 27原有结尾/署名 → 28原有延伸阅读。

不强制为文章补开场引言、目录、结尾、署名。居中封面与左对齐大字章节是主要舞台，其余内容以无容器正文为主。一个常规章节推荐一处大字标题、2—6段正文、至多一处引用或说明卡。正文重点引用用29蓝色判断卡，开放引语可用10。卡片不连续堆叠。淡黄引言可保留原文短语黄色高亮，不整段重复高亮。整篇无需插画也能成立。

完整外壳如下，装配时将示意正文替换成选定组件，不能保留示意文字：

```html
<section style="max-width:677px;box-sizing:border-box;margin:0 auto;padding:46px 22px 40px;background:#FFFCF5;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif;color:#22324A;overflow-wrap:break-word;">
  <section style="padding:10px 0 14px;margin:0 0 22px;">
    <p style="margin:0;color:#22324A;font-family:Georgia,'Songti SC','STSong',serif;font-size:32px;font-weight:900;line-height:1.55;letter-spacing:0.3px;text-align:center;"><span leaf="">原文文章标题</span></p>
    <section style="text-align:center;font-size:0;line-height:4px;margin:24px 0;"><span style="display:inline-block;width:34px;height:4px;background:#2768B2;border-radius:2px;"><span leaf=""><br></span></span><span style="display:inline-block;width:17px;height:4px;background:#F3D55B;margin-left:6px;border-radius:2px;"><span leaf=""><br></span></span><span style="display:inline-block;width:5px;height:4px;background:#C94E4C;margin-left:6px;border-radius:2px;"><span leaf=""><br></span></span></section>
  </section>
  <p style="margin:0 0 20px;font-size:17px;line-height:1.95;color:#22324A;"><span leaf="">原文开篇段落</span></p>
  <section style="margin:52px 0 24px;text-align:left;">
    <p style="margin:0 0 8px;font-family:Georgia,'Songti SC','STSong',serif;font-size:64px;font-style:italic;font-weight:700;line-height:1.05;letter-spacing:-1px;color:#C5D8EA;"><span leaf="">章节语义词</span></p>
    <p style="margin:0;font-family:Georgia,'Songti SC','STSong',serif;font-size:26px;font-weight:900;line-height:1.55;color:#22324A;"><span leaf="">原文章节标题</span></p>
    <section style="margin:14px 0 0;line-height:12px;"><span style="display:inline-block;width:48px;height:5px;border-radius:3px;background:#F3D55B;vertical-align:middle;"><span leaf=""><br></span></span><span style="font-family:Georgia,serif;font-size:12px;color:#6B7890;margin-left:12px;vertical-align:middle;"><span leaf="">01</span></span></section>
  </section>
  <p style="margin:0 0 20px;font-size:17px;line-height:1.95;color:#22324A;"><span leaf="">原文章节内容，按原文结构继续装配</span></p>
</section>
```

## 四、文章类型 → 组件组合配方表

| 类型 | 核心组合 | 按需点缀 | 控制 |
|---|---|---|---|
| 观点/深度分析 | 02、04、06、29 | 08、10、11、25 | 重点舞台不超过2处 |
| 创作/成长记录 | 02、04、06、29、27 | 03、08、10、17 | 语义词跟随叙事阶段 |
| 教程/操作指南 | 02、04、05、06、15、20、22 | 13、17、18、23 | 大字只给主要章节，步骤不用大字 |
| 工具/清单盘点 | 02、04、06、14、15 | 17、24、25 | 条目形态一致，不逐项换色 |
| 访谈/人物特稿 | 02、04、06、10、26 | 17、27 | 无原图不补人物图 |
| 数据复盘/报告 | 02、04、06、24、25 | 13、11 | 数据保持原值，不虚构指标 |
| 生活/情感随笔 | 02、06、10、27 | 04、08、17 | 无章节不强加章节 |
| 案例实战 | 02、04、06、15、25 | 17、18、20 | 结果、过程顺序遵循原文 |

## 五、Markdown → 组件映射规则表

| 原文结构 | 组件 | 规则 |
|---|---|---|
| `# 标题` | 02 | 原标题，不新拟副题 |
| `## 章节` | 04 | 原章标题完整保留；另配有意义的导航词 |
| `### 小节`及更低层级 | 05 | 不重复语义大字 |
| 普通段落 | 06 | 原文原顺序 |
| `**加粗**` | 07 | 不额外加底色 |
| `==高亮==` | 08 | 黄色半高亮，保留文字 |
| `~~删除线~~` | 原文删除线 | `text-decoration:line-through`，不转换为荧光 |
| `<u>`或`++下划线++` | 09 | 短语下划线 |
| 开头引用 | 03 | 原文无引言不添加 |
| 中段关键引用 | 29 | 蓝色判断卡，原文完整保留 |
| 开放引语 | 10 | 轻量变体，原文出处若有则保留 |
| 已有独立重点段落 | 11 | 就地呈现，不复制重复 |
| 说明/旁注 | 12或13 | 按原文语义选择，标题无则删 |
| 无序列表 | 14 | 所有条目完整保留 |
| 有序列表/步骤 | 15 | 不将普通列表强行造标题 |
| 已有目录 | 16 | 不自动生成目录 |
| 单图/GIF | 17 | 只用原文图片，不使用IP参考素材 |
| 同组3图及以上 | 18 | 保留顺序、URL、图注 |
| 明确待补素材 | 19 | 保留原指令 |
| 围栏代码/Prompt | 20或21 | 全篇同款，每行一段 |
| 行内代码 | 22 | 转义但不改字符 |
| 长补充材料 | 23 | 主论证绝不收纳 |
| Markdown数据表 | 24 | 完整保留各行列 |
| 原有前后对照/两组信息 | 25 | 上下排列、维持顺序 |
| 原有问答 | 26 | 不新增FAQ |
| 原有结尾/署名 | 27 | 缺省即删除，无自动署名 |
| 原有资源/联系方式/CTA | 28 | 不新增内容 |
| 分隔线 | 留白或细线 | 避免在章节舞台前另加重复分隔 |

交付时运行`validate_gzh_html.py`；源库运行`component_lint.py`。另检查375px窄屏、正文文字完整性、长语义词溢出与图像来源。浏览器预览通过不等于已经实测公众号粘贴，未实测时不能声称100%还原。
