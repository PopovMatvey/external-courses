const bookListImageBlock = document.querySelector('.main-content_book-list-block__row-books');
const modalWindowOnChange = document.querySelector('#modalWindowOnChange');
const titleBookChange = document.querySelector('#titleBookChange');
const ratingBookChange = document.querySelector('#ratingBookChange');
const updateNewBook = document.querySelector('#updateBook');
const closeChartOnChange = document.querySelector('#closeChartOnChange');
const addBookButton = document.querySelector('#addBook');
const modalWindowBlock = document.querySelector('#modalWindow');
const closeChart = document.querySelector('#closeChart');
const addNewBookInput = document.querySelector('#addNewBook');
const searchBarInput = document.querySelector('#searchBarInput');
const searchBarChart = document.querySelector('#searchBarChart');
const freeBooksButton = document.querySelector('#freeBooksButton');
const mostPopularButton = document.querySelector('#mostPopularButton');
const mostRecentButton = document.querySelector('#mostRecentButton');
const allBooksButton = document.querySelector('#allBooksButton');
const arrayFilterItems = document.querySelectorAll('.main-content_header__tools___filter li button');
const titleBook = document.querySelector('#titleBook');
const authorBook = document.querySelector('#authorBook');
const ratingBook = document.querySelector('#ratingBook');
const uploadImageBook = document.querySelector('#uploadImage');

const notificationWindow = document.querySelector('#notificationWindow');
const notificationWindowTitle = document.querySelector('#notificationWindowTitle');
const closeChartnotificationWindow = document.querySelector('#closeChartnotificationWindow');

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
  for (let i = 0; i < array.length; i++) { // eslint-disable-line no-plusplus
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
  element.innerHTML = '';// eslint-disable-line no-param-reassign
}

function updateAsessmentBook(arrayItem, newAsessment) {
  arrayItem.assessment = newAsessment; // eslint-disable-line no-param-reassign
}

function createTitleBook(titleText, parentElement, array) {
  const titleBookElement = document.createElement('h4');

  createClickEventBookItem(titleBookElement, array);
  titleBookElement.innerHTML = titleText;
  parentElement.appendChild(titleBookElement);
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
  for (let i = 0; i < 5; i++) { // eslint-disable-line no-plusplus
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

function addBookInArray(array, imagePath, titleBooktext, authorBookText, rating) {
  array.push(
    {
      imageBookHref: imagePath,
      titleBookText: titleBooktext,
      spanBookText: authorBookText,
      assessment: rating,
    },
  );
}

function searchBook(array, regex) {
  const returnedArray = [];

  for (let i = 0; i < array.length; i++) { // eslint-disable-line no-plusplus
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

function findDetermBooks(inputText, booksArray) {
  const regString = `^${inputText}`;
  const regex = new RegExp(regString);

  return searchBook(booksArray, regex);
}

function findMostPopularBooks(array) {
  const returnedArray = [];

  for (let i = 0; i < array.length; i++) { // eslint-disable-line no-plusplus
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

function addNewBook(array, imageHref, titleText, spanText, assessment) {
  createBook(imageHref, titleText, spanText, assessment, bookListImageBlock, array);
  addBookInArray(array, imageHref, titleText, spanText, assessment);
}

fillAllBooks(arrayBooks, bookListImageBlock);

closeChartOnChange.addEventListener('click', () => {
  modalWindowOnChange.style.display = 'none';
});

closeChartnotificationWindow.addEventListener('click', () => {
  notificationWindow.style.display = 'none';
});

updateNewBook.addEventListener('click', () => {
  const clickedElement = findDetermArrayItem(titleBookChange.innerHTML, arrayBooks);

  if (ratingBookChange.value === '') {
    notificationWindow.style.display = 'block';
    notificationWindowTitle.innerHTML = 'Input rating';
  } else {
    updateAsessmentBook(clickedElement, ratingBookChange.value);
    clearInnerElement(bookListImageBlock);
    fillAllBooks(arrayBooks, bookListImageBlock);
    modalWindowOnChange.style.display = 'none';
  }
});

addBookButton.addEventListener('click', () => {
  modalWindowBlock.style.display = 'block';
});

closeChart.addEventListener('click', () => {
  modalWindowBlock.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modalWindowBlock) {
    modalWindowBlock.style.display = 'none';
  }

  if (event.target === modalWindowOnChange) {
    modalWindowOnChange.style.display = 'none';
  }

  if (event.target === notificationWindow) {
    notificationWindow.style.display = 'none';
  }
});

addNewBookInput.addEventListener('click', () => {
  if ((titleBook.value === '') || (authorBook.value === '') || (ratingBook.value === '') || (uploadImageBook.value === '')) {
    notificationWindow.style.display = 'block';
    notificationWindowTitle.innerHTML = 'Fill in all the fields, please';
  } else {
    const file = uploadImageBook.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.addEventListener('load', () => {
      addNewBook(arrayBooks, reader.result, titleBook.value,
        authorBook.value,
        ratingBook.value, bookListImageBlock);
    });

    notificationWindow.style.display = 'block';
    notificationWindowTitle.innerHTML = 'Book has been added';
  }
});

searchBarInput.addEventListener('input', () => {
  clearInnerElement(bookListImageBlock);

  if (searchBarInput.value === '') {
    fillAllBooks(arrayBooks, bookListImageBlock);
  } else {
    fillAllBooks(findDetermBooks(searchBarInput.value,
      arrayBooks), bookListImageBlock);
  }
});

searchBarChart.addEventListener('click', () => {
  clearInnerElement(bookListImageBlock);

  if (searchBarInput.value === '') {
    fillAllBooks(arrayBooks, bookListImageBlock);
  } else {
    fillAllBooks(findDetermBooks(searchBarInput.value,
      arrayBooks), bookListImageBlock);
  }
});

allBooksButton.addEventListener('click', () => {
  clearInnerElement(bookListImageBlock);
  fillAllBooks(arrayBooks, bookListImageBlock);

  for (let i = 0; i < arrayFilterItems.length; i++) { // eslint-disable-line no-plusplus
    arrayFilterItems[i].classList.remove('item-filter-active');
  }

  allBooksButton.classList.add('item-filter-active');
});

mostRecentButton.addEventListener('click', () => {
  clearInnerElement(bookListImageBlock);
  fillAllBooks(arrayBooks, bookListImageBlock);

  for (let i = 0; i < arrayFilterItems.length; i++) { // eslint-disable-line no-plusplus
    arrayFilterItems[i].classList.remove('item-filter-active');
  }

  mostRecentButton.classList.add('item-filter-active');
});

mostPopularButton.addEventListener('click', () => {
  clearInnerElement(bookListImageBlock);
  fillAllBooks(findMostPopularBooks(arrayBooks), bookListImageBlock);

  for (let i = 0; i < arrayFilterItems.length; i++) { // eslint-disable-line no-plusplus
    arrayFilterItems[i].classList.remove('item-filter-active');
  }

  mostPopularButton.classList.add('item-filter-active');
});

freeBooksButton.addEventListener('click', () => {
  clearInnerElement(bookListImageBlock);
  fillAllBooks(arrayBooks, bookListImageBlock);

  for (let i = 0; i < arrayFilterItems.length; i++) { // eslint-disable-line no-plusplus
    arrayFilterItems[i].classList.remove('item-filter-active');
  }

  freeBooksButton.classList.add('item-filter-active');
});
