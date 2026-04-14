const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  const items = carousel.querySelectorAll('.carousel-item');
  const nextBtn = carousel.querySelector('.arrow.right');
  const prevBtn = carousel.querySelector('.arrow.left');

  let index = 0;

  function showItem(i) {
    items.forEach(item => {
        item.classList.remove('active');

        // stop videos
        if (item.tagName === "IFRAME") {
            item.src = item.src;
        }
    });
    items[i].classList.add('active');
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % items.length;
    showItem(index);
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    showItem(index);
  });
});
