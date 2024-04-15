export const manageClasses = () => {
  const oneElem = document.querySelector('.one');
  oneElem.classList.add('.selected');

  const twoElem = document.querySelector('.two');
  twoElem.classList.remove('.selected');

  const threeElem = document.querySelector('.three');
  threeElem.classList.toggle('.three_done');

  const fourElem = document.querySelector('.four');
  const someClass = fourElem.classList.contains('.some-class');

  if (someClass) {
    fourElem.classList.add('.another-class');
  }
};
