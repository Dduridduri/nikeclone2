
const wraps = [
  document.querySelector(".sub-menu-wrap1"),
  document.querySelector(".sub-menu-wrap2"),
  document.querySelector(".sub-menu-wrap3"),
  document.querySelector(".sub-menu-wrap4"),
  document.querySelector(".sub-menu-wrap5")
]

let menu = document.querySelectorAll(".header .header-menu .nike ul li")


  menu.forEach((e,i)=>{
    e.style.border = 'none'
    
    if(i <= 4){
      menu[i].addEventListener('mouseover', function(){

        menu.forEach(el=>{
          el.style.borderBottom = 'none'
        })

        menu[i].style.borderBottom = '2px solid #000'

        wraps.forEach(wrap => {
          wrap.style.display = "none";
        });

        wraps[i].style.display = "block"
        
      })
    }
    if(i <= 4){
      wraps[i].addEventListener('mouseleave', function(){
        wraps[i].style.display = "none"
        menu[i].style.borderBottom = 'none'
      })
    
    } if(i <= 4){
      menu[i].addEventListener('mouseleave', function(){
        wraps[i].style.display = "none"
        menu[i].style.borderBottom = 'none'
      })
    
    }
  })


  document.querySelectorAll('.slide-container').forEach(slideContainer => {
    let currentSlide = 0;
    
    const slides = slideContainer.querySelectorAll('.slide');
    const totalSlides = slides.length;

    const parentContainer = slideContainer.parentElement; 
    const prevButton = parentContainer.querySelector('.prev');
    const nextButton = parentContainer.querySelector('.next');

    prevButton.addEventListener('click', function() {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
        updateSlidePosition();
    });

    nextButton.addEventListener('click', function() {
        currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
        updateSlidePosition();
    });

    function updateSlidePosition() {
        slideContainer.style.transform = 'translateX(' + (-currentSlide * 593) + 'px)';
    }
});

const sliders = document.querySelectorAll('.slider');

document.querySelectorAll('.slider ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

sliders.forEach(slider => {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // *2 increases the drag speed
        slider.scrollLeft = scrollLeft - walk;
    });
});
