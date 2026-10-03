
/* Visitor requirement gate */
(function(){
  const gate=document.getElementById("visitorGate");
  const form=document.getElementById("visitorGateForm");
  if(!gate||!form)return;
  document.body.classList.remove("visitor-gate-open");
  const saved=localStorage.getItem("newSunnyVisitorDetails");
  if(saved){
    try{
      const d=JSON.parse(saved);
      if(d.name) document.getElementById("visitorName").value=d.name;
      if(d.phone) document.getElementById("visitorPhone").value=d.phone;
      if(d.email) document.getElementById("visitorEmail").value=d.email;
      if(d.location) document.getElementById("visitorLocation").value=d.location;
      if(d.requirement) document.getElementById("visitorRequirement").value=d.requirement;
    }catch(e){}
  }
  setTimeout(function(){
    gate.classList.add("is-visible");
    document.body.classList.add("visitor-gate-open");
  }, 1000);

  form.addEventListener("submit",async function(e){
    e.preventDefault();
    const d={
      name:document.getElementById("visitorName").value.trim(),
      phone:document.getElementById("visitorPhone").value.trim(),
      email:document.getElementById("visitorEmail").value.trim(),
      location:document.getElementById("visitorLocation").value.trim(),
      requirement:document.getElementById("visitorRequirement").value
    };
    if(!/^[6-9]\d{9}$/.test(d.phone)){
      alert("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    const submitButton=form.querySelector(".visitor-gate-submit");
    const originalText=submitButton.textContent;
    submitButton.disabled=true;
    submitButton.textContent="SUBMITTING…";

    const submittedAt=document.getElementById("visitorSubmittedAt");
    if(submittedAt) submittedAt.value=new Date().toLocaleString("en-IN",{timeZone:"Asia/Kolkata"});

    try{
      const response=await fetch(form.action,{
        method:"POST",
        body:new FormData(form),
        headers:{Accept:"application/json"}
      });

      if(!response.ok) throw new Error("Form submission failed");

      localStorage.setItem("newSunnyVisitorDetails",JSON.stringify(d));
      gate.classList.remove("is-visible");
      setTimeout(function(){ gate.classList.add("is-hidden"); }, 350);
      document.body.classList.remove("visitor-gate-open");
    }catch(error){
      alert("We couldn't submit your details right now. Please check your internet connection and try again.");
      submitButton.disabled=false;
      submitButton.textContent=originalText;
    }
  });
})();

/*
  NEW SUNNY BATTERIES
  EDIT ONLY THE CONFIG BELOW first.
*/
const CONFIG = {
  phone: "916280013605",
  whatsapp: "916280013605",
  phone2: "919569642779",
  phone3: "919876806615",
  whatsapp2: "919569642779",
  email: "info.newsunnybatteries@gmail.com",
  maps: "https://www.google.com/maps/search/?api=1&query=New+Sunny+Batteries+Hathi+Gate+Amritsar"
};

/*
  Add your real products here.
  Do not add specifications until verified.
*/
const PRODUCTS = [
  {id:101,brand:"PowerZone",category:"Car Battery",model:"PZ40B20L",application:"Passenger Car",voltage:"12 Volts",capacity:"35 Ah",specs:"6 cells · Zero Maintenance · Lead-acid battery",warranty:"60 months",availability:"Contact us for current availability",image:"assets/pz-pz40b20l.jpg",details:"PowerZone PZ40B20L 35 Ah passenger-car battery.",compatible:["Datsun Go","GM Spark","Hyundai Santro, Xing, Zip Drive","Hyundai i10 (P), Grand i10 (P), Xcent (P), Elite i20 (P), Next Gen Verna (P), Eon (P)","HM Lancer (P), Cedia (P), Cedia Select, Spirit, Sports, Lancer LXI","Honda City V-TEC, Jazz (P), Brio (P), Amaze (P), Mobilio (P), Honda City 2017 onward","Maruti 800, 800MPI, Alto, Gypsy, Omni, Swift, SX4, A-Star, Ritz, DZIRE, Alto K10, Wagon R, Zen Estilo, Baleno, Swift, Dezire, Ertiga, Celerio, Ciaz, Wagon R Petrol, S-Cross, Str. Gen. Petrol, Ignis","Nissan Micra (P), Sunny (P), Datsun GO (P), Datsun Go+, Datsun Redi Go","Renault Pulse (P)","Tata Indica (P), Indigo (P), Marina (P), Zest","Toyota Etios (P), Etios Liva (P), Corolla (P), Corolla Altis (P), Etios Cross, Innova (P)"]},
  {id:102,brand:"PowerZone",category:"Car Battery",model:"DIN45",application:"Passenger Car",voltage:"12 Volts",capacity:"45 Ah",specs:"Lead Calcium",warranty:"24 months domestic",availability:"Contact us for current availability",image:"assets/pz-din45.jpg",details:"Power Zone DIN45 car battery. Compatibility is based on PowerZone application data and current fitment listings; confirm the exact vehicle variant and year before purchase.",compatible:["Fiat Punto (Petrol)","Fiat Linea (Petrol)","Fiat Avventura / Urban Cross (Petrol)","Fiat Grande Punto (Petrol)","Fiat Palio / Petra / Siena / Uno (Petrol)","Ford Fusion (Petrol/Diesel)","Ford Fiesta / Fiesta Classic (Petrol/Diesel)","Ford Figo (Petrol/Diesel)","Ford EcoSport (Petrol; Diesel before 2016)","Hyundai Venue Petrol","Tata Nexon Petrol","Volkswagen Polo 1.2L Petrol","Volkswagen Ameo Petrol","Volkswagen Vento 2017 Petrol","Volkswagen Jetta 1.4L Petrol","Kia Seltos HTE/HTK (Petrol and listed Diesel variants)","Premier Padmini (Petrol/Diesel)"]},
  {id:103,brand:"PowerZone",category:"Car Battery",model:"PZ DIN 65",application:"Car / Passenger Vehicle",voltage:"12 Volts",capacity:"65 Ah",specs:"PowerZone PZ DIN 65",warranty:"24 months domestic · 55 months international",availability:"Contact us for current availability",image:"assets/pz-din65.jpg",details:"PowerZone PZ DIN 65 65 Ah car battery. Compatibility is based on PowerZone application data and current fitment listings; confirm the exact vehicle variant and year before purchase.",warrantyDetails:"Service type: Only manufacturing defect. Physical damage is not covered. Sales package: Battery with warranty card.",compatible:["Ford Fiesta Torque Diesel","Ford Endeavour 2.5L & 3L Diesel (2016–2017)","Maruti Suzuki Swift Diesel","Maruti Suzuki Swift Dzire Diesel","Maruti Suzuki Baleno Diesel","Maruti Suzuki Ciaz Diesel","Maruti Suzuki Ritz Diesel","Maruti Suzuki SX4 Diesel","Maruti Suzuki Ignis Diesel (upto 2014 manufacturing)","Maruti Suzuki Kizashi","Maruti Suzuki Ertiga Diesel (upto 2014 manufacturing)","Maruti Suzuki S-Cross 1.6L Diesel","Maruti Suzuki Grand Vitara Petrol","Toyota Innova Crysta Diesel (2016)","Toyota Fortuner Petrol/Diesel (from 2017)","Toyota Hilux Diesel"]},
  {id:104,brand:"PowerZone",category:"Motorcycle Battery",model:"48PZTZ4L",application:"Motorcycle / Two-Wheeler",voltage:"12 Volts",capacity:"4 Ah",specs:"Sealed VRLA Battery",warranty:"48 months",availability:"Contact us for current availability",image:"assets/pz-4lb.jpg",details:"Power Zone 4LB two-wheeler battery. Compatibility is based on the PowerZone application chart; confirm exact variant/year before purchase.",compatible:["Bajaj Platina 100/110 (ES)","Bajaj CT100/110 (ES)","Bajaj CT125 (ES)","Bajaj CT100 Alloy / Spoke / CT100B (ES)","Bajaj Platina 110H Gear (ES)","Hero CD Deluxe / CD Dawn / Splendor Pro / Passion / Passion Pro / Splendor NXG / Glamour / Ignitor / HF Deluxe / Splendor / Super Splendor / Passion XPRO / Splendor+ Xtec / Passion Xtec","Honda Shine New / Shine SP / Livo / Dream Neo / CD110 / Navi / Shine 100","Honda Activa 125 upto 2019 / Activa I / Activa 3G–6G / Aviator / Dio / Grazia / Activa 110 H-Smart / Dio 110 H-Smart","Suzuki Gixxer SF 150 / Gixxer 150 / Intruder 150 (BS6)","Suzuki Access 125 / Burgman Street 125 / Let’s (listed variants)","TVS Radeon / Sport (listed variants)","TVS XL100 i-TOUCH Start","Aprilia SR 125 (KS)"]},
  {id:105,brand:"PowerZone",category:"Motorcycle Battery",model:"48PZTZ5L",application:"Motorcycle / Two-Wheeler",voltage:"12 Volts",capacity:"5 Ah",specs:"Lead Acid · Sealed VRLA Battery",warranty:"48 months",availability:"Contact us for current availability",image:"assets/pz-5lb.jpg",details:"Power Zone 5LB two-wheeler battery. Compatibility is based on the PowerZone application chart and current product listings; confirm exact variant/year before purchase.",compatible:["Bajaj Boxer 100 S / BM 100 / BM 125 / BM 150 / Discover 150F / V12 / V15 / Pulsar 125 / Pulsar 135 / Pulsar 150 / Avenger 150 / Avenger 160 Street (listed ES variants)","Hero Impulse / Xtreme / Hunk / Xtreme Sports / Glamour BS6 / Super Splendor BS6 / Glamour Xtec","Hero Pleasure / Duet / Maestro BS6 / Destini 125 / Pleasure+ / Maestro Edge 125 / Xoom","Honda CB Trigger / CB Dazzler / CB Hornet 160 / CB Unicorn 160 / CB Unicorn BS6 / X-Blade BS6 / Shine BS6 / Livo BS6 / CD110 BS6 / SP125 BS6","Mahindra Centuro Rock Star / Gusto 110","Aprilia SR 125 (ES)","Suzuki Avenis 125 / Access 125 (2023 onwards) / Burgman Street 125","TVS Radeon BS6 / Star City+ BS6 / Sport BS6 / Raider BS6 / NTORQ 125 BS6 / Jupiter BS6 / Jupiter 125 BS6 / Wego BS4","Yamaha FZS V3 / MT-15 / YZF-R15 V3 / FZ V3 / R15 V4 / R15M / R15S / MT-15 V2 / FZ-X / FZ-S FI Ver 4.0"]},
  {id:3,brand:"Kaycee",category:"Inverter Battery",model:"Kaycee Inverter Battery",application:"Home / Backup Power",voltage:"—",capacity:"—",specs:"Contact us for specifications.",warranty:"Contact us",availability:"Check availability"},
  {id:4,brand:"Kaycee",category:"Inverter Unit",model:"Kaycee Inverter Unit",application:"Home / Backup Power",voltage:"—",capacity:"—",specs:"Contact us for specifications.",warranty:"Contact us",availability:"Check availability"},
  {id:5,brand:"Kaycee",category:"Tractor Battery",model:"Kaycee Tractor Battery",application:"Tractor / Agricultural",voltage:"—",capacity:"—",specs:"Contact us for specifications.",warranty:"Contact us",availability:"Check availability"},
  {id:6,brand:"Windsor",category:"Inverter Battery",model:"Windsor Inverter Battery",application:"Home / Backup Power",voltage:"—",capacity:"—",specs:"Contact us for specifications.",warranty:"Contact us",availability:"Check availability"},
  {id:7,brand:"Windsor",category:"Inverter Unit",model:"Windsor Inverter Unit",application:"Home / Backup Power",voltage:"—",capacity:"—",specs:"Contact us for specifications.",warranty:"Contact us",availability:"Check availability"},
  {id:8,brand:"Windsor",category:"Tractor Battery",model:"Windsor Tractor Battery",application:"Tractor / Agricultural",voltage:"—",capacity:"—",specs:"Contact us for specifications.",warranty:"Contact us",availability:"Check availability"},
  {id:9,brand:"Skylark",category:"Inverter Battery",model:"Skylark Inverter Battery",application:"Home / Backup Power",voltage:"—",capacity:"—",specs:"Contact us for specifications.",warranty:"Contact us",availability:"Check availability"},
  {id:10,brand:"Skylark",category:"Inverter Unit",model:"Skylark Inverter Unit",application:"Home / Backup Power",voltage:"—",capacity:"—",specs:"Contact us for specifications.",warranty:"Contact us",availability:"Check availability"},
  {id:11,brand:"Skylark",category:"Tractor Battery",model:"Skylark Tractor Battery",application:"Tractor / Agricultural",voltage:"—",capacity:"—",specs:"Contact us for specifications.",warranty:"Contact us",availability:"Check availability"}
];

let activeCategory = "All";
let activeBrand = "All";
let productsOpen = false;
let compareIds = [];

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

function cleanNumber(v){ return String(v).replace(/\D/g,""); }
function whatsappUrl(message){
  const n = cleanNumber(CONFIG.whatsapp);
  return n && !n.includes("ADD") ? `https://wa.me/${n}?text=${encodeURIComponent(message)}` : "#";
}
function showToast(msg){
  const t=$("#toast"); t.textContent=msg; t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),2800);
}
function productMessage(p){
  return `Hello New Sunny Batteries, I want to enquire about ${p.brand} ${p.model}. Please share the current price and availability.`;
}
function renderProducts(){
  const grid=$("#productGrid");
  if(!grid) return;
  const items=PRODUCTS.filter(p=>(activeCategory==="All"||p.category===activeCategory)&&(activeBrand==="All"||p.brand===activeBrand));
  grid.innerHTML=items.map(p=>`
    <article class="product-card">
      <div class="product-image">${p.image?`<img src="${p.image}" alt="${p.brand} ${p.model}" loading="lazy">`:`<div class="mini-battery">${p.category==="Inverter Unit"?"⚡":"ϟ"}</div>`}</div>
      <div class="product-body">
        <span class="tag">${p.brand} · ${p.category}</span>
        <h3>${p.model}</h3>
        <p>${p.application}<br>${p.voltage} · ${p.capacity}</p>
        <div class="product-actions">
          <button class="small-btn primary" onclick="openProductDetails(${p.id})">View Details</button>
          <button class="small-btn" onclick="toggleCompare(${p.id})">${compareIds.includes(p.id)?"✓ Added":"Compare"}</button>
        </div>
      </div>
    </article>`).join("");
}
function openProductDetails(id){
  const p=PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  const modal=$("#productDetailModal");
  if(!modal) return;
  $("#detailImage").src=p.image||"assets/powerzone-logo.png";
  $("#detailImage").alt=`${p.brand} ${p.model}`;
  $("#detailBrand").textContent=`${p.brand} · ${p.category}`;
  $("#detailTitle").textContent=p.model;
  $("#detailApplication").textContent=p.application||"—";
  $("#detailVoltage").textContent=p.voltage||"—";
  $("#detailCapacity").textContent=p.capacity||"—";
  $("#detailSpecs").textContent=p.specs||"—";
  $("#detailWarranty").textContent=p.warranty||"—";
  $("#detailAvailability").textContent=p.availability||"Contact us";
  $("#detailDescription").textContent=p.details||"";
  const extra=$("#detailExtra");
  extra.innerHTML=(p.warrantyDetails?`<p><strong>Warranty / service:</strong> ${p.warrantyDetails}</p>`:"") + (p.compatible?.length?`<div class="compatible-wrap"><strong>Compatible vehicles</strong><p class="fitment-note">Compatibility is a guide based on published PowerZone application data and researched fitment listings. Exact fitment can vary by variant, engine, model year and battery layout—please confirm before purchase.</p><ul>${p.compatible.map(v=>`<li>${v}</li>`).join("")}</ul></div>`:"");
  const msg=productMessage(p);
  $("#detailWhatsApp").href=whatsappUrl(msg);
  $("#detailCall").href=`tel:+916280013605`;
  modal.classList.add("is-open"); modal.setAttribute("aria-hidden","false"); document.body.classList.add("modal-open");
}
function closeProductDetails(){ const modal=$("#productDetailModal"); if(!modal)return; modal.classList.remove("is-open"); modal.setAttribute("aria-hidden","true"); document.body.classList.remove("modal-open"); }

function enquireProduct(id){
  const p=PRODUCTS.find(x=>x.id===id);
  const url=whatsappUrl(productMessage(p));
  if(url!=="#") window.open(url,"_blank"); else showToast("Add your WhatsApp number in script.js first.");
}
function toggleCompare(id){
  if(compareIds.includes(id)) compareIds=compareIds.filter(x=>x!==id);
  else if(compareIds.length<3) compareIds.push(id);
  else return showToast("You can compare up to 3 products.");
  renderProducts(); renderCompare();
}
function renderCompare(){
  const box=$("#compareList");
  const selected=compareIds.map(id=>PRODUCTS.find(p=>p.id===id));
  if(!selected.length){box.innerHTML='<div class="empty">No products selected yet.</div>';$("#compareEnquire").disabled=true;return}
  $("#compareEnquire").disabled=false;
  box.innerHTML=selected.map(p=>`<div class="compare-item"><button onclick="toggleCompare(${p.id})">×</button><span class="tag">${p.brand}</span><h3>${p.model}</h3><p>${p.category}<br>${p.voltage} · ${p.capacity}<br>${p.application}<br>${p.specs}</p></div>`).join("");
}
function setupContact(){
  $$(`[data-call]`).forEach(a=>a.href=CONFIG.phone.startsWith("ADD")?"#":`tel:${CONFIG.phone}`);
  $$(`[data-call2]`).forEach(a=>a.href=CONFIG.phone2.startsWith("ADD")?"#":`tel:${CONFIG.phone2}`);
  $$(`[data-call3]`).forEach(a=>a.href=CONFIG.phone3.startsWith("ADD")?"#":`tel:${CONFIG.phone3}`);
  $$(`[data-whatsapp]`).forEach(a=>a.href=CONFIG.whatsapp.startsWith("ADD")?"#":whatsappUrl("Hello New Sunny Batteries, I would like to enquire about your battery products."));
  $$(`[data-whatsapp2]`).forEach(a=>a.href=CONFIG.whatsapp2.startsWith("ADD")?"#":`https://wa.me/${cleanNumber(CONFIG.whatsapp2)}?text=${encodeURIComponent("Hello New Sunny Batteries, I would like to enquire about your battery products.")}`);
  $$(".contact-phone").forEach(e=>e.textContent=CONFIG.phone.startsWith("ADD")?"Add phone number":`+91 ${CONFIG.phone.slice(2,7)} ${CONFIG.phone.slice(7)}`);
  $$(".contact-phone2").forEach(e=>e.textContent=CONFIG.phone2.startsWith("ADD")?"Add phone number":`+91 ${CONFIG.phone2.slice(2,7)} ${CONFIG.phone2.slice(7)}`);
  $$(".contact-phone3").forEach(e=>e.textContent=CONFIG.phone3.startsWith("ADD")?"Add phone number":`+91 ${CONFIG.phone3.slice(2,7)} ${CONFIG.phone3.slice(7)}`);
  $$(".contact-email").forEach(e=>e.textContent=CONFIG.email.startsWith("ADD")?"Add email address":CONFIG.email);
  $$(`[data-maps]`).forEach(a=>a.href=CONFIG.maps.startsWith("ADD")?"#":CONFIG.maps);
}
$$(".compact-filters .filter").forEach(b=>b.addEventListener("click",()=>{$$(".compact-filters .filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");activeCategory=b.dataset.category;renderProducts()}));

function openProductBrand(brand, category="All"){
  activeBrand=brand; activeCategory=category;
  const panel=$("#productResultsPanel");
  if(panel){panel.classList.add("is-open");panel.setAttribute("aria-hidden","false");}
  const title=$("#selectedBrandTitle");
  if(title) title.textContent=brand + " Products";
  $$(".product-brand-btn").forEach(x=>x.classList.toggle("active",x.dataset.productBrand===brand));
  $$(".compact-filters .filter").forEach(x=>x.classList.toggle("active",x.dataset.category===activeCategory));
  renderProducts();
}
function closeProductResults(){
  const panel=$("#productResultsPanel");
  if(panel){panel.classList.remove("is-open");panel.setAttribute("aria-hidden","true");}
  $$(".product-brand-btn").forEach(x=>x.classList.remove("active"));
}
$$(".product-brand-btn").forEach(b=>b.addEventListener("click",e=>openProductBrand(e.currentTarget.dataset.productBrand)));
$("#closeProductResults").addEventListener("click",closeProductResults);
$$(".category-card button").forEach(b=>b.addEventListener("click",e=>{
  activeCategory=e.currentTarget.closest(".category-card").dataset.filter; activeBrand="All";
  const panel=$("#productResultsPanel"); if(panel){panel.classList.add("is-open");panel.setAttribute("aria-hidden","false");}
  if($("#selectedBrandTitle")) $("#selectedBrandTitle").textContent="Matching Products";
  $$(".compact-filters .filter").forEach(x=>x.classList.toggle("active",x.dataset.category===activeCategory));
  $$(".product-brand-btn").forEach(x=>x.classList.remove("active"));
  document.querySelector("#products").scrollIntoView({behavior:"smooth"}); renderProducts();
}));
$$(".brand-card button").forEach(b=>b.addEventListener("click",e=>{
  openProductBrand(e.currentTarget.dataset.brand);
  document.querySelector("#products").scrollIntoView({behavior:"smooth"});
}));
$$(".finder-options button").forEach(b=>b.addEventListener("click",()=>{
  const c=b.dataset.finder;
  const brands=c==="Car Battery"||c==="Motorcycle Battery"?["PowerZone"]:["Kaycee","Windsor","Skylark"];
  $("#finderResult").innerHTML=`<strong>${c}</strong><br><span>Available brands: ${brands.join(" · ")}</span><br><br><button class="small-btn primary" onclick="activeCategory='${c}';document.querySelector('#products').scrollIntoView({behavior:'smooth'});renderProducts()">View matching products →</button>`;
}));
$("#compareEnquire").addEventListener("click",()=>{
  const names=compareIds.map(id=>{const p=PRODUCTS.find(x=>x.id===id);return `${p.brand} ${p.model}`}).join(", ");
  const url=whatsappUrl(`Hello New Sunny Batteries, I want to enquire about these products: ${names}. Please share current price and availability.`);
  if(url!=="#") window.open(url,"_blank"); else showToast("Add your WhatsApp number in script.js first.");
});
$(".menu-toggle").addEventListener("click",()=>$(".nav").classList.toggle("open"));
$$(".nav a").forEach(a=>a.addEventListener("click",()=>$(".nav").classList.remove("open")));
setupContact();renderProducts();renderCompare();


window.addEventListener("keydown",e=>{if(e.key==="Escape") closeProductDetails();});
