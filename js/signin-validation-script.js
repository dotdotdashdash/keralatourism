// -------------------Sign Up form validations-------------------

// Event Listener


const signinform = document.getElementById("signinform");

signinform.addEventListener('submit', function(Event) {    
    if (!validateMail()) {
        Event.preventDefault();
    }
})

// Mail Validation

function validateMail() {
    let eMail = document.getElementById("userEmail");
    let regexMail = /^([\w\.\-]+)@([\w\-]+).([a-z]{2,4})(.[a-z]{2,4})*$/;

    if(regexMail.test(eMail.value)) {
        eMail.classList.remove("border", "border-danger");  //border colors are changed by toggling bootstrap classes
        return true;
    } else {
        eMail.classList.add("border", "border-danger");
        eMail.setCustomValidity('Invalid Email ID'); 
        eMail.reportValidity();  
        return false;
    }

}
