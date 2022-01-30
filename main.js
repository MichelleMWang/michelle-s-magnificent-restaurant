(()=>{"use strict";const e=function(){const e=document.createElement("div");e.id="home-header";const t=document.createElement("div");t.id="home-text";const n=document.createElement("h1");n.textContent="Your Very Own Professional Chef",n.id="hero-text",t.appendChild(n);const d=document.createElement("h3");return d.textContent="On Duty 24/7",d.id="cta-text",t.appendChild(d),e.appendChild(t),e.style.backgroundImage="url(/src/assets/header-image.jpg)",e},t=document.getElementById("content"),n=function(){const e=document.createElement("nav");e.id="navbar";const t=document.createElement("h1");t.textContent="Michelle's Magnificent",t.id="logo",e.appendChild(t);const n=document.createElement("ul");n.id="nav-items";const d=document.createElement("li"),a=document.createElement("a");a.textContent="Home",a.classList.add("nav-item"),a.classList.add("current-tab"),d.appendChild(a);const o=document.createElement("li"),c=document.createElement("a");c.textContent="Menu",c.classList.add("nav-item"),o.appendChild(c);const s=document.createElement("li"),i=document.createElement("a");return i.textContent="Contact",i.classList.add("nav-item"),s.appendChild(i),n.appendChild(a),n.appendChild(c),n.appendChild(i),e.appendChild(n),e}();n.querySelectorAll(".nav-item").forEach((n=>{n.addEventListener("click",(()=>{t.removeChild(t.childNodes[2]);const d=n.textContent;document.querySelector(".current-tab").classList.remove("current-tab"),n.classList.add("current-tab"),console.log(d),"Menu"==d?t.appendChild(function(){console.log("hi from menu!");const e=document.createElement("div"),t=document.createElement("div");t.classList.add("food-item");const n=document.createElement("img");n.src="/src/assets/pasta.jpg",n.classList.add("food-image");const d=document.createElement("div"),a=document.createElement("h2");a.classList.add("food-header"),a.textContent="Spaghetti and Meatballs";const o=document.createElement("p");o.classList.add("food-text"),o.textContent="Very cooked spaghetti noodles topped with the finest Prego, meataballés, and fresh mozzarella",t.appendChild(n),d.appendChild(a),d.appendChild(o),t.appendChild(d),e.appendChild(t);const c=document.createElement("div");c.classList.add("food-item");const s=document.createElement("img");s.src="/src/assets/egg.jpg",s.classList.add("food-image");const i=document.createElement("div"),l=document.createElement("h2");l.classList.add("food-header"),l.textContent="Eggs and Rice";const m=document.createElement("p");m.classList.add("food-text"),m.textContent="Steamed rice topped with stir fried eggs and whatever is in the fridge (or nothing at all!)",c.appendChild(s),i.appendChild(l),i.appendChild(m),c.appendChild(i),e.appendChild(c);const r=document.createElement("div");r.classList.add("food-item");const p=document.createElement("img");p.src="/src/assets/mugcake.jpg",p.classList.add("food-image");const h=document.createElement("div"),u=document.createElement("h2");u.classList.add("food-header"),u.textContent="Mug Cake";const C=document.createElement("p");C.classList.add("food-text"),C.textContent="Mug cake of whatever flavor you want! If it is not nutella or peanut butter though, be prepared for a suprise.",r.appendChild(p),h.appendChild(u),h.appendChild(C),r.appendChild(h),e.appendChild(r);const E=document.createElement("div");E.classList.add("food-item");const g=document.createElement("img");g.src="/src/assets/apples.jpg",g.classList.add("food-image");const f=document.createElement("div"),v=document.createElement("h2");v.classList.add("food-header"),v.textContent="Apples and Fixins";const x=document.createElement("p");return x.classList.add("food-text"),x.textContent="Apple slices paired with the god's nutty spread and possibly other kitchen fixins (ie oatmealé, breadé, stringé cheesé).",E.appendChild(g),f.appendChild(v),f.appendChild(x),E.appendChild(f),e.appendChild(E),e}()):"Contact"==d?t.appendChild(function(){console.log("hi from contact!");const e=document.createElement("div");e.id="contact-page";const t=document.createElement("div");t.textContent="(030)-030-8008",e.appendChild(t);const n=document.createElement("div");return n.textContent="030 Owokawai Ave UWUTAKE, LV 033330",e.appendChild(n),console.log(e),e}()):t.appendChild(e())}))})),t.appendChild(n),t.appendChild(e())})();