var dupe = document.querySelector(".skill-slide").cloneNode(true);
document.querySelector(".skill-list").appendChild(dupe);

const certImages = document.querySelectorAll('.card-cert img');
const overlay    = document.getElementById('overlay');
const popupImg   = document.getElementById('popupImg');

function disableScroll() {
  document.body.classList.add('no-scroll');
  document.documentElement.classList.add('no-scroll');
}

function enableScroll() {
  document.body.classList.remove('no-scroll');
  document.documentElement.classList.remove('no-scroll');
}

certImages.forEach(img => {
  img.addEventListener('click', () => {
    popupImg.src = img.src;
    overlay.style.display = 'flex';
    disableScroll();
  });
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
    enableScroll();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    overlay.style.display = 'none';
    enableScroll();
  }
});