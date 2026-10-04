import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';

// Derive this limited example from the existing candidate, without changing V1
// or registering a new theme. Only local chapter/highlight/media styles survive.
const candidate=path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const workspace=path.resolve(candidate, '../../..');
const skill=path.join(workspace,'.codex/skills/gzh-design-skill');
const output=path.join(candidate,'原生正文示例');
fs.mkdirSync(output,{recursive:true});
const read=name=>fs.readFileSync(path.join(candidate,name),'utf8');
const write=(name,html)=>fs.writeFileSync(path.join(output,name),html);
function native(html) {
  html=html.replace(/^<section style="[^"]*">/,'<section style="margin:0;width:100%;box-sizing:border-box;overflow-wrap:break-word;">');
  html=html.replaceAll('margin:0 0 19px;font-size:17px;line-height:1.95;color:#272D35;','margin:0 0 18px;');
  // Keep serif chapter headings locally; no font is imposed on ordinary text.
  html=html.replaceAll('font-size:26px;','font-size:24px;')
    .replaceAll('font-size:22px;line-height:1.25;','font-size:18px;line-height:1.25;')
    .replaceAll('border-top:2px solid #2659DE;padding-top:16px;margin:34px 0 19px;','border-top:1px solid #2659DE;padding-top:13px;margin:32px 0 18px;');
  html=html.replaceAll("font-family:Georgia,'Songti SC',SimSun,serif;font-size:30px;line-height:1.5;font-weight:700;",'font-size:24px;line-height:1.5;font-weight:700;');
  html=html.replaceAll("font-family:Georgia,'Songti SC',SimSun,serif;font-size:19px;line-height:1.65;",'');
  html=html.replaceAll("font-family:Georgia,'Songti SC',SimSun,serif;font-size:20px;line-height:1.85;text-align:center;margin:0;color:#3F4D63;",'margin:0;');
  html=html.replaceAll('padding:17px 0;margin:20px 0 24px;','margin:18px 0 24px;');
  html=html.replaceAll('font-size:14px;color:#7B8491;line-height:1.85;margin:0;','margin:0;');
  html=html.replaceAll('line-height:33px;','line-height:inherit;');
  return html;
}
function highlight(html,phrase) {
  if(!html.includes(phrase)) throw Error(`Missing original phrase: ${phrase}`);
  return html.replace(phrase,`</span><span style="font-weight:600;background:linear-gradient(transparent 64%,#FFF1BE 64%);"><span leaf="">${phrase}</span></span><span leaf="">`);
}
let demo=native(read('图文示范_正文.html'));
demo=highlight(demo,'两者共享同一组左右边界');
demo=highlight(demo,'多张图片按原顺序纵向展示');
const words=['Image','Ratio','Sequence'];
let index=0;
demo=demo.replace(/<section style="border-top:1px solid #2659DE;[^"]*">/g,match=>match+`<p style="margin:0 0 8px;font-family:Georgia,'Times New Roman',serif;font-size:18px;line-height:1.25;font-style:italic;color:#2659DE;"><span leaf="">${words[index++]}</span></p>`);
if(index!==3) throw Error('Expected three existing media chapters');
write('图文示例_正文.html',demo);
write('图文示例_源稿.md',read('图文示范_源稿.md'));
// The user explicitly changed the identity for this example. Keep the shared
// article fixture intact, and save the corresponding local source for checking.
const identity=s=>s.replaceAll('我是词员外，','我是凯冰，');
write('完整文章_源稿.md',identity(fs.readFileSync(path.join(skill,'assets/sample-article.md'),'utf8')));
write('完整文章_正文.html',identity(native(read('凯冰_紧凑承接_正文.html'))));
for(const [body,preview,link,label] of [
  ['图文示例_正文.html','图文示例_预览.html','完整文章_预览.html','查看完整文章样张'],
  ['完整文章_正文.html','完整文章_预览.html','图文示例_预览.html','查看图文示例'],
]) {
  const result=spawnSync('python3',[path.join(skill,'scripts/wrap_preview.py'),path.join(output,body),path.join(output,preview)],{encoding:'utf8'});
  if(result.status!==0) throw Error(result.stderr||result.stdout);
  let html=fs.readFileSync(path.join(output,preview),'utf8');
  html=html.replaceAll('#059669','#2659DE').replaceAll('#047857','#204BC0')
    .replace('box-shadow:0 3px 10px rgba(5,150,105,.28);','')
    .replace('border-radius:9px;padding:10px 20px;font-size:14px;font-weight:700;','border-radius:6px;padding:10px 14px;font-size:13px;font-weight:600;')
    .replace('.gzh-stage{max-width:700px;margin:78px auto 64px;padding:0 8px;}',
      '.gzh-stage{max-width:390px;box-sizing:border-box;margin:110px auto 48px;padding:28px 22px;background:#fff;}\n  /* Reading environment simulation, outside the copyable article. */\n  #gzh-content{font-size:16px;line-height:1.8;color:#333;}')
    .replace('👇 下方是排版效果 · 点右侧 <b>复制</b> 直接粘到公众号','凯冰 · 原生正文示例<br>阅读环境模拟，非微信实机')
    .replace('📋 复制到公众号','复制示例排版')
    .replace('<div class="gzh-toast" id="gzhToast"></div>',`<div class="gzh-toast" id="gzhToast"></div><section style="margin:72px auto -92px;text-align:center;font-size:12px;line-height:1.7;color:#7B8491;"><a href="${link}" style="color:#2659DE;text-decoration:none;">${label}</a></section>`);
  write(preview,html);
}
console.log(JSON.stringify({output,scope:'example-only',bodyTypography:'inherited',bodyBackground:'unset',images:5}));
