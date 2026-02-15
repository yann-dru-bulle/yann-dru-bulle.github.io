document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    const imgUrl = thumbnail.dataset.img;
    thumbnail.style.setProperty('--thumb-image', `url(${imgUrl})`);
  });
});