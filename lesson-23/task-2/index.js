const generateNumbersRange = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i++) {
    result.push(i);
  }

  return result;
};

const getLineSeats = () => {
  return generateNumbersRange(1, 10)
    .map(
      seatNumber => `
    <div 
        class="sector__seat" 
        data-seat-number="${seatNumber}"
        ></div>
    `,
    )
    .join('');
};

const getSectorLines = () => {
  const seatString = getLineSeats();

  return generateNumbersRange(1, 10)
    .map(
      lineNumber => `
    <div 
        class="sector__line" 
        data-line-number="${lineNumber}"
        >${seatString}</div>
    `,
    )
    .join('');
};

const arenaElem = document.querySelector('.arena');

const renderArena = () => {
  const lineString = getSectorLines();

  const sectorsString = generateNumbersRange(1, 3)
    .map(
      sectorNumber => `
    <div 
        class="sector" 
        data-sector-number="${sectorNumber}"
        >${lineString}</div>
    `,
    )
    .join('');

  arenaElem.innerHTML = sectorsString;
};

const onSeatSelect = event => {
  if (!event.target.matches('.sector__seat')) {
    return;
  }

  const seatNumbers = event.target.dataset.seatNumber;
  const lineNumbers = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNumbers = event.target.closest('.sector').dataset.sectorNumber;

  const selectedSeatElem = document.querySelector('.board__selected-seat');

  selectedSeatElem.innerText = `S ${sectorNumbers}  L - ${lineNumbers} -  S ${seatNumbers}`;
};

arenaElem.addEventListener('click', onSeatSelect);

renderArena();
