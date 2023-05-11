// Scroll To Top

let scrollToTop = document.querySelector(".scroll-to-top");
let btn = document.querySelector(".up");

document.addEventListener("scroll", function() {
    if (window.scrollY >= 500) {
      scrollToTop.style.opacity = "1";
      scrollToTop.style.display = "block";
    } else {
      scrollToTop.style.opacity = "0";
      scrollToTop.style.display = "none";
    }
});

btn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Scroll With Active Link

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-bar li a");

window.onscroll = () => {
  sections.forEach(section => {
    let id = section.getAttribute("id");
    if (window.scrollY >= section.offsetTop - 150 && window.scrollY < section.offsetTop - 150 + section.offsetHeight) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        document.querySelector(`.nav-bar li a[href*= "${id}"]`).classList.add("active");
      });
    }
  });
}

// toggle icons

let meunIcon = document.querySelector("header i.menu");
let navbar = document.querySelector(".nav-bar")

meunIcon.onclick = () => {
  meunIcon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
}
