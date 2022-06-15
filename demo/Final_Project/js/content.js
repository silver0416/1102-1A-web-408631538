// function change(index) {
//     const p = document.querySelector('.show-content')
//     switch (index) {
//         case 0:
//             p.innerHTML = `<iframe src="./resume.html" width="100%" height="100%"/>`
//             break
//         case 1:
//             p.innerHTML = `<iframe src="./BOTPu.html" width="100%" height="100%"/>`
//             break
//         case 2:
//             p.innerHTML = `<iframe src="./gallery.html" width="100%" height="100%"/>`
//             break
//     }
// }

// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");
        // Scroll back to top
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }
        // Close mobile naviagtion
        if (link.classList.contains("main-nav-link"))
            headerEl.classList.toggle("nav-open");
    });
});

// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        console.log(ent);
        if (ent.isIntersecting === false) {
            document.body.classList.add("sticky");
        }
        // if (ent.isIntersecting === true) {
        //     document.body.classList.remove("sticky");
        // }
    },
    {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: "-80px",
    }
);
obs.observe(sectionHeroEl);

