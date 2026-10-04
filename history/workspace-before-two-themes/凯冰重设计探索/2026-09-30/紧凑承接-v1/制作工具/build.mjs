import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';

const out = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const workspace = path.resolve(out, '../../..');
const skill = path.join(workspace, '.codex/skills/gzh-design-skill');
const C = {paper:'#FFFFFF',ink:'#272D35',blue:'#2659DE',muted:'#7B8491',line:'#DEE5EF',wash:'#F4F7FB',warm:'#FFF1BE',red:'#B65B4E'};
const serif = "Georgia,'Songti SC',SimSun,serif";
const sans = "-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif";
const esc = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const leaf = s => `<span leaf="">${esc(s)}</span>`;
const box = (s,css='') => `<section style="${css}">${s}</section>`;
const p = (s,css='') => `<p style="margin:0 0 19px;font-size:17px;line-height:1.95;color:${C.ink};${css}">${s}</p>`;
const styled = (s,css) => `<span style="${css}">${leaf(s)}</span>`;

function inline(s) {
  const rx = /(\*\*([^*]+)\*\*|==([^=]+)==|<u>(.*?)<\/u>|~~(.*?)~~|`([^`]+)`)/g;
  let html='',last=0,m;
  while((m=rx.exec(s))) {
    html += leaf(s.slice(last,m.index));
    const value=m[2]??m[3]??m[4]??m[5]??m[6];
    const css=m[2]?'font-weight:650;':m[3]?`font-weight:600;background:linear-gradient(transparent 64%,${C.warm} 64%);`:m[4]?`text-decoration:underline;text-decoration-color:${C.blue};text-underline-offset:3px;`:m[5]?'text-decoration:line-through;':`font-family:Consolas,monospace;font-size:14px;background:${C.wash};padding:1px 4px;border-radius:3px;`;
    html += styled(value,css); last=rx.lastIndex;
  }
  return html+leaf(s.slice(last));
}

// The component functions are the candidate's single visual source. Catalogue,
// theme draft, the faithful article and the media demonstration use them alike.
const container = s => box(s,`margin:0 auto;max-width:677px;box-sizing:border-box;padding:30px 22px 32px;background:${C.paper};font-family:${sans};color:${C.ink};overflow-wrap:break-word;`);
const rule = () => box('<span leaf=""><br></span>',`height:1px;line-height:0;font-size:0;background:${C.line};margin:28px 0;`);
function title(s) {
  const cut=s.indexOf('，');
  if(s.length>22&&cut>0) return box(p(inline(s.slice(0,cut+1)),`font-family:${serif};font-size:19px;line-height:1.65;margin:0 0 7px;`)+p(inline(s.slice(cut+1)),`font-family:${serif};font-size:30px;line-height:1.5;font-weight:700;margin:0;`),'margin:0 0 25px;');
  return p(inline(s),`font-family:${serif};font-size:30px;line-height:1.5;font-weight:700;margin:0 0 25px;`);
}
function chapterText(s) {
  const comma=s.lastIndexOf('，');
  const tail=s.slice(comma+1);
  return comma>0&&tail.length<=6 ? inline(s.slice(0,comma+1))+`<span style="white-space:nowrap;">${inline(tail)}</span>` : inline(s);
}
const chapter = (s,word='') => box((word?p(leaf(word),`font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:22px;line-height:1.25;color:${C.blue};margin:0 0 9px;`):'')+p(chapterText(s),`font-family:${serif};font-size:26px;font-weight:600;line-height:1.5;margin:0;`),`border-top:2px solid ${C.blue};padding-top:16px;margin:34px 0 19px;`);
const sub = s => p(inline(s),`font-family:${serif};font-size:21px;line-height:1.6;font-weight:600;margin:26px 0 12px;`);
const quote = s => box(p(inline(s),`font-family:${serif};font-size:20px;line-height:1.85;text-align:center;margin:0;color:#3F4D63;`),'padding:17px 0;margin:20px 0 24px;');
const notice = (s,type='') => box((type?p(leaf(type),`font-size:12px;line-height:1.6;font-weight:600;color:${C.blue};margin:0 0 6px;`):'')+p(inline(s),'font-size:15px;line-height:1.85;margin:0;'),`border-left:2px solid ${C.line};padding:2px 0 2px 14px;margin:20px 0;`);
const list = (items,ordered=false) => box(items.map((s,i)=>box(styled(ordered?`${i+1}.`:'•',`font-size:15px;color:${C.blue};display:inline-block;vertical-align:top;width:25px;line-height:33px;`)+box(p(inline(s),'margin:0;'),'display:inline-block;vertical-align:top;width:calc(100% - 27px);'),'margin:0 0 8px;')).join(''),'margin:0 0 21px;');

// User-directed exception to the common library's no-upscaling default:
// all article images occupy the full content width, with one consistent radius.
// Original aspect ratio and source are retained; no object-fit or fixed height.
const image = (src,caption='') => box(box(`<span leaf=""><img src="${esc(src)}" alt="${esc(caption)}" style="width:100%;max-width:100%;height:auto;display:block;margin:0;border-radius:6px;"></span>`,'width:100%;border-radius:6px;overflow:hidden;margin:0;')+(caption?p(leaf(caption),`font-size:12px;line-height:1.7;color:${C.muted};text-align:center;margin:8px 0 0;`):''),'margin:0 0 24px;width:100%;');
const code = (lines,language='',dark=false) => box((language?p(leaf(language),`font-family:Consolas,monospace;font-size:11px;line-height:1.5;color:${dark?'#B9C7E2':C.muted};margin:0 0 8px;`):'')+lines.map(s=>p(leaf(s.replaceAll('\t','　　').replace(/^( +)/,x=>'　'.repeat(Math.ceil(x.length/2)))),`font-family:Consolas,monospace;font-size:13px;line-height:1.65;color:${dark?'#EFF4FC':C.ink};margin:0;overflow-wrap:anywhere;`)).join(''),`padding:14px;border-radius:6px;background:${dark?'#283347':C.wash};margin:20px 0 24px;`);
const mediaPlaceholder = label => box(p(leaf(label),`font-size:13px;color:${C.muted};text-align:center;line-height:1.8;margin:0;`),`padding:36px 14px;border:1px dashed ${C.line};border-radius:6px;background:${C.wash};margin:22px 0 24px;`);
const table = () => `<table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.8;"><tbody><tr><th style="text-align:left;padding:10px 8px;background:${C.wash};">${leaf('字段占位')}</th><th style="text-align:left;padding:10px 8px;background:${C.wash};">${leaf('说明占位')}</th></tr><tr><td style="padding:10px 8px;border-bottom:1px solid ${C.line};">${leaf('维度占位')}</td><td style="padding:10px 8px;border-bottom:1px solid ${C.line};">${leaf('对应内容占位')}</td></tr></tbody></table>`;
const photo='https://placehold.orence.net/1200x750/eaf0f8/647083/png?text=IMG';
const tall='https://placehold.orence.net/1000x1400/f2eee7/7b756d/png?text=IMG';
const screen='https://placehold.orence.net/1400x850/f4f7fb/647083/png?text=IMG';
const gif='https://placehold.orence.net/1200x675/eaf0f8/647083/gif?text=GIF';

function render(md,words=[]) {
  let n=0,body='';
  for(const block of md.trim().split(/\n\s*\n/)) {
    if(block.startsWith('# ')) body+=title(block.slice(2));
    else if(block.startsWith('## ')) body+=chapter(block.slice(3),words[n++]||'');
    else if(block.startsWith('### ')) body+=sub(block.slice(4));
    else if(block.startsWith('> ')) body+=quote(block.replace(/^> ?/gm,''));
    else if(/^!\[/.test(block)) for(const m of block.matchAll(/!\[([^\]]*)\]\(([^)]+)\)/g)) body+=image(m[2],m[1]);
    else if(block.startsWith('- ')) body+=list(block.split('\n').map(s=>s.slice(2)));
    else if(block==='---') body+=rule();
    else if(block.startsWith('我是')) body+=p(inline(block),`font-size:14px;color:${C.muted};line-height:1.85;margin:0;`);
    else body+=p(inline(block));
  }
  return container(body);
}
const source=fs.readFileSync(path.join(skill,'assets/sample-article.md'),'utf8');
fs.writeFileSync(path.join(out,'凯冰_紧凑承接_正文.html'),render(source,['Value','Craft','System','Refine','Grow']));

const mediaSource=`# 图文衔接示范

正文段落占位。此页只演示文字与图片的排版关系，图片为明确标注的占位素材，不是文章真实配图。

## 单图与正文

正文段落占位。图片紧接它所对应的文字，两者共享同一组左右边界。图像保持原比例，四角统一微圆。

![横图占位素材，仅用于排版示范](${photo})

正文段落占位。图后直接接续内容，原文有图注时展示图注，没有图注时不编造。

## 不同比例，同一规则

正文段落占位。竖图不裁成横图，也不设固定高度，宽度与横图保持一致。

![竖图占位素材，仅用于排版示范](${tall})

正文段落占位。截图仍采用同宽与相同圆角，不加独立的浏览器装饰壳，不额外增加画面内边距。

![截图占位素材，仅用于排版示范](${screen})

## 连续图像

正文段落占位。多张图片按原顺序纵向展示，不在手机上缩成两列，不自动收进横滑图集。

![](${photo})

![](${screen})

正文段落占位。连续图片之间使用一致间距，结束后回到同宽正文。
`;
fs.writeFileSync(path.join(out,'图文示范_源稿.md'),mediaSource);
fs.writeFileSync(path.join(out,'图文示范_正文.html'),render(mediaSource));

const blocks=[];
const add=(id,name,html)=>blocks.push({id,name,html});
add('title','左齐文章题名',title('文章主标题占位'));
add('long-title','长题名自然断行',title('文章题名占位，用于检查较长题名的自然断行与阅读顺序'));
add('subtitle','原文副题接续',title('文章主标题占位')+p(leaf('原文副标题占位'),'font-size:15px;color:#7B8491;'));
add('opening','开放式开篇引语',quote('开篇引语占位。仅在原文已有引语时使用，不新增文章观点。'));
add('body','连续阅读段落',p(leaf('正文段落占位。稳定的行宽和行距让文字连续展开，不把每一段都装入卡片。')));
add('long-body','长段落阅读场',p(leaf('正文段落占位。用于观察较长段落的行长、行距和自然换行。图片和正文共用左右边界，标题只负责帮助读者定位内容，重点标记只在原文有需要时出现。段落可以有不同长度，但文字的基础规格保持一致。')));
add('strong','原文重点字重',p(inline('正文中的**原文重点占位**，只改变字重。')));
add('highlight','原文重点轻标',p(inline('正文中的==原文重点占位==，不整段铺色。')));
add('underline','原文下划线',p(inline('正文中的<u>原文标记占位</u>，保留标记范围。')));
add('strike','原文删除标记',p(inline('正文中的~~原文删除标记占位~~，保留原意。')));
add('inline-code','行内代码',p(inline('正文中的 `code` 使用等宽字体。')));
add('start','起点紧凑章首',chapter('起点章节标题占位','Start'));
add('value','价值紧凑章首',chapter('价值章节标题占位','Value'));
add('method','方法紧凑章首',chapter('方法章节标题占位','Method'));
add('system','结构紧凑章首',chapter('结构章节标题占位','System'));
add('change','变化紧凑章首',chapter('变化章节标题占位','Change'));
add('closing','收束紧凑章首',chapter('收束章节标题占位','Now'));
add('plain-chapter','纯中文章首',chapter('中文章节标题占位'));
add('sub','无装饰小节标题',sub('小节标题占位'));
add('label','行内信息标签',p(styled('原文标签占位',`color:${C.blue};font-size:13px;font-weight:600;`),'margin:0 0 10px;'));
add('quote','正文居中引语',quote('原文引语占位。使用居中宋体与有限留白，不为每个章节额外制造金句。'));
add('note','补充旁注',notice('补充说明内容占位。'));
add('warning','注意说明',notice('注意事项内容占位。','原文注意标签占位'));
add('success','完成说明',notice('完成状态说明占位。','原文状态标签占位'));
add('information','背景说明',notice('背景信息内容占位。','原文信息标签占位'));
add('unordered','原文无序列表',list(['项目内容占位一','项目内容占位二','项目内容占位三']));
add('ordered','原文有序列表',list(['步骤内容占位一','步骤内容占位二','步骤内容占位三'],true));
add('checklist','原文检查清单',list(['☐ 待确认内容占位','☑ 已完成内容占位']));
add('steps','步骤接续',sub('原文步骤标题占位')+p(leaf('操作说明内容占位，与对应图像或结果保持相邻。')));
add('process','流程顺序',list(['阶段内容占位一','阶段内容占位二','阶段内容占位三'],true));
add('timeline','时间节点',sub('原文时间节点占位')+p(leaf('事件说明内容占位。')));
add('landscape','同宽横图',image(photo,'原文图注占位'));
add('portrait','同宽竖图',image(tall,'原文图注占位'));
add('screenshot','同宽截图',image(screen,'原文图注占位'));
add('gif','同宽动图',image(gif,'原文动图说明占位'));
add('no-caption','无图注图片',image(photo));
add('compare','纵向双图对照',image(photo,'原文前图说明占位')+image(screen,'原文后图说明占位'));
add('gallery','纵向连续图组',image(photo)+image(tall)+image(screen));
add('pending','原文待补图片',mediaPlaceholder('原文待补素材占位'));
add('video','原文待补视频',mediaPlaceholder('原文待补视频占位'));
add('light-code','浅色代码段',code(['// 代码内容占位','const value = input;'],'code'));
add('dark-code','深色代码段',code(['// 代码内容占位','return value;'],'code',true));
add('prompt','原文提示词段',code(['任务目标占位','约束条件占位','输出要求占位'],'Prompt'));
add('supplement','长补充材料',p(leaf('上下滑动查看'),'font-size:12px;color:#7B8491;')+box(Array.from({length:16},(_,i)=>p(leaf(`补充材料内容占位 ${i+1}`),'font-size:14px;margin:0 0 8px;')).join(''),`max-height:260px;overflow-y:auto;padding:14px;background:${C.wash};border-radius:6px;margin:0 0 24px;`));
add('table','真实数据表格',table());
add('metric','原文指标',sub('原文指标标题占位')+p(styled('00%',`font-family:${serif};font-size:24px;color:${C.blue};`))+p(leaf('指标说明内容占位'),'font-size:14px;'));
add('progress','原文进度数据',p(leaf('原文进度说明占位：00%'),'font-size:15px;'));
add('faq','原文问答',sub('原文问题占位')+p(leaf('原文回答内容占位。')));
add('resource','原文资源与联系',sub('原文资源标题占位')+p(leaf('原文资源说明与联系方式占位。'),'font-size:15px;'));
add('related','原文延伸阅读',sub('原文延伸阅读标题占位')+list(['原文关联内容占位一','原文关联内容占位二']));
add('author','原文作者信息',rule()+p(leaf('原文作者介绍占位。'),'font-size:14px;color:#7B8491;margin:0;'));
add('ending','原文结尾',p(leaf('原文结尾内容占位。继续使用完整正文，不自动包装成总结卡。')));
add('cta','原文互动引导',rule()+p(leaf('原文互动引导占位。'),'font-size:14px;color:#7B8491;margin:0;'));
if(blocks.length<45) throw Error('Candidate catalogue is incomplete');
const metadata=`<!-- THEME-NAME: 凯冰·紧凑承接 V1（候选） -->
<!-- THEME-ID: theme-kevinbee-compact -->
<!-- THEME-DESCRIPTION: 内容优先的图文编辑排版，宋体章题与紧凑语义索引，同宽微圆图片 -->
<!-- THEME-COLOR: ${C.blue} -->
<!-- THEME-BACKGROUND-COLOR: ${C.paper} -->
<!-- THEME-TEXT-COLOR: ${C.ink} -->
<!-- THEME-ACCENT-COLOR: ${C.warm} -->
<!-- THEME-DECORATION-COLOR: ${C.line} -->
<!-- THEME-FONT-PREFERENCE: serif -->
<!-- THEME-DESIGN-TECHNIQUE-TAGS: 稳定对齐, 紧凑章首, 同宽图文 -->
<!-- THEME-STYLE-FEATURE-TAGS: 明亮, 有文气, 内容优先 -->
<!-- THEME-SCENE-TAGS: 方法教程, 个人思考, 图文案例 -->
<!-- THEME-RADIUS-PREFERENCE: 图片统一6px -->
<!-- THEME-SHADOW-PREFERENCE: 无 -->
`;
const catalog=metadata+`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>凯冰·紧凑承接 V1 · 组件全览</title></head><body style="margin:0;background:#F1F3F6;">`+container(p(leaf('候选组件全览'),'font-size:14px;color:#7B8491;')+p(leaf('仅供检查整套风格。正文按原文需要选用，不把所有组件放进同一篇文章；图片均为占位素材。'),'font-size:13px;color:#7B8491;')+blocks.map((b,i)=>`<!-- Block: ${b.name} -->`+box(p(leaf(`${String(i+1).padStart(2,'0')} / ${b.name}`),'font-size:12px;color:#7B8491;margin:0 0 16px;')+b.html,`margin:30px 0 0;padding-top:20px;border-top:1px solid ${C.line};`).replace('<section ',`<section id="block-kbc-${b.id}" `)).join('\n'))+'</body></html>';
fs.writeFileSync(path.join(out,'组件全览.html'),catalog);
fs.writeFileSync(path.join(skill,'assets/theme-previews/theme-kevinbee-compact.html'),catalog);
fs.writeFileSync(path.join(out,'组件校验片段.html'),container(blocks.map(b=>b.html).join('\n')));

const essential=blocks.filter(b=>['title','long-title','opening','body','strong','highlight','underline','inline-code','value','system','plain-chapter','sub','quote','note','unordered','ordered','landscape','portrait','screenshot','gif','no-caption','compare','gallery','pending','light-code','prompt','table','author','ending'].includes(b.id));
const draft=`# 凯冰·紧凑承接 V1 — 候选主题草案

状态：制作中的候选，未登记，不改变正式主题路由。结构依据用户选定的“紧凑承接”，不是上一轮的中文主场。

## 设计变量速查表

| 变量 | 值 |
|---|---|
| 纸色 | ${C.paper} |
| 正文 | ${C.ink}，17px／1.95 |
| 主色 | ${C.blue}，只用于章线、语义词及原文必要标记 |
| 正文两侧 | 22px |
| 章题 | 宋体26px／1.5；小样30px收为26px，避免窄屏短题单字尾行，不作为平台字号保证 |
| 语义词 | Georgia斜体22px／1.25 |
| 图片 | width:100%;height:auto;统一6px圆角 |
| 图注 | 12px／1.7，图下8px，原文有才显示 |
| 图前／图后 | 图前由前一段落的19px段距提供；图后24px。图片自身只设下间距，连续图片不依赖外边距折叠 |
| 阴影 | 不使用 |

用户明确要求图片铺满并微圆，因此本候选覆盖通用库“小图不铺满”的默认规则；小源图仍铺至内容宽度，同时交付提醒清晰度风险，不自动改变版式。用户选择的紧凑章题尺度优先于生成器通用24px上限；候选使用26px章题。原题逗号后较短的完整语义段可作为不拆分字组，避免“辐射厚”在窄屏被拆开；不改字，不强制整题单行。文章图像与正文左右边界一致，不是贴到手机物理屏幕边缘。原图比例、顺序、路径保留，不裁切、不加滤镜、不额外配图。多图默认纵向，不自动横滑。

## 各组件完整 HTML

${essential.map(b=>`### ${b.name}\n\n\`\`\`html\n${b.html}\n\`\`\`\n`).join('\n')}

## 完整文章模板骨架

全局白纸容器（22px左右内边距）→原文标题→原文开篇引语（若有）→原文段落→原文章节（紧凑语义词＋宋体章题）→原文小节／列表／图像／代码，严格按源顺序→原文结尾及署名（若有）。没有自动目录、副题、作者卡、CTA或新金句。图像与解释直接相邻，不额外插入色面。

## 文章类型 → 组件组合配方表

| 文章类型 | 核心 | 按原文需要 |
|---|---|---|
| 观点长文 | 章首、正文 | 居中引语、原图 |
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
| > | 居中开放引语，不默认蓝底卡 |
| 图片、GIF | 同宽、原比例、6px圆角；只使用原文图注 |
| 多图 | 保留顺序、同宽纵向，相邻间距24px |
| 代码与Prompt | 通用库紧凑代码语法，主题浅底与6px圆角 |
| 长补充材料 | 只在必要时滚动，正文论证不收进窗口 |
| 原文署名与互动 | 小号连续文末，没有就省略 |
`;
fs.writeFileSync(path.join(out,'主题草案.md'),draft);

function preview(input,output,hint,link,label) {
  const result=spawnSync('python3',[path.join(skill,'scripts/wrap_preview.py'),path.join(out,input),path.join(out,output)],{encoding:'utf8'});
  if(result.status!==0) throw Error(result.stderr||result.stdout);
  const target=path.join(out,output);
  let html=fs.readFileSync(target,'utf8');
  html=html.replaceAll('#059669','#2659DE').replaceAll('#047857','#204BC0')
    .replace('box-shadow:0 3px 10px rgba(5,150,105,.28);','')
    .replace('border-radius:9px;padding:10px 20px;font-size:14px;font-weight:700;','border-radius:6px;padding:10px 14px;font-size:13px;font-weight:600;')
    .replace('.gzh-stage{max-width:700px;margin:78px auto 64px;padding:0 8px;}','.gzh-stage{max-width:390px;margin:90px auto 48px;padding:0;}')
    .replace('👇 下方是排版效果 · 点右侧 <b>复制</b> 直接粘到公众号',`凯冰 · 紧凑承接 V1<br>${hint}`)
    .replace('📋 复制到公众号',label)
    .replace('<div class="gzh-toast" id="gzhToast"></div>',`<div class="gzh-toast" id="gzhToast"></div>\n<section style="margin:70px auto -65px;padding:0 16px;font-size:12px;line-height:1.7;text-align:center;color:#7B8491;"><a style="color:#2659DE;text-decoration:none;" href="${link}">${link.startsWith('图')?'查看图文示范':'返回完整样张'}</a> · <a style="color:#2659DE;text-decoration:none;" href="组件全览.html">组件全览</a></section>`);
  fs.writeFileSync(target,html);
}
preview('凯冰_紧凑承接_正文.html','凯冰_紧凑承接_预览.html','完整原文样张','图文示范_预览.html','复制到公众号');
preview('图文示范_正文.html','图文示范_预览.html','图文示范／占位素材','凯冰_紧凑承接_预览.html','复制示范排版');
console.log(JSON.stringify({out,candidateBlocks:blocks.length,coreComponents:essential.length,articleImages:0,demoImages:5,registered:false}));
