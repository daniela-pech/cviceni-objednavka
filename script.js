const klik = (event) => {
  event.preventDefault();
  const cisloKarty = document.querySelector('#karta').value;
  const zpusobDopravy = document.querySelector('#doprava').value;

  document.querySelector('.container').innerHTML = `
  <p>Objednávka odeslána ke zpracování.</p>
  <p>Platební karta ${cisloKarty}</p>
  <p>Způsob zvolené dopravy: ${zpusobDopravy}</>
  `;
};

document.querySelector('#platba').addEventListener('submit', klik);
