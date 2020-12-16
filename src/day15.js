const gallery = document.querySelector('.gallery');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

const currentClass = 'current';
const imageSize = '220';

const imagesNumber = [...document.querySelectorAll('.card')].length;
const imagesArrayLastIndex = imagesNumber - 1;

const switchCurrent = (oldElement, newElement) => {
  oldElement.classList.toggle(currentClass);
  newElement.classList.toggle(currentClass);
};

const getNewCurrent = (array, currentIndex, direction) => {
  let newCurrent;
  if (direction === 'next') {
    newCurrent =
      currentIndex !== imagesArrayLastIndex ? array[currentIndex + 1] : null;
  } else {
    newCurrent = currentIndex !== 0 ? array[currentIndex - 1] : null;
  }
  return newCurrent;
};

const handleClick = (event) => {
  const direction = event.currentTarget.className;
  const images = [...document.querySelectorAll('.card')];
  const current = document.querySelector('.current');
  const currentIndex = images.indexOf(current);
  const newCurrent = getNewCurrent(images, currentIndex, direction);
  if (!newCurrent) return;
  const newCurrentIndex = images.indexOf(newCurrent);
  switchCurrent(current, newCurrent);
  const translateSign = '-';
  gallery.style.transform = `translateX(${translateSign}${
    imageSize * newCurrentIndex
  }px)`;
  if (newCurrentIndex === imagesArrayLastIndex) {
    nextButton.style.opacity = '0.3';
    return;
  }
  if (newCurrentIndex === 0) {
    previousButton.style.opacity = '0.3';
    return;
  }
  nextButton.style.opacity = 1;
  previousButton.style.opacity = 1;
};

previousButton.addEventListener('click', handleClick);
nextButton.addEventListener('click', handleClick);
