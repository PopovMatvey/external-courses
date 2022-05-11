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

addBookButton.onclick = function () { // eslint-disable-line func-names
  modalWindowBlock.style.display = 'block';
};

closeChart.onclick = function () { // eslint-disable-line func-names
  modalWindowBlock.style.display = 'none';
};

window.onclick = function (event) { // eslint-disable-line func-names
  if (event.target === modalWindowBlock) {
    modalWindowBlock.style.display = 'none';
  }
};

addNewBookInput.onclick = function () { // eslint-disable-line func-names
  if ((titleBook.value === '') || (authorBook.value === '') || (ratingBook.value === '') || (uploadImageBook.value === '')) {
    alert('Fill in all the fields, please');// eslint-disable-line no-alert
  } else {
    const file = uploadImageBook.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function () { // eslint-disable-line func-names
      createBook(reader.result, titleBook.value, authorBook.value, // eslint-disable-line no-undef
        ratingBook.value, bookListImageBlock);// eslint-disable-line no-undef
      addBookInArray(arrayBooks, reader.result, // eslint-disable-line no-undef
        titleBook.value, authorBook.value, // eslint-disable-line no-undef
        ratingBook.value);// eslint-disable-line no-undef
    };

    alert('Book has been added');// eslint-disable-line no-alert
  }
};

searchBarInput.addEventListener('input', () => {
  clearInnerElement(bookListImageBlock);// eslint-disable-line no-undef

  if (searchBarInput.value === '') {
    fillAllBooks(arrayBooks, bookListImageBlock);// eslint-disable-line no-undef
  } else {
    fillAllBooks(findDetermBooks(searchBarInput.value, // eslint-disable-line no-undef
      arrayBooks), bookListImageBlock); // eslint-disable-line no-undef
  }
});

searchBarChart.onclick = function () { // eslint-disable-line func-names
  clearInnerElement(bookListImageBlock);// eslint-disable-line no-undef

  if (searchBarInput.value === '') {
    fillAllBooks(arrayBooks, bookListImageBlock);// eslint-disable-line no-undef
  } else {
    fillAllBooks(findDetermBooks(searchBarInput.value, // eslint-disable-line no-undef
      arrayBooks), bookListImageBlock);// eslint-disable-line no-undef
  }
};

allBooksButton.onclick = function () { // eslint-disable-line func-names
  clearInnerElement(bookListImageBlock);// eslint-disable-line no-undef
  fillAllBooks(arrayBooks, bookListImageBlock);// eslint-disable-line no-undef

  for (let i = 0; i < arrayFilterItems.length; i++) {
    arrayFilterItems[i].classList.remove('item-filter-active');
  }

  allBooksButton.classList.add('item-filter-active');
};

mostRecentButton.onclick = function () { // eslint-disable-line func-names
  clearInnerElement(bookListImageBlock);// eslint-disable-line no-undef
  fillAllBooks(arrayBooks, bookListImageBlock);// eslint-disable-line no-undef

  for (let i = 0; i < arrayFilterItems.length; i++) {
    arrayFilterItems[i].classList.remove('item-filter-active');
  }

  mostRecentButton.classList.add('item-filter-active');
};

mostPopularButton.onclick = function () { // eslint-disable-line func-names
  clearInnerElement(bookListImageBlock);// eslint-disable-line no-undef
  fillAllBooks(findMostPopularBooks(arrayBooks), bookListImageBlock);// eslint-disable-line no-undef

  for (let i = 0; i < arrayFilterItems.length; i++) {
    arrayFilterItems[i].classList.remove('item-filter-active');
  }

  mostPopularButton.classList.add('item-filter-active');
};

freeBooksButton.onclick = function () { // eslint-disable-line func-names
  clearInnerElement(bookListImageBlock);// eslint-disable-line no-undef
  fillAllBooks(arrayBooks, bookListImageBlock);// eslint-disable-line no-undef

  for (let i = 0; i < arrayFilterItems.length; i++) {
    arrayFilterItems[i].classList.remove('item-filter-active');
  }

  freeBooksButton.classList.add('item-filter-active');
};
