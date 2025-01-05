(() =>{
    
    const openNavMenu = document.querySelector(".open-nav-menu"),
    closeNavMenu = document.querySelector(".close-nav-menu"),
    navMenu = document.querySelector(".nav-menu"),
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 992;
  
    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener("click", toggleNav);
  
    function toggleNav() {
      navMenu.classList.toggle("open");
      menuOverlay.classList.toggle("active");
      document.body.classList.toggle("hidden-scrolling");
    }
  
    navMenu.addEventListener("click", (event) =>{
        if(event.target.hasAttribute("data-toggle") && 
          window.innerWidth <= mediaSize){
          // prevent default anchor click behavior
          event.preventDefault();
          const menuItemHasChildren = event.target.parentElement;
          // if menuItemHasChildren is already expanded, collapse it
          if(menuItemHasChildren.classList.contains("active")){
            collapseSubMenu();
          }
          else{
            // collapse existing expanded menuItemHasChildren
            if(navMenu.querySelector(".menu-item-has-children.active")){
            collapseSubMenu();
            }
            // expand new menuItemHasChildren
            menuItemHasChildren.classList.add("active");
            const subMenu = menuItemHasChildren.querySelector(".sub-menu");
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
          }
        }
    });

    function collapseSubMenu(){
      navMenu.querySelector(".menu-item-has-children.active .sub-menu")
      .removeAttribute("style");
      navMenu.querySelector(".menu-item-has-children.active")
      .classList.remove("active");
    }
    function resizeFix(){
       // if navMenu is open ,close it
       if(navMenu.classList.contains("open")){
         toggleNav();
       }
       // if menuItemHasChildren is expanded , collapse it
       if(navMenu.querySelector(".menu-item-has-children.active")){
            collapseSubMenu();
            
          }    
    }
    
  
    window.addEventListener("resize", function(){
      if(this.innerWidth > mediaSize){
        resizeFix();
        
      }
      
   });



  })();


  // Image Slidshow  

  const buttons = document.querySelectorAll("[data-carousel-button]")

  buttons.forEach(button => {
button.addEventListener("click", () =>{
const offset = button.dataset.carouselButton === "next" ? 1 : -1
const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

const activeSlide = slides.querySelector("[data-active]")
let newIndex = [...slides.children].indexOf(activeSlide) + offset
if (newIndex < 0) newIndex = slides.children.length - 1
if (newIndex >= slides.children.length) newIndex = 0

slides.children[newIndex].dataset.active = true
delete activeSlide.dataset.active

})
})
  

// Back to top
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 100) { // show backToTopButton
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
  




