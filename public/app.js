// OM Elements

const lightButton = document.getElementById('light');
const darkButton = document.getElementById('dark');
const solarButton = document.getElementById('solar');
const body = document.body;

// Apply the cached theme on reload

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solar');
}

// Button Event Handlers

darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
};

lightButton.onclick = () => {
  body.classList.replace('dark', 'light');

  localStorage.setItem('theme', 'light');
};

solarButton.onclick = () => {

  if (body.classList.contains('solar')) {
    
    body.classList.remove('solar');
    solarButton.style.cssText = `
      --bg-solar: var(--yellow);
    `

    solarButton.innerText = 'solarize';

    localStorage.removeItem('isSolar');

  } else {

    solarButton.style.cssText = `
      --bg-solar: white;
    `

    body.classList.add('solar');
    solarButton.innerText = 'normalize';

    localStorage.setItem('isSolar', true);
  }
};



/* Slowly scrolling down */
function pageScroll() {
  window.scrollBy(0, 1);
  //target.style.transform = "translate3d(0px, 1px, 0px)";
  scrolldelay = setTimeout(pageScroll, 40);
  console.info("Starte Autoscroll!");
}

//pageScroll();

/* Check if user is scrolling */
let userHasScrolled = false;
//console.info('Hier steht ein Test');
window.onscroll = function (e) {
    let userHasScrolled = true;
    //console.info('Es wurde gescrollt');
    
}

//window.addEventListener("wheel", event => console.info(event.deltaY));

window.addEventListener("wheel", function() {
  //console.info(event.deltaY + " er hat gescrollt");
});



// was auch immer das ist
/*window.onscroll = function() {
  var target = document.getElementById("main");

  var body = document.body, html = document.documentElement;

  var completeheight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

  var height = window.innerHeight;

  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

  // Change this if you want it to fade faster
  //height = height / 1;

  target.style.opacity = (height - scrollTop) / height;
  target.style.transform = "translate3d(0px, 1px, 0px)";

  console.info("Target: " + target);
  console.info("completeheight: " + completeheight);
  console.info("Höhe: " + height);
  console.info("scrollTop: " + scrollTop);
};*/