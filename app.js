
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



/* form validating code  */


let nameError = document.getElementById('name-error');

let emailError = document.getElementById('email-error');

let emailSubError = document.getElementById('emailSub-error');

let messageError = document.getElementById('text-error');

let submitError = document.getElementById('submit-error');


function validateName() {
    let name = document.getElementById('conctact-name').value;
    
    if(name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }

    if (!name.match (/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check fa-beat fa-sm" style="color: #66ff00;"></i>'
    return true;
}


function validateEmail () {
    let email = document.getElementById('conctact-email').value; 

    if(email.length == 0) {
        emailError.innerHTML = 'Email is required'
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid'
    return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check fa-beat fa-sm" style="color: #66ff00;"></i>'
    return true;
}

function validateEmailSub() {
    let emailSub = document.getElementById('conctact-emailsub').value;

    if(emailSub.length == 0) {
        emailSubError.innerHTML = 'Email Subject is required';
        return false;
    }

    if (!emailSub.match (/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        emailSubError.innerHTML = 'Write Email Subject';
        return false;
    }

    emailSubError.innerHTML = '<i class="fa-solid fa-circle-check fa-beat fa-sm" style="color: #66ff00;"></i>'
    return true;
}


function  validateMessage () {
    let message = document.getElementById('conctact-message').value;
    let required = 10;
    let left = required - message.length;

    if(left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check fa-beat fa-sm" style="color: #66ff00;"></i>'
    return true;

}

function validateForm() {
    if(!validateName() || !validateEmail() || !validateMessage ()){
        submitError.innerHTML = 'Please fix error to submit   <i class="fa-solid fa-circle-exclamation fa-beat fa-lg" style="color: #ff0000;"></i>';
        return false;
    }
}


/* function send email */

