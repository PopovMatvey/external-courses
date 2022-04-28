const sliderLine = document.querySelector('.slider');
const itemsBlock = document.querySelector('.items');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const arrayImages = ['assets/images/first.jpg', 'assets//images/second.jpg', 'assets//images/third.jpg'];
let defaultSlideIndex = 1;
let offset = 0;

function createAllImages(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    const imgBlock = document.createElement('img');
    imgBlock.className = 'item';
    itemsBlock.appendChild(imgBlock);
    imgBlock.src = inputArray[i];
    imgBlock.style.zIndex = inputArray.length - i;
  }
}

function showSlideItem(item) {
  const slides = document.getElementsByClassName('item');

  if (item > slides.length) {
    defaultSlideIndex = 1;
  }

  if (item < 1) {
    defaultSlideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = '0';
  }

  slides[defaultSlideIndex - 1].animate([
    { opacity: '0.4' },
    { opacity: '1' }
  ], {
    duration: 1000,
  });
  slides[defaultSlideIndex - 1].style.opacity = '1';
}

function addSlideIndex() {
  showSlideItem(defaultSlideIndex += 1);
}

function substractSlideIndex() {
  showSlideItem(defaultSlideIndex -= 1);
}

prevButton.addEventListener('click', () => {
  substractSlideIndex();
});

nextButton.addEventListener('click', () => {
  addSlideIndex();
});

createAllImages(arrayImages);
showSlideItem(defaultSlideIndex);
