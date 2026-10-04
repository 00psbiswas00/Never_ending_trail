(function(){
const sel='.route,.stops,.nstops,.trail,.flow';
const vh=()=>Math.min(innerHeight,document.documentElement.clientHeight||innerHeight,(window.visualViewport&&visualViewport.height)||innerHeight);
const fire=el=>{if(!el.classList.contains('in'))requestAnimationFrame(()=>el.classList.add('in'))};
let io=null;
if('IntersectionObserver' in window){io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting&&en.intersectionRatio>=.6){fire(en.target)}else if(!en.isIntersecting){en.target.classList.remove('in')}}),{threshold:[0,.6,1],rootMargin:'0px 0px -10% 0px'})}
const watch=()=>document.querySelectorAll(sel).forEach(el=>{if(el.dataset.w)return;el.dataset.w=1;if(io)io.observe(el)});
const check=()=>{watch();if(io)return;document.querySelectorAll(sel).forEach(el=>{const r=el.getBoundingClientRect();if(r.top<vh()*.85&&r.bottom>0)fire(el);else if(r.bottom<0||r.top>vh())el.classList.remove('in')})};
addEventListener('scroll',check,{passive:true,capture:true});
document.addEventListener('DOMContentLoaded',check);
const NS='http://www.w3.org/2000/svg';
const build=()=>{document.querySelectorAll('.flow').forEach(svg=>{const W=Math.max(200,svg.clientWidth),H=40,y1=32,y2=10,e=W-70;
svg.setAttribute('viewBox','0 0 '+W+' '+H);
const seg=(W-70)/4;
const d='M6 '+y1+' C'+(seg*.6)+' '+y1+' '+(seg*.9)+' '+y2+' '+(seg*1.6)+' '+y2+' S'+(seg*2.6)+' '+y1+' '+(seg*3)+' '+y1+' S'+(seg*3.6)+' '+y2+' '+e+' '+y2;
let p=svg.querySelector('path');if(!p){p=document.createElementNS(NS,'path');p.setAttribute('fill','none');p.setAttribute('stroke-width','6');p.setAttribute('stroke-linecap','round');svg.appendChild(p);for(let i=0;i<2;i++){const c=document.createElementNS(NS,'circle');c.setAttribute('r','6');svg.appendChild(c)}}
const col=svg.dataset.color||'#C9372C';p.setAttribute('stroke',col);p.setAttribute('d',d);
const cs=svg.querySelectorAll('circle');cs[0].setAttribute('cx',e+28);cs[1].setAttribute('cx',e+54);cs.forEach(c=>{c.setAttribute('cy',y2);c.setAttribute('fill',col)});
svg.style.setProperty('--len',Math.ceil(p.getTotalLength()+10))})};
addEventListener('resize',build);document.addEventListener('DOMContentLoaded',build);build();
document.addEventListener('click',e=>{const c=e.target.closest('.tcard,.chan');if(!c||e.target.closest('a,image-slot'))return;const a=c.querySelector('a[href]');if(a)location.href=a.href});
check();
})();
