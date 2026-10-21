
document.addEventListener("DOMContentLoaded", function () {
    // Display a message in the browser console.
    console.log("Vivek's portfolio is ready!");

    // Highlight the navigation link for the current section.
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("main section[id]");

    function updateActiveLink() {
        let currentSection = "";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(function (link) {
            const isActive =
                link.getAttribute("href") === "#" + currentSection;

            if (isActive) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();
});
