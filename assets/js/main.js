/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
 
const modalViews = document.querySelectorAll('.services__modal'),
          modalBtns = document.querySelectorAll('.services__button'),
          modalClose = document.querySelectorAll('.services__modal-close');
    
    let modal = function(modalClick) {
            modalViews[modalClick].classList.add('active-modal');

          }

    modalBtns.forEach((mb,i)=>{
        mb.addEventListener('click',()=>{
            modal(i)
        })
    })      
    modalClose.forEach((mc) =>{
        mc.addEventListener('click',()=>{
            modalViews.forEach((mv) =>{
                mv.classList.remove('active-modal')
            })    
        })

    })
        
/*===================work modal===========================*/   
const WmodalViews = document.querySelectorAll('.work__modal'),
      WmodalBtns = document.querySelectorAll('.work__button'),
      WmodalClose = document.querySelectorAll('.work__modal-close');
    
    let Wmodal = function(modalClick) {
            WmodalViews[modalClick].classList.add('active-modal');

          }

    WmodalBtns.forEach((mb,i)=>{
        mb.addEventListener('click',()=>{
            Wmodal(i)
        })
    })      
    WmodalClose.forEach((mc) =>{
        mc.addEventListener('click',()=>{
            WmodalViews.forEach((mv) =>{
                mv.classList.remove('active-modal')
            })    
        })

    })

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerportfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item');

function activeWork(){
    linkWork.forEach(L => L.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach(L => L.addEventListener('click', activeWork));


/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
    },
    
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,

})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, {delay: 700})
sr.reveal(`.home__social, .home scroll`, {delay:900, origin: 'bottom'})
sr.reveal(`.about__title`)
sr.reveal(`.about__img`, {delay: 600, origin: 'left'})
sr.reveal(`.about__info, .about__description`, {delay: 670, origin: 'right'})
sr.reveal(`.skills__content`, {delay:400, origin: 'bottom'})
sr.reveal(`.services`, {delay:900, origin: 'left'})
sr.reveal(`.work`, {delay:700, origin: 'right'})




















/*---------------------- Lightbox.js-------------------- */
lightGallery(document.querySelectorAll('.work__card'));

