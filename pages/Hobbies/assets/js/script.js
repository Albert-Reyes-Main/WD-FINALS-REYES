const sliders = {
  games: {
    images: document.querySelectorAll('.games-slide'),
    index: 0
  },
  movies: {
    images: document.querySelectorAll('.movies-slide'),
    index: 0
  }
};

function showSlide(group, index) {
  const slider = sliders[group];
  slider.images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

function nextSlide(group) {
  const slider = sliders[group];
  slider.index = (slider.index + 1) % slider.images.length;
  showSlide(group, slider.index);
}

function prevSlide(group) {
  const slider = sliders[group];
  slider.index = (slider.index - 1 + slider.images.length) % slider.images.length;
  showSlide(group, slider.index);
}
