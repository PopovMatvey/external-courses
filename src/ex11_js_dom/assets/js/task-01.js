const sliderLine = document.querySelector('.slider');
const prevButton = document.createElement('button');
const nextButton = document.createElement('button');
const arrayImages = ['assets/images/first.jpg', 'assets//images/second.jpg', 'assets//images/third.jpg'];
let defaultSlideIndex = 1;

function createAllImages(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    const imgBlock = document.createElement('img');
    imgBlock.className = 'item';
    sliderLine.appendChild(imgBlock);
    imgBlock.src = inputArray[i];
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
    slides[i].style.display = 'none';
  }

  slides[defaultSlideIndex - 1].style.display = 'block';
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

prevButton.className = 'prev';
prevButton.innerHTML = '&#10094;';

sliderLine.appendChild(prevButton);

nextButton.className = 'next';
nextButton.innerHTML = '&#10095;';

sliderLine.appendChild(nextButton);
