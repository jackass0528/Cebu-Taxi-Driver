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
  



//Slider
  let scrollContainer = document.querySelector(".gallery");
  let backBnt = document.getElementById("backBnt");
  let nextBnt = document.getElementById("nextBnt");

   scrollContainer.addEventListener("wheel", (evt) => {
evt.preventDefault();
scrollContainer.scrollLeft += evt.deltaY;
scrollContainer.style.scrollBehavior = "auto";

   });
   document.getElementById("nextBtn").addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
  });

     document.getElementById("backBtn").addEventListener("click", ()=>{
       scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
  });

