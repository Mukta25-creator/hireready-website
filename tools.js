// ---- Resume builder ----
const f=document.getElementById("rf"),pv=document.getElementById("preview"),KEY="hr_resume";
const esc=s=>s.replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
const lines=s=>s.split("\n").map(x=>x.trim()).filter(Boolean);
const ul=s=>lines(s).length?"<ul>"+lines(s).map(x=>"<li>"+esc(x)+"</li>").join("")+"</ul>":"";
function render(){
  const d=Object.fromEntries(new FormData(f));
  try{localStorage.setItem(KEY,JSON.stringify(d))}catch(e){}
  const c=[d.email,d.phone,d.link].filter(Boolean).map(esc).join(" | ");
  const sec=(t,h)=>h?`<h2>${t}</h2>${h}`:"";
  pv.innerHTML=`<h1>${esc(d.name||"Your Name")}</h1><p>${c||"email | phone | link"}</p>`+
   sec("SUMMARY",d.summary?`<p>${esc(d.summary)}</p>`:"")+
   sec("EDUCATION",lines(d.edu).map(x=>`<p>${esc(x)}</p>`).join(""))+
   sec("SKILLS",d.skills?`<p>${esc(d.skills)}</p>`:"")+sec("PROJECTS",ul(d.projects))+sec("EXPERIENCE",ul(d.exp));
}
try{const s=JSON.parse(localStorage.getItem(KEY)||"{}");for(const k in s)if(f.elements[k])f.elements[k].value=s[k]}catch(e){}
f.addEventListener("input",render);render();
document.getElementById("pdf").onclick=()=>print();
document.getElementById("clr").onclick=()=>{f.reset();render()};

// ---- ATS checker ----
const VERBS="built developed designed implemented created led managed improved analyzed automated deployed optimized delivered launched reduced increased trained tested wrote organized".split(" ");
const STOP=new Set("the and for with you are will our your this that from have has can able work team role who job years year experience skills required responsibilities a an of to in on or as is be by at we it".split(" "));
document.getElementById("chk").onclick=()=>{
  const t=document.getElementById("rt").value,l=t.toLowerCase(),jd=document.getElementById("jd").value.toLowerCase(),out=document.getElementById("out");
  if(t.trim().length<50){out.innerHTML="<p>Paste your full resume text first.</p>";return}
  const words=t.trim().split(/\s+/).length;
  const checks=[
   ["Email address",/[\w.+-]+@[\w-]+\.\w+/.test(t),10,"Add a professional email."],
   ["Phone number",/(\+?\d[\d\s-]{8,})/.test(t),5,"Add a phone number."],
   ["Education section",/education|b\.?tech|b\.?e\b|bca|mca|b\.?sc|degree/.test(l),10,"Add an Education heading."],
   ["Skills section",/skills|technologies|tools/.test(l),15,"Add a Skills heading with a clear list."],
   ["Projects or experience",/projects?|experience|intern/.test(l),15,"Add Projects or Experience with bullet points."],
   ["Action verbs",VERBS.filter(v=>l.includes(v)).length>=4,10,"Start bullets with verbs like built, designed, improved."],
   ["Numbers showing results",(t.match(/\d+%|\d+\+|\b\d{2,}\b/g)||[]).length>=3,15,"Add numbers, e.g. 'reduced load time by 30%'."],
   ["Good length (200 to 800 words)",words>=200&&words<=800,10,words<200?"Resume is short. Add detail.":"Resume is long. Trim to one or two pages."],
   ["Links (LinkedIn or GitHub)",/linkedin|github/.test(l),10,"Add your LinkedIn or GitHub link."]];
  let score=checks.reduce((a,c)=>a+(c[1]?c[2]:0),0),miss=[];
  if(jd.trim()){
    const kw=[...new Set(jd.match(/[a-z][a-z+#.]{2,}/g)||[])].filter(w=>!STOP.has(w));
    const freq={};kw.forEach(w=>freq[w]=(jd.split(w).length-1));
    const top=kw.sort((a,b)=>freq[b]-freq[a]).slice(0,20);
    miss=top.filter(w=>!l.includes(w));
    score=Math.round(score*0.7+(1-miss.length/Math.max(top.length,1))*30);
  }
  out.innerHTML=`<p style="margin:0">Your score</p><div class="score" style="box-shadow:none;border:0;padding:0"><div class="big">${score}<small style="font-size:1.1rem;color:var(--muted)">/100</small></div></div><div class="bar"><i style="width:${score}%"></i></div>
  <ul class="chk">${checks.map(c=>`<li class="${c[1]?"":"no"}">${c[0]}${c[1]?"":": "+c[3]}</li>`).join("")}</ul>
  ${jd.trim()?`<h3 style="margin-top:14px">Keywords from the job description missing in your resume</h3>${miss.length?miss.map(w=>`<span class="miss">${esc(w)}</span>`).join(""):"<p>None. Good match.</p>"}`:"<p class='note'>Add a job description to see keyword matches.</p>"}
  <p style="font-size:.9rem;color:var(--muted);margin-top:12px">This is a guide based on common ATS rules, not a guarantee.</p>`;
};
