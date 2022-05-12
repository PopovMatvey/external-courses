const bookListImageBlock = document.querySelector('.main-content_book-list-block__row-books');
const modalWindowOnChange = document.querySelector('#modalWindowOnChange');
const titleBookChange = document.querySelector('#titleBookChange');
const ratingBookChange = document.querySelector('#ratingBookChange');
const updateNewBook = document.querySelector('#updateBook');
const closeChartOnChange = document.querySelector('#closeChartOnChange');

const arrayBooks = [
  {
    imageBookHref: 'assets/images/book-cover.jpg',
    titleBookText: 'Jewels of Nizam',
    spanBookText: 'by Geeta Devi',
    assessment: '5',
  },
  {
    imageBookHref: 'assets/images/book-cover-cakes.jpg',
    titleBookText: 'Cakes and Bakes',
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

function findDetermArrayItem(titleText, array) {
  for (let i = 0; i < array.length; i++) {
    if (titleText === array[i].titleBookText) {
      return array[i];
    }
  }

  return undefined;
}

function createClickEventBookItem(element, array) {
  element.addEventListener('click', (event) => {
    const clickedElement = findDetermArrayItem(event.path[0].innerHTML, array);

    modalWindowOnChange.style.display = 'block';
    ratingBookChange.value = clickedElement.assessment;
    titleBookChange.innerHTML = clickedElement.titleBookText;
  });
}

function clearInnerElement(element) {
  element.innerHTML = ''; // eslint-disable-line no-param-reassign
}

function updateAsessmentBook(arrayItem, newAsessment) {
  arrayItem.assessment = newAsessment; // eslint-disable-line no-param-reassign
}

function createTitleBook(titleText, parentElement, array) {
  const titleBook = document.createElement('h4');

  createClickEventBookItem(titleBook, array);
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

function createBook(imageHref, titleText, spanText, assessment, parentElement, array) {
  const bookItemBlock = document.createElement('div');

  bookItemBlock.classList.add('main-content_book-list-block__row-books___item');
  createImageBook(imageHref, bookItemBlock);
  createTitleBook(titleText, bookItemBlock, array);
  createSpanBook(spanText, bookItemBlock);
  createRatingBlock(assessment, bookItemBlock);
  parentElement.appendChild(bookItemBlock);
}

function fillAllBooks(array, parentElement) {
  for (let i = 0; i < array.length; i++) { // eslint-disable-line no-plusplus
    createBook(array[i].imageBookHref, array[i].titleBookText, array[i].spanBookText, array[i].assessment, parentElement, array);// eslint-disable-line max-len
  }
}

function addBookInArray(array, imagePath, // eslint-disable-line no-unused-vars
  titleBook, authorBook, rating) { // eslint-disable-line no-unused-vars
  array.push(
    {
      imageBookHref: imagePath,
      titleBookText: titleBook,
      spanBookText: authorBook,
      assessment: rating,
    },
  );
}

function searchBook(array, regex) { // eslint-disable-line no-unused-vars
  const returnedArray = [];

  for (let i = 0; i < array.length; i++) {
    if (regex.exec(array[i].titleBookText) != null) {
      returnedArray.push({
        imageBookHref: array[i].imageBookHref,
        titleBookText: array[i].titleBookText,
        spanBookText: array[i].spanBookText,
        assessment: array[i].assessment,
      });
    } else if (regex.exec(array[i].spanBookText) != null) {
      returnedArray.push({
        imageBookHref: array[i].imageBookHref,
        titleBookText: array[i].titleBookText,
        spanBookText: array[i].spanBookText,
        assessment: array[i].assessment,
      });
    }
  }

  return returnedArray;
}

function findDetermBooks(inputText, booksArray) { // eslint-disable-line no-unused-vars
  const regex = new RegExp(inputText);

  return searchBook(booksArray, regex);
}

function findMostPopularBooks(array) { // eslint-disable-line no-unused-vars
  const returnedArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].assessment === '5') {
      returnedArray.push({
        imageBookHref: array[i].imageBookHref,
        titleBookText: array[i].titleBookText,
        spanBookText: array[i].spanBookText,
        assessment: array[i].assessment,
      });
    }
  }

  return returnedArray;
}

fillAllBooks(arrayBooks, bookListImageBlock);

closeChartOnChange.onclick = function () { // eslint-disable-line func-names
  modalWindowOnChange.style.display = 'none';
};

window.onclick = function (event) { // eslint-disable-line func-names
  if (event.target === modalWindowOnChange) {
    modalWindowOnChange.style.display = 'none';
  }
};

updateNewBook.onclick = function () { // eslint-disable-line func-names
  const clickedElement = findDetermArrayItem(titleBookChange.innerHTML, arrayBooks);

  if (ratingBookChange.value === '') {
    alert('Input rating');// eslint-disable-line no-alert
  } else {
    updateAsessmentBook(clickedElement, ratingBookChange.value);
    clearInnerElement(bookListImageBlock);
    fillAllBooks(arrayBooks, bookListImageBlock);
    modalWindowOnChange.style.display = 'none';
  }
};
