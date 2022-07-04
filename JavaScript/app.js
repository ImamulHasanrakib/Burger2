
const headerWrap = document.querySelector('.header_wrapper');

window.onscroll = function(){

    if(document.documentElement.scrollTop > 20)

    {
        headerWrap.classList.add('header_scrolled');
    }
    else{

        headerWrap.classList.remove('header_scrolled');

    }
}

const collapse = document.querySelector('.collapse.navbar-collapse');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(bar =>{
    bar.addEventListener('click' , () =>{
        collapse.classList.remove('show');
    })
})



// swiper related design 
$(document).ready(function(){

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 40,
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

})

  
