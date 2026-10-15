const MODS={
'איזינג':['תנועה פרימיום: expo.out, משך 1 שנייה','overshoot עדין: back.out(1.4)','קפיצי ומשחקי: elastic.out(1,0.45)','מכני וחד: steps(6), בלי אינטרפולציה','איטי וחלומי: sine.inOut, משך 2.5 שניות','stagger של 0.04 שניות בין אותיות, מימין לשמאל'],
'מצלמה':['זום איטי פנימה של 5% לאורך כל הסצנה (Ken Burns)','פרלקסה: 3 שכבות עומק שזזות במהירויות שונות','רעידת מצלמה עדינה רציפה (noise, 2px)','דולי תלת ממדי עם perspective 1200px וסיבוב Y של 10 מעלות','whip pan עם טשטוש כיווני בכל מעבר','מצלמה מסתובבת סביב הטקסט ב-3D'],
'טקסטורות':['גרעין פילם עדין (canvas noise, אטימות 6%)','קווי סריקה של VHS ורעד צבע','מרקם נייר ממוחזר ברקע','וינייטה כהה בשוליים','זוהר bloom סביב צבעים בהירים','אבק ובוקה זהב מרחף ברקע'],
'פלטות':['פנטזיה: #c2276a, #ff5c9d, זהב #d4af37 על #0b0709','מונוכרום יוקרתי: שחור, לבן ושמנת #f2e6d8','רטרו 80: סגול #2b0a3d, ורוד ניאון #ff2a6d, תכלת #05d9e8','אדמה: טרקוטה #c65d3b, חול #e8d5b7, זית #6b7344','טכנולוגי: כחול כהה #050b1f, ציאן #00e5ff, לבן','פסטל: ורוד #ffd6e7, תכלת #cdeffd, לילך #e2d4ff'],
'סנכרון סאונד':['BPM = [120]: כל כניסה נופלת על פעימה','הבזק לבן עדין על כל פעימה רביעית','טען קובץ audio והשתמש ב-AnalyserNode כדי שהגודל יגיב לבס','השאר מקום ל-whoosh בכל מעבר וציין את הזמנים בהערה','ברמוטיון: השתמש ב-<Audio> ו-useAudioData לסנכרון'],
'מעברים':['וויפ עיגול מהמרכז בין סצנות','whip pan אופקי עם טשטוש','מסכת דיו אורגנית','גליץ\' RGB קצר של 6 פריימים','פסי צבע אלכסוניים בצבעי המותג','זום דרך אות לסצנה הבאה','דיזולב רך דרך שחור']};
const TYPO=[['כותרת קולנועית','Frank Ruhl Libre 900','letter-spacing 0.15em, זהב, נכנס בדהייה וריווח שנפתח'],['מודרני נקי','Heebo 800 + Heebo 300','כותרת עבה וכיתוב דק, יישור לימין, שוליים 8%'],['שמח וסושיאל','Rubik 900','מעוגל, צבעוני, קפיצה עם overshoot, מילה מודגשת בתוך רקע'],['דרמה ופוסטר','Secular One','ענק, בניגוד חזק, אות אחר אות'],['אלגנטי מגזיני','Frank Ruhl Libre 400 + Assistant','סריף עדין לכותרת וסנס לטקסט, איטליק לדגש'],['צר וגבוה','Karantina 700','צפוף ומרשים לרילס אנכי'],['רטרו','Suez One','צל ארוך, צבעי 80, מעט רעד'],['כתב יד','Amatic SC / Gveret Levin','כתיבה בציור קו (stroke-dashoffset)'],['טכנולוגי','Heebo 400 + IBM Plex Mono','מסוף, ערבול אותיות, ירוק או ציאן'],['גופן משתנה','Heebo / Rubik variable','font-variation-settings wght 100 עד 900 בגל']];
const RECIPES=[['פתיח לערוץ (8 שניות)','16:9',['חלקיקי זהב ברקע','שם הערוץ בחשיפת מסכה','קו זהב נמתח וכותרת משנה','לוגו נכנס עם overshoot','הבזק וסיום']],
['כותרות סרט (30 שניות)','16:9',['שחור ודהייה','"הפקות פנטזיה מציגה" בריווח שנפתח','3 קרדיטים בדיזולב','כותרת קולנועית זהב עם קרן אור','דהייה לשחור']],
['סיום וידאיו (10 שניות)','16:9',['מסך סיום עם 2 מסגרות וידאיו','כפתור הירשמו עם סמן לוחץ','קישורים לרשתות','לוגו קטן בפינה']],
['רילס עם hook (15 שניות)','9:16',['מילה ענקית ממלאת מסך ב-0.5 שנייה','כתוביות טיקטוק על הקצב','3 נקודות מפתח עם צ\'קליסט','קריאה לפעולה פועמת','לוגו']],
['סרטון הסבר (45 שניות)','16:9',['שאלה בכותרת','תרשים זרימה של 3 שלבים','מספר רץ עם נתון גדול','הדגשה בעיגול','סיכום ולוגו']],
['לוגו סטינג (3 שניות)','1:1',['רקע גרדיאנט','קווי הלוגו מצטיירים','מילוי וזוהר','שם בגליץ\' קצר']],
['הכרזה על הצגה או אירוע (20 שניות)','9:16',['ספירה לאחור','שם ההצגה בניאון','תאריך ומקום בלואר ת\'רד','קונפטי וקריאה לפעולה']],
['ציטוט מעורר השראה (10 שניות)','1:1',['רקע נייר','ציטוט מילה אחר מילה','שם הדובר בכתב יד','לופ עדין']]];
const FIXES=[['שיפור כללי','תעשה את זה יותר "פרימיום": easing רך יותר, תזמון מדורג, פחות דברים בבת אחת, ויותר אוויר סביב הטקסט. שלח קובץ מלא.'],['איטי / מהיר','האנימציה [מהירה / איטית] מדי. הכפל את כל הזמנים ב-[1.5] דרך CONFIG אחד ושלח קובץ מלא.'],['עברית הפוכה','העברית מוצגת [הפוך / האנימציה מתחילה משמאל]. וודא dir="rtl", פיצול עם Array.from וש-stagger מתחיל מהאות הימנית.'],['Artifact ריק','ה-Artifact ריק או זרק שגיאה: "[הדבק]". מצא ותקן את הבאג ושלח את הקובץ המלא מחדש, לא רק שורות.'],['שינוי יחס מסך','צור גם גרסת 9:16 ו-1:1 מאותה אנימציה, עם מיקומים שמותאמים לכל יחס ואזור בטוח.'],['כפתור הקלטה','הוסף כפתור "הקלט וידאיו" שמקליט את כל האנימציה מההתחלה עד הסוף ב-60fps עם MediaRecorder ומוריד webm. אם הבמה DOM, צייר אותה ל-Canvas.'],['רנדר MP4 ברמוטיון','המר את האנימציה לפרויקט Remotion: Composition אחת, props לטקסט וצבעים, וכתוב לי צעד אחר צעד איך מתקינים Node ומריצים npx remotion render ל-MP4 ב-1080p.'],['רקע שקוף / ירוק','תן גרסה עם רקע ירוק #00FF00 מלא כדי שאוכל להסיר אותו בעורך, וגם הסבר איך מייצאים WebM עם שקיפות ב-Remotion.'],['ייצוא Lottie','כתוב את האנימציה כקובץ Lottie JSON (צורות וטקסט מומר לצורות), ותן תצוגה מקדימה ב-HTML עם lottie-web.'],['סנכרון למוזיקה','הוסף אפשרות להעלות קובץ MP3, ונגן אותו יחד עם האנימציה; כל מעבר על פעימה לפי BPM=[120].']];
const esc=s=>s.replace(/</g,'&lt;');
$('#mb').innerHTML=Object.entries(MODS).map(([k,v])=>`<h3>${k}</h3><div class="chips">${v.map(x=>`<span class="chip" data-m="${esc(x)}">${esc(x)}</span>`).join('')}</div>`).join('');
$('#tp').innerHTML=TYPO.map(t=>`<div class="tpc"><b>${t[0]}</b><small>${t[1]}</small><p>${t[2]}</p></div>`).join('');
$('#fx').innerHTML=FIXES.map(f=>`<div class="pv"><b>${f[0]}</b><pre>${esc(f[1])}</pre><button class="cpy2">העתק</button></div>`).join('');
const recP=r=>`אתה מעצב מושן ומפתח קריאייטיב. בנה בעצמך בקוד וידאיו מרובה סצנות: "${r[0]}", יחס ${r[1]}.
סצנות לפי הסדר:
${r[2].map((s,i)=>`${i+1}. ${s} (משך [X] שניות, טקסט: "[TEXT_${i+1}]")`).join('\n')}
כל סצנה פונקציה נפרדת שמחזירה GSAP Timeline, ו-master timeline עם labels. מעברים: [סגנון מעבר].
פלטה: #c2276a, #ff5c9d, זהב #d4af37, רקע #0b0709. גופן: [Heebo / Frank Ruhl Libre]. מוזיקה: BPM=[120].
עברית RTL: dir="rtl", Array.from לפיצול, אנימציה מימין, document.fonts.ready.
פלט: HTML אחד כ-Artifact עם ציר זמן לניווט בין סצנות, כפתור נגן מחדש וכפתור "הקלט וידאיו" (MediaRecorder ל-webm).
בנוסף: גרסת Remotion עם Sequence לכל סצנה לרינדור MP4.`;
$('#rec').innerHTML=RECIPES.map(r=>`<div class="pv"><b>${r[0]} · ${r[1]}</b><ol>${r[2].map(s=>`<li>${s}</li>`).join('')}</ol><details><summary>פרומפט</summary><pre>${esc(recP(r))}</pre><button class="cpy2">העתק</button></details></div>`).join('');
// builder
const opt=(l,f)=>l.map((x,i)=>`<option value="${i}">${f(x)}</option>`).join('');
$('#bStyle').innerHTML=opt(ITEMS,i=>`${PIL[i.p]}: ${i.he}`);$('#bStyle2').innerHTML='<option value="">ללא</option>'+opt(ITEMS,i=>`${PIL[i.p]}: ${i.he}`);
const TRS=ITEMS.filter(i=>i.p=='X');$('#bTr').innerHTML='<option value="">ללא</option>'+TRS.map(t=>`<option value="${t.id}">${t.he}</option>`).join('');
$('#bTypo').innerHTML=opt(TYPO,t=>t[0]);$('#bPal').innerHTML=opt(MODS['פלטות'],x=>x);
$('#bMods').innerHTML='<h3>מודיפיירים (בחירה מרובה)</h3>'+Object.entries(MODS).filter(([k])=>k!='פלטות').map(([k,v])=>`<div class="chips"><small>${k}:</small>${v.map(x=>`<label class="chip"><input type="checkbox" value="${esc(x)}">${esc(x)}</label>`).join('')}</div>`).join('');
const SZ={'16:9':'1920x1080','9:16':'1080x1920','1:1':'1080x1080','4:5':'1080x1350'};
function build(){const a=ITEMS[$('#bStyle').value],b=$('#bStyle2').value!==''?ITEMS[$('#bStyle2').value]:null,tr=$('#bTr').value!==''?ITEMS[$('#bTr').value]:null,ty=TYPO[$('#bTypo').value],asp=$('#bAsp').value,out=$('#bOut').value;
 const mods=[...document.querySelectorAll('#bMods input:checked')].map(x=>x.value);
 $('#bRes').textContent=`אתה מעצב מושן ומפתח קריאייטיב. בנה בעצמך בקוד אנימציה ${b?'של רצף סצנות':''} בסגנון "${a.en}" (${a.he}): ${a.desc}
${b?`סצנה 2 בסגנון "${b.en}" (${b.he}): ${b.desc}\n`:''}${tr?`מעבר בין הסצנות: "${tr.en}" (${tr.he}): ${tr.desc}\n`:''}השראה חזותית (מונחי AE כרפרנס בלבד): ${a.tools}${b?'; '+b.tools:''}.
טקסט: TEXT="${$('#bText').value}"  SUBTEXT="${$('#bSub').value}"
יחס מסך: ${asp} (${SZ[asp]}), משך: ${$('#bDur').value} שניות.
טייפוגרפיה: ${ty[0]}, גופן ${ty[1]} מ-Google Fonts; ${ty[2]}.
פלטה: ${MODS['פלטות'][$('#bPal').value]}.
${mods.length?'תוספות:\n'+mods.map(m=>'- '+m).join('\n')+'\n':''}עברית RTL: dir="rtl" lang="he", פיצול עם Array.from, אנימציה לפי אות מתחילה מימין, מספרים ב-<bdi>, המתן ל-document.fonts.ready.
${out.startsWith('Remotion')?'פלט: פרויקט Remotion (React) עם Composition אחת ו-props לכל הפרמטרים, useCurrentFrame + spring/interpolate, והוראות צעד אחר צעד ל-npx remotion render ל-MP4.':out.startsWith('Lottie')?'פלט: קובץ Lottie JSON (טקסט מומר לצורות) ודף HTML לתצוגה מקדימה עם lottie-web.':out.startsWith('Canvas')?'פלט: HTML אחד עם Canvas 2D (ctx.direction="rtl") שרץ כ-Artifact, וכפתור "הקלט וידאיו" עם captureStream + MediaRecorder שמוריד webm.':'פלט: קובץ HTML אחד עם GSAP מ-CDN שרץ כ-Artifact, במה מותאמת לחלון, לופ, כפתור נגן מחדש וכפתור "הקלט וידאיו" (MediaRecorder ל-webm).'}
אני לא מתכנתת: הקוד חייב לעבוד בלי עריכה. בסוף הסבר בעברית פשוטה איך משנים טקסט, צבע ומהירות.`;}
document.querySelector('#builder').addEventListener('input',build);document.querySelector('#builder').addEventListener('change',build);build();
document.addEventListener('click',e=>{const c=e.target.closest('span.chip');if(c){navigator.clipboard?.writeText(c.dataset.m).catch(()=>{});c.classList.add('ok');setTimeout(()=>c.classList.remove('ok'),800)}});
