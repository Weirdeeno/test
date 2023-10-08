document.addEventListener("DOMContentLoaded", function () {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const yOffset = -80; // Adjust this value if necessary to account for fixed headers or other offsets.
                const targetOffsetTop = targetSection.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: targetOffsetTop + yOffset,
                    behavior: "smooth"
                });
            }
        });
    });

});