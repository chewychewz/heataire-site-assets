import re
s=open('pool-swiss-backup.html').read()
s=s.replace('<title>Pool Heat Pumps</title>','<title>Heat Pump Pages</title>')
s=s.replace('<nav aria-label="Main"><span>Hydronic</span><span>Hot water</span><span class="on">Pool heat pumps</span><span>Split systems</span><span>Electrification plan</span></nav>',
 '<nav aria-label="Main"><span>Hydronic</span><button class="nv" data-p="hw" type="button">Hot water heat pumps</button><button class="nv on" data-p="pool" type="button">Pool heat pumps</button><span>Split systems</span><span>Electrification plan</span></nav>')
s=s.replace('<a href="#"><sup>02</sup>Hot water heat pumps</a>','<a href="#" data-p="hw"><sup>02</sup>Hot water heat pumps</a>')
s=s.replace('<a class="on" href="#"><sup>03</sup>Pool heat pumps</a>','<a class="on" href="#" data-p="pool"><sup>03</sup>Pool heat pumps</a>')
s=s.replace('<a href="#enquire"><sup>06</sup>Contact</a>','<a href="#" class="to-enq"><sup>06</sup>Contact</a>')
s=s.replace('<a class="tl" href="#enquire">Talk to us</a>','<a class="tl to-enq" href="#">Talk to us</a>')
s=s.replace('<section id="enquire" style="padding-block:72px 0">','<section id="enquire" class="s-enq">')
a=s.index('<div class="hero">'); b=s.index('<footer class="s-foot">') if '<footer class="s-foot">' in s else s.index('<footer>')
pool=s[a:b]
hw=open('hw_markup.html').read()
s=s[:a]+'<main id="p-pool">\n'+pool+'</main>\n'+hw+s[b:]
css='''
.nv{font:inherit;color:var(--mute);background:none;border:0;padding:0;cursor:pointer}
.nv.on,.nv:hover{color:var(--ink)}
.hwn h3{font-size:clamp(20px,2.3vw,30px)}
.more-btn{margin-top:18px;font:500 13px var(--font);background:transparent;color:var(--ink);border:1px solid var(--line);border-radius:999px;padding:9px 16px;cursor:pointer}
.rtag{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--mute);font-weight:500}
.aus{display:inline-block;margin-left:8px;font-size:10px;letter-spacing:.08em;text-transform:uppercase;border:1px solid var(--ink);border-radius:999px;padding:2px 7px;color:var(--ink);vertical-align:middle}
main[hidden]{display:none}
.hw-note{font-size:12px;color:var(--mute);margin-top:12px}
'''
s=s.replace('</style>',css+'</style>',1)
s=s.replace("document.querySelectorAll('.tabs button')","document.querySelectorAll('#p-pool .tabs button')")
js=open('hw_script.js').read()
i=s.rindex('</script>'); s=s[:i]+js+s[i:]

b64=open('rinnai_b64.txt').read()
css2="""
:root{--rinnai:url(data:image/jpeg;base64,"""+b64+""")}
.th{width:56px;height:56px;border-radius:50%;flex:none;border:0;padding:0;cursor:zoom-in;position:relative;overflow:hidden;background:var(--blobbg) center/cover no-repeat;box-shadow:0 0 0 1px var(--line);transition:transform .2s}
.th.sm{width:36px;height:36px}.th.lg{width:120px;height:120px;margin-bottom:10px}
.th[data-kind="rinnai"]{background-image:var(--rinnai)}
.th[data-kind="ph"]{background:radial-gradient(circle at 36% 38%,var(--blob) 0,transparent 44%),radial-gradient(circle at 70% 72%,var(--blob) 0,transparent 30%),var(--blobbg)}
.th:after{content:"";position:absolute;inset:0;border-radius:50%;background:var(--sig);mix-blend-mode:multiply;opacity:0;transition:opacity .2s}
.th:hover:after,.th:focus-visible:after,.best .th:after,.cardc.hero2 .th:after{opacity:1}
.th:hover{transform:scale(1.04)}
.hd{display:flex;gap:16px;align-items:center;min-width:0}.hd>div,.hd>h3{min-width:0}
.lb{position:fixed;inset:0;z-index:300;display:none;place-items:center;background:rgba(10,10,10,.55);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);cursor:zoom-out}
.lb.open{display:grid}
.lb .disc{width:min(74vmin,600px);aspect-ratio:1;border-radius:50%;background:var(--blobbg) center/cover no-repeat;box-shadow:0 40px 100px -30px rgba(0,0,0,.6);animation:pop .28s cubic-bezier(.2,.8,.2,1);display:grid;place-items:center;color:var(--mute);font-size:14px}
.lb .disc[data-kind="rinnai"]{background-image:var(--rinnai)}
.lb .disc[data-kind="ph"]{background:radial-gradient(circle at 36% 38%,var(--blob) 0,transparent 46%),radial-gradient(circle at 70% 72%,var(--blob) 0,transparent 32%),var(--blobbg)}
.lb .cap{position:absolute;bottom:5vh;left:0;right:0;text-align:center;color:#fff;font-size:14px;letter-spacing:-.01em}
.lb .x{position:absolute;top:calc(env(safe-area-inset-top,0px) + 18px);right:18px;font:500 13px var(--font);background:#fff;color:#0A0A0A;border:0;border-radius:999px;padding:9px 16px;cursor:pointer}
@keyframes pop{from{transform:scale(.5);opacity:0}to{transform:none;opacity:1}}
@media (prefers-reduced-motion:reduce){.lb .disc{animation:none}}
@media (max-width:860px){.th{width:48px;height:48px}.hd{gap:12px}}
"""
s=s.replace('</style>',css2+'</style>',1)
lbhtml='<div class="lb" id="lb" role="dialog" aria-label="Product photo"><button class="x" type="button" id="lbx">Close &times;</button><div class="disc" id="lbd"></div><div class="cap" id="lbc"></div></div>\n'
s=s.replace('<footer class="s-foot">',lbhtml+'<footer class="s-foot">',1) if '<footer class="s-foot">' in s else s.replace('<footer>',lbhtml+'<footer>',1)
thjs="""<script>
window.TH=function(name,kind,size){return '<button type="button" class="th'+(size?' '+size:'')+'" data-name="'+name+'" data-kind="'+kind+'" aria-label="View larger photo of '+name+'"></button>'};
(function(){var lb,d,c,last;
function open(t){lb=lb||document.getElementById('lb');d=document.getElementById('lbd');c=document.getElementById('lbc');last=t;d.setAttribute('data-kind',t.getAttribute('data-kind'));d.textContent=t.getAttribute('data-kind')==='ph'?'Photo coming':'';c.textContent=t.getAttribute('data-name');lb.classList.add('open');document.getElementById('lbx').focus()}
function close(){if(lb)lb.classList.remove('open');if(last)last.focus()}
document.addEventListener('click',function(e){var t=e.target.closest&&e.target.closest('.th');if(t){open(t);return}if(e.target.closest&&(e.target.closest('#lb')))close()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&lb&&lb.classList.contains('open'))close()});
})();
</script>
"""
s=s.replace('<script>\n(function(){',thjs+'<script>\n(function(){',1)
# pool thumbnails
def rep(o,n):
    global s
    assert o in s,o[:60]
    s=s.replace(o,n)
rep("""'<div class="ra'+(b?' best':'')+'"><div>'+(b?'<span class="tag-best">Our pick</span>':'')+'<h3>'+m.n+'</h3><p class="sp2">'+m.d+'</p></div>""","""'<div class="ra'+(b?' best':'')+'"><div class="hd">'+TH(m.n,'ph')+'<div>'+(b?'<span class="tag-best">Our pick</span>':'')+'<h3>'+m.n+'</h3><p class="sp2">'+m.d+'</p></div></div>""")
rep("""'<div class="bar2'+(b?' best':'')+'"><h3>'+m.n+'</h3>""","""'<div class="bar2'+(b?' best':'')+'"><div class="hd">'+TH(m.n,'ph','sm')+'<h3>'+m.n+'</h3></div>""")
rep("""'<div class="cardc '+cls+'"><span class="lbl">'+label+'</span><h3>'""","""'<div class="cardc '+cls+'">'+TH(m.n,'ph',cls==='hero2'?'lg':'')+'<span class="lbl">'+label+'</span><h3>'""")
rep("""'<div class="ra"><div><h3>'+m.n+'</h3><p class="sp2">'+m.d+'</p></div><div></div>'""","""'<div class="ra"><div class="hd">'+TH(m.n,'ph')+'<div><h3>'+m.n+'</h3><p class="sp2">'+m.d+'</p></div></div><div></div>'""")
s=s.replace('grid-template-columns:100px minmax(0,1fr) 140px','grid-template-columns:150px minmax(0,1fr) 140px')

open('pool-swiss.html','w').write(s)
print('ok')
