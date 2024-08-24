/*=======Work Modal=====*/
/*===================work modal===========================*/   
const modalViews = document.querySelectorAll('.work__modal'),
      modalBtns = document.querySelectorAll('.work__button'),
      modalClose = document.querySelectorAll('.work__modal-close');
    
    let workModal = function(modalClick) {
            workModalViews[modalClick].classList.add('active-modal');

          }

    modalBtns.forEach((mb,i)=>{
        mb.addEventListener('click',()=>{
            modal(i)
        })
    })      
    modalClose.forEach((mc) =>{
        mc.addEventListener('click',()=>{
            workModalViews.forEach((mv) =>{
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