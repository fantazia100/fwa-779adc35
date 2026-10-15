const $=s=>document.querySelector(s);
const PIL={T:'אנימציות טקסט',X:'מעברים',M:'מושן גרפיקס'};
const SAMPLE={T:'פנטזיה',X:'',M:''};
const chars=t=>[...t].map((c,i)=>`<span class="c" style="animation-delay:${(i*0.08).toFixed(2)}s">${c}</span>`).join('');
const rnd=(n,f)=>Array.from({length:n},(_,i)=>f(i)).join('');
const TROV={'tr-leak':'leak','tr-burn':'burn','tr-flare':'flare','tr-smoke':'smoke','tr-static':'static','tr-lines':'lines','tr-shape':'shape','tr-stripes':'stripes','tr-title':'title','tr-splash':'splash','tr-logo':'shape','tr-boxes':'stripes','tr-brush':'stripes'};
const TRK={'tr-slide':['xslide','xslideA'],'tr-whip':['xwhip','xslideA'],'tr-zoom':['xzoom','xzoomA'],'tr-zoomblur':['xzoom','xzoomA'],'tr-zoomout':['xzoomout'],'tr-spin':['xspin'],'tr-shake':['xshake'],'tr-stretch':['xstretch'],'tr-match':['xcircle'],'tr-split':['xsplit'],'tr-grid':['xpixel'],'tr-cube':['xcube','xcubeA'],'tr-flip':['xflip','xflipA'],'tr-page':['xdiss','xpage'],'tr-doors':['xsplit'],'tr-circle':['xcircle'],'tr-wipe':['xwipe'],'tr-diamond':['xdiamond'],'tr-morph':['xwindow'],'tr-ink':['xink'],'tr-liquid':['xliquid'],'tr-tear':['xtear'],'tr-flash':['xflash'],'tr-dissolve':['xdiss'],'tr-dip':['xdip','xdipA'],'tr-glitch':['xglitch'],'tr-pixel':['xpixel'],'tr-chroma':['xchroma'],'tr-blinds':['xwipe'],'tr-fold':['xroll'],'tr-letter':['xzoom','xzoomA'],'tr-roll':['xroll'],'tr-window':['xwindow']};
function demo(it){
 const d=it.demo,t='פנטזיה';
 if(d.startsWith('tr-')){const k=TRK[d]||['xwipe'];const ov=TROV[d];
  return `<div class="demo" style="--tb:${k[0]};--ta:${k[1]||'none'}"><div class="tr a" ${ov&&d!=='tr-page'?'':''}>סצנה א</div><div class="tr b" style="${ov?'animation:xdiss 3s infinite steps(1)':''}">סצנה ב</div>${ov?`<div class="ov ${ov}">${ov=='title'?'אקשן!':''}</div>`:''}</div>`;}
 const T={kinetic:`<div>${['זה','הרגע','שלך'].map((w,i)=>`<span class="c" style="animation-delay:${i*.3}s;margin:0 6px">${w}</span>`).join('')}</div>`,
 mask:`<span class="in"><span>${t}</span></span>`,wipe:`<span class="t"><span>${t}</span></span>`,line:`<span>${t}</span><i></i>`,
 chars:chars(t),wiggle:chars(t),wave:chars(t),fall:chars(t),flip:chars(t),stretch:chars(t),
 random:[...t].map(c=>`<span class="c" style="animation-delay:${(Math.random()*.8).toFixed(2)}s">${c}</span>`).join(''),
 type:`<span>שלום עולם</span>`,terminal:`<span>&gt; render --he</span>`,scramble:`<span id="sc" data-final="פנטזיה">פנטזיה</span>`,
 glitch:`<span data-t="${t}">${t}</span>`,neondraw:`<svg viewBox="0 0 200 60" class="full"><text x="100" y="45" text-anchor="middle" font-size="44" font-weight="800">${t}</text></svg>`,
 morph:`<span>חלום</span><span>מציאות</span>`,lines:`<span>שורה ראשונה</span><span style="animation-delay:.3s">שורה שנייה</span><span style="animation-delay:.6s">שורה שלישית</span>`,
 swap:`<div>אני <span class="w">שחקנית</span></div>`,stack:rnd(4,i=>`<span style="animation-delay:${i*.15}s">${t}</span>`),
 marquee:`<span>${(t+' ✦ ').repeat(8)}</span>`,count:`<span class="cnt" data-to="0" data-from="10">10</span>`,counter:`<span class="cnt" data-to="1000" data-from="0">0</span>`,
 rtl:`<b>מימין ← לשמאל</b><span>Paragraph Direction: RTL</span>`,niqqud:`<span>שָׁלוֹם</span>`,bilingual:`<span>הפקות פנטזיה</span><i>Fantazia Productions</i>`,
 badge:`<span>חדש!</span>`,brut:`<span>צעקה</span>`,swiss:`<span>01 / עיצוב</span>`,
 shapes:'<i></i><i style="animation-delay:.15s"></i><i style="animation-delay:.3s"></i>',
 burst:rnd(12,i=>`<i style="transform:rotate(${i*30}deg)"></i>`),ripple:rnd(3,i=>`<i style="animation-delay:${i*.8}s"></i>`),
 spiral:rnd(8,i=>`<i style="width:${20+i*14}px;height:${20+i*14}px;animation-delay:-${i*.3}s"></i>`),orbit:'<i></i><i style="width:60px;height:60px;animation-duration:2s"></i>',
 morphshape:'<i></i>',paper:rnd(3,i=>`<i style="bottom:${-20+i*25}px;background:${['#c2276a','#ff5c9d','#d4af37'][i]};animation-delay:-${i}s"></i>`),
 iso:'<i></i><i style="animation-delay:.5s;background:#d4af37"></i>',dots:rnd(36,i=>`<i style="animation-delay:${(i%12)*.1}s"></i>`),
 bars:rnd(6,i=>`<i style="height:${30+((i*37)%90)}px;animation-delay:${i*.1}s"></i>`),eq:rnd(9,i=>`<i style="height:80px;animation-delay:${(i*.13)%0.5}s"></i>`),
 progress:'<i><b></b></i>',particles:rnd(25,i=>`<i style="left:${Math.random()*100}%;top:${30+Math.random()*40}%;width:4px;height:4px;animation-delay:-${Math.random()*4}s"></i>`),
 bokeh:rnd(12,i=>`<i style="left:${Math.random()*100}%;top:40%;width:${20+Math.random()*30}px;height:${20+Math.random()*30}px;animation-delay:-${Math.random()*4}s"></i>`),
 stars:rnd(30,i=>`<i style="width:3px;height:3px;--x:${(Math.random()-.5)*300}px;--y:${(Math.random()-.5)*150}px;animation-delay:-${Math.random()*2}s"></i>`),
 sparkle:rnd(10,i=>`<i style="left:${Math.random()*90}%;top:${Math.random()*80}%;animation-delay:-${Math.random()*1.5}s"></i>`),
 confetti:rnd(25,i=>`<i style="left:${Math.random()*100}%;width:6px;height:10px;background:${['#ff5c9d','#d4af37','#fff','#c2276a'][i%4]};animation-delay:-${Math.random()*3}s"></i>`),
 grid:'<i></i>',loop:'<i></i>',spinner:'<i></i>',blob:'<i></i>',noise:'',gradient:'<span>רקע</span>',
 wavelines:`<svg viewBox="0 0 200 60" class="full">${rnd(3,i=>`<path d="M0 ${20+i*10} Q25 ${i*10} 50 ${20+i*10} T100 ${20+i*10} T150 ${20+i*10} T200 ${20+i*10}"/>`)}</svg>`,
 subscribe:'<span class="btn">הירשמו 🔔</span>',cta:'<span class="btn">לחצו כאן</span>',notify:'<div class="card">🔔 הודעה חדשה מפנטזיה</div>',chat:'<div class="card">היי! ראית? 😍</div>',
 card:'<div class="card"><b></b>חנה סויסה</div>',cursor:'<span class="btn" style="background:#333">כפתור</span><i></i>',phone:'<i></i>',
 lower:'<div class="lt">חנה סויסה<small>שחקנית ובמאית</small></div>',lower2:'<div class="lt">חנה סויסה<small style="color:#fff">הפקות פנטזיה</small></div>',
 ticker:`<div class="tk"><span>${'מבזק: הפקה חדשה עולה בקרוב ✦ '.repeat(4)}</span></div>`,pin:'<i></i>',magnify:'<span style="font-size:18px">פרט קטן חשוב</span><i></i>',
 sale:'<i>50%-</i>',checklist:'<div>✔ רעיון</div><div style="animation-delay:.3s">✔ תסריט</div><div style="animation-delay:.6s">✔ צילום</div>',
 endcard:'<i></i><i style="animation-delay:.2s"></i>',frame:'<i></i><span style="font-size:16px">וידאיו</span>',heart:'<i>♥</i>',logo:'<i>פ</i>',
 trim:'<svg viewBox="0 0 200 80" class="full m-svg"><path d="M20 60 L60 20 L100 60 L140 20 L180 60"/><circle class="g" cx="100" cy="40" r="25"/></svg>',
 icon:'<svg viewBox="0 0 100 80" class="full m-svg"><path d="M30 60 L30 30 L50 15 L70 30 L70 60 Z"/><path class="g" d="M45 60 L45 45 L55 45 L55 60"/></svg>',
 check:'<svg viewBox="0 0 100 80" class="full m-svg"><circle cx="50" cy="40" r="30"/><path class="g" d="M35 40 L46 51 L66 30"/></svg>',
 pie:'<svg viewBox="0 0 100 80" class="full m-svg"><circle cx="50" cy="40" r="28" style="stroke-width:12;stroke-dasharray:176"/></svg>',
 linegraph:'<svg viewBox="0 0 200 80" class="full m-svg"><polyline points="10,70 50,50 90,58 130,25 190,10"/></svg>',
 timeline:'<svg viewBox="0 0 200 60" class="full m-svg"><line x1="10" y1="30" x2="190" y2="30"/><circle class="g" cx="40" cy="30" r="6"/><circle class="g" cx="100" cy="30" r="6"/><circle class="g" cx="160" cy="30" r="6"/></svg>',
 route:'<svg viewBox="0 0 200 80" class="full m-svg"><path d="M20 60 C60 0 120 90 180 20" style="stroke-dasharray:6 6;animation:wl 1s linear infinite"/><circle class="g" cx="20" cy="60" r="5"/><circle class="g" cx="180" cy="20" r="5"/></svg>',
 connect:'<svg viewBox="0 0 200 80" class="full m-svg"><path d="M20 20 L80 60 L130 15 L180 55 M80 60 L180 55"/>'+[[20,20],[80,60],[130,15],[180,55]].map(p=>`<circle class="g" cx="${p[0]}" cy="${p[1]}" r="4"/>`).join('')+'</svg>',
 flow:'<svg viewBox="0 0 200 60" class="full m-svg"><path d="M10 20h40v20H10z M80 20h40v20H80z M150 20h40v20h-40z"/><path class="g" d="M50 30h30 M120 30h30"/></svg>',
 circlehl:'<span style="font-size:22px">זה <b style="position:relative">חשוב<svg viewBox="0 0 100 50" style="position:absolute;inset:-12px -16px;width:calc(100% + 32px);height:calc(100% + 24px)" class="m-svg"><ellipse cx="50" cy="25" rx="46" ry="21" style="fill:none;stroke:#d4af37;stroke-width:3;stroke-dasharray:400;animation:dr 3s infinite"/></svg></b></span>',
 arrow:'<svg viewBox="0 0 100 60" class="full m-svg" style="animation:wv 1s infinite"><path d="M80 30 H20 M35 15 L20 30 L35 45"/></svg>'};
 Object.assign(T,{'nf-clean':`<div>${['פשוט','ונקי'].map((w,i)=>`<span class="c" style="animation-delay:${i*.35}s;margin:0 6px">${w}</span>`).join('')}</div>`,
 'nf-bold':'<span>עכשיו</span><i></i>','nf-play':[...'פנטזיה'].map((c,i)=>`<span class="c" style="color:${['#ff5c9d','#ffd23f','#3ddc97','#4cc9f0','#b388ff','#ff8c42'][i%6]};animation-delay:${i*.1}s">${c}</span>`).join(''),
 'nf-mat':'<span>חומר</span>','nf-exp':'<span>ניסוי</span>','nf-id':'<span class="a">פנ</span><span class="b">טזיה</span>','nf-grad':'<span>תל אביב</span>',
 'nx-spin':'<div class="sa">סצנה א</div><div class="sb">סצנה ב</div>','nx-punch':'<div class="sa">סצנה א<i></i></div><div class="sb">סצנה ב</div>',
 'nx-obj':'<div class="sa">סצנה א</div><div class="sb">סצנה ב</div><i></i>','nx-film':'<div class="sa">סצנה א</div><div class="sb">סצנה ב</div><i></i>',
 'nx-stack':'<div class="sa">סצנה א</div><div class="sb">סצנה ב</div><i></i><i></i><i></i>',
 'nm-pink':'<i></i><i></i><i></i><b>✦</b>','nm-loop':rnd(6,i=>`<i style="transform:rotate(${i*60}deg) translateY(-40px);background:${['#ff5c9d','#ffd23f','#3ddc97','#4cc9f0','#b388ff','#ff8c42'][i]}"></i>`),
 'nm-bts':'<i class="w"></i><i class="f"></i><b></b>','nm-fun':'<i><b></b></i><s></s>','nm-rig':'<i></i><i></i><i></i>',
 'nm-steps':rnd(3,i=>`<div style="animation-delay:${i*.5}s"><b>${i+1}</b> שלב ${['ראשון','שני','שלישי'][i]}</div>`),
 'nm-ease':'<svg viewBox="0 0 120 80" class="full m-svg"><path d="M10 70 C60 70 60 10 110 10"/></svg><i></i>','nm-princ':'<i></i><s></s>',
 'nm-tip':'<div class="card"><b>#7</b> שמרו על easing חלק</div>','nm-tpl':rnd(6,i=>`<i style="animation-delay:${i*.2}s"></i>`),
 'nm-orbs':'<i></i><i></i><i></i><span>רקע</span>','nm-stick':['😍','⭐','חדש!'].map((s,i)=>`<i style="animation-delay:${i*.3}s">${s}</i>`).join('')});
 let inner=T[d]??`<span>${t}</span>`;
 return `<div class="demo ${it.p=='M'||['trim','icon','check','pie','linegraph','timeline','route','connect','flow','arrow'].includes(d)?'m-'+d:'k-'+d}">${inner}</div>`;
}
const BASE=`פרמטרים (משתנים ברורים בראש הקוד):
- TEXT = "[הטקסט שלי]"  SUBTEXT = "[טקסט משני]"
- COLORS = { main:"[#c2276a]", accent:"[#ff5c9d]", gold:"[#d4af37]", bg:"[#0b0709]" }
- FONT = "[Heebo / Rubik / Secular One / Frank Ruhl Libre]" (טען מ-Google Fonts)
- DURATION = [6] שניות  ASPECT = "[16:9 / 9:16 / 1:1]" (1920x1080 / 1080x1920 / 1080x1080)
עברית RTL: dir="rtl" ו-lang="he" על הבמה; כשמפצלים לאותיות השתמש ב-Array.from (לא split("")) כדי לשמור ניקוד; האנימציה לפי אות או מילה מתחילה מימין; מספרים ואנגלית עטופים ב-<bdi>.`;
const OUT=`פורמט פלט: קובץ HTML אחד עצמאי (HTML+CSS+JS, GSAP מ-CDN או Canvas) שרץ כ-Artifact. במה בגודל ה-ASPECT שמותאמת לחלון (scale), רקע COLORS.bg, ולופ אוטומטי.
הוסף פאנל קטן: כפתור "נגן מחדש", כפתור "הקלט וידאיו" שמשתמש ב-canvas.captureStream + MediaRecorder ומוריד קובץ webm (אם הבמה DOM, השתמש ב-Canvas לציור או הסבר לי להקליט מסך), ושדות לעריכת TEXT וצבעים בזמן אמת.
בסוף התשובה: 3 שורות בעברית פשוטה איך משנים טקסט, צבע ומהירות.`;
function prompts(it){
 const h=`אתה מעצב מושן ומפתח קריאייטיב. בנה בעצמך בקוד אנימציה בסגנון "${it.en}" (${it.he}).
הרעיון: ${it.desc}
השראה מטכניקות AE (רק כרפרנס חזותי, אני לא פותחת After Effects): ${it.tools}.`;
 return {
 'בסיסי':`${h}\n\n${BASE}\n\n${OUT}`,
 'מתקדם':`${h}\nגרסה מתקדמת: הוסף ${it.vars}, Motion Blur מדומה (טשטוש כיווני לפי מהירות), easing "פרימיום" (power3/expo.out, overshoot עדין במקום המתאים), גרעין פילם עדין, ועומק עם פרלקסה.\nבנה Timeline אחד של GSAP עם labels: intro / hold / outro, וחשוף אובייקט CONFIG עם כל ערכי התזמון.\n\n${BASE}\n\n${OUT}\nבנוסף: גרסת Remotion (React, קומפוננטה אחת עם props לכל הפרמטרים, useCurrentFrame + interpolate/spring) כדי שאוכל לרנדר MP4 עם npx remotion render, כולל הוראות הרצה קצרות.`,
 'רצף':`${h}\nבנה רצף של 3 סצנות ב-${'${DURATION}'} שניות: סצנה 1 בסגנון ${it.he}, מעבר [סגנון מעבר, למשל וויפ עיגול / וויפ פאן], סצנה 2 [סגנון שני מהספרייה], ובסוף סגנון סיום [לוגו / קריאה לפעולה].\nכל סצנה פונקציה נפרדת שמחזירה Timeline, ו-master timeline שמחבר אותן; טקסט נפרד לכל סצנה (TEXT_1, TEXT_2, TEXT_3). אפשרות לסנכרן לפעימות: BPM = [120], כל כניסה על פעימה.\n\n${BASE}\n\n${OUT}`};}
function prompt(it){return prompts(it)['בסיסי']}
const FAV=new Set(JSON.parse(localStorage.getItem('aeFav')||'[]'));
function card(it){return `<article class="card" data-id="${it.id}">
 ${demo(it)}
 <div class="cb"><div class="tags"><span class="tg p${it.p}">${PIL[it.p]}</span><span class="tg">${it.cat}</span><span class="tg">${it.mood}</span><span class="tg d">${'●'.repeat(it.diff)}${'○'.repeat(3-it.diff)}</span></div>
 <button class="fav ${FAV.has(it.id)?'on':''}" title="מועדף">★</button>
 <h3>${it.he}</h3><div class="en">${it.en}</div>${it.credit?`<div class="credit">בהשראת <bdi>${it.credit}</bdi></div><div class="refrow"><a class="ref" href="https://www.instagram.com/${it.credit.slice(1)}/" target="_blank" rel="noopener">רפרנס ↗</a></div><video class="vid" src="videos/${it.demo}.mp4#t=1.2" muted loop playsinline preload="metadata"></video>`:''}<p>${it.desc}</p>
 <div class="tools"><b>כלים ב-AE:</b> ${it.tools}</div><div class="vars"><b>וריאציות:</b> ${it.vars}</div>
 <details><summary>3 פרומפטים ל-Claude (בסיסי / מתקדם / רצף)</summary>${Object.entries(prompts(it)).map(([k,v])=>`<div class="pv"><b>${k}</b><pre>${v.replace(/</g,'&lt;')}</pre><button class="cpy2">העתק ${k}</button></div>`).join('')}</details>
 <button class="copy">העתק פרומפט בסיסי</button></div></article>`;}
let st={p:'all',cat:'all',mood:'all',diff:'all',q:'',fav:false};
function render(){const L=ITEMS.filter(i=>(st.p=='all'||i.p==st.p)&&(st.cat=='all'||i.cat==st.cat)&&(st.mood=='all'||i.mood==st.mood)&&(st.diff=='all'||i.diff==st.diff)&&(!st.fav||FAV.has(i.id))&&(!st.q||(i.he+i.en+i.desc+i.tools+i.cat+(i.credit||'')).toLowerCase().includes(st.q.toLowerCase())));
 $('#grid').innerHTML=L.map(card).join('')||'<p class="empty">לא נמצאו תוצאות</p>';$('#count').textContent=L.length+' מתוך '+ITEMS.length;scr();cnt();}
function fillCats(){const c=[...new Set(ITEMS.filter(i=>st.p=='all'||i.p==st.p).map(i=>i.cat))];$('#cat').innerHTML='<option value="all">כל הקטגוריות</option>'+c.map(x=>`<option>${x}</option>`).join('');}
function scr(){document.querySelectorAll('#sc').forEach(el=>{const f=el.dataset.final,A='אבגדהוזחטיכלמנסעפצקרשת';let n=0;clearInterval(el._t);el._t=setInterval(()=>{n=(n+1)%40;el.textContent=[...f].map((c,i)=>n>i*4+8?c:A[Math.random()*22|0]).join('')},70)})}
function cnt(){document.querySelectorAll('.cnt').forEach(el=>{const a=+el.dataset.from,b=+el.dataset.to;let s=0;clearInterval(el._t);el._t=setInterval(()=>{s=(s+1)%60;const k=Math.min(1,s/40),e=1-Math.pow(1-k,3);el.textContent=Math.round(a+(b-a)*e).toLocaleString('he-IL')},50)})}
document.addEventListener('click',e=>{const c=e.target.closest('.card');
 if(e.target.matches('.copy')){const it=ITEMS[c.dataset.id];navigator.clipboard?.writeText(prompt(it)).catch(()=>{});const r=document.createRange();r.selectNodeContents(c.querySelector('pre'));if(!navigator.clipboard){getSelection().removeAllRanges();getSelection().addRange(r);document.execCommand('copy')}e.target.textContent='הועתק ✓';setTimeout(()=>e.target.textContent='העתק פרומפט בסיסי',1500)}
 if(e.target.matches('.fav')){const id=+c.dataset.id;FAV.has(id)?FAV.delete(id):FAV.add(id);localStorage.setItem('aeFav',JSON.stringify([...FAV]));e.target.classList.toggle('on')}
 if(e.target.matches('.pill')){document.querySelectorAll('.pill').forEach(p=>p.classList.remove('on'));e.target.classList.add('on');st.p=e.target.dataset.p;st.cat='all';fillCats();render()}
 if(e.target.matches('.cpy2')){const o=e.target.textContent;navigator.clipboard?.writeText(e.target.previousElementSibling.textContent||e.target.previousElementSibling.value).catch(()=>{});e.target.textContent='הועתק ✓';setTimeout(()=>e.target.textContent=o,1500)}});
['cat','mood','diff'].forEach(k=>$('#'+k).onchange=e=>{st[k]=k=='diff'&&e.target.value!='all'?+e.target.value:e.target.value;render()});
$('#q').oninput=e=>{st.q=e.target.value;render()};$('#favOnly').onchange=e=>{st.fav=e.target.checked;render()};
$('#mood').innerHTML='<option value="all">כל המצבים</option>'+[...new Set(ITEMS.map(i=>i.mood))].map(x=>`<option>${x}</option>`).join('');
['T','X','M'].forEach(p=>document.querySelector(`[data-p="${p}"]`).textContent+=` (${ITEMS.filter(i=>i.p==p).length})`);
$('#tot').textContent=ITEMS.length;$('#ncat').textContent=new Set(ITEMS.map(i=>i.p+i.cat)).size;
fillCats();render();

document.addEventListener('mouseover',e=>{const v=e.target.closest('.card')?.querySelector('.vid');if(v&&v.paused)v.play().catch(()=>{})});
document.addEventListener('mouseout',e=>{const c=e.target.closest('.card');if(c&&!c.contains(e.relatedTarget)){const v=c.querySelector('.vid');v&&v.pause()}});
document.addEventListener('click',e=>{if(e.target.matches('.vid')){e.target.paused?e.target.play():e.target.pause()}});
