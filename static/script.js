document.addEventListener("DOMContentLoaded", () => {
    // GSAP Navbar Animation
    gsap.from("nav", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });

    // Smooth Scroll Effect for Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // Add Navbar Scroll Background Effect
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector("nav");
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#111";
        } else {
            navbar.style.backgroundColor = "#222";
        }
    });
});
