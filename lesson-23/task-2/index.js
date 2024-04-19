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
  return generateNumbersRange(1, 10)
    .map(
      lineNumber => `
    <div 
        class="sector__line" 
        data-line-number="${lineNumber}"
        >${getLineSeats()}</div>
    `,
    )
    .join('');
};

const arenaElem = document.querySelector('.arena');

const renderArena = () => {
  arenaElem.innerHTML = generateNumbersRange(1, 3)
    .map(
      sectorNumber => `
    <div 
        class="sector" 
        data-sector-number="${sectorNumber}"
        >${getSectorLines()}</div>
    `,
    )
    .join('');
};

const onSeatSelect = event => {
  if (!event.target.matches('.sector__seat')) {
    return;
  }

  const seatNumber = event.target.dataset.seatNumber;
  const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;

  const selectedSeatElem = document.querySelector('.board__selected-seat');

  selectedSeatElem.textContent = `S ${sectorNumber} L - ${lineNumber} - S ${seatNumber}`;
};

arenaElem.addEventListener('click', onSeatSelect);

renderArena();
