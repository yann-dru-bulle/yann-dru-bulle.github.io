document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-img]').forEach(element => {
    const imgUrl = element.dataset.img;
    console.log(`Setting element image: ${imgUrl}`);
    element.style.setProperty('--thumb-image', `url(${imgUrl})`);
  });
});