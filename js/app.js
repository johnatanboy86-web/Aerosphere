document.addEventListener("DOMContentLoaded", () => {

    console.log("✈ AeroSphere V2");

    initNavigation();
    animateCards();
    startClock();

});

function initNavigation() {

    const buttons = document.querySelectorAll(".nav");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(b => b.classList.remove("active"));

            button.classList.add("active");

        });

    });

}

function animateCards() {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0px)";

        });

    });

}

function startClock() {

    const subtitle = document.querySelector("header p");

    if (!subtitle) return;

    function updateClock() {

        const now = new Date();

        subtitle.textContent =
            "Real-Time Aircraft Engine Operations • " +
            now.toLocaleTimeString("fr-FR");

    }

    updateClock();

    setInterval(updateClock, 1000);

}
