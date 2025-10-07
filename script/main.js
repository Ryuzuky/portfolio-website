// Navbar Section
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const navbg = document.querySelector(".nav-bg");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("ri-menu-3-line");
  menuIcon.classList.toggle("ri-close-line");
  navbar.classList.toggle("active");
  navbg.classList.toggle("active");
}

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    
    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      })
    }
  })
}

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    navbg.classList.remove("active");
    menuIcon.classList.add("ri-menu-3-line");
    menuIcon.classList.remove("ri-close-line");
  });
});

// Skills Section
var dupe = document.querySelector(".skill-slide").cloneNode(true);
document.querySelector(".skill-list").appendChild(dupe);

const certImages = document.querySelectorAll(".card-cert img");
const overlay    = document.getElementById("overlay");
const popupImg   = document.getElementById("popupImg");

function disableScroll() {
  document.body.classList.add("no-scroll");
  document.documentElement.classList.add("no-scroll");
}

function enableScroll() {
  document.body.classList.remove("no-scroll");
  document.documentElement.classList.remove("no-scroll");
}

certImages.forEach(img => {
  img.addEventListener("click", () => {
    popupImg.src = img.src;
    overlay.style.display = "flex";
    disableScroll();
  });
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
    enableScroll();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    overlay.style.display = "none";
    enableScroll();
  }
});