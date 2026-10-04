(function(){
try{if(sessionStorage.getItem('netc-loaded')){return}sessionStorage.setItem('netc-loaded','1')}catch(e){}
var still=matchMedia('(prefers-reduced-motion: reduce)').matches;
var css='#netc-loader{position:fixed;inset:0;z-index:10000;background:#23325E;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:28px;transition:opacity .2s}#netc-loader.out{opacity:0;pointer-events:none}#netc-loader svg{width:120px;height:120px;overflow:visible}#netc-loader .fr{fill:none;stroke:#F1E9D8;stroke-width:16;stroke-dasharray:640;stroke-dashoffset:640;animation:nl-draw .7s ease-out forwards}#netc-loader .sun{fill:#EDB22A;transform-origin:134px 64px;transform:scale(0);animation:nl-pop .2s .55s ease-out forwards}#netc-loader .rt{fill:none;stroke:#E0503F;stroke-width:16;stroke-linecap:round;stroke-dasharray:140;stroke-dashoffset:140;animation:nl-draw .6s .7s ease-out forwards}#netc-loader .d{fill:#E0503F;opacity:0;animation:nl-in .15s forwards}#netc-loader .d1{animation-delay:1.25s}#netc-loader .d2{animation-delay:1.4s}#netc-loader .t{font:600 14px/1 "IBM Plex Mono","Courier New",monospace;letter-spacing:3px;text-transform:uppercase;color:#EDB22A;opacity:0;animation:nl-in .2s .3s forwards}@keyframes nl-draw{to{stroke-dashoffset:0}}@keyframes nl-pop{to{transform:scale(1)}}@keyframes nl-in{to{opacity:1}}'+(still?'#netc-loader *{animation-duration:0s!important;animation-delay:0s!important}':'');
var st=document.createElement('style');st.textContent=css;document.documentElement.appendChild(st);
var el=document.createElement('div');el.id='netc-loader';el.setAttribute('role','status');el.setAttribute('aria-label','Loading');
el.innerHTML='<svg viewBox="0 0 200 200" aria-hidden="true"><path class="fr" d="M176 80V24H24V176H176V136"></path><circle class="sun" cx="134" cy="64" r="18"></circle><path class="rt" d="M48 150C80 150 96 108 130 108H140"></path><circle class="d d1" cx="164" cy="108" r="8"></circle><circle class="d d2" cx="186" cy="108" r="8"></circle></svg><div class="t">Every trip is a frame</div>';
document.documentElement.appendChild(el);
var t0=Date.now(),min=still?200:1600,done=false;
function hide(){if(done)return;done=true;setTimeout(function(){el.classList.add('out');setTimeout(function(){el.remove();st.remove()},250)},Math.max(0,min-(Date.now()-t0)))}
if(document.readyState==='complete')hide();else addEventListener('load',hide);
setTimeout(hide,4000);
})();
