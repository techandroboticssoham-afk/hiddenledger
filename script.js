/* ==========================================================
   HIDDEN LEDGER
   SCRIPT.JS
   PART 1
========================================================== */

/* ===========================
   LOADER
=========================== */

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    const fill=document.querySelector(".loading-fill");

    fill.style.width="100%";

    setTimeout(()=>{

        document.body.classList.add("loaded");

    },1200);

    setTimeout(()=>{

        loader.style.display="none";

    },1800);

});

/* ===========================
   LENIS SMOOTH SCROLL
=========================== */

const lenis=new Lenis({

    duration:1.2,

    smoothWheel:true,

    smoothTouch:false

});

function raf(time){

    lenis.raf(time);

    requestAnimationFrame(raf);

}

requestAnimationFrame(raf);

/* ===========================
   GSAP
=========================== */

gsap.registerPlugin(ScrollTrigger);

/* ===========================
   HERO INTRO
=========================== */

const heroTL=gsap.timeline();

heroTL

.from(".logo",{

    opacity:0,

    y:-40,

    duration:.8

})

.from("nav ul li",{

    opacity:0,

    y:-25,

    stagger:.08,

    duration:.6

},"-=0.4")

.from(".watch-btn",{

    opacity:0,

    x:40,

    duration:.6

},"-=0.5")

.from(".tag",{

    opacity:0,

    y:40,

    duration:.8

})

.from(".hero-left h1",{

    opacity:0,

    y:60,

    duration:1

},"-=0.3")

.from(".hero-left p",{

    opacity:0,

    y:35,

    duration:.8

},"-=0.5")

.from(".hero-buttons a",{

    opacity:0,

    y:30,

    stagger:.15,

    duration:.6

},"-=0.5")

.from(".glass-card",{

    opacity:0,

    x:100,

    duration:1

},"-=0.7");

/* ===========================
   NAVBAR ON SCROLL
=========================== */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});

/* ===========================
   PROGRESS BAR
=========================== */

const progress=document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

    const total=

    document.documentElement.scrollHeight-

    window.innerHeight;

    const current=

    window.scrollY/total*100;

    progress.style.width=current+"%";

});

/* ===========================
   CUSTOM CURSOR
=========================== */

const cursor=document.querySelector(".cursor");

const blur=document.querySelector(".cursor-blur");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";

    cursor.style.top=e.clientY+"px";

    blur.style.left=e.clientX+"px";

    blur.style.top=e.clientY+"px";

});

/* ===========================
   CURSOR SCALE
=========================== */

document.querySelectorAll("a,button,.episode-card,.about-card")

.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.style.transform=

        "translate(-50%,-50%) scale(2)";

    });

    item.addEventListener("mouseleave",()=>{

        cursor.style.transform=

        "translate(-50%,-50%) scale(1)";

    });

});
/* ==========================================================
   HIDDEN LEDGER
   SCRIPT.JS
   PART 2
========================================================== */

/* ===========================
   SCROLL REVEAL
=========================== */

gsap.utils.toArray("section").forEach((section)=>{

    gsap.from(section,{

        opacity:0,

        y:80,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{

            trigger:section,

            start:"top 80%",

            toggleActions:"play none none none"

        }

    });

});

/* ===========================
   FEATURED IMAGE
=========================== */

gsap.from(".featured-image",{

    x:-120,

    opacity:0,

    duration:1.2,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".featured",

        start:"top 70%"

    }

});

gsap.from(".featured-content",{

    x:120,

    opacity:0,

    duration:1.2,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".featured",

        start:"top 70%"

    }

});

/* ===========================
   ABOUT CARDS
=========================== */

gsap.from(".about-card",{

    y:80,

    opacity:0,

    stagger:.2,

    duration:1,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".about",

        start:"top 75%"

    }

});

/* ===========================
   RESEARCH BOXES
=========================== */

gsap.from(".research-box",{

    scale:.85,

    opacity:0,

    stagger:.15,

    duration:.8,

    ease:"back.out(1.4)",

    scrollTrigger:{

        trigger:".research",

        start:"top 75%"

    }

});

/* ===========================
   EPISODE CARDS
=========================== */

gsap.from(".episode-card",{

    y:100,

    opacity:0,

    stagger:.18,

    duration:1,

    ease:"power4.out",

    scrollTrigger:{

        trigger:".episodes",

        start:"top 75%"

    }

});

/* ===========================
   TIMELINE
=========================== */

gsap.from(".timeline-item",{

    x:-120,

    opacity:0,

    stagger:.18,

    duration:.9,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".pipeline",

        start:"top 75%"

    }

});

/* ===========================
   PRINCIPLES
=========================== */

gsap.from(".principle-card",{

    y:80,

    opacity:0,

    stagger:.15,

    duration:.9,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".principles",

        start:"top 75%"

    }

});

/* ===========================
   CONTACT
=========================== */

gsap.from(".contact-card",{

    y:70,

    opacity:0,

    stagger:.15,

    duration:.9,

    scrollTrigger:{

        trigger:".contact",

        start:"top 75%"

    }

});

/* ===========================
   CTA
=========================== */

gsap.from(".cta-box",{

    scale:.85,

    opacity:0,

    duration:1.2,

    ease:"power4.out",

    scrollTrigger:{

        trigger:".cta",

        start:"top 75%"

    }

});

/* ===========================
   FOOTER
=========================== */

gsap.from(".footer-grid",{

    y:80,

    opacity:0,

    duration:1,

    scrollTrigger:{

        trigger:".footer",

        start:"top 90%"

    }

});
/* ==========================================================
   HIDDEN LEDGER
   SCRIPT.JS
   PART 3 (FINAL)
========================================================== */

/* ===========================
   ANIMATED COUNTERS
=========================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        let current = 0;

        const increment = target / 120;

        function updateCounter() {

            current += increment;

            if (current < target) {

                counter.innerText = Math.floor(current).toLocaleString();

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target.toLocaleString();

            }

        }

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.6

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/* ===========================
   ACTIVE NAV LINK
=========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ===========================
   PARALLAX HERO
=========================== */

window.addEventListener("scroll", () => {

    const heroVideo = document.querySelector(".hero-video");

    if (heroVideo) {

        heroVideo.style.transform =

            `translateY(${window.scrollY * 0.25}px) scale(1.08)`;

    }

});

/* ===========================
   MAGNETIC BUTTONS
=========================== */

document.querySelectorAll(

".primary-btn,.secondary-btn,.watch-btn"

).forEach(button => {

    button.addEventListener("mousemove", (e) => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;

        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform =

            `translate(${x * 0.12}px,${y * 0.12}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translate(0,0)";

    });

});

/* ===========================
   TILT CARDS
=========================== */

document.querySelectorAll(

".episode-card,.about-card,.principle-card"

).forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX =

            -(y - rect.height / 2) / 18;

        const rotateY =

            (x - rect.width / 2) / 18;

        card.style.transform =

            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =

            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});

/* ===========================
   SCROLL TO TOP
=========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "scroll-top";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 700) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    lenis.scrollTo(0);

});

/* ===========================
   MOBILE MENU
=========================== */

const mobileBtn = document.querySelector(".mobile-btn");

const navMenu = document.querySelector("nav ul");

if (mobileBtn) {

    mobileBtn.addEventListener("click", () => {

        navMenu.classList.toggle("mobile-open");

        mobileBtn.classList.toggle("active");

    });

}

/* ===========================
   CONSOLE MESSAGE
=========================== */

console.log(

"%cHidden Ledger",

"color:#C8A55A;font-size:28px;font-weight:bold;"

);

console.log(

"Hidden Stories. Billion Dollar Secrets."

);

console.log(

"Website designed for cinematic business documentaries."

);

/* ===========================
   END
=========================== */
