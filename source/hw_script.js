
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
