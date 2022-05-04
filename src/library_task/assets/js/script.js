const bookListImageBlock = document.querySelector('.main-content_book-list-block__row-books');

const arrayBooks = [
  {
    imageBookHref: 'assets/images/book-cover.jpg',
    titleBookText: 'Jewels of Nizam',
    spanBookText: 'by Geeta Devi',
    assessment: '5',
  },
  {
    imageBookHref: 'assets/images/book-cover-cakes.jpg',
    titleBookText: 'Cakes & Bakes',
    spanBookText: 'by Sanjeev Kapoor',
    assessment: '5',
  },
  {
    imageBookHref: 'assets/images/book-cover-james-kitchen.jpg',
    titleBookText: 'Jamie’s Kitchen',
    spanBookText: 'by Jamie Oliver',
    assessment: '4.6',
  },
  {
    imageBookHref: 'assets/images/book-cover-inexpensive.jpg',
    titleBookText: 'Inexpensive Family Meals',
    spanBookText: 'by Simon Holst',
    assessment: '4',
  },
  {
    imageBookHref: 'assets/images/book-cover-paleto.jpg',
    titleBookText: 'Paleo Slow Cooking',
    spanBookText: 'by Chrissy Gower',
    assessment: '4.5',
  },
  {
    imageBookHref: 'assets/images/book-cover-italian.jpg',
    titleBookText: 'Cook Like an Italian',
    spanBookText: 'by Tobie Puttock',
    assessment: '4',
  },
  {
    imageBookHref: 'assets/images/book-cover-indian.jpg',
    titleBookText: 'Suneeta Vaswani',
    spanBookText: 'by Geeta Devi',
    assessment: '5',
  },
  {
    imageBookHref: 'assets/images/book-cover-jamie-does.jpg',
    titleBookText: 'Jamie Does',
    spanBookText: 'by Jamie Oliver',
    assessment: '4',
  },
  {
    imageBookHref: 'assets/images/book-cover-jamies-italy.jpg',
    titleBookText: 'Jamie’s italy',
    spanBookText: 'by Jamie Oliver',
    assessment: '5',
  },
  {
    imageBookHref: 'assets/images/book-cover-vegetables.jpg',
    titleBookText: 'Vegetables Cookbook',
    spanBookText: 'by Matthew Biggs',
    assessment: '4.5',
  },
];

function calculeteProgressProcents(assessment) {
  const multiplication = assessment * 100;
  
  return multiplication / 5;
}

function addImage(imageHref, parentElement) {
  const image = document.createElement('img');

  image.src = imageHref;
  parentElement.appendChild(image);
}

function createTitleBook(titleText, parentElement) {
  const titleBook = document.createElement('h4');

  titleBook.innerHTML = titleText;
  parentElement.appendChild(titleBook);
}

function createSpanBook(spanText, parentElement) {
  const spanBook = document.createElement('span');

  spanBook.innerHTML = spanText;
  parentElement.appendChild(spanBook);
}

function createImageBook(imageHref, parentElement) {
  const imageBlock = document.createElement('div');

  imageBlock.classList.add('main-content_book-list-block__row-books___item____img-block');
  parentElement.appendChild(imageBlock);
  addImage(imageHref, imageBlock);
}

function createRatingStars(parentElement) {
  for (let i = 0; i < 5; i++) {
    const ratingStar = document.createElement('input');

    ratingStar.classList.add('main-content_book-list-block__row-books___item__rating-result__body__progress-strip__star');
    ratingStar.type = 'radio';
    ratingStar.name = 'rating';
    ratingStar.value = i + 1;
    parentElement.appendChild(ratingStar);
  }
}

function createProgressItemsBlock(parentElement) {
  const progressItemsBlock = document.createElement('div');

  progressItemsBlock.classList.add('main-content_book-list-block__row-books___item__rating-result__body__progress-strip__items');
  createRatingStars(progressItemsBlock);
  parentElement.appendChild(progressItemsBlock);
}

function createProgressStripBlock(assessment, parentElement) {
  const progressStripBlock = document.createElement('div');

  progressStripBlock.classList.add('main-content_book-list-block__row-books___item__rating-result__body__progress-strip');
  progressStripBlock.style.width = `${calculeteProgressProcents(assessment)}%`;
  createProgressItemsBlock(progressStripBlock);
  parentElement.appendChild(progressStripBlock);
}

function createRatingBody(assessment, parentElement) {
  const ratingBodyBlock = document.createElement('div');

  ratingBodyBlock.classList.add('main-content_book-list-block__row-books___item____rating-result____body');
  createProgressStripBlock(assessment, ratingBodyBlock);
  parentElement.appendChild(ratingBodyBlock);
}

function createRatingBlock(assessment, parentElement) {
  const ratingBlock = document.createElement('div');

  ratingBlock.classList.add('main-content_book-list-block__row-books___item____rating-result');
  createRatingBody(assessment, ratingBlock);
  parentElement.appendChild(ratingBlock);
}

function createBook(imageHref, titleText, spanText, assessment, parentElement) {
  const bookItemBlock = document.createElement('div');

  bookItemBlock.classList.add('main-content_book-list-block__row-books___item');
  createImageBook(imageHref, bookItemBlock);
  createTitleBook(titleText, bookItemBlock);
  createSpanBook(spanText, bookItemBlock);
  createRatingBlock(assessment, bookItemBlock);
  parentElement.appendChild(bookItemBlock);
}

function fillAllBooks(array, parentElement) {
  for (let i = 0; i < array.length; i++) { // eslint-disable-line no-plusplus
    createBook(array[i].imageBookHref, array[i].titleBookText, array[i].spanBookText, array[i].assessment, parentElement);// eslint-disable-line max-len
  }
}

fillAllBooks(arrayBooks, bookListImageBlock);
