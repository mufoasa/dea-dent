'use strict';
/* ========= CONFIG =========
   FORM_ENDPOINT: paste a Formspree / Getform / your own backend URL (accepts POST JSON).
   Left empty = no backend: the form opens the visitor's email app addressed to the clinic. */
const FORM_ENDPOINT = '';
const CLINIC_EMAIL = 'dr.zumri@gmail.com';
const IMG = 'images/'; // replace files in this folder, keep the names

const T = {
sq:{skip:'Kalo te përmbajtja',n_about:'Klinika',n_doc:'Doktori',n_treat:'Trajtimet',n_gal:'Galeria',n_contact:'Kontakti',n_book:'Cakto vizitë',
h_kick:'Ortodonci & Estetikë Dentare · Gostivar',h_t1:'Zbardhim',i11:'Endodonci',i12:'Zbardhim me lazer',i13:'Zbardhim në shtëpi',t2:'Ortodonci',i21:'Aparate fikse',i22:'Aparate mobile',i23:'Invisalign',t3:'Protetikë',i31:'Kurorë qeramike',i32:'Zirkon',i33:'Elemente CAD-CAM',i34:'Kurorë e.max',t4:'Kirurgji',i41:'Implante dentare',i42:'Botox & mbushës dermal',t_ask:'Kërko konsultë',t_note:'Lista e trajtimeve është orientuese dhe do të përditësohet nga klinika.',
c_t:'Brenda klinikës',g_t:'Galeria',cert_t:'Diploma dhe certifikata',cert_note:'Dokumentet zyrtare do të ngarkohen këtu. Asnjë kredencial nuk shfaqet pa dokument.',
f_t:'Cakto vizitën tuaj',f_p:'Plotësoni formularin dhe klinika do t\'ju kontaktojë për të konfirmuar terminin.',f_warn:'Shënim teknik: për dërgim automatik duhet lidhur një backend ose shërbim formularësh (shih FORM_ENDPOINT te script.js). Pa të, formulari hap email-in tuaj me të dhënat e plotësuara.',
f_name:'Emri dhe mbiemri',f_phone:'Telefoni',f_email:'Email',f_service:'Shërbimi',f_date:'Data e preferuar',f_msg:'Mesazh',f_send:'Dërgo kërkesën',
s_req:'Ju lutemi plotësoni emrin dhe telefonin.',s_mail:'Po hapet email-i juaj. Shtypni "Dërgo" për ta përfunduar kërkesën.',s_ok:'Faleminderit! Kërkesa u dërgua. Do t\'ju kontaktojmë së shpejti.',s_err:'Dërgimi dështoi. Telefononi +389 (0)42 550 590.',
k_t:'Na vizitoni',k_addr:'Adresa',k_phone:'Telefoni',k_call:'Telefono',k_dir:'Merr drejtimet',rights:'Të gjitha të drejtat e rezervuara.',top:'Kthehu lart',
ph_portrait:'Portreti',ph_interior:'Interier',ph_gallery:'Foto',ph_diploma:'Dokument'},
mk:{skip:'Прескокни до содржината',n_about:'Клиника',n_doc:'Докторот',n_treat:'Третмани',n_gal:'Галерија',n_contact:'Контакт',n_book:'Закажи термин',
h_kick:'Ортодонција & Естетска стоматологија · Гостивар',h_t1:'Белење',i11:'Ендодонција',i12:'Ласерско белење',i13:'Домашно белење',t2:'Ортодонција',i21:'Фиксни апарати',i22:'Мобилни апарати',i23:'Invisalign',t3:'Протетика',i31:'Керамичка круна',i32:'Циркониум',i33:'CAD-CAM елементи',i34:'e.max круна',t4:'Хирургија',i41:'Забни импланти',i42:'Ботокс & дермални филери',t_ask:'Побарај консултација',t_note:'Листата на третмани е ориентациона и ќе ја ажурира клиниката.',
c_t:'Внатре во клиниката',g_t:'Галерија',cert_t:'Дипломи и сертификати',cert_note:'Официјалните документи ќе бидат поставени тука. Ниедна квалификација не се прикажува без документ.',
f_t:'Закажете го вашиот термин',f_p:'Пополнете го формуларот и клиниката ќе ве контактира за потврда на терминот.',f_warn:'Техничка напомена: за автоматско испраќање е потребен backend или услуга за формулари (видете FORM_ENDPOINT во script.js). Без тоа, формуларот ја отвора вашата е-пошта со пополнетите податоци.',
f_name:'Име и презиме',f_phone:'Телефон',f_email:'Е-пошта',f_service:'Услуга',f_date:'Посакуван датум',f_msg:'Порака',f_send:'Испрати барање',
s_req:'Ве молиме внесете име и телефон.',s_mail:'Се отвора вашата е-пошта. Притиснете „Испрати“ за да го завршите барањето.',s_ok:'Ви благодариме! Барањето е испратено. Наскоро ќе ве контактираме.',s_err:'Испраќањето не успеа. Јавете се на +389 (0)42 550 590.',
k_t:'Посетете не',k_addr:'Адреса',k_phone:'Телефон',k_call:'Јави се',k_dir:'Добиј насоки',rights:'Сите права се задржани.',top:'Назад горе',
ph_portrait:'Портрет',ph_interior:'Ентериер',ph_gallery:'Фото',ph_diploma:'Документ'},
en:{skip:'Skip to content',n_about:'Clinic',n_doc:'Doctor',n_treat:'Treatments',n_gal:'Gallery',n_contact:'Contact',n_book:'Book a visit',
h_kick:'Orthodontics & Aesthetic Dentistry · Gostivar',h_t1:'Bleaching',i11:'Endodontics',i12:'Laser bleaching',i13:'Home bleaching',t2:'Orthodontics',i21:'Fixed appliances',i22:'Removable appliances',i23:'Invisalign',t3:'Prosthetics',i31:'Ceramic crown',i32:'Zirconia',i33:'CAD-CAM elements',i34:'e.max crown',t4:'Surgery',i41:'Dental implants',i42:'Botox & dermal fillers',t_ask:'Request a consultation',t_note:'This treatment list is indicative and will be confirmed by the clinic.',
c_t:'Inside the clinic',g_t:'Gallery',cert_t:'Diplomas & certificates',cert_note:'Official documents will be uploaded here. No credential is shown without a document.',
f_t:'Book your visit',f_p:'Fill in the form and the clinic will contact you to confirm your appointment.',f_warn:'Technical note: automatic delivery needs a backend or form service (see FORM_ENDPOINT in script.js). Without one, the form opens your email app with the details filled in.',
f_name:'Full name',f_phone:'Phone',f_email:'Email',f_service:'Service',f_date:'Preferred date',f_msg:'Message',f_send:'Send request',
s_req:'Please enter your name and phone number.',s_mail:'Opening your email app. Press Send to complete the request.',s_ok:'Thank you! Your request was sent. We will contact you soon.',s_err:'Sending failed. Please call +389 (0)42 550 590.',
k_t:'Visit us',k_addr:'Address',k_phone:'Phone',k_call:'Call',k_dir:'Get directions',rights:'All rights reserved.',top:'Back to top',
ph_portrait:'Portrait',ph_interior:'Interior',ph_gallery:'Photo',ph_diploma:'Document'}
};

const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
document.documentElement.classList.add('js');
let lang='sq';
try{lang=localStorage.getItem('dd-lang')||'sq'}catch(e){}
if(!T[lang])lang='sq';

function setLang(l){
  lang=l; try{localStorage.setItem('dd-lang',l)}catch(e){}
  document.documentElement.lang=l;
  $$('[data-i]').forEach(el=>{const v=T[l][el.dataset.i]; if(v)el.textContent=v;});
  $$('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===l));
  $$('.ph b[data-ph]').forEach(b=>b.textContent=T[l]['ph_'+b.dataset.ph]+(b.dataset.n?' '+b.dataset.n:''));
}

/* Build galleries: images/gallery-1.jpg … interior-1.jpg … diploma-1.jpg (jpg) */
$$('[data-gen]').forEach(box=>{
  const k=box.dataset.gen,n=+box.dataset.n;
  for(let i=1;i<=n;i++){
    const f=document.createElement('figure');f.className='ph rv';f.tabIndex=0;f.dataset.lb='';f.dataset.cap=`${k} ${i}`;
    f.innerHTML=`<img src="${IMG}${k}-${i}.jpg" alt="${k} ${i}" loading="lazy" onerror="this.remove()"><b data-ph="${k}" data-n="${i}"></b>`;
    box.appendChild(f);
  }
});
$$('.portrait b').forEach(b=>b.dataset.ph='portrait');
setLang(lang);
$$('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));

/* nav */
const nav=$('#nav'),burger=$('#burger'),menu=$('#menu');
const onScroll=()=>{nav.classList.toggle('solid',scrollY>60);
  const h=$('.hero-bg'); if(h&&scrollY<innerHeight)h.style.transform=`translateY(${scrollY*.25}px)`;};
addEventListener('scroll',onScroll,{passive:true});onScroll();
const toggleMenu=o=>{menu.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':'';};
burger.addEventListener('click',()=>toggleMenu(!menu.classList.contains('open')));
$$('#menu a').forEach(a=>a.addEventListener('click',()=>toggleMenu(false)));

/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
$$('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%3)*90+'ms';io.observe(el)});

/* lightbox */
const lb=$('#lb'),stage=$('#stage'),cap=$('#cap');let items=[],idx=0,opener=null;
function show(i){
  idx=(i+items.length)%items.length;const f=items[idx],img=$('img',f);
  stage.innerHTML='';
  if(img){const c=document.createElement('img');c.src=img.src;c.alt=img.alt;stage.appendChild(c)}
  else{const d=document.createElement('div');d.textContent=$('b',f)?.textContent||'';stage.appendChild(d)}
  cap.textContent=f.dataset.cap||'';
}
function openLb(f){
  const group=f.closest('[data-gen]');items=group?$$('[data-lb]',group):[f];
  opener=f;show(items.indexOf(f));lb.hidden=false;document.body.style.overflow='hidden';$('.x',lb).focus();
}
function closeLb(){lb.hidden=true;document.body.style.overflow='';opener&&opener.focus()}
document.addEventListener('click',e=>{const f=e.target.closest('[data-lb]');if(f&&!lb.contains(f))openLb(f);
  const a=e.target.dataset.lbAct;if(a==='close')closeLb();if(a==='prev')show(idx-1);if(a==='next')show(idx+1);
  if(e.target===lb||e.target===stage)closeLb();});
document.addEventListener('keydown',e=>{
  if(lb.hidden){if((e.key==='Enter'||e.key===' ')&&e.target.matches?.('[data-lb]')){e.preventDefault();openLb(e.target)}return}
  if(e.key==='Escape')closeLb();if(e.key==='ArrowLeft')show(idx-1);if(e.key==='ArrowRight')show(idx+1);});
let tx=0;lb.addEventListener('touchstart',e=>tx=e.touches[0].clientX,{passive:true});
lb.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)show(idx+(d<0?1:-1))});

/* treatment buttons preselect service */
$$('[data-service]').forEach(a=>a.addEventListener('click',()=>{$('#service').value=a.dataset.service}));

/* appointment form */
const form=$('#form'),st=$('#status');
form.addEventListener('submit',async e=>{
  e.preventDefault();
  const d=Object.fromEntries(new FormData(form));
  if(!d.name.trim()||!d.phone.trim()){st.textContent=T[lang].s_req;(d.name.trim()?form.phone:form.name).focus();return}
  d.service=T[lang][d.service]||d.service;d.language=lang;
  if(FORM_ENDPOINT){
    try{
      const r=await fetch(FORM_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(d)});
      if(!r.ok)throw 0;st.textContent=T[lang].s_ok;form.reset();
    }catch(_){st.textContent=T[lang].s_err}
  }else{
    const body=`${T[lang].f_name}: ${d.name}\n${T[lang].f_phone}: ${d.phone}\n${T[lang].f_email}: ${d.email}\n${T[lang].f_service}: ${d.service}\n${T[lang].f_date}: ${d.date}\n\n${d.msg}`;
    st.textContent=T[lang].s_mail;
    location.href=`mailto:${CLINIC_EMAIL}?subject=${encodeURIComponent('Dea Dent – '+d.name)}&body=${encodeURIComponent(body)}`;
  }
});
$('#yr').textContent=new Date().getFullYear();

/* hero video: fades in when playable, paused for reduced motion / on user request / off-screen */
(function(){
  const v=$('#hv'),b=$('#vbtn');if(!v)return;
  const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
  v.addEventListener('canplay',()=>{v.classList.add('on');b.hidden=false;if(rm){v.pause();b.textContent='▶';b.setAttribute('aria-label','Play video')}},{once:true});
  v.addEventListener('error',()=>{},true);
  const last=v.lastElementChild;if(last)last.addEventListener('error',()=>v.remove());
  b.addEventListener('click',()=>{const p=v.paused;p?v.play():v.pause();b.textContent=p?'❚❚':'▶';b.setAttribute('aria-label',p?'Pause video':'Play video')});
  new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)v.pause();else if(!rm&&b.textContent==='❚❚')v.play().catch(()=>{})})).observe(v);
})();
