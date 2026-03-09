var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function (e) {
        e.preventDefault();
        var targetId = this.getAttribute("href").substring(1);
        var targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
}

var sections = document.querySelectorAll("section[id]");

function updateActiveNav() {
    var scrollY = window.scrollY + 100;

    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;
        var sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            for (var j = 0; j < navLinks.length; j++) {
                navLinks[j].classList.remove("active");
            }
            var activeLink = document.querySelector('.nav-links a[href="#' + sectionId + '"]');
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    }
}

window.addEventListener("scroll", updateActiveNav);

var navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.style.borderBottomColor = "#222222";
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
    } else {
        navbar.style.borderBottomColor = "#1a1a1a";
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    }
});

var mobileMenuBtn = document.getElementById("mobileMenuBtn");
var navLinksContainer = document.querySelector(".nav-links");

if (mobileMenuBtn && navLinksContainer) {
    mobileMenuBtn.addEventListener("click", function () {
        if (navLinksContainer.style.display === "flex") {
            navLinksContainer.style.display = "none";
        } else {
            navLinksContainer.style.display = "flex";
            navLinksContainer.style.flexDirection = "column";
            navLinksContainer.style.position = "absolute";
            navLinksContainer.style.top = "60px";
            navLinksContainer.style.left = "0";
            navLinksContainer.style.right = "0";
            navLinksContainer.style.backgroundColor = "#111111";
            navLinksContainer.style.padding = "20px";
            navLinksContainer.style.borderBottom = "1px solid #1a1a1a";
        }
    });
}
