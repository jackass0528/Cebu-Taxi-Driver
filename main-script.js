// Back to top
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 3000) { // show backToTopButton
    backToTopButton.style.display = "block"
  }
  else { // Hide BackToTopButton
    backToTopButton.style.display = "none"
  }
}
  backToTopButton.addEventListener("click", backToTop);

  function backToTop() {
window.scrollTo(0, 0);
  }
  




//Image sharp
const sharp = require('sharp');
const fs = require('fs');
const directory = './images';

fs.readdirSync(directory).forEach(file => {
  sharp(`${directory}/${file}`)
    .resize(200, 100) // width, height
    .toFile(`${directory}/${file}-small.jpg`);
  });
