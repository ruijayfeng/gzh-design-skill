# 凯冰·紧凑承接（原生正文版）

主题标识：kevinbee-compact。用户已确认，作为默认与凯冰主题。内容优先，沿用原生阅读环境，只在章标题、高光与图像做局部增强。全部组件与 scripts/build_kevinbee_compact.mjs 同源；53个预览区块中精选30个核心组件。示意文案只用于组件展示，交付时换为原文；未给出的内容省略。作者身份按原文保留，不自动替换；维护样张已按用户明确要求署名凯冰。

## 设计变量速查表

| 变量 | 值 |
|---|---|
| 正文背景 | 不设置，继承阅读环境 |
| 正文 | 不设置字体、字号、行高、颜色；普通段落下间距18px |
| 主色 | #2659DE，只用于章线、语义词及原文必要标记 |
| 正文两侧 | 容器不加内边距，沿用公众号边界；浏览器预览外壳22px不复制 |
| 章题 | 宋体24px／1.5，蓝色1px上章线；章组上32px／下18px，线下13px |
| 语义词 | Georgia斜体18px／1.25；仅有准确语义时使用 |
| 图片 | width:100%;height:auto;统一6px圆角 |
| 图注 | 12px／1.7，图下8px，原文有才显示 |
| 图前／图后 | 图前由前一段落的18px段距提供；图后24px，相邻图片24px |
| 阴影 | 不使用 |

用户明确要求图片铺满并微圆，因此本主题覆盖通用库“小图不铺满”的默认规则；小源图仍铺至内容宽度，同时提醒清晰度风险，不自动改变版式。原题逗号后较短的完整语义段可作为不拆分字组，不改字，不强制整题单行。图像与正文左右边界一致，不是贴到手机物理屏幕边缘。原图比例、顺序、路径保留，不裁切、不加滤镜、不额外配图。多图默认纵向，不自动横滑。正文不逐段自动高亮；引用与署名沿用正文样式，不另外造宋体居中舞台或卡片。

## 各组件完整 HTML

### 左齐文章题名

```html
<p style="margin:0 0 18px;font-size:24px;line-height:1.5;font-weight:700;margin:0 0 25px;"><span leaf="">文章主标题占位</span></p>
```

### 原生正文容器

```html
<section style="margin:0;width:100%;box-sizing:border-box;overflow-wrap:break-word;"><p style="margin:0 0 18px;"><span leaf="">正文内容占位。容器不设置字体、字号、行高、颜色、背景或左右内边距。</span></p></section>
```

### 长题名自然断行

```html
<section style="margin:0 0 25px;"><p style="margin:0 0 18px;margin:0 0 7px;"><span leaf="">文章题名占位，</span></p><p style="margin:0 0 18px;font-size:24px;line-height:1.5;font-weight:700;margin:0;"><span leaf="">用于检查较长题名的自然断行与阅读顺序</span></p></section>
```

### 原生文字开篇引语

```html
<section style="margin:18px 0 24px;"><p style="margin:0 0 18px;margin:0;"><span leaf="">开篇引语占位。仅在原文已有引语时使用，不新增文章观点。</span></p></section>
```

### 连续阅读段落

```html
<p style="margin:0 0 18px;"><span leaf="">正文段落占位。稳定的行宽和行距让文字连续展开，不把每一段都装入卡片。</span></p>
```

### 原文重点字重

```html
<p style="margin:0 0 18px;"><span leaf="">正文中的</span><span style="font-weight:650;"><span leaf="">原文重点占位</span></span><span leaf="">，只改变字重。</span></p>
```

### 原文重点轻标

```html
<p style="margin:0 0 18px;"><span leaf="">正文中的</span><span style="font-weight:600;background:linear-gradient(transparent 64%,#FFF1BE 64%);"><span leaf="">原文重点占位</span></span><span leaf="">，不整段铺色。</span></p>
```

### 原文下划线

```html
<p style="margin:0 0 18px;"><span leaf="">正文中的</span><span style="text-decoration:underline;text-decoration-color:#2659DE;text-underline-offset:3px;"><span leaf="">原文标记占位</span></span><span leaf="">，保留标记范围。</span></p>
```

### 行内代码

```html
<p style="margin:0 0 18px;"><span leaf="">正文中的 </span><span style="font-family:Consolas,monospace;font-size:14px;background:#F4F7FB;padding:1px 4px;border-radius:3px;"><span leaf="">code</span></span><span leaf=""> 使用等宽字体。</span></p>
```

### 价值紧凑章首

```html
<section style="border-top:1px solid #2659DE;padding-top:13px;margin:32px 0 18px;"><p style="margin:0 0 18px;font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:18px;line-height:1.25;color:#2659DE;margin:0 0 9px;"><span leaf="">Value</span></p><p style="margin:0 0 18px;font-family:Georgia,'Songti SC',SimSun,serif;font-size:24px;font-weight:600;line-height:1.5;margin:0;"><span leaf="">价值章节标题占位</span></p></section>
```

### 结构紧凑章首

```html
<section style="border-top:1px solid #2659DE;padding-top:13px;margin:32px 0 18px;"><p style="margin:0 0 18px;font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:18px;line-height:1.25;color:#2659DE;margin:0 0 9px;"><span leaf="">System</span></p><p style="margin:0 0 18px;font-family:Georgia,'Songti SC',SimSun,serif;font-size:24px;font-weight:600;line-height:1.5;margin:0;"><span leaf="">结构章节标题占位</span></p></section>
```

### 纯中文章首

```html
<section style="border-top:1px solid #2659DE;padding-top:13px;margin:32px 0 18px;"><p style="margin:0 0 18px;font-family:Georgia,'Songti SC',SimSun,serif;font-size:24px;font-weight:600;line-height:1.5;margin:0;"><span leaf="">中文章节标题占位</span></p></section>
```

### 无装饰小节标题

```html
<p style="margin:0 0 18px;font-family:Georgia,'Songti SC',SimSun,serif;font-size:21px;line-height:1.6;font-weight:600;margin:26px 0 12px;"><span leaf="">小节标题占位</span></p>
```

### 原生文字引用段

```html
<section style="margin:18px 0 24px;"><p style="margin:0 0 18px;margin:0;"><span leaf="">原文引语占位。沿用正文阅读样式，不为每个章节额外制造金句。</span></p></section>
```

### 补充旁注

```html
<section style="border-left:2px solid #DEE5EF;padding:2px 0 2px 14px;margin:20px 0;"><p style="margin:0 0 18px;font-size:15px;line-height:1.85;margin:0;"><span leaf="">补充说明内容占位。</span></p></section>
```

### 原文无序列表

```html
<section style="margin:0 0 21px;"><section style="margin:0 0 8px;"><span style="font-size:15px;color:#2659DE;display:inline-block;vertical-align:top;width:25px;line-height:inherit;"><span leaf="">•</span></span><section style="display:inline-block;vertical-align:top;width:calc(100% - 27px);"><p style="margin:0 0 18px;margin:0;"><span leaf="">项目内容占位一</span></p></section></section><section style="margin:0 0 8px;"><span style="font-size:15px;color:#2659DE;display:inline-block;vertical-align:top;width:25px;line-height:inherit;"><span leaf="">•</span></span><section style="display:inline-block;vertical-align:top;width:calc(100% - 27px);"><p style="margin:0 0 18px;margin:0;"><span leaf="">项目内容占位二</span></p></section></section><section style="margin:0 0 8px;"><span style="font-size:15px;color:#2659DE;display:inline-block;vertical-align:top;width:25px;line-height:inherit;"><span leaf="">•</span></span><section style="display:inline-block;vertical-align:top;width:calc(100% - 27px);"><p style="margin:0 0 18px;margin:0;"><span leaf="">项目内容占位三</span></p></section></section></section>
```

### 原文有序列表

```html
<section style="margin:0 0 21px;"><section style="margin:0 0 8px;"><span style="font-size:15px;color:#2659DE;display:inline-block;vertical-align:top;width:25px;line-height:inherit;"><span leaf="">1.</span></span><section style="display:inline-block;vertical-align:top;width:calc(100% - 27px);"><p style="margin:0 0 18px;margin:0;"><span leaf="">步骤内容占位一</span></p></section></section><section style="margin:0 0 8px;"><span style="font-size:15px;color:#2659DE;display:inline-block;vertical-align:top;width:25px;line-height:inherit;"><span leaf="">2.</span></span><section style="display:inline-block;vertical-align:top;width:calc(100% - 27px);"><p style="margin:0 0 18px;margin:0;"><span leaf="">步骤内容占位二</span></p></section></section><section style="margin:0 0 8px;"><span style="font-size:15px;color:#2659DE;display:inline-block;vertical-align:top;width:25px;line-height:inherit;"><span leaf="">3.</span></span><section style="display:inline-block;vertical-align:top;width:calc(100% - 27px);"><p style="margin:0 0 18px;margin:0;"><span leaf="">步骤内容占位三</span></p></section></section></section>
```

### 同宽横图

```html
<section style="margin:0 0 24px;width:100%;"><section style="width:100%;border-radius:6px;overflow:hidden;margin:0;"><span leaf=""><img src="https://placehold.orence.net/1200x750/eaf0f8/647083/png?text=IMG" alt="原文图注占位" style="width:100%;max-width:100%;height:auto;display:block;margin:0;border-radius:6px;"></span></section><p style="margin:0 0 18px;font-size:12px;line-height:1.7;color:#7B8491;text-align:center;margin:8px 0 0;"><span leaf="">原文图注占位</span></p></section>
```

### 同宽竖图

```html
<section style="margin:0 0 24px;width:100%;"><section style="width:100%;border-radius:6px;overflow:hidden;margin:0;"><span leaf=""><img src="https://placehold.orence.net/1000x1400/f2eee7/7b756d/png?text=IMG" alt="原文图注占位" style="width:100%;max-width:100%;height:auto;display:block;margin:0;border-radius:6px;"></span></section><p style="margin:0 0 18px;font-size:12px;line-height:1.7;color:#7B8491;text-align:center;margin:8px 0 0;"><span leaf="">原文图注占位</span></p></section>
```

### 同宽截图

```html
<section style="margin:0 0 24px;width:100%;"><section style="width:100%;border-radius:6px;overflow:hidden;margin:0;"><span leaf=""><img src="https://placehold.orence.net/1400x850/f4f7fb/647083/png?text=IMG" alt="原文图注占位" style="width:100%;max-width:100%;height:auto;display:block;margin:0;border-radius:6px;"></span></section><p style="margin:0 0 18px;font-size:12px;line-height:1.7;color:#7B8491;text-align:center;margin:8px 0 0;"><span leaf="">原文图注占位</span></p></section>
```

### 同宽动图

```html
<section style="margin:0 0 24px;width:100%;"><section style="width:100%;border-radius:6px;overflow:hidden;margin:0;"><span leaf=""><img src="https://placehold.orence.net/1200x675/eaf0f8/647083/gif?text=GIF" alt="原文动图说明占位" style="width:100%;max-width:100%;height:auto;display:block;margin:0;border-radius:6px;"></span></section><p style="margin:0 0 18px;font-size:12px;line-height:1.7;color:#7B8491;text-align:center;margin:8px 0 0;"><span leaf="">原文动图说明占位</span></p></section>
```

### 无图注图片

```html
<section style="margin:0 0 24px;width:100%;"><section style="width:100%;border-radius:6px;overflow:hidden;margin:0;"><span leaf=""><img src="https://placehold.orence.net/1200x750/eaf0f8/647083/png?text=IMG" alt="" style="width:100%;max-width:100%;height:auto;display:block;margin:0;border-radius:6px;"></span></section></section>
```

### 纵向双图对照

```html
<section style="margin:0 0 24px;width:100%;"><section style="width:100%;border-radius:6px;overflow:hidden;margin:0;"><span leaf=""><img src="https://placehold.orence.net/1200x750/eaf0f8/647083/png?text=IMG" alt="原文前图说明占位" style="width:100%;max-width:100%;height:auto;display:block;margin:0;border-radius:6px;"></span></section><p style="margin:0 0 18px;font-size:12px;line-height:1.7;color:#7B8491;text-align:center;margin:8px 0 0;"><span leaf="">原文前图说明占位</span></p></section><section style="margin:0 0 24px;width:100%;"><section style="width:100%;border-radius:6px;overflow:hidden;margin:0;"><span leaf=""><img src="https://placehold.orence.net/1400x850/f4f7fb/647083/png?text=IMG" alt="原文后图说明占位" style="width:100%;max-width:100%;height:auto;display:block;margin:0;border-radius:6px;"></span></section><p style="margin:0 0 18px;font-size:12px;line-height:1.7;color:#7B8491;text-align:center;margin:8px 0 0;"><span leaf="">原文后图说明占位</span></p></section>
```

### 纵向连续图组

```html
<section style="margin:0 0 24px;width:100%;"><section style="width:100%;border-radius:6px;overflow:hidden;margin:0;"><span leaf=""><img src="https://placehold.orence.net/1200x750/eaf0f8/647083/png?text=IMG" alt="" style="width:100%;max-width:100%;height:auto;display:block;margin:0;border-radius:6px;"></span></section></section><section style="margin:0 0 24px;width:100%;"><section style="width:100%;border-radius:6px;overflow:hidden;margin:0;"><span leaf=""><img src="https://placehold.orence.net/1000x1400/f2eee7/7b756d/png?text=IMG" alt="" style="width:100%;max-width:100%;height:auto;display:block;margin:0;border-radius:6px;"></span></section></section><section style="margin:0 0 24px;width:100%;"><section style="width:100%;border-radius:6px;overflow:hidden;margin:0;"><span leaf=""><img src="https://placehold.orence.net/1400x850/f4f7fb/647083/png?text=IMG" alt="" style="width:100%;max-width:100%;height:auto;display:block;margin:0;border-radius:6px;"></span></section></section>
```

### 原文待补图片

```html
<section style="padding:36px 14px;border:1px dashed #DEE5EF;border-radius:6px;background:#F4F7FB;margin:22px 0 24px;"><p style="margin:0 0 18px;font-size:13px;color:#7B8491;text-align:center;line-height:1.8;margin:0;"><span leaf="">原文待补素材占位</span></p></section>
```

### 浅色代码段

```html
<section style="padding:14px;border-radius:6px;background:#F4F7FB;margin:20px 0 24px;"><p style="margin:0 0 18px;font-family:Consolas,monospace;font-size:11px;line-height:1.5;color:#7B8491;margin:0 0 8px;"><span leaf="">code</span></p><p style="margin:0 0 18px;font-family:Consolas,monospace;font-size:13px;line-height:1.65;color:#272D35;margin:0;overflow-wrap:anywhere;"><span leaf="">// 代码内容占位</span></p><p style="margin:0 0 18px;font-family:Consolas,monospace;font-size:13px;line-height:1.65;color:#272D35;margin:0;overflow-wrap:anywhere;"><span leaf="">const value = input;</span></p></section>
```

### 原文提示词段

```html
<section style="padding:14px;border-radius:6px;background:#F4F7FB;margin:20px 0 24px;"><p style="margin:0 0 18px;font-family:Consolas,monospace;font-size:11px;line-height:1.5;color:#7B8491;margin:0 0 8px;"><span leaf="">Prompt</span></p><p style="margin:0 0 18px;font-family:Consolas,monospace;font-size:13px;line-height:1.65;color:#272D35;margin:0;overflow-wrap:anywhere;"><span leaf="">任务目标占位</span></p><p style="margin:0 0 18px;font-family:Consolas,monospace;font-size:13px;line-height:1.65;color:#272D35;margin:0;overflow-wrap:anywhere;"><span leaf="">约束条件占位</span></p><p style="margin:0 0 18px;font-family:Consolas,monospace;font-size:13px;line-height:1.65;color:#272D35;margin:0;overflow-wrap:anywhere;"><span leaf="">输出要求占位</span></p></section>
```

### 真实数据表格

```html
<table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.8;"><tbody><tr><th style="text-align:left;padding:10px 8px;background:#F4F7FB;"><span leaf="">字段占位</span></th><th style="text-align:left;padding:10px 8px;background:#F4F7FB;"><span leaf="">说明占位</span></th></tr><tr><td style="padding:10px 8px;border-bottom:1px solid #DEE5EF;"><span leaf="">维度占位</span></td><td style="padding:10px 8px;border-bottom:1px solid #DEE5EF;"><span leaf="">对应内容占位</span></td></tr></tbody></table>
```

### 原文作者信息

```html
<section style="height:1px;line-height:0;font-size:0;background:#DEE5EF;margin:28px 0;"><span leaf=""><br></span></section><p style="margin:0 0 18px;margin:0;"><span leaf="">原文作者介绍占位。</span></p>
```

### 原文结尾

```html
<p style="margin:0 0 18px;"><span leaf="">原文结尾内容占位。继续使用完整正文，不自动包装成总结卡。</span></p>
```


## 完整文章模板骨架

原生正文容器→原文标题→原文开篇引语（若有）→原文段落→原文章节（紧凑语义词＋宋体章题）→原文小节／列表／图像／代码，严格按源顺序→原文结尾及署名（若有）。没有自动目录、副题、作者卡、CTA或新金句。图像与解释直接相邻，不额外插入色面。浏览器预览外壳模拟系统字体16px／1.8与白色阅读背景，不能写进可复制正文；富文本复制可能携带计算样式，真实公众号编辑器须做粘贴检验，不承诺跨设备完全一致。

```html
<section style="margin:0;width:100%;box-sizing:border-box;overflow-wrap:break-word;">
  <!-- 按原文顺序装配上面的组件；普通段落继承阅读环境 -->
</section>
```

## 文章类型 → 组件组合配方表

| 文章类型 | 核心 | 按原文需要 |
|---|---|---|
| 观点长文 | 章首、正文 | 原生引语、原图 |
| 方法教程 | 章首、小节、步骤 | 同宽截图、代码 |
| 图文案例 | 章首、正文、同宽图片 | 原图注、纵向对照、原文待补位置 |
| 生活随笔 | 中文章首、正文、原图 | 原文引语 |
| 数据复盘 | 章首、正文、真实表格 | 原图表、原文指标 |

## Markdown → 组件映射规则表

| 源元素 | 映射 |
|---|---|
| # | 左齐题名；较长且原有逗号时可分两级，不改文字 |
| ## | 紧凑章首；只有准确映射内容时使用英文语义词 |
| ### | 无装饰宋体小节 |
| 段落 | 稳定正文，不自动逐段标重点 |
| ** / == / u / ~~ | 分别保留原文加粗、高亮、下划线、删除语义 |
| > | 继承正文阅读样式，保持原文引用顺序 |
| 图片、GIF | 同宽、原比例、6px圆角；只使用原文图注 |
| 多图 | 保留顺序、同宽纵向，相邻间距24px |
| 代码与Prompt | 通用库紧凑代码语法，主题浅底与6px圆角 |
| 长补充材料 | 只在必要时滚动，正文论证不收进窗口 |
| 原文署名与互动 | 原生连续文末，没有就省略 |
