"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// OM Elements
var lightButton = document.getElementById('light');
var darkButton = document.getElementById('dark');
var solarButton = document.getElementById('solar');
var body = document.body; // Apply the cached theme on reload

var theme = localStorage.getItem('theme');
var isSolar = localStorage.getItem('isSolar');

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solar');
} // Button Event Handlers


darkButton.onclick = function () {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
};

lightButton.onclick = function () {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
};

solarButton.onclick = function () {
  if (body.classList.contains('solar')) {
    body.classList.remove('solar');
    solarButton.style.cssText = "\n      --bg-solar: var(--yellow);\n    ";
    solarButton.innerText = 'solarize';
    localStorage.removeItem('isSolar');
  } else {
    solarButton.style.cssText = "\n      --bg-solar: white;\n    ";
    body.classList.add('solar');
    solarButton.innerText = 'normalize';
    localStorage.setItem('isSolar', true);
  }
};
/* Slowly scrolling down */


function pageScroll() {
  window.scrollBy(0, 1); //target.style.transform = "translate3d(0px, 1px, 0px)";

  scrolldelay = setTimeout(pageScroll, 40);
  console.info("Starte Autoscroll!");
} //pageScroll();

/* Check if user is scrolling */


var userHasScrolled = false; //console.info('Hier steht ein Test');

window.onscroll = function (e) {
  var userHasScrolled = true; //console.info('Es wurde gescrollt');
}; //window.addEventListener("wheel", event => console.info(event.deltaY));


window.addEventListener("wheel", function () {//console.info(event.deltaY + " er hat gescrollt");
}); // was auch immer das ist

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

/* modernizr.custom.js */

/* jpeg2000, jpeg xr, webp */

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/

!function (e, n, A) {
  function o(e, n) {
    return _typeof(e) === n;
  }

  function t() {
    var e, n, A, t, a, i, l;

    for (var f in r) {
      if (r.hasOwnProperty(f)) {
        if (e = [], n = r[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (A = 0; A < n.options.aliases.length; A++) {
          e.push(n.options.aliases[A].toLowerCase());
        }

        for (t = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) {
          i = e[a], l = i.split("."), 1 === l.length ? Modernizr[l[0]] = t : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = t), s.push((t ? "" : "no-") + l.join("-"));
        }
      }
    }
  }

  function a(e) {
    var n = u.className,
        A = Modernizr._config.classPrefix || "";

    if (c && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var o = new RegExp("(^|\\s)" + A + "no-js(\\s|$)");
      n = n.replace(o, "$1" + A + "js$2");
    }

    Modernizr._config.enableClasses && (n += " " + A + e.join(" " + A), c ? u.className.baseVal = n : u.className = n);
  }

  function i(e, n) {
    if ("object" == _typeof(e)) for (var A in e) {
      f(e, A) && i(A, e[A]);
    } else {
      e = e.toLowerCase();
      var o = e.split("."),
          t = Modernizr[o[0]];
      if (2 == o.length && (t = t[o[1]]), "undefined" != typeof t) return Modernizr;
      n = "function" == typeof n ? n() : n, 1 == o.length ? Modernizr[o[0]] = n : (!Modernizr[o[0]] || Modernizr[o[0]] instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])), Modernizr[o[0]][o[1]] = n), a([(n && 0 != n ? "" : "no-") + o.join("-")]), Modernizr._trigger(e, n);
    }
    return Modernizr;
  }

  var s = [],
      r = [],
      l = {
    _version: "3.6.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, n) {
      var A = this;
      setTimeout(function () {
        n(A[e]);
      }, 0);
    },
    addTest: function addTest(e, n, A) {
      r.push({
        name: e,
        fn: n,
        options: A
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      r.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = l, Modernizr = new Modernizr();
  var f,
      u = n.documentElement,
      c = "svg" === u.nodeName.toLowerCase();
  !function () {
    var e = {}.hasOwnProperty;
    f = o(e, "undefined") || o(e.call, "undefined") ? function (e, n) {
      return n in e && o(e.constructor.prototype[n], "undefined");
    } : function (n, A) {
      return e.call(n, A);
    };
  }(), l._l = {}, l.on = function (e, n) {
    this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function () {
      Modernizr._trigger(e, Modernizr[e]);
    }, 0);
  }, l._trigger = function (e, n) {
    if (this._l[e]) {
      var A = this._l[e];
      setTimeout(function () {
        var e, o;

        for (e = 0; e < A.length; e++) {
          (o = A[e])(n);
        }
      }, 0), delete this._l[e];
    }
  }, Modernizr._q.push(function () {
    l.addTest = i;
  }), Modernizr.addAsyncTest(function () {
    function e(e, n, A) {
      function o(n) {
        var o = n && "load" === n.type ? 1 == t.width : !1,
            a = "webp" === e;
        i(e, a && o ? new Boolean(o) : o), A && A(n);
      }

      var t = new Image();
      t.onerror = o, t.onload = o, t.src = n;
    }

    var n = [{
      uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
      name: "webp"
    }, {
      uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
      name: "webp.alpha"
    }, {
      uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
      name: "webp.animation"
    }, {
      uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
      name: "webp.lossless"
    }],
        A = n.shift();
    e(A.name, A.uri, function (A) {
      if (A && "load" === A.type) for (var o = 0; o < n.length; o++) {
        e(n[o].name, n[o].uri);
      }
    });
  }), t(), a(s), delete l.addTest, delete l.addAsyncTest;

  for (var p = 0; p < Modernizr._q.length; p++) {
    Modernizr._q[p]();
  }

  e.Modernizr = Modernizr;
}(window, document);
/* Modal openers */

window.addEventListener("resize", function () {
  measure.style.setProperty("--height-y", "".concat(window.innerHeight, "px"));
  console.info("Button zum Modal öffnen wurde geklickt.");
});
var buttonOpenModal = document.getElementById('btn-open-modal');

buttonOpenModal.onclick = function () {
  //console.info("Button zum Modal öffnen wurde geklickt.");
  body.classList.toggle('modal-open'); //console.info("modal-open Class wurde dem Body-tag angefügt.");

  body.style.position = 'fixed';
  body.style.top = "-".concat(scrollY);
};

var buttonCloseModal = document.getElementById('btn-open-modal'); //const detailHTML = details.open;

/*if (detailHTML) {
  // toggle close
  console.info("Details ist offen");
}
else {
  // toggle open
  console.info("Details ist geschlossen");
}*/

console.info("--scroll-y: " + scrollY);
console.info("body: " + body);

var showDialog = function showDialog() {
  document.getElementById('dialog').classList.add('show');
  body.style.position = 'fixed';
  body.style.top = "-".concat(scrollY);
};

var closeDialog = function closeDialog() {
  var body = document.body;
  var scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  document.getElementById('dialog').classList.remove('show');
};

window.addEventListener('scroll', function () {
  document.documentElement.style.setProperty('--scroll-y', "".concat(window.scrollY, "px"));
});
/* Modal */
// get reference to the modal

var scrollY;
console.info("scrollHeightY: " + scrollHeightY);
var modal = document.querySelector(".modal");
console.info("Modal: " + modal); // helper function to run preventDefault

function preventDefault(e) {
  e.preventDefault();
}

function showModal() {
  // remember scroll position
  scrollHeightY = window.scrollHeightY; // assign lock to html element

  document.documentElement.classList.add("is-locked"); // open modal

  modal.classList.add("is-open"); // block pointer events

  modal.addEventListener("pointermove", preventDefault);
}

function hideModal() {
  // remove lock from html element
  document.documentElement.classList.remove("is-locked"); // close modal

  modal.classList.remove("is-open"); // resume pointer events

  modal.removeEventListener("pointermove", preventDefault); // restore scroll position

  window.scrollTo(0, scrollHeightY);
}

function syncHeight() {
  document.documentElement.style.setProperty("--window-inner-height", "".concat(window.innerHeight, "px"));
}

window.addEventListener("resize", syncHeight);