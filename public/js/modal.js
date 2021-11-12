const showDialog = () => {
  document.getElementById('dialog').classList.add('show')
  
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
};

const closeDialog = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  document.getElementById('dialog').classList.remove('show');
}

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});







/* Modal */
// get reference to the modal
let scrollHeightY;
console.info("scrollHeightY: " + scrollY);
console.info("scrollHeightY: " + scrollHeightY);

const modal = document.querySelector(".modal");
console.info("Modal: " + modal);

// helper function to run preventDefault
function preventDefault(e) {
  e.preventDefault();
}

function showModal() {
  // remember scroll position
  scrollY = window.scrollY;

  // assign lock to html element
  document.documentElement.classList.toggle("is-locked");

  // open modal
  modal.classList.toggle("is-open");

  // block pointer events
  modal.addEventListener("pointermove", preventDefault);
}

function hideModal() {
  document.getElementById("myModalDetails").removeAttribute("open");

  // remove lock from html element
  document.documentElement.classList.remove("is-locked");

  // close modal
  modal.classList.remove("is-open");

  // resume pointer events
  modal.removeEventListener("pointermove", preventDefault);

  // restore scroll position
  window.scrollTo(0, scrollY);
}


function syncHeight() {
  document.documentElement.style.setProperty(
    "--window-inner-height",
    `${window.innerHeight}px`
  );
}

window.addEventListener("resize", syncHeight);









/* Modal openers */
window.addEventListener("resize", () => {
  measure.style.setProperty("--height-y", `${window.innerHeight}px`);
  console.info("Button zum Modal öffnen wurde geklickt.");
});


const buttonOpenModal = document.getElementById('btn-open-modal');

buttonOpenModal.onclick = () => {
  showModal();
  
  //console.info("Button zum Modal öffnen wurde geklickt.");
  //body.classList.toggle('modal-open');
  
  //console.info("modal-open Class wurde dem Body-tag angefügt.");

  //body.style.position = 'fixed';
  //body.style.top = `-${scrollY}`;
};

const buttonCloseModal = document.getElementById('btn-open-modal');