/*******************
 BUTTON HOVER EFFECT
*******************/
/*document.body.style.cursor = "none";*/

/*var cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

var follow = document.createElement("div");
follow.classList.add("follow");
document.body.appendChild(follow);

function move(obj, event) {
  obj.style = "";
  obj.style.top = event.clientY + "px";
  obj.style.left = event.clientX + "px";
}

if (cursor) {
  window.addEventListener("mousemove", function(event) {
    var e = event;
    var t = e.target;
    var f = follow;
    var c = cursor;

    if (t.tagName == "A") {
      c.style.backgroundColor = "transparent";

      f.style.top = t.offsetTop + "px";
      f.style.left = t.offsetLeft + "px";
      f.style.width = t.clientWidth + "px";
      f.style.height = t.clientHeight + "px";

      f.classList.add("on-focus");
    } else {
      move(c, e);
      move(f, e);
      f.classList.remove("on-focus");
    }
  })
}*/


/* CUSTOM MAUSZEIGER */

const customCursor = document.querySelector("#ds-cursor");
var distanceToCursor = 0; //10?
var timeout;

// 1. follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
  // setze style-tag im dom
  customCursor.style.left = (e.clientX - distanceToCursor) + "px";
  customCursor.style.top = (e.clientY - distanceToCursor) + "px";
  customCursor.style.display = "block";

  // 3. cursor effects when mouse stopped
  function mouseStopped() {
    customCursor.style.display = "none";
  }

  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 7000);
});

// 2. cursor effects when mouseout
document.addEventListener("mouseout", () => {
  customCursor.style.display = "none";
});


/*****
Ausgabe der Werte für die debugbox
*****/


function getCoordData(e) {
  // vanilla JS window width and height
  let w__cursor = window,
    d__cursor = document,
    e__cursor = d__cursor.documentElement,
    g_cursor = d__cursor.getElementsByTagName('body')[0],
    x__cursor = w__cursor.innerWidth || e__cursor.clientWidth || g_cursor.clientWidth,
    y__cursor = w__cursor.innerHeight || e__cursor.clientHeight || g_cursor.clientHeight;

  let eins = "1 pageX+YOffset: " + window.pageXOffset + " x " + window.pageYOffset + "<br>",
    drei = "3 scrollW+H: " + document.documentElement.scrollWidth + " x " + document.documentElement.scrollHeight + "<br>",
    fuenf = "5 innerW+H: " + window.innerWidth + " x " + window.innerHeight + "<br>";


  let body = document.body,
      html = document.documentElement;

  // Alle Variablen festlegen
  var x_coor = e.clientX;
  var y_coor = e.clientY;
  var coor = "Mauszeiger: " + x_coor + " x " + y_coor;

  // innerHTML festlegen
  const debugbox = document.getElementById("debugbox");

  // Ausgabe per innerHTML
  debugbox.innerHTML = "body.scrollHeight " + body.scrollHeight + "<br>" +
                   "body.offsetHeight " + body.offsetHeight + "<br>" +
                   "html.clientHeight " + html.clientHeight + "<br>" +
                   "html.scrollHeight " + html.scrollHeight + "<br>" +
                   "html.offsetHeight " + html.offsetHeight + "<br>" +
                   "<br>" +
                   eins +
                   drei +
                   fuenf + "<br>" +
                   coor + "<br>";
}


document.onload = function() {
  getCoordData();
};

document.addEventListener("resize", getCoordData);
document.addEventListener("scroll", getCoordData);


document.addEventListener("mousemove", function(event) {
  getCoordData(event);
});
