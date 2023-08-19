
/* kod za hambgurger menu  */
const hamburger = document.querySelector(".ham");  
const navsub = document.querySelector(".navbar");  
hamburger.addEventListener('click', () => {  
 hamburger.classList.toggle("change")  
 navsub.classList.toggle("nav-change")  
});  


/* work popup kod  */


document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work-button")) {
        togglePortfolioPopup();
        porfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup () {
    document.querySelector(".portfolio-popup").classList.toggle("open");
}

document.querySelector(".portfolio-popup-close").addEventListener("click", togglePortfolioPopup)


function porfolioItemDetails(portfolioItem) {
    document.querySelector("pp-thumnail").src = portfolioItem.querySelector(".work-img").src;

    document.querySelector(".portfolio-popup-subtitle span").innerHTML = portfolioItem.querySelector(".work-title").innerHTML;

    document.querySelector(".portfolio-popup-body").innerHTML = portfolioItem.querySelector(".details-title").innerHTML;
}