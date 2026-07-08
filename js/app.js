/* ==================================================
   AeroSphere V2
   Main Application
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("✈ AeroSphere V2 démarré");

    initNavigation();
    animateCards();
    startClock();

});

/* ================================
   Navigation
================================ */

function initNavigation(){

    const buttons = document.querySelectorAll(".nav");

    buttons.forEach(button=>{

        button.addEventListener("click",()=>{

            buttons.forEach(b=>b.classList.remove("active"));

            button.classList.add("active");

        });

    });

}

/* ================================
   Animation des cartes
================================ */

function animateCards(){

    const cards=document.querySelectorAll(".card");

    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-8px)";
            card.style.transition=".25s";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0px)";

        });

    });

}

/* ================================
   Horloge
================================ */

function startClock(){

    const header=document.querySelector("header div p");

    if(!header) return;

    function update(){

        const now=new Date();

        header.innerHTML=
            "Real-Time Aircraft Engine Operations • "
            + now.toLocaleTimeString("fr-FR");

    }

    update();

    setInterval(update,1000);

}
