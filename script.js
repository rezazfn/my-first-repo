/*const track = document.querySelector('.track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.caroubutton--right');
const prevButton = document.querySelector('.caroubutton--left');
const nav = document.querySelector('.carou-nav');
const dots = Array.from(nav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    console.log('test');
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition); 

/*let count =1;
document.getElementById('rightbutton').checked = true;

setInterval{ function() { 
    nextImage(); 
},3000}

function nextImage() {
    count++;
    if(count>4){
        count=1;
    }
}

document.getElementById(''+count).checked = true; */

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})