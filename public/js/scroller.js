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