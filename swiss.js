/* Heataire Swiss pages. Renders markup into #sw-root, then runs the finders. */
(function(){var root=document.getElementById("sw-root");if(!root)return;root.innerHTML="<div class=\"wrap\">\n<div class=\"bar\"><span class=\"logo\">[Brand]</span>\n<nav aria-label=\"Main\"><span>Hydronic</span><button class=\"nv\" data-p=\"hw\" type=\"button\">Hot water heat pumps</button><button class=\"nv on\" data-p=\"pool\" type=\"button\">Pool heat pumps</button><span>Split systems</span><span>Electrification plan</span></nav>\n<div class=\"r2\"><button class=\"tg\" id=\"tg\" type=\"button\" aria-label=\"Switch colour theme\">Dark</button><a class=\"tl to-enq\" href=\"#\">Talk to us</a><button class=\"menubtn\" type=\"button\" id=\"mo\" aria-expanded=\"false\" aria-controls=\"ov\">Menu</button></div></div>\n<div class=\"ov\" id=\"ov\" role=\"dialog\" aria-label=\"Menu\"><div class=\"top\"><span class=\"logo\">[Brand]</span><button class=\"menubtn\" style=\"display:inline-block\" type=\"button\" id=\"mc\">Close &times;</button></div><div class=\"menu\"><div class=\"micro\">Menu</div><a href=\"#\"><sup>00</sup>Home</a><a href=\"#\"><sup>01</sup>Hydronic heating</a><a href=\"#\" data-p=\"hw\"><sup>02</sup>Hot water heat pumps</a><a class=\"on\" href=\"#\" data-p=\"pool\"><sup>03</sup>Pool heat pumps</a><a href=\"#\"><sup>04</sup>Split systems</a><a href=\"#\"><sup>05</sup>Electrification plan</a><a href=\"#\" class=\"to-enq\"><sup>06</sup>Contact</a><p class=\"call2\">Prefer to talk? Call [phone number].</p></div></div>\n\n<main id=\"p-pool\">\n<div class=\"hero\">\n  <h1>warm water, <b>sized right.</b></h1>\n  <div class=\"blob\" role=\"img\" aria-label=\"Photo placeholder\"><i></i><i></i><i></i><span class=\"micro\">Photo</span></div>\n  <p class=\"lede\">Inverter heat pumps for pools, matched to your pool, your season and your solar.</p>\n  <div class=\"meta\">\n    <p><b>Sunlover Oasis iX</b>Seven models, 9 to 36 kW.</p>\n    <p><b>PV Ready</b>Uses surplus solar to heat.</p>\n    <p><b>Three questions</b>To find your size.</p>\n    <p><b>Then a call</b>So we see the whole picture.</p>\n  </div>\n  <div class=\"cta\"><a class=\"btn sig\" href=\"#finder\">Find my size</a><a href=\"#enquire\">Or call us</a></div>\n</div>\n<section id=\"finder\">\n  <div class=\"sec-h\"><span class=\"micro\">01 Your pool</span><h2>Tell us <span class=\"dim\">about it.</span></h2></div>\n  \n  <p class=\"say\">\n    My pool is about\n    <span class=\"w\"><select id=\"size\" aria-label=\"Pool size\"><option value=\"\" selected>choose size</option><option value=\"16\">up to 16 m2</option><option value=\"25\">16 to 25 m2</option><option value=\"40\">25 to 40 m2</option><option value=\"55\">40 to 55 m2</option><option value=\"70\">55 m2 or more</option></select></span>,\n    we swim from\n    <span class=\"w\"><select id=\"season\" aria-label=\"Swimming season\"><option value=\"\" selected>choose season</option><option value=\"oct_mar\">October to March</option><option value=\"sep_apr\">September to April</option><option value=\"year\">all year round</option></select></span>\n    and it has\n    <span class=\"w\"><select id=\"cover\" aria-label=\"Pool cover\"><option value=\"\" selected>a cover?</option><option value=\"b\">a pool cover</option><option value=\"n\">no cover</option></select></span>.\n  </p>\n  <p class=\"help\">Length x width. An 8 x 4 m pool is 32 m2.</p>\n\n  <div class=\"tabs\" role=\"group\" aria-label=\"How would you like to see it\"><span class=\"vlabel\">See it as</span>\n    <button type=\"button\" data-v=\"a\" aria-pressed=\"true\">Plain English</button>\n    <button type=\"button\" data-v=\"b\" aria-pressed=\"false\">Bars</button>\n    <button type=\"button\" data-v=\"c\" aria-pressed=\"false\">Our pick</button>\n    \n  </div>\n  <p class=\"vh\" id=\"vh\"></p>\n  <div class=\"stage\" id=\"stage\" aria-live=\"polite\"></div>\n  <p class=\"fitnote\" style=\"margin-top:28px;font-size:13px;color:var(--mute);max-width:70ch\">This is a guide. A quick call lets us see the sun, wind, equipment and how you swim, and we encourage it. Sizing follows Sunlover's Melbourne chart, using each model's cool-weather output, which is what it delivers on a cold morning.</p>\n</section>\n\n\n<section>\n  <div class=\"sec-h\"><span class=\"micro\">02 Every iX</span><h2>Built in, <span class=\"dim\">not added on.</span></h2></div>\n  <div class=\"two\"><div class=\"l\"></div><div class=\"r\">\n    <div class=\"item\"><h3>Inverter efficiency</h3><p>The compressor adjusts its output instead of switching on and off. Sunlover rate it about 30% more efficient than a standard on/off unit.</p></div>\n    <div class=\"item\"><h3>Runs on your solar</h3><p>PV Ready modes use surplus solar, or pre-heat the pool on a sunny day. Sunlover quote up to 40% lower running costs.</p></div>\n    <div class=\"item\"><h3>Control from your phone</h3><p>WiFi as standard, and a 3.5 inch touch screen for temperature and schedules.</p></div>\n    <div class=\"item\"><h3>Built to last outdoors</h3><p>UV-resistant finish, a 5 year compressor warranty and 25 years on the heat exchanger.</p></div>\n  </div></div>\n</section>\n<section class=\"s-pv\">\n  <div class=\"sec-h\"><span class=\"micro\">03 PV Ready</span><h2>Heat the pool with your own sun.</h2></div>\n  <div class=\"steps\">\n    <div><span class=\"micro\">Morning</span><div class=\"n\">01</div><h3>Sun comes up</h3><p>It picks up surplus solar instead of sending it to the grid.</p></div>\n    <div><span class=\"micro\">Midday</span><div class=\"n\">02</div><h3>Rapid Heat</h3><p>It warms the pool quickly with that free power.</p></div>\n    <div><span class=\"micro\">Afternoon</span><div class=\"n\">03</div><h3>Heat stored</h3><p>It pre-heats so the pool stays warm when cloud rolls in.</p></div>\n    <div><span class=\"micro\">Evening</span><div class=\"n\">04</div><h3>Back to normal</h3><p>At your set temperature it returns to normal running.</p></div>\n  </div>\n</section>\n<section id=\"enquire\" class=\"s-enq\">\n  <div class=\"enq\"><span class=\"micro\">Next</span><div class=\"h\"><h2>talk to us.</h2><div class=\"tel\">[phone number]</div><p>A conversation is the quickest way to the right unit. We check your pool, power and site, then recommend. Prefer to write? Leave your details.</p>\n      <form id=\"f\">\n        <label class=\"f\"><span>Name</span><input id=\"n\" autocomplete=\"name\" placeholder=\"Your name\"></label>\n        <label class=\"f\"><span>Mobile</span><input id=\"m\" type=\"tel\" autocomplete=\"tel\" placeholder=\"04\"></label>\n        <label class=\"f\"><span>Email</span><input id=\"e\" type=\"email\" autocomplete=\"email\" placeholder=\"you@email.com\"></label>\n        <label class=\"f\"><span>Postcode</span><input id=\"p\" inputmode=\"numeric\" autocomplete=\"postal-code\" placeholder=\"3000\"></label>\n        <details><summary>More about your pool (optional)</summary>\n          <div class=\"in\"><label class=\"f\"><span>What heats it now</span><input id=\"h\" placeholder=\"Gas, electric, nothing\"></label><label class=\"f\"><span>Power at the equipment</span><input id=\"pw\" placeholder=\"Single, three phase, not sure\"></label></div></details>\n        <div class=\"full\"><button class=\"btn sig\" type=\"submit\">Book my free assessment</button><div id=\"note\">Preview only. Nothing is sent from here.</div></div>\n      </form></div></div>\n</section>\n</main>\n\n<main id=\"p-hw\" hidden>\n<div class=\"hero\">\n  <h1>hot water, <b>right-sized.</b></h1>\n  <div class=\"blob\" role=\"img\" aria-label=\"Photo placeholder\"><i></i><i></i><i></i><span class=\"micro\">Photo</span></div>\n  <p class=\"lede\">Rinnai and Viessmann heat pumps, chosen for real specifications, solid warranties and support that picks up the phone.</p>\n  <div class=\"meta\">\n    <p><b>Two brands</b>Chosen on purpose.</p>\n    <p><b>Rebates handled</b>We do the paperwork.</p>\n    <p><b>One question</b>To find your size.</p>\n    <p><b>Then a call</b>So we see the whole picture.</p>\n  </div>\n  <div class=\"cta\"><a class=\"btn sig\" href=\"#hw-finder\">Find my size</a><a class=\"to-enq\" href=\"#\">Or call us</a></div>\n</div>\n\n<section id=\"hw-finder\" class=\"s-find\">\n  <div class=\"sec-h\"><span class=\"micro\">01 Your home</span><h2>Tell us <span class=\"dim\">about it.</span></h2></div>\n  <p class=\"say\">There are about <span class=\"w\"><select id=\"hw-people\" aria-label=\"People at home\"><option value=\"\">choose</option><option value=\"1\">1 person</option><option value=\"2\">2 people</option><option value=\"3\">3 people</option><option value=\"4\">4 people</option><option value=\"5\">5 people</option><option value=\"6\">6 people</option><option value=\"7\">7 or more</option></select></span> in our home.</p>\n  <p class=\"help\">Count everyone who showers at home. We add room for guests and busy mornings.</p>\n  <div class=\"tabs\" role=\"group\" aria-label=\"How would you like to see it\"><span class=\"vlabel\">See it as</span><button type=\"button\" data-v=\"a\" aria-pressed=\"true\">Plain English</button><button type=\"button\" data-v=\"b\" aria-pressed=\"false\">Bars</button><button type=\"button\" data-v=\"c\" aria-pressed=\"false\">Our pick</button></div>\n  <div class=\"tabs\" style=\"margin-top:12px\" role=\"group\" aria-label=\"Type of system\"><span class=\"vlabel\">Show</span><button type=\"button\" data-t=\"all\" aria-pressed=\"true\">All</button><button type=\"button\" data-t=\"Plug-in\" aria-pressed=\"false\">Plug-in</button><button type=\"button\" data-t=\"Premium\" aria-pressed=\"false\">Premium</button><button type=\"button\" data-t=\"Split system\" aria-pressed=\"false\">Split system</button><button type=\"button\" data-t=\"Viessmann\" aria-pressed=\"false\">Viessmann</button></div>\n  <p class=\"vh\" id=\"hw-vh\"></p>\n  <div class=\"stage\" id=\"hw-stage\" aria-live=\"polite\"></div>\n  <p class=\"fitnote\" style=\"margin-top:28px;font-size:13px;color:var(--mute);max-width:70ch\">This is a guide. A quick call lets us see your switchboard, where the tank will sit and how your household uses hot water, and we encourage it. Prices are supplied and installed, after the federal rebate. Solar Victoria may reduce them further if you are eligible.</p>\n</section>\n\n<section class=\"s-feat\">\n  <div class=\"sec-h\"><span class=\"micro\">02 Our brands</span><h2>Two brands, <span class=\"dim\">chosen on purpose.</span></h2></div>\n  <div class=\"two\"><div class=\"l\"></div><div class=\"r\">\n    <div class=\"item\"><h3>True specifications</h3><p>We pick on rated performance, not on who has the cheapest box.</p></div>\n    <div class=\"item\"><h3>Warranty that means something</h3><p>Real cylinder and refrigeration cover, with local backing and parts if something ever needs attention.</p></div>\n    <div class=\"item\"><h3>Why not the $800 install?</h3><p>A very cheap install is worth questioning. Rebates can only be claimed once, so claim them on something decent.</p></div>\n    <div class=\"item\"><h3>Rebates handled for you</h3><p>Federal rebates are applied at the point of sale. If you are eligible for Solar Victoria we check it with you and do the paperwork.</p></div>\n  </div></div>\n</section>\n\n<section class=\"s-pv\">\n  <div class=\"sec-h\"><span class=\"micro\">03 How it saves</span><h2>Heat from the air, <span class=\"dim\">not from gas.</span></h2></div>\n  <div class=\"steps\">\n    <div><span class=\"micro\">How</span><div class=\"n\">01</div><h3>Heat from the air</h3><p>It pulls heat from the air around it, like a fridge in reverse.</p></div>\n    <div><span class=\"micro\">Cost</span><div class=\"n\">02</div><h3>A third of the power</h3><p>Roughly a third of the electricity of a standard electric tank.</p></div>\n    <div><span class=\"micro\">Solar</span><div class=\"n\">03</div><h3>Run it on your sun</h3><p>Set it to heat during the day and use your own solar.</p></div>\n    <div><span class=\"micro\">Result</span><div class=\"n\">04</div><h3>Hot water that lasts</h3><p>Sized so there is enough for the whole household.</p></div>\n  </div>\n</section>\n\n<section class=\"s-enq\">\n  <div class=\"enq\"><span class=\"micro\">Next</span><div class=\"h\"><h2>talk to us.</h2><div class=\"tel\">[phone number]</div>\n    <p>A conversation is the quickest way to the right system. We check your switchboard and where the tank will sit, then recommend. Prefer to write? Leave your details.</p>\n    <form id=\"hw-f\">\n      <label class=\"f\"><span>Name</span><input autocomplete=\"name\" placeholder=\"Your name\"></label>\n      <label class=\"f\"><span>Mobile</span><input type=\"tel\" autocomplete=\"tel\" placeholder=\"04\"></label>\n      <label class=\"f\"><span>Email</span><input type=\"email\" autocomplete=\"email\" placeholder=\"you@email.com\"></label>\n      <label class=\"f\"><span>Postcode</span><input inputmode=\"numeric\" autocomplete=\"postal-code\" placeholder=\"3000\"></label>\n      <details><summary>More about your home (optional)</summary>\n        <div class=\"in\"><label class=\"f\"><span>What heats the water now</span><input placeholder=\"Gas storage, gas instant, electric\"></label><label class=\"f\"><span>Concession card (Solar Victoria)</span><input placeholder=\"Yes, no, not sure\"></label></div></details>\n      <div class=\"full\"><button class=\"btn sig\" type=\"submit\">Book my free assessment</button><div class=\"hw-note\" id=\"hw-note\">Preview only. Nothing is sent from here.</div></div>\n    </form></div></div>\n</section>\n</main>\n<div class=\"lb\" id=\"lb\" role=\"dialog\" aria-label=\"Product photo\"><button class=\"x\" type=\"button\" id=\"lbx\">Close &times;</button><div class=\"disc\" id=\"lbd\"></div><div class=\"cap\" id=\"lbc\"></div></div>\n<footer><span>[Brand] by Heataire Services</span><span>South-east Melbourne and the Mornington Peninsula</span><span>38+ years in heating and hot water</span></footer>\n</div>";})();

/* Page routing: each Webflow page sets window.SW_PAGE to 'pool' or 'hw' before this loads. */
var SW_URLS={pool:'/pool-heat-pumps-swiss',hw:'/hot-water-heat-pumps-swiss'};
window.SW_PAGE=window.SW_PAGE||'pool';

window.TH=function(name,kind,size){return '<button type="button" class="th'+(size?' '+size:'')+'" data-name="'+name+'" data-kind="'+kind+'" aria-label="View larger photo of '+name+'"></button>'};
(function(){var lb,d,c,last;
function open(t){lb=lb||document.getElementById('lb');d=document.getElementById('lbd');c=document.getElementById('lbc');last=t;d.setAttribute('data-kind',t.getAttribute('data-kind'));d.textContent=t.getAttribute('data-kind')==='ph'?'Photo coming':'';c.textContent=t.getAttribute('data-name');lb.classList.add('open');document.getElementById('lbx').focus()}
function close(){if(lb)lb.classList.remove('open');if(last)last.focus()}
document.addEventListener('click',function(e){var t=e.target.closest&&e.target.closest('.th');if(t){open(t);return}if(e.target.closest&&(e.target.closest('#lb')))close()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&lb&&lb.classList.contains('open'))close()});
})();


(function(){
  var MODELS=[
    {n:'iX9',d:'Small pools and plunge pools',h:9.4,c:6.6,p:'10 amp plug-in',t:false},
    {n:'iX13',d:'Small to medium pools',h:12.8,c:9.1,p:'15 amp plug-in',t:false},
    {n:'iX19',d:'The average family pool',h:18.9,c:12.5,p:'Hardwired, own circuit',t:false},
    {n:'iX24',d:'Larger pools, longer seasons',h:24.6,c:18.6,p:'Hardwired, own circuit',t:false},
    {n:'iX28T',d:'Large pools, three phase',h:28.9,c:21.4,p:'Three phase, hardwired',t:true},
    {n:'iX28',d:'Large pools, single phase',h:28.0,c:21.7,p:'Hardwired, own circuit',t:false},
    {n:'iX36T',d:'Our biggest, all year swimming',h:36.0,c:27.0,p:'Three phase, hardwired',t:true}
  ].sort(function(a,b){return a.c-b.c});
  var KW={oct_mar:{b:.298,n:.668},sep_apr:{b:.438,n:.98},year:{b:.76,n:1.7}};
  var SIZE={16:16,25:28,40:40,55:56,70:72};
  var TIGHT=1.15;
  var HELP={a:'Each model gets a plain verdict and one sentence on why. No chart to decode.',b:'Each bar is what the unit delivers on a cool day. The dashed line is what your pool needs. Our pick is in red.',c:'One clear recommendation, with the size either side for context.'};
  var el={size:document.getElementById('size'),season:document.getElementById('season'),cover:document.getElementById('cover')};
  var stage=document.getElementById('stage'),vh=document.getElementById('vh'),variant='a';
  try{var sv=localStorage.getItem('poolView');if(sv==='a'||sv==='b'||sv==='c')variant=sv}catch(e){}
  function fit(r){return r<1?{k:'small',w:'Too small',cls:'bad'}:r<TIGHT?{k:'tight',w:'Just enough',cls:'mid'}:r<1.6?{k:'good',w:'Good fit',cls:'ok'}:{k:'over',w:'More than you need',cls:'mid'}}
  function why(m,f,need){
    var g='Gives '+m.c.toFixed(1)+' kW on a cool day, your pool needs about '+need.toFixed(0)+'. ';
    if(f.k==='small')return g+'It would struggle.';
    if(f.k==='tight')return g+'It would cover it, with no headroom.';
    if(f.k==='good')return g+'Comfortable headroom.';
    return g+'More power than this pool calls for.';
  }
  function specs(m){return '<div class="spec"><b>'+m.h.toFixed(1)+' kW</b> heating<span>'+m.c.toFixed(1)+' kW cool weather</span><span>'+m.p+'</span></div>'}
  function calc(){
    var v={size:el.size.value,season:el.season.value,cover:el.cover.value};
    ['size','season','cover'].forEach(function(k){el[k].classList.toggle('empty',!v[k])});
    var need=null,best=null,rec=null,stepped=false;
    if(v.size&&v.season&&v.cover){
      need=KW[v.season][v.cover]*SIZE[v.size];
      var ok=MODELS.filter(function(m){return m.c>=need});
      var single=ok.filter(function(m){return !m.t});
      var list=single.length?single:ok;
      best=list[0]||null;rec=best;
      if(best&&best.c/need<TIGHT&&list[1]){rec=list[1];stepped=true}
    }
    return {need:need,best:best,rec:rec,stepped:stepped};
  }
  function recText(r){return r.stepped?'The '+r.best.n+' would just cover your pool, with no headroom for cold snaps. We recommend stepping up to the '+r.rec.n+'. Gives '+r.rec.c.toFixed(1)+' kW on a cool day, your pool needs about '+r.need.toFixed(0)+'.':'Suits your pool. '+why(r.rec,fit(r.rec.c/r.need),r.need).replace(/ Comfortable headroom\.| More power than this pool calls for\.| It would cover it, with no headroom\./,'')}
  function empty(){return '<p class="vd mid" style="max-width:30ch">Complete the sentence above and we will show what suits your pool.</p>'}
  function nofit(){return '<p class="vd">Let us size this one.</p><p class="sp2" style="margin-top:10px;max-width:50ch">A pool this size for this season needs more than a single unit from our range, so we would work out the right setup with you on a call.</p>'}
  function rowsA(r){
    return MODELS.map(function(m){
      var f=fit(m.c/r.need),b=m===r.rec;
      var head=b?'Our pick':f.w, cls=b?'ok':f.cls;
      var line=b?recText(r):why(m,f,r.need);
      return '<div class="ra'+(b?' best':'')+'"><div class="hd">'+TH(m.n,'ph')+'<div>'+(b?'<span class="tag-best">Our pick</span>':'')+'<h3>'+m.n+'</h3><p class="sp2">'+m.d+'</p></div></div><div><p class="vd '+cls+'">'+head+'</p><p class="sp2" style="margin-top:6px">'+line+'</p></div>'+specs(m)+'</div>';
    }).join('');
  }
  function rowsB(r){
    var MAX=30,pct=Math.min(r.need/MAX*100,100);
    var head='<div class="bh"><span></span><div class="needlab"><span style="left:'+pct+'%">Your pool needs '+r.need.toFixed(0)+' kW</span></div><span></span></div>';
    return head+MODELS.map(function(m){
      var f=fit(m.c/r.need),b=m===r.rec;
      return '<div class="bar2'+(b?' best':'')+'"><div class="hd">'+TH(m.n,'ph','sm')+'<h3>'+m.n+'</h3></div><div class="track"><div class="fill'+(f.k==='small'?' short':'')+(b?' pick':'')+'" style="width:'+(m.c/MAX*100)+'%"></div><div class="need" style="left:'+pct+'%"></div></div><div class="r2b"><b class="'+(f.k==='small'?'bad':'')+'">'+(b?'Our pick':f.w)+'</b><span>'+m.c.toFixed(1)+' kW cool weather</span></div></div>';
    }).join('')+(r.stepped?'<p class="sp2" style="margin-top:14px">'+recText(r)+'</p>':'');
  }
  function cardC(m,r,label,cls){
    var f=fit(m.c/r.need);
    var line=(cls==='hero2')?recText(r):why(m,f,r.need);
    return '<div class="cardc '+cls+'">'+TH(m.n,'ph',cls==='hero2'?'lg':'')+'<span class="lbl">'+label+'</span><h3>'+m.n+'</h3><p class="sp2">'+m.d+'</p><p class="'+(cls==='hero2'?'':'sp2')+'" style="font-size:'+(cls==='hero2'?'18px':'13px')+'">'+line+'</p>'+specs(m)+'</div>';
  }
  function viewC(r){
    var list=MODELS.filter(function(m){return !m.t||m===r.rec});
    var i=list.indexOf(r.rec),prev=list[i-1],next=list[i+1];
    return '<div class="cc">'+(prev?cardC(prev,r,r.stepped&&prev===r.best?'Would just cover it':'A size down','small'):'<div></div>')+cardC(r.rec,r,'We would put in','hero2')+(next?cardC(next,r,'A size up','small'):'<div></div>')+'</div>';
  }
  function neutral(){
    return MODELS.map(function(m){return '<div class="ra"><div class="hd">'+TH(m.n,'ph')+'<div><h3>'+m.n+'</h3><p class="sp2">'+m.d+'</p></div></div><div></div>'+specs(m)+'</div>'}).join('');
  }
  function render(){
    vh.textContent=HELP[variant];
    var r=calc();
    if(r.need===null){stage.innerHTML=empty()+'<div style="margin-top:28px;border-top:1px solid var(--ink)">'+neutral()+'</div>';return}
    if(!r.best){stage.innerHTML=nofit();return}
    stage.innerHTML=variant==='a'?rowsA(r):variant==='b'?rowsB(r):viewC(r);
  }
  ['size','season','cover'].forEach(function(k){el[k].addEventListener('change',render)});
  Array.prototype.forEach.call(document.querySelectorAll('#p-pool .tabs button'),function(b){b.addEventListener('click',function(){variant=b.getAttribute('data-v');try{localStorage.setItem('poolView',variant)}catch(e){}Array.prototype.forEach.call(document.querySelectorAll('#p-pool .tabs button'),function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});render()})});
  el.size.value='25';el.season.value='oct_mar';el.cover.value='b';
  Array.prototype.forEach.call(document.querySelectorAll('#p-pool .tabs button'),function(x){x.setAttribute('aria-pressed',x.getAttribute('data-v')===variant?'true':'false')});
  render();
})();


(function(){
  var ov=document.getElementById('ov'),mo=document.getElementById('mo');
  function set(o){ov.classList.toggle('open',o);mo.setAttribute('aria-expanded',o?'true':'false');document.body.style.overflow=o?'hidden':''}
  mo.addEventListener('click',function(){set(true)});
  document.getElementById('mc').addEventListener('click',function(){set(false)});
  Array.prototype.forEach.call(ov.querySelectorAll('a'),function(a){a.addEventListener('click',function(){set(false)})});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
  var f=document.getElementById('f');f.addEventListener('submit',function(e){e.preventDefault();document.getElementById('note').textContent='Preview only. On the live page this goes to your enquiry form.'});
})();

(function(){
  var root=document.documentElement,tg=document.getElementById('tg');
  function isDark(){var t=root.getAttribute('data-theme');if(t)return t==='dark';return window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches}
  function label(){tg.textContent=isDark()?'Light':'Dark'}
  try{var sv=localStorage.getItem('poolTheme');if(sv==='dark'||sv==='light')root.setAttribute('data-theme',sv)}catch(e){}
  label();
  tg.addEventListener('click',function(){var n=isDark()?'light':'dark';root.setAttribute('data-theme',n);try{localStorage.setItem('poolTheme',n)}catch(e){}label()});
})();

(function(){
  var HW=[
    {n:'Enviroflo GR 180L',r:'Plug-in',l:180,pm:2,pr:'$3,407',s:1,aus:false},
    {n:'Enviroflo GR 265L',r:'Plug-in',l:265,pm:5,pr:'$3,682',s:2,aus:false},
    {n:'Enviroflo GR 300L',r:'Plug-in',l:300,pm:6,pr:'$4,043',s:3,aus:false},
    {n:'Enviroflo AR 300L',r:'Premium',l:300,pm:6,pr:'$4,695',s:4,aus:true},
    {n:'Enviroflo AR 340L',r:'Premium',l:340,pm:7,pr:'$4,890',s:5,aus:true},
    {n:'Viessmann Vitocal 161-A 200L',r:'Viessmann',l:200,pm:2,pr:'',s:6,aus:false},
    {n:'Viessmann Vitocal 161-A 270L',r:'Viessmann',l:270,pm:4,pr:'',s:7,aus:false},
    {n:'Enviroflo S 7kW + 250L',r:'Split system',l:250,pm:5,pr:'',s:8,aus:true},
    {n:'Enviroflo S 5kW + 250L',r:'Split system',l:250,pm:5,pr:'',s:9,aus:false},
    {n:'Enviroflo S 7kW + 315L',r:'Split system',l:315,pm:5,pr:'',s:10,aus:true},
    {n:'Enviroflo S 5kW + 315L',r:'Split system',l:315,pm:5,pr:'',s:11,aus:false},
    {n:'Enviroflo S 7kW + 400L',r:'Split system',l:400,pm:5,pr:'',s:12,aus:true}
  ];
  var sel=document.getElementById('hw-people'),stage=document.getElementById('hw-stage'),vh=document.getElementById('hw-vh');
  var view='a',type='all',showAll=false;
  try{var sv=localStorage.getItem('poolView');if(sv==='a'||sv==='b'||sv==='c')view=sv}catch(e){}
  var HELP={a:'Each system gets a plain verdict and one sentence on why. No chart to decode.',b:'Each bar is how many people the system suits. The dashed line is what your home needs. Our pick is in red.',c:'One clear recommendation, with the size either side for context.'};
  function power(m){return (m.r==='Plug-in'||m.r==='Viessmann')?'Standard power point':'Dedicated 15 amp circuit'}
  function price(m){return m.pr?m.pr+' after federal rebate':'Price on request'}
  function specs(m){return '<div class="spec"><b>'+m.l+' L</b> tank<span>'+power(m)+'</span><span>'+price(m)+'</span></div>'}
  function fit(m,p,need){return m.pm<p?{k:'small',w:'Too small',cls:'bad'}:m.pm<need?{k:'tight',w:'Just enough',cls:'mid'}:m.pm<=need+1?{k:'good',w:'Good fit',cls:'ok'}:{k:'over',w:'More than you need',cls:'mid'}}
  function why(m,f,p){
    var g='Suits up to '+m.pm+' people, your home has '+(p>=7?'7 or more':p)+'. ';
    return f.k==='small'?g+'It would struggle.':f.k==='tight'?g+'It would cover it, with no headroom for guests or busy mornings.':f.k==='good'?g+'Comfortable for your home.':g+'More tank than your home calls for.';
  }
  function recLine(m,f,p){return 'Suits your home. '+why(m,f,p).replace(/ Comfortable for your home\.| More tank than your home calls for\./,'')}
  function calc(){
    var p=parseInt(sel.value,10)||null;if(!p)return {p:null};
    var need=p>=3?p+1:p;
    var list=HW.filter(function(m){return type==='all'||m.r===type}).sort(function(a,b){return a.s-b.s});
    var ok=list.filter(function(m){return m.pm>=need});
    return {p:p,need:need,list:list,rec:ok[0]||null};
  }
  function tagrow(m){return '<span class="rtag">'+m.r+'</span>'+(m.aus?'<span class="aus">Australian made</span>':'')}
  function kind(m){return m.r==='Viessmann'?'ph':'rinnai'}
  function head(m,b){return '<div class="hd">'+TH(m.n,kind(m))+'<div>'+(b?'<span class="tag-best">Our pick</span>':'')+'<h3>'+m.n+'</h3><p class="sp2">'+tagrow(m)+'</p></div></div>'}
  function visible(r){
    if(showAll)return r.list;
    var arr=r.list.filter(function(m){var f=fit(m,r.p,r.need);return m===r.rec||f.k==='good'||f.k==='tight'});
    if(arr.length>4){var rest=arr.filter(function(m){return m!==r.rec}).slice(0,3);arr=[r.rec].concat(rest).sort(function(a,b){return a.s-b.s})}
    return arr;
  }
  function moreBtn(r,n){
    if(r.list.length===n&&!showAll)return '';
    return '<button type="button" class="more-btn" id="hw-more">'+(showAll?'Show fewer':'Show all '+r.list.length+' systems')+'</button>';
  }
  function rowsA(r){
    var v=visible(r);
    return v.map(function(m){var f=fit(m,r.p,r.need),b=m===r.rec;
      var line=b?recLine(m,f,r.p):why(m,f,r.p);
      return '<div class="ra hwn'+(b?' best':'')+'"><div>'+head(m,b)+'</div><div><p class="vd '+(b?'ok':f.cls)+'">'+(b?'Our pick':f.w)+'</p><p class="sp2" style="margin-top:6px">'+line+'</p></div>'+specs(m)+'</div>'}).join('')+moreBtn(r,v.length);
  }
  function rowsB(r){
    var MAX=8,pct=Math.min(r.need/MAX*100,100),v=visible(r);
    var hd='<div class="bh"><span></span><div class="needlab"><span style="left:'+pct+'%">Your home needs room for '+r.need+'</span></div><span></span></div>';
    return hd+v.map(function(m){var f=fit(m,r.p,r.need),b=m===r.rec;
      return '<div class="bar2'+(b?' best':'')+'"><div class="hd">'+TH(m.n,kind(m),'sm')+'<h3 style="font-size:15px">'+m.n+'</h3></div><div class="track"><div class="fill'+(f.k==='small'?' short':'')+(b?' pick':'')+'" style="width:'+(m.pm/MAX*100)+'%"></div><div class="need" style="left:'+pct+'%"></div></div><div class="r2b"><b>'+(b?'Our pick':f.w)+'</b><span>Up to '+m.pm+' people, '+m.l+' L</span></div></div>'}).join('')+moreBtn(r,v.length);
  }
  function cardC(m,r,label,cls){
    var f=fit(m,r.p,r.need);
    var line=cls==='hero2'?recLine(m,f,r.p):why(m,f,r.p);
    return '<div class="cardc '+cls+'">'+TH(m.n,kind(m),cls==='hero2'?'lg':'')+'<span class="lbl">'+label+'</span><h3 style="font-size:'+(cls==='hero2'?'clamp(30px,4vw,56px)':'clamp(22px,2.6vw,32px)')+'">'+m.n+'</h3><p class="sp2">'+tagrow(m)+'</p><p class="'+(cls==='hero2'?'':'sp2')+'" style="font-size:'+(cls==='hero2'?'18px':'13px')+'">'+line+'</p>'+specs(m)+'</div>';
  }
  function viewC(r){
    var list=r.list.slice().sort(function(a,b){return a.pm-b.pm||a.s-b.s});
    var i=list.indexOf(r.rec),prev=null,next=null,j;
    for(j=i-1;j>=0;j--){if(list[j].pm<r.rec.pm){prev=list[j];break}}
    for(j=i+1;j<list.length;j++){if(list[j].pm>r.rec.pm){next=list[j];break}}
    var pf=prev?fit(prev,r.p,r.need):null;
    return '<div class="cc">'+(prev?cardC(prev,r,pf.k==='tight'?'Would just cover it':'A size down','small'):'<div></div>')+cardC(r.rec,r,'We would put in','hero2')+(next?cardC(next,r,'A size up','small'):'<div></div>')+'</div>';
  }
  function neutral(){return HW.filter(function(m){return type==='all'||m.r===type}).map(function(m){return '<div class="ra hwn"><div>'+head(m,false)+'</div><div></div>'+specs(m)+'</div>'}).join('')}
  function render(){
    vh.textContent=HELP[view];
    var r=calc();
    if(!r.p){stage.innerHTML='<p class="vd mid" style="max-width:30ch">Choose how many people are at home and we will show what suits.</p><div style="margin-top:28px;border-top:1px solid var(--ink)">'+neutral()+'</div>';return}
    if(!r.list.length){stage.innerHTML='<p class="vd">Nothing in this range yet.</p>';return}
    if(!r.rec){stage.innerHTML='<p class="vd">Let us size this one.</p><p class="sp2" style="margin-top:10px;max-width:50ch">A home this size usually needs a larger system, or more than one. Call us and we will work out the right setup with you.</p>';return}
    stage.innerHTML=view==='a'?rowsA(r):view==='b'?rowsB(r):viewC(r);
    var mb=document.getElementById('hw-more');if(mb)mb.addEventListener('click',function(){showAll=!showAll;render()});
  }
  sel.addEventListener('change',function(){showAll=false;render()});
  var root=document.getElementById('p-hw');
  function sync(){Array.prototype.forEach.call(root.querySelectorAll('.tabs button[data-v]'),function(x){x.setAttribute('aria-pressed',x.getAttribute('data-v')===view?'true':'false')});Array.prototype.forEach.call(root.querySelectorAll('.tabs button[data-t]'),function(x){x.setAttribute('aria-pressed',x.getAttribute('data-t')===type?'true':'false')})}
  Array.prototype.forEach.call(root.querySelectorAll('.tabs button[data-v]'),function(b){b.addEventListener('click',function(){view=b.getAttribute('data-v');try{localStorage.setItem('poolView',view)}catch(e){}sync();render()})});
  Array.prototype.forEach.call(root.querySelectorAll('.tabs button[data-t]'),function(b){b.addEventListener('click',function(){type=b.getAttribute('data-t');showAll=false;sync();render()})});
  sel.value='4';sync();render();
  document.getElementById('hw-f').addEventListener('submit',function(e){e.preventDefault();document.getElementById('hw-note').textContent='Preview only. On the live page this goes to your enquiry form.'});

  var pages={pool:document.getElementById('p-pool'),hw:document.getElementById('p-hw')};
  function go(p){
    pages.pool.hidden=p!=='pool';pages.hw.hidden=p!=='hw';
    Array.prototype.forEach.call(document.querySelectorAll('.nv'),function(n){n.classList.toggle('on',n.getAttribute('data-p')===p)});
    Array.prototype.forEach.call(document.querySelectorAll('.ov a[data-p]'),function(n){n.classList.toggle('on',n.getAttribute('data-p')===p)});
    window.scrollTo(0,0);
  }
  Array.prototype.forEach.call(document.querySelectorAll('[data-p]'),function(n){n.addEventListener('click',function(e){e.preventDefault();go(n.getAttribute('data-p'))})});
  Array.prototype.forEach.call(document.querySelectorAll('.to-enq'),function(a){a.addEventListener('click',function(e){e.preventDefault();var t=document.querySelector('main:not([hidden]) .s-enq');if(t)t.scrollIntoView({behavior:'smooth'})})});
})();

/* Navigate between real pages instead of switching in place; show the right page on load. */
(function(){
  var cur=window.SW_PAGE,P={pool:document.getElementById('p-pool'),hw:document.getElementById('p-hw')};
  P.pool.hidden=cur!=='pool';P.hw.hidden=cur!=='hw';
  Array.prototype.forEach.call(document.querySelectorAll('.nv,.ov a[data-p]'),function(n){n.classList.toggle('on',n.getAttribute('data-p')===cur)});
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('[data-p]');if(!a)return;
    var p=a.getAttribute('data-p');if(p===cur)return;
    e.preventDefault();e.stopImmediatePropagation();window.location.href=SW_URLS[p];
  },true);
})();
