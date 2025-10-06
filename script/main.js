var dupe = document.querySelector(".skill-slide").cloneNode(true);
document.querySelector(".skill-list").appendChild(dupe);

const certImages = document.querySelectorAll('.card-cert img');
  const overlay    = document.getElementById('overlay');
  const popupImg   = document.getElementById('popupImg');

  certImages.forEach(img => {
    img.addEventListener('click', () => {
      popupImg.src = img.src; // langsung ambil src
      overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  // klik background overlay -> tutup popup
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // tombol ESC -> tutup popup
  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      overlay.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });