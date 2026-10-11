/* text-effect demos: CSS verbatim from the catalog script; demo HTML rebuilt from the catalog's classes */
var DEMO_CSS = {"base": ":root{ --text:#1A1A1A; --accent:#E8B828; --soft:#f0e1dd; }\n.demo{position:relative;width:100%;max-width:300px;aspect-ratio:1;margin:0 auto;border-radius:16px;background:var(--soft);overflow:hidden;font-family:'Heebo',system-ui,sans-serif}\n.demo-layer{position:absolute;left:7%;right:7%;top:50%;transform:translateY(-50%);direction:rtl;text-align:center;font-weight:900;font-size:22px;line-height:1.25;color:var(--text);transition:opacity .35s}\n.demo-layer.out{opacity:0}\n.demo-layer .w{display:inline-block;transition:color .15s,transform .18s cubic-bezier(.3,1.6,.5,1)}\n.demo-layer .line{display:block}\n.demo-layer .lt{display:inline-block}\n.accent-word{color:var(--accent);-webkit-text-stroke:1.5px var(--text);paint-order:stroke fill}\n@keyframes demoPop{from{transform:scale(.4);opacity:0}to{transform:scale(1);opacity:1}}\n@keyframes demoSweep{from{transform:scaleX(0)}to{transform:scaleX(1)}}", "karaoke": "[data-demo=\"karaoke\"] .w.on{color:var(--accent);-webkit-text-stroke:1.5px var(--text);paint-order:stroke fill}\n", "pop": "[data-demo=\"pop\"] .demo-layer{font-size:34px}\n[data-demo=\"pop\"] .w{animation:demoPop .32s cubic-bezier(.3,1.7,.5,1) both}\n@keyframes demoPop{from{transform:scale(.4);opacity:0}to{transform:scale(1);opacity:1}}\n", "scale": "[data-demo=\"scale\"] .demo-layer{font-size:20px;white-space:nowrap;left:3%;right:3%}\n[data-demo=\"scale\"] .w{transition:font-size .16s cubic-bezier(.3,1.6,.5,1)}\n[data-demo=\"scale\"] .w.on{font-size:1.3em}\n", "keyword": "[data-demo=\"keyword\"] .demo-layer{font-size:20px;white-space:nowrap;left:3%;right:3%}\n[data-demo=\"keyword\"] .w.key{position:relative;padding:0 6px;margin:0 2px;z-index:0}\n[data-demo=\"keyword\"] .w.key::before{content:'';position:absolute;inset:2px -1px 0;background:var(--accent);border-radius:6px;z-index:-1;transform-origin:right center;animation:demoSweep .35s ease-out both}\n@keyframes demoSweep{from{transform:scaleX(0)}to{transform:scaleX(1)}}\n", "stacked": "[data-demo=\"stacked\"] .line{animation:demoUp .35s cubic-bezier(.2,.9,.3,1.2) both}\n@keyframes demoUp{from{transform:translateY(14px);opacity:0}to{transform:none;opacity:1}}\n[data-demo=\"stacked\"] .line.big{font-size:36px;line-height:1.05;color:var(--accent);-webkit-text-stroke:1.5px var(--text);paint-order:stroke fill}\n", "type": "[data-demo=\"type\"] .caret{display:inline-block;width:3px;height:1em;background:var(--text);margin-right:2px;vertical-align:-2px;animation:demoBlink .8s steps(1) infinite}\n@keyframes demoBlink{50%{opacity:0}}\n", "stretch": "[data-demo=\"stretch\"] .stretch{display:inline-block;font-size:44px;line-height:1;border-bottom:3px solid var(--text);padding:0 8px 2px;margin-top:30px}\n[data-demo=\"stretch\"] .lt{transform-origin:50% 100%;animation:demoStretch .55s cubic-bezier(.22,1,.36,1) both;animation-delay:calc(var(--n) * .16s)}\n@keyframes demoStretch{0%{opacity:0;transform:scaleY(0)}25%{opacity:1}100%{opacity:1;transform:scaleY(1.75)}}\n", "marker": "[data-demo=\"marker\"] .mark{position:relative;z-index:0;padding:0 6px;font-size:44px}\n[data-demo=\"marker\"] .mark::before{content:'';position:absolute;inset:4px -2px 2px;background:var(--accent);border-radius:6px;z-index:-1;transform-origin:right center;animation:demoSweep .45s ease-out .5s both}\n@keyframes demoSweep{from{transform:scaleX(0)}to{transform:scaleX(1)}}\n", "circle": "[data-demo=\"circle\"] .circled{position:relative;display:inline-block;font-size:40px;padding:6px 18px}\n[data-demo=\"circle\"] .circled svg{position:absolute;inset:-6px -14px;width:calc(100% + 28px);height:calc(100% + 12px);overflow:visible}\n[data-demo=\"circle\"] .circled path{fill:none;stroke:var(--text);stroke-width:3;stroke-linecap:round;stroke-dasharray:1;stroke-dashoffset:1;animation:demoDraw .8s ease-out .35s forwards;vector-effect:non-scaling-stroke}\n@keyframes demoDraw{to{stroke-dashoffset:0}}\n", "scramble": "[data-demo=\"scramble\"] .demo-layer{font-size:38px}\n", "wave": "[data-demo=\"wave\"] .demo-layer{font-size:42px}\n[data-demo=\"wave\"] .lt{animation:demoWave .6s ease-out both;animation-delay:calc(var(--n) * .1s)}\n@keyframes demoWave{0%{opacity:0;transform:translateY(12px)}50%{opacity:1;transform:translateY(-14px)}100%{opacity:1;transform:none}}\n", "blur": "[data-demo=\"blur\"] .blurin{display:inline-block;font-size:44px;animation:demoBlur .7s ease-out both}\n@keyframes demoBlur{from{opacity:0;filter:blur(14px)}to{opacity:1;filter:blur(0)}}\n", "fadein": "[data-demo=\"fadein\"] .word{display:inline-block;font-size:44px;animation:demoFadeIn 1.1s ease-out both}\n@keyframes demoFadeIn{from{opacity:0}to{opacity:1}}\n", "slidein": "[data-demo=\"slidein\"] .word{display:inline-block;font-size:44px;animation:demoSlideIn .9s cubic-bezier(.22,1,.36,1) both}\n@keyframes demoSlideIn{from{opacity:0;transform:translateY(60px)}to{opacity:1;transform:none}}\n", "popin": "[data-demo=\"popin\"] .word{display:inline-block;font-size:44px;animation:demoPopIn .55s ease-out both}\n@keyframes demoPopIn{0%{opacity:0;transform:scale(.3)}60%{opacity:1;transform:scale(1.18)}80%{transform:scale(.96)}100%{opacity:1;transform:scale(1)}}\n", "bounce": "[data-demo=\"bounce\"] .word{display:inline-block;font-size:44px;animation:demoBounce 1.1s both}\n@keyframes demoBounce{0%{opacity:0;transform:translateY(-150px);animation-timing-function:ease-in}45%{opacity:1;transform:translateY(0);animation-timing-function:ease-out}65%{transform:translateY(-30px);animation-timing-function:ease-in}82%{transform:translateY(0);animation-timing-function:ease-out}92%{transform:translateY(-8px);animation-timing-function:ease-in}100%{opacity:1;transform:translateY(0)}}\n", "scalein": "[data-demo=\"scalein\"] .word{display:inline-block;font-size:44px;animation:demoScaleIn .8s cubic-bezier(.22,1,.36,1) both}\n@keyframes demoScaleIn{from{transform:scale(0)}to{transform:scale(1)}}\n", "spinin": "[data-demo=\"spinin\"] .word{display:inline-block;font-size:44px;animation:demoSpinIn .9s cubic-bezier(.22,1,.36,1) both}\n@keyframes demoSpinIn{from{opacity:0;transform:rotate(-360deg) scale(.3)}to{opacity:1;transform:rotate(0) scale(1)}}\n", "flipin": "[data-demo=\"flipin\"] .word{display:inline-block;font-size:44px;backface-visibility:hidden;animation:demoFlipIn .9s cubic-bezier(.22,1,.36,1) both}\n@keyframes demoFlipIn{from{transform:perspective(500px) rotateY(-180deg)}to{transform:perspective(500px) rotateY(0)}}\n", "writeon": "[data-demo=\"writeon\"] svg{width:100%;height:auto;overflow:visible}\n[data-demo=\"writeon\"] text{font-family:'Heebo',system-ui,sans-serif;font-weight:900;font-size:56px;fill:var(--text);fill-opacity:0;stroke:var(--text);stroke-width:1.4;stroke-dasharray:420;stroke-dashoffset:420;animation:demoWriteOn 2s ease-in-out forwards}\n@keyframes demoWriteOn{70%{stroke-dashoffset:0;fill-opacity:0}100%{stroke-dashoffset:0;fill-opacity:1}}\n", "wipe": "[data-demo=\"wipe\"] .word{position:relative;display:inline-block;font-size:44px;padding:0 6px}\n[data-demo=\"wipe\"] .word::after{content:'';position:absolute;inset:0;background:var(--accent);transform-origin:left center;animation:demoWipe .8s cubic-bezier(.65,0,.35,1) .2s both}\n@keyframes demoWipe{from{transform:scaleX(1)}to{transform:scaleX(0)}}\n"};
var W = ['נלמד', 'לערוך', 'סרטונים', 'בלי', 'תוכנת', 'עריכה'];
var HE = 'אבגדהוזחטיכלמנסעפצקרשת';
function words(list, cls) { return list.map(function (w, i) { var c = cls ? cls(i) : ''; return '<span class="w ' + c + '">' + w + '</span>'; }).join(' '); }
function letters(word) { return Array.prototype.map.call(word, function (ch, n) { return '<span class="lt" style="--n:' + n + '">' + ch + '</span>'; }).join(''); }
var DEMOS = {
 karaoke: { kind: 'frames', ms: 420, frames: 10, render: function (i) {
  var on = function (k) { return k === i ? 'on' : ''; };
  return '<span class="line">' + words(W.slice(0, 3), on) + '</span><span class="line">' + words(W.slice(3), function (k) { return on(k + 3); }) + '</span>';
 } },
 pop: { kind: 'frames', ms: 430, frames: 8, render: function (i) { return i < W.length ? '<span class="w">' + W[i] + '</span>' : ''; } },
 scale: { kind: 'frames', ms: 420, frames: 8, render: function (i) {
  var base = Math.min(i, 5) < 3 ? 0 : 3;
  return words(W.slice(base, base + 3), function (j) { return base + j === i ? 'on' : ''; });
 } },
 keyword: { kind: 'frames', ms: 500, frames: 8, render: function (i) {
  if (i < 4) return words(W.slice(0, 3), function (j) { return (j === 2 && i >= 1) ? 'key' : ''; });
  return words(W.slice(3), function (j) { return (j === 0 && i >= 5) ? 'key' : ''; });
 } },
 stacked: { kind: 'frames', ms: 520, frames: 7, render: function (i) {
  var lines = [['נלמד לערוך', ''], ['סרטונים', 'big'], ['בלי תוכנת עריכה', '']];
  if (i > 4) return '';
  return lines.slice(0, Math.min(i + 1, 3)).map(function (l) { return '<span class="line ' + l[1] + '">' + l[0] + '</span>'; }).join('');
 } },
 type: { kind: 'frames', ms: 95, frames: 34, render: function (i) {
  var t = 'נלמד לערוך סרטונים בלי תוכנת עריכה';
  return t.slice(0, Math.min(i, t.length)) + '<span class="caret"></span>';
 } },
 stretch: { kind: 'loop', period: 3200, html: function () { return '<span class="stretch">' + letters('אנימציה') + '</span>'; } },
 marker: { kind: 'loop', period: 3000, html: function () { return '<span class="mark">אנימציה</span>'; } },
 circle: { kind: 'loop', period: 3000, html: function () {
  return '<span class="circled">אנימציה<svg viewBox="0 0 200 80" preserveAspectRatio="none"><path pathLength="1" d="M150 8 C 60 0 6 18 8 42 C 10 70 120 78 178 60 C 204 50 198 18 140 10"/></svg></span>';
 } },
 scramble: { kind: 'loop', period: 3000, html: function () { return '<span class="scr">אנימציה</span>'; }, after: function (el) {
  var node = el.querySelector('.scr'), word = 'אנימציה', step = 0;
  var t = setInterval(function () {
   var fixed = Math.floor(step / 2), out = '';
   for (var k = 0; k < word.length; k++) out += k < fixed ? word[k] : HE[Math.floor(Math.random() * HE.length)];
   node.textContent = out; step++;
   if (fixed >= word.length) { node.textContent = word; clearInterval(t); }
  }, 60);
  return function () { clearInterval(t); };
 } },
 wave: { kind: 'loop', period: 2600, html: function () { return letters('אנימציה'); } },
 blur: { kind: 'loop', period: 2600, html: function () { return '<span class="blurin">אנימציה</span>'; } },
 fadein: { kind: 'loop', period: 2800, html: function () { return '<span class="word">אנימציה</span>'; } },
 slidein: { kind: 'loop', period: 2600, html: function () { return '<span class="word">אנימציה</span>'; } },
 popin: { kind: 'loop', period: 2400, html: function () { return '<span class="word">אנימציה</span>'; } },
 bounce: { kind: 'loop', period: 2800, html: function () { return '<span class="word">אנימציה</span>'; } },
 scalein: { kind: 'loop', period: 2400, html: function () { return '<span class="word">אנימציה</span>'; } },
 spinin: { kind: 'loop', period: 2600, html: function () { return '<span class="word">אנימציה</span>'; } },
 flipin: { kind: 'loop', period: 2600, html: function () { return '<span class="word">אנימציה</span>'; } },
 writeon: { kind: 'loop', period: 3600, html: function () { return '<svg viewBox="0 0 260 90"><text x="130" y="64" text-anchor="middle" direction="rtl">אנימציה</text></svg>'; } },
 wipe: { kind: 'loop', period: 2600, html: function () { return '<span class="word">אנימציה</span>'; } }
};
function runFrames(layer, st) {
 var i = 0, last = '';
 function tick() {
  var html = st.render(i);
  if (html !== last) {
   var same = layer.children.length && html.replace(/ on/g, '') === last.replace(/ on/g, '');
   if (same) {
    var tmp = document.createElement('div'); tmp.innerHTML = html;
    Array.prototype.forEach.call(tmp.querySelectorAll('.w'), function (w, n) { layer.querySelectorAll('.w')[n].className = w.className; });
   } else { layer.innerHTML = html; }
   last = html;
  }
  i = (i + 1) % st.frames;
 }
 tick(); return setInterval(tick, st.ms);
}
function runLoop(layer, st) {
 var cleanup = null;
 function cycle() {
  if (cleanup) cleanup();
  layer.classList.remove('out');
  layer.innerHTML = st.html();
  cleanup = st.after ? st.after(layer) : null;
  setTimeout(function () { layer.classList.add('out'); }, st.period - 400);
 }
 cycle(); return setInterval(cycle, st.period);
}
function startDemos(root) {
 root.querySelectorAll('.demo[data-demo]').forEach(function (box) {
  var st = DEMOS[box.dataset.demo], layer = box.querySelector('.demo-layer'), timer = null;
  if (!st || !layer || box._demo) return; box._demo = 1;
  function start() { if (!timer) timer = (st.kind === 'frames' ? runFrames : runLoop)(layer, st); }
  function stop() { clearInterval(timer); timer = null; }
  if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { es.forEach(function (e) { e.isIntersecting ? start() : stop(); }); }).observe(box);
  else start();
 });
}
function demoCode(key) {
 var st = DEMOS[key];
 var css = ['base', key].map(function (k) { return DEMO_CSS[k].trim(); }).join('\n');
 var obj = Object.keys(st).map(function (k) { var v = st[k]; return '  ' + k + ': ' + (typeof v === 'function' ? v.toString() : JSON.stringify(v)); }).join(',\n');
 var runner = st.kind === 'frames' ? runFrames : runLoop;
 var js = 'var W = ' + JSON.stringify(W) + ';\nvar HE = ' + JSON.stringify(HE) + ';\n' + words.toString() + '\n' + letters.toString() + '\n' +
  'var st = {\n' + obj + '\n};\n' + runner.toString() + '\n' + runner.name + '(document.querySelector(\'[data-demo="' + key + '"] .demo-layer\'), st);';
 return '<style>\n' + css + '\n</style>\n\n<div class="demo" data-demo="' + key + '"><div class="demo-layer"></div></div>\n\n<script>\n' + js + '\n</' + 'script>';
}
function textRequest(card) {
 var key = card.querySelector('.demo').dataset.demo;
 var h = card.querySelector('h3 .he') || card.querySelector('h3');
 var name = h.textContent.trim(), isCaption = DEMOS[key].kind === 'frames', code = demoCode(key);
 return 'אני רוצה להוסיף לסרטון שלי ' + (isCaption ? 'כתוביות בסגנון' : 'את האפקט') + ' "' + name + '". הקוד של הדוגמה מצורף למטה (HTML, CSS ו-JavaScript).\n' +
  'תשתמש בו כבסיס, ותתאים אותו לסרטון שלי:\n' +
  (isCaption ? '- הטקסט: לפי מה שאני אומר או אומרת בסרטון, מסונכרן למילים.\n' : '- המילה: "[המילה]", בשנייה [12].\n') +
  '- הצבעים בקוד הם רק דוגמה: תחליף אותם, וגם את הפונט, בצבעים ובפונט של המותג שלי.\n' +
  '- הרקע הוורוד הוא רק לתצוגה: בסרטון הטקסט יושב על הווידאו.\n' +
  'לפני שאתה מרנדר את כל הסרטון, תראה לי תצוגה מקדימה קצרה.\n\n' + code;
}
