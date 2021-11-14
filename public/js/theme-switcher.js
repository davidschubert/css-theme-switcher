// 1.) OM Elements
const lightButton = document.getElementById('lightmode');
const darkButton = document.getElementById('darkmode');
const solarButton = document.getElementById('solar');
const body = document.body;

// 2.) Apply the cached theme on reload
const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
  body.classList.add('theme');
  isSolar && body.classList.add('solar');
}

// 3.) Button Event Handlers
// First Button
darkButton.onclick = () => {
  body.classList.replace('lightmode', 'darkmode');
  localStorage.setItem('theme', 'darkmode');
};

// Second Button
lightButton.onclick = () => {
  body.classList.replace('darkmode', 'lightmode');
  localStorage.setItem('theme', 'lightmode');
};

// Third Button
solarButton.onclick = () => {
  if (body.classList.contains('solar')) {
    body.classList.remove('solar');
    solarButton.style.cssText = `--bg-solar: var(--yellow);`

    solarButton.innerText = 'solarize';

    localStorage.removeItem('isSolar');

  } else {
    solarButton.style.cssText = `--bg-solar: white;`

    body.classList.add('solar');
    solarButton.innerText = 'normalize';

    localStorage.setItem('isSolar', true);
  }
};