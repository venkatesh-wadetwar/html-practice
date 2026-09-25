// =============================
// MOBILE MENU
// =============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


// =============================
// CLOSE MOBILE MENU
// =============================

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });

});


// =============================
// TYPING ANIMATION
// =============================

const words = [
    "web experiences.",
    "creative websites.",
    "interactive ideas.",
    "with code + AI."
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typing.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


// =============================
// SCROLL REVEAL
// =============================

const sections =
    document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {

    section.classList.add("reveal");

    observer.observe(section);

});


// =============================
// ACTIVE NAVIGATION
// =============================

const allSections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    allSections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


// =============================
// BUTTON RIPPLE EFFECT
// =============================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(e) {

        const ripple =
            document.createElement("span");

        ripple.style.position = "absolute";
        ripple.style.width = "10px";
        ripple.style.height = "10px";
        ripple.style.borderRadius = "50%";
        ripple.style.background = "rgba(255,255,255,.5)";
        ripple.style.transform = "scale(0)";
        ripple.style.animation = "ripple .6s linear";

        const rect =
            this.getBoundingClientRect();

        ripple.style.left =
            e.clientX - rect.left + "px";

        ripple.style.top =
            e.clientY - rect.top + "px";

        this.style.position = "relative";
        this.style.overflow = "hidden";

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});