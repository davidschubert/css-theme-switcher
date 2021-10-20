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








/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-details-webp-setclasses !*/
 !function(e,n,t){function o(e,n){return typeof e===n}function A(){var e,n,t,A,a,i,s;for(var r in d)if(d.hasOwnProperty(r)){if(e=[],n=d[r],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(A=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],s=i.split("."),1===s.length?Modernizr[s[0]]=A:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=A),f.push((A?"":"no-")+s.join("-"))}}function a(e){var n=p.className,t=Modernizr._config.classPrefix||"";if(h&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),h?p.className.baseVal=n:p.className=n)}function i(e,n){if("object"==typeof e)for(var t in e)c(e,t)&&i(t,e[t]);else{e=e.toLowerCase();var o=e.split("."),A=Modernizr[o[0]];if(2==o.length&&(A=A[o[1]]),"undefined"!=typeof A)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):h?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=s(h?"svg":"body"),e.fake=!0),e}function l(e,t,o,A){var a,i,l,f,d="modernizr",u=s("div"),c=r();if(parseInt(o,10))for(;o--;)l=s("div"),l.id=A?A[o]:d+(o+1),u.appendChild(l);return a=s("style"),a.type="text/css",a.id="s"+d,(c.fake?c:u).appendChild(a),c.appendChild(u),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),u.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",f=p.style.overflow,p.style.overflow="hidden",p.appendChild(c)),i=t(u,e),c.fake?(c.parentNode.removeChild(c),p.style.overflow=f,p.offsetHeight):u.parentNode.removeChild(u),!!i}var f=[],d=[],u={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){d.push({name:e,fn:n,options:t})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=u,Modernizr=new Modernizr;var c,p=n.documentElement,h="svg"===p.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;c=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),u._l={},u.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},u._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,o;for(e=0;e<t.length;e++)(o=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){u.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,t){function o(n){var o=n&&"load"===n.type?1==A.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),t&&t(n)}var A=new Image;A.onerror=o,A.onload=o,A.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=n.shift();e(t.name,t.uri,function(t){if(t&&"load"===t.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})});var g=u.testStyles=l;Modernizr.addTest("details",function(){var e,n=s("details");return"open"in n?(g("#modernizr details{display:block}",function(t){t.appendChild(n),n.innerHTML="<summary>a</summary>b",e=n.offsetHeight,n.open=!0,e=e!=n.offsetHeight}),e):!1}),A(),a(f),delete u.addTest,delete u.addAsyncTest;for(var m=0;m<Modernizr._q.length;m++)Modernizr._q[m]();e.Modernizr=Modernizr}(window,document);













console.info("--scroll-y: " + scrollY);
console.info("body: " + body);


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



