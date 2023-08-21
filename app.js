
/* kod za hambgurger menu  */
const hamburger = document.querySelector(".ham");  
const navsub = document.querySelector(".navbar");  
hamburger.addEventListener('click', () => {  
 hamburger.classList.toggle("change")  
 navsub.classList.toggle("nav-change")  
});  


/* work popup kod  */




let popupViews = document.querySelectorAll('.popup-view');
let popupBtns = document.querySelectorAll('.popup-btn');
let closeBtns = document.querySelectorAll('.close-btn');


//javascript for quick view button
let popup = function(popupClick){
    popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtn, i) => {
    popupBtn.addEventListener("click", () => {
    popup(i);
    });
});

//javascript for close button
closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
    popupViews.forEach((popupView) => {
        popupView.classList.remove('active');
    });
    });
});
