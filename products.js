function showSidebar(){
   const sidebar = document.querySelector('.sidebar')
   sidebar.style.display= 'flex'
}

function hideSidebar(){
   const sidebar = document.querySelector('.sidebar')
   sidebar.style.display= 'none'
}

let slideIndex = 1;
showImage(slideIndex);

function plusSlides(n) {
  showImage(slideIndex += n);
}

function currentSlide(n) {
  showImage(slideIndex = n);
}

function showImage(n) {
  let i;
  let slides = document.getElementsByClassName("image");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}