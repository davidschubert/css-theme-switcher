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
