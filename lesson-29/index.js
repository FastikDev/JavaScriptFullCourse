export const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My Photo');
  imgElem.src = imgSrc;
  const pageElem = document.querySelector('.page');
  pageElem.append(imgElem);

  const onImageLoaded = () => {
    const { width, height } = imgElem;
    callback(null, { width, height });
  };

  imgElem.addEventListener('load', onImageLoaded);
  imgElem.addEventListener('error', () => callback('Image loaded is failed'));
};

const imgSrc = 'https://server.com/image.png';

const onImageLoaded = (error, imgSize) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgSize;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};
