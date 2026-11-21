(function(){
const C=window.HR,pages=[["index.html","Home"],["free-tools.html","Free tools"],["resources.html","Resources"],["courses.html","Courses"],["colleges.html","For colleges"],["about.html","About"]];
const cur=location.pathname.split("/").pop()||"index.html";
document.getElementById("site-header").outerHTML=`<header class="site-header"><div class="wrap"><a class="logo" href="index.html">Hire<b>Ready</b></a>
<button class="menu-btn" aria-expanded="false" aria-controls="nav">Menu</button>
<nav id="nav" aria-label="Main"><ul>${pages.map(p=>`<li><a href="${p[0]}" ${p[0]===cur?'aria-current="page"':''}>${p[1]}</a></li>`).join("")}</ul></nav></div></header>`;
document.getElementById("site-footer").outerHTML=`<footer class="site-footer"><div class="wrap"><p><strong>${C.brand}</strong>: ${C.tagline}.</p>
<p>Write to <a href="mailto:${C.email}">${C.email}</a> or <a href="https://wa.me/${C.whatsapp}">WhatsApp us</a>.</p><p>© ${new Date().getFullYear()} ${C.brand}. All rights reserved.</p></div></footer>`;
const b=document.querySelector(".menu-btn"),n=document.getElementById("nav");
b.onclick=()=>{const o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)};
document.querySelectorAll("[data-link]").forEach(a=>a.href=C.links[a.dataset.link]||"#");
document.querySelectorAll("[data-brand]").forEach(e=>e.textContent=C[e.dataset.brand]);
})();
