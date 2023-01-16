function toggle() {
  const dash = document.querySelector(".a");
  dash.classList.toggle("open");
  const scn = document.querySelector(".screen");
  scn.classList.toggle("open");

}




function reportWindowSize() {
  const dash = document.querySelector(".a");

  var w = window.innerWidth;
  if (w >= 1000) {
    dash.classList.remove("open");

  }
}

window.onresize = reportWindowSize;
