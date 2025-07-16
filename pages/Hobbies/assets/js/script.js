
document.querySelectorAll('.slider-wrapper').forEach(wrapper => {
  const images = wrapper.querySelectorAll('.slider-image');
  const prevBtn = wrapper.querySelector('.prev');
  const nextBtn = wrapper.querySelector('.next');
  let current = 0;

  function updateSlider(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    updateSlider(current);
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % images.length;
    updateSlider(current);
  });
});



