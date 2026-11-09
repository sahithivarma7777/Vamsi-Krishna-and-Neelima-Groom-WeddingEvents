const groomHome='https://maps.app.goo.gl/RQKChWmJzuA1khBo8?g_st=ic';
const brideHome='https://maps.app.goo.gl/863f78Zejpqx6owo8?g_st=iw';
const events=[
{id:'groom-haldi',name:'Haldi',side:'groom',day:18,time:'9:00 AM',start:'09:00',location:'Groom’s home · Hyderabad',map:groomHome,description:'A golden beginning, surrounded by family.'},
{id:'pellikoduku',name:'Pellikoduku',side:'groom',day:20,time:'9:00 AM',start:'09:00',location:'Groom’s home · Hyderabad',map:groomHome,description:'A treasured tradition. A groom’s new beginning.'},
{id:'marriage',name:'Marriage',side:'shared',day:21,time:'9:49 PM · Muhurtham',start:'21:49',location:'Satya Convention hall, Machilipatnam',map:'https://maps.app.goo.gl/KWzY88tbh1WWcDK96?g_st=ic',description:'Two lives, one auspicious moment.'},
{id:'vratham',name:'Vratham',side:'groom',day:24,time:'9:00 AM onwards',start:'09:00',location:'Groom’s home · Hyderabad',map:groomHome,description:'Gratitude and blessings for a life together.'},
{id:'reception',name:'Reception',side:'shared',day:25,time:'7:00 PM',start:'19:00',location:'Cyber Gardens · Hitech City, Hyderabad',map:'https://maps.app.goo.gl/89uq4zgEzPmH8tBW7?g_st=ic',description:'An evening to celebrate with everyone we love.'}];
const list=document.querySelector('#events');
const eventNotes={
'groom-haldi':['CEREMONY I','A GOLDEN BEGINNING','Turmeric, marigolds and the joy of family.'],
'pellikoduku':['CEREMONY II','THE GROOM’S BLESSING','A cherished tradition before a new beginning.'],
'marriage':['THE WEDDING','THE AUSPICIOUS MOMENT','Two lives. One promise. A lifetime together.'],
'vratham':['CEREMONY IV','BLESSINGS FOR TOGETHERNESS','With gratitude for every blessing and every path ahead.'],
'reception':['THE RECEPTION','AN EVENING OF CELEBRATION','An evening to gather, celebrate and make memories.']};
for(const [index,e] of events.entries()){
 const article=document.createElement('article');
 article.className='event event-panel event-panel--'+e.id;
 article.id=e.id==='marriage'?'wedding':'event-'+e.id;
 const note=eventNotes[e.id];
 const weekday=new Intl.DateTimeFormat('en-IN',{weekday:'long',timeZone:'Asia/Kolkata'}).format(new Date(`2026-11-${e.day}T12:00:00+05:30`));
 article.innerHTML=`<div class="event-folio"><span>0${index+1}</span><span class="folio-rule"></span><span>${e.name.toUpperCase()}</span></div><div class="event-art" aria-hidden="true"><div class="event-art-arch"><span class="event-art-mark">✧</span><span class="event-art-number">0${index+1}</span></div></div><div class="event-body"><p class="event-stamp">${note[0]} <span>·</span> ${note[1]}</p><h3>${e.id==='marriage'?'Pelli <em>Muhurtham</em>':e.name}</h3><div class="event-divider" aria-hidden="true"><span></span>◆<span></span></div><p class="event-whisper">${note[2]}</p><div class="event-date-block"><strong>${e.day}</strong><div><b>${weekday}</b><span>November · 2026</span><em>Two Thousand Twenty Six</em></div></div><p class="event-time">${e.time}</p><p class="event-venue">${e.location}</p><div class="event-links"><a class="event-direction" href="${e.map}" target="_blank" rel="noopener noreferrer" aria-label="Directions to ${e.name}">GET DIRECTIONS ↗</a></div></div><div class="event-runfoot"><span>VAMSI KRISHNA & NEELIMA</span><span>#hefoundhislotus</span></div>`;
 if(e.id==='vratham'){
  const decor=document.createElement('span');decor.className='vratham-botanical-decor';decor.setAttribute('aria-hidden','true');article.append(decor);
  const sparkles=document.createElement('div');sparkles.className='vratham-sparkles';sparkles.setAttribute('aria-hidden','true');
  for(let n=0;n<28;n++){const star=document.createElement('i');star.textContent=n%3?'✧':'✦';star.style.cssText=`--x:${n*37%100}%;--size:${12+n%4*3}px;--duration:${10+n%7}s;--delay:-${n*1.27}s`;sparkles.append(star);}
  article.append(sparkles);
 }
 if(e.id==='marriage'||e.id==='reception'){
  const petals=document.createElement('div');
  petals.className='rose-petals';petals.setAttribute('aria-hidden','true');
  for(let n=0;n<26;n++){
   const petal=document.createElement('i');
   petal.style.cssText=`left:${(n*37)%100}%;--size:${12+n%5*3}px;--duration:${11+n%7*1.4}s;--delay:-${n*1.73}s;--drift:${n%2?75:-65}px;--turn:${n%2?540:-420}deg`;
   petals.append(petal);
  }
  article.append(petals);
 }
 list.append(article);
}
document.querySelectorAll('header,main,footer').forEach(e=>e.inert=true);document.body.classList.add('locked');document.querySelector('#open').addEventListener('click',()=>{window.scrollTo({top:0,left:0,behavior:'instant'});startWeddingMusic();document.querySelector('#envelope').classList.add('opened');document.querySelectorAll('header,main,footer').forEach(e=>e.inert=false);document.querySelector('#envelope').inert=true;document.body.classList.remove('locked');window.scrollTo({top:0,left:0,behavior:'instant'});document.querySelector('#home .button').focus({preventScroll:true})});
function countdown(){const diff=Math.max(0,new Date('2026-11-21T21:49:00+05:30')-Date.now());const s=Math.floor(diff/1000);const values=[Math.floor(s/86400),Math.floor(s%86400/3600),Math.floor(s%3600/60),s%60];['days','hours','minutes','seconds'].forEach((k,i)=>document.querySelectorAll('#'+k+', [data-countdown="'+k+'"]').forEach(el=>el.textContent=String(values[i]).padStart(2,'0')))}countdown();setInterval(countdown,1000);
const dialog=document.getElementById('lightbox');document.querySelectorAll('[data-photo]').forEach(b=>b.addEventListener('click',()=>{document.getElementById('large-photo').src=b.dataset.photo;dialog.showModal()}));document.getElementById('close-photo').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});

const weddingAudio=document.querySelector('#wedding-audio');
const musicToggle=document.querySelector('#music-toggle');
function syncMusicButton(){
  const playing=!weddingAudio.paused;
  musicToggle.setAttribute('aria-pressed',String(playing));
  musicToggle.setAttribute('aria-label',playing?'Pause music':'Play music');
  musicToggle.title=playing?'Pause music':'Play music';
}
function startWeddingMusic(){
  musicToggle.hidden=false;
  weddingAudio.volume=.65;
  weddingAudio.play().catch(syncMusicButton);
}
weddingAudio.addEventListener('play',syncMusicButton);
weddingAudio.addEventListener('pause',syncMusicButton);
musicToggle.addEventListener('click',()=>{
  if(weddingAudio.paused)weddingAudio.play().catch(syncMusicButton);
  else weddingAudio.pause();
});

const waxSeal=document.querySelector('#wax-seal');
waxSeal.addEventListener('click',()=>{
  waxSeal.setAttribute('aria-expanded','true');
  const envelope=document.querySelector('#paper-envelope');
  const card=document.querySelector('#date-card');
  
  envelope.hidden=true;
  card.hidden=false;
  card.focus({preventScroll:true});
  card.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'});
});

const dateCard=document.querySelector('#date-card');
new ResizeObserver(()=>{
  if(dateCard.hidden)return;
  dateCard.style.setProperty('--art-width',dateCard.clientHeight+'px');
  dateCard.style.setProperty('--art-height',dateCard.clientWidth+'px');
}).observe(dateCard);

const galleryTrack=document.querySelector('.gallery');
const gallerySlides=[...galleryTrack.querySelectorAll('.gallery-moment')];
const galleryControls=document.createElement('div');galleryControls.className='gallery-controls';
galleryControls.innerHTML='<button class="gallery-arrow" aria-label="Previous photograph">←</button><div class="gallery-dots" aria-label="Choose a photograph">'+gallerySlides.map((_,i)=>`<button class="gallery-dot" aria-label="Show photograph ${i+1}" aria-current="${i===0}"></button>`).join('')+'</div><button class="gallery-arrow" aria-label="Next photograph">→</button>';
galleryTrack.after(galleryControls);
const galleryHint=document.createElement('p');galleryHint.className='gallery-hint';galleryHint.textContent='SWIPE TO EXPLORE · TAP A PHOTO TO ENLARGE';galleryControls.after(galleryHint);
let galleryIndex=0;
const galleryDots=[...galleryControls.querySelectorAll('.gallery-dot')];
function showGallerySlide(index){galleryIndex=(index+gallerySlides.length)%gallerySlides.length;galleryTrack.scrollTo({left:galleryIndex*galleryTrack.clientWidth,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
galleryControls.querySelector('[aria-label="Previous photograph"]').addEventListener('click',()=>showGallerySlide(galleryIndex-1));
galleryControls.querySelector('[aria-label="Next photograph"]').addEventListener('click',()=>showGallerySlide(galleryIndex+1));
galleryDots.forEach((dot,i)=>dot.addEventListener('click',()=>showGallerySlide(i)));
galleryTrack.addEventListener('scroll',()=>{galleryIndex=Math.round(galleryTrack.scrollLeft/galleryTrack.clientWidth);galleryDots.forEach((dot,i)=>dot.setAttribute('aria-current',String(i===galleryIndex)));},{passive:true});
galleryTrack.setAttribute('role','region');galleryTrack.setAttribute('aria-label','Wedding photo carousel');galleryTrack.tabIndex=0;
galleryTrack.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();showGallerySlide(galleryIndex+(event.key==='ArrowRight'?1:-1));}});

function fitMobileGallery(){galleryTrack.style.height=matchMedia('(max-width:700px)').matches?gallerySlides[galleryIndex].getBoundingClientRect().height+'px':'';}
galleryTrack.addEventListener('scroll',fitMobileGallery,{passive:true});
new ResizeObserver(fitMobileGallery).observe(gallerySlides[0]);
gallerySlides.forEach(slide=>slide.querySelector('img').addEventListener('load',fitMobileGallery));
window.addEventListener('resize',fitMobileGallery);fitMobileGallery();

const revealText=[...document.querySelectorAll('main h1, main h2, main h3, main p, main .eyebrow, main .event-stamp, main .event-date-block, main .event-folio, main .event-runfoot, main .hero-bottom, main .parent-relation, main figcaption, main .family-bottom, main .invocation-verse')].filter(el=>!el.parentElement.closest('.event-date-block'));
if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){
 const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('text-revealed');revealObserver.unobserve(entry.target);}});},{threshold:.08});
 revealText.forEach((el,index)=>{el.classList.add('text-reveal');el.style.setProperty('--reveal-delay',`${index%3*65}ms`);revealObserver.observe(el);});
}
