(function(){
'use strict';
var CODES_URL='https://danad.co.il/wp-content/uploads/video-editing-playbook/styles-catalog-v2/codes.js';
var toastEl=document.querySelector('.toast');
function toast(m){toastEl.textContent=m;toastEl.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(function(){toastEl.classList.remove('show');},2200);}
function copyText(t){
  if(navigator.clipboard&&window.isSecureContext){return navigator.clipboard.writeText(t).then(function(){return true;},function(){return fallback(t);});}
  return Promise.resolve(fallback(t));
}
function fallback(t){var ta=document.createElement('textarea');ta.value=t;ta.style.cssText='position:fixed;top:0;left:-9999px';document.body.appendChild(ta);ta.select();var ok=false;try{ok=document.execCommand('copy');}catch(e){}ta.remove();return ok;}
function flash(btn,ok){var label=btn.dataset.label||btn.textContent;btn.dataset.label=label;btn.textContent=ok?'הועתק ✓':'סמנו והעתיקו';btn.classList.add('done');setTimeout(function(){btn.textContent=label;btn.classList.remove('done');},1800);}
var codesP=null;
function loadCodes(){
  if(window.STYLE_CODE)return Promise.resolve(true);
  if(!codesP)codesP=new Promise(function(ok){var s=document.createElement('script');s.src=CODES_URL;s.onload=function(){ok(!!window.STYLE_CODE);};s.onerror=function(){ok(false);};document.head.appendChild(s);setTimeout(function(){ok(!!window.STYLE_CODE);},12000);});
  return codesP.then(function(r){if(!r)codesP=null;return r;});
}
function styleRequest(id,name){
  return 'אני רוצה סרטון בסגנון "'+name+'". הקוד של הדוגמה מצורף למטה (דף HTML אחד).\n'+
   'תשתמש בו כרפרנס לסגנון ולתנועה, ותבנה בו את הסרטון שלי: '+(window.FILL[id]||'')+'.\n'+
   '- הנושא, הטקסטים והצבעים בקוד הם רק דוגמה: תחליף אותם בתוכן שלי, ובצבעים ובפונט שמתאימים לי.\n'+
   '- הכול בקוד, בלי מודל תמונות.\n'+
   'לפני שאתה מרנדר את כל הסרטון, תראה לי תמונה אחת.\n\n'+((window.STYLE_CODE||{})[id]||'');
}
function withCode(btn,build){
  return loadCodes().then(function(ok){
    if(!ok)toast('הקוד המלא נטען מאתר הקטלוג המקורי ולא היה זמין כרגע – הועתקה הבקשה בלבד');
    return build();
  });
}
/* graphics scene code: same algorithm as the catalog (rules that touch the stage + their keyframes) */
var GSHEET=null;
function gsheet(){if(!GSHEET){GSHEET=new CSSStyleSheet();try{GSHEET.replaceSync(window.GFX_CSS);}catch(e){}}return GSHEET;}
function sceneCode(stage){
  var SKIP=/^(\*|body|html|\.card|\.meta|\.head|\.grid|\.back|\.copy)/;
  var els=[stage].concat([].slice.call(stage.querySelectorAll('*')));
  var root='',props=[],rules=[],names={},frames={};
  [].forEach.call(gsheet().cssRules,function(r){
    if(r.type===7){frames[r.name]=r.cssText;return;}
    if(r.constructor&&r.constructor.name==='CSSPropertyRule'){props.push(r.cssText);return;}
    if(r.type!==1)return;var sel=r.selectorText;
    if(sel===':root'){root=r.cssText;return;}
    if(SKIP.test(sel))return;var hit=false,bare=sel.replace(/::?(before|after)/g,'');
    try{hit=els.some(function(e){return e.matches(bare);});}catch(e){}
    if(!hit)return;rules.push(r.cssText);
    (r.style.animationName||'').split(',').forEach(function(a){a=a.trim();if(a&&a!=='none')names[a]=1;});
  });
  var kf=Object.keys(names).map(function(k){return frames[k]||'';}).filter(Boolean);
  var out='<style>\n'+[root].concat(props,rules,kf).join('\n')+'\n</style>\n\n'+stage.outerHTML.trim();
  [['--mustard-deep','--accent-dark'],['--mustard-soft','--accent-soft'],['--mustard','--accent'],['--rose-deep','--accent2-dark'],['--rose','--accent2'],['--softpink','--soft'],['--cream','--bg'],['--paper','--card'],['--ink-soft','--text-soft'],['--ink','--text']].forEach(function(m){out=out.split(m[0]).join(m[1]);});
  return out;
}
function sceneRequest(name,stage,fill){
  return 'אני רוצה להוסיף לסרטון שלי את האנימציה "'+name+'". הקוד שלה מצורף למטה (HTML ו-CSS).\n'+
  'תשתמש בו כבסיס, ותתאים אותו לסרטון שלי:\n'+
  '- הטקסטים והמספרים: '+(fill||'[מה צריך להיות כתוב]')+'.\n'+
  '- הצבעים בקוד הם רק דוגמה: תחליף אותם, וגם את הפונט, בצבעים ובפונט של המותג שלי.\n'+
  '- מתי היא מופיעה: בשנייה [12], כשאני אומר או אומרת "[המשפט]".\n'+
  'לפני שאתה מרנדר את כל הסרטון, תראה לי תצוגה מקדימה קצרה של האנימציה.\n\n'+sceneCode(stage);
}
function curveSentence(row){return 'תשנה את התנועה ל-'+row.querySelector('.curve__name').textContent.trim()+': '+row.querySelector('.curve__info b').textContent.trim()+'.';}

document.addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b)return;
  var p;
  /* playbook prompts */
  if(b.classList.contains('prompt__copy')){copyText(document.getElementById(b.dataset.target).innerText.trim()).then(function(ok){flash(b,ok);});return;}
  if(b.classList.contains('prompt__copy-code')){withCode(b,function(){var t=document.getElementById(b.dataset.target).innerText.trim();var c=(window.STYLE_CODE||{})[b.dataset.style]||'';return copyText(t+(c?'\n\n'+c:''));}).then(function(ok){flash(b,ok);});return;}
  if(b.classList.contains('prompt__toggle')){var pr=b.closest('.prompt');pr.classList.toggle('is-open');b.textContent=pr.classList.contains('is-open')?'הסתר':'הצג את כל הפרומפט';return;}
  /* catalog */
  if(b.classList.contains('copy')&&b.closest('#tab-styles')){var c=b.closest('.card');withCode(b,function(){return copyText(styleRequest(c.id,c.querySelector('h3').textContent.trim()));}).then(function(ok){flash(b,ok);});return;}
  if(b.classList.contains('copy')&&b.closest('#tab-graphics')){var c2=b.closest('.card');copyText(sceneRequest(c2.querySelector('h3').textContent.trim(),c2.querySelector('.stage'),c2.getAttribute('data-fill'))).then(function(ok){flash(b,ok);});return;}
  if(b.classList.contains('copy')&&b.closest('#tab-text')){copyText(textRequest(b.closest('.card'))).then(function(ok){flash(b,ok);});return;}
  if(b.classList.contains('gl-ask__copy')){copyText(document.getElementById(b.dataset.target).innerText.trim()).then(function(ok){flash(b,ok);});return;}
  if(b.classList.contains('cx-curve-copy')){copyText(curveSentence(b.closest('.curve'))).then(function(ok){flash(b,ok);});return;}
  /* gallery */
  if(b.classList.contains('g-copy')){
    var card=b.closest('.g-card'),k=b.dataset.kind,name=card.querySelector('h3').childNodes;
    var nm=card.dataset.name;
    if(k==='plain'){copyText(b.previousElementSibling.textContent).then(function(ok){flash(b,ok);});}
    else if(k==='style'){withCode(b,function(){return copyText(styleRequest(b.dataset.style,nm));}).then(function(ok){flash(b,ok);});}
    else if(k==='style-code'){withCode(b,function(){var c=(window.STYLE_CODE||{})[b.dataset.style]||'';return copyText(b.previousElementSibling.textContent+(c?'\n\n'+c:''));}).then(function(ok){flash(b,ok);});}
    else if(k==='gfx'){copyText(sceneRequest(nm,card.querySelector('.stage'),b.dataset.fill)).then(function(ok){flash(b,ok);});}
    else if(k==='text'){copyText(textRequest(card.querySelector('.tx .card'))).then(function(ok){flash(b,ok);});}
    return;
  }
  if(b.classList.contains('kcopy')){copyText(b.previousElementSibling.textContent).then(function(ok){flash(b,ok);});return;}
  if(b.dataset.folds){var sec=b.closest('.sec');sec.querySelectorAll('details.fold').forEach(function(d){d.open=b.dataset.folds==='open';});return;}
  if(b.classList.contains('pill')){document.querySelectorAll('.pill').forEach(function(x){x.classList.toggle('on',x===b);});filter();return;}
});
/* gallery names & filter */
document.querySelectorAll('.g-card').forEach(function(c){var h=c.querySelector('h3').cloneNode(true);h.querySelectorAll('.g-badge,.g-en').forEach(function(x){x.remove();});c.dataset.name=h.textContent.trim();});
var search=document.querySelector('.g-search');
function filter(){
  var f=document.querySelector('.pill.on').dataset.f,q=(search.value||'').trim().toLowerCase(),n=0;
  document.querySelectorAll('.g-card').forEach(function(c){var ok=(f==='all'||c.dataset.cat===f)&&(!q||c.dataset.search.toLowerCase().indexOf(q)>-1);c.hidden=!ok;if(ok)n++;});
  document.querySelector('.g-count').textContent=n+' סגנונות';document.querySelector('.g-empty').hidden=n>0;
}
search.addEventListener('input',filter);filter();
/* sections + hash routing */
var CAT_TABS=['styles','graphics','text','curves','glossary'];
function showCat(name){CAT_TABS.forEach(function(t){var on=t===name;document.getElementById('tab-'+t).hidden=!on;var a=document.querySelector('.cx-tab[data-tab="'+t+'"]');a.setAttribute('aria-selected',on?'true':'false');});}
function showSec(id){
  document.querySelectorAll('.sec').forEach(function(s){var on=s.id===id;if(!on&&!s.hidden)s.querySelectorAll('video').forEach(function(v){v.pause();});s.hidden=!on;});
  document.querySelectorAll('.tabs a').forEach(function(a){a.classList.toggle('on',a.dataset.sec===id);});
  var cur=document.querySelector('.tabs a.on');if(cur&&cur.scrollIntoView&&window.innerWidth<700)cur.scrollIntoView({inline:'center',block:'nearest'});
}
function route(){
  var h=decodeURIComponent((location.hash||'').slice(1))||'gallery',target=null,secId=null;
  if(h.indexOf('tab-')===0&&CAT_TABS.indexOf(h.slice(4))>-1){secId='catalog';showCat(h.slice(4));}
  else{target=document.getElementById(h);if(target){var s=target.closest('.sec');secId=s?s.id:'gallery';var pnl=target.closest('.cx-panel');if(pnl)showCat(pnl.id.slice(4));var fd=target.closest('details');while(fd){fd.open=true;fd=fd.parentElement.closest('details');}if(target.tagName==='DETAILS')target.open=true;}else secId='gallery';}
  showSec(secId);
  if(target&&!target.classList.contains('sec'))setTimeout(function(){var y=target.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo(0,y);},60);
  else window.scrollTo(0,0);
}
window.addEventListener('hashchange',route);
document.getElementById('cx-tabs').addEventListener('click',function(e){var a=e.target.closest('[data-tab]');if(!a)return;e.preventDefault();history.replaceState(null,'','#tab-'+a.dataset.tab);showCat(a.dataset.tab);});
route();
/* videos: play muted loops only while visible (catalog/glossary), never autoplay with sound */
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(en){var v=en.target;if(en.isIntersecting){if(v.muted&&v.loop)v.play().catch(function(){});}else if(!v.paused&&v.muted)v.pause();});},{threshold:.35});
  document.querySelectorAll('#catalog video, #gallery video').forEach(function(v){io.observe(v);});}
/* text demos everywhere */
startDemos(document);
/* easing cups (catalog + playbook) */
var E={'linear':function(t){return t;},'ease-out':function(t){return 1-Math.pow(1-t,3);},'ease-in-out':function(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;},'back-out':function(t){var c1=1.9,c3=c1+1;return 1+c3*Math.pow(t-1,3)+c1*Math.pow(t-1,2);},'elastic':function(t){if(t<=0)return 0;if(t>=1)return 1;return Math.pow(2,-9*t)*Math.sin((t*10-.75)*(2*Math.PI/3))+1;},'steps':function(t){return t>=1?1:Math.floor(t*6)/6;}};
var rows=[].map.call(document.querySelectorAll('.curve[data-ease]'),function(el){var tr=el.querySelector('.curve__track'),cup=tr&&tr.querySelector('.curve__cup');return tr&&cup&&E[el.dataset.ease]?{f:E[el.dataset.ease],tr:tr,cup:cup,dot:el.querySelector('.curve__graph circle')}:null;}).filter(Boolean);
var MOVE=1.7,HOLD=1,FADE=.35,CYC=MOVE+HOLD+FADE,t0=performance.now();
function gx(t){return 8+t*86;}function gy(v){return 74-(v+.25)/1.6*68;}
(function tick(now){var c=((now-t0)/1000)%CYC,p=Math.min(1,c/MOVE);rows.forEach(function(r){if(!r.tr.offsetParent)return;var v=r.f(p),w=r.tr.clientWidth,pad=w*.1,dist=Math.max(0,w-r.cup.offsetWidth-2*pad);r.cup.style.transform='translateX('+(-(pad+v*dist)).toFixed(1)+'px)';r.cup.style.opacity=c>MOVE+HOLD?Math.max(0,1-(c-MOVE-HOLD)/FADE).toFixed(2):'1';if(r.dot){r.dot.setAttribute('cx',gx(p).toFixed(2));r.dot.setAttribute('cy',gy(v).toFixed(2));}});requestAnimationFrame(tick);})(t0);
})();
