document.addEventListener("DOMContentLoaded", () => {

    console.log("AeroSphere V2");

    const menu = document.querySelectorAll(".nav");

    menu.forEach(item => {

        item.addEventListener("click", () => {

            menu.forEach(i => i.classList.remove("active"));

            item.classList.add("active");

        });

    });

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-6px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0px)";

        });

    });

});
