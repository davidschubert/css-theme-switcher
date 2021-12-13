// 1.) OM Elements
const lightButton = document.getElementById('lightmode');
const darkButton = document.getElementById('darkmode');
const solarButton = document.getElementById('solar');
const body = document.body;

// 2.) Apply the cached theme on reload
const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme && theme == 'darkmode') {
  //alert("Theme aus dem local Storage: " + theme);
  body.classList.replace('lightmode', 'darkmode');
}

if (isSolar && isSolar == 'true') {
  //alert("isSolar aus dem local Storage: " + isSolar);
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


/* Themes Switcher über Select Box */
const setTheme = theme => body.classList.add(theme);
 
document.getElementById('appearance-select').addEventListener('change', function() {
  body.classList.replace('lightmode', 'darkmode');
  setTheme(this.value);
});

document.getElementById('accent-color-select').addEventListener('change', function() {
  body.classList.replace('solar', 'riviera');
  setTheme(this.value);
});

/* Store User Choice in Local Storage */
