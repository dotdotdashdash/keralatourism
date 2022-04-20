// Show / Hide Password

function showPassword() {
    let userPass = document.getElementById("userPass");
    if ((userPass.type === "password") && !(userPass.value == "")) {
        userPass.type = "text";
    } else {
        userPass.type = "password";
    }
}

// -------------------Sign Up form validations-------------------

// Event Listener


const signinform = document.getElementById("signinform");

signinform.addEventListener('submit', function(Event) {    
    if (!validateMail() | !validatepwd()) {
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

// Password Validation

function validatepwd() {
    let pwd = document.getElementById("userPass");

    if (!pwdStrength()) {
        pwd.setCustomValidity("You're not matching the valid password format."); 
        pwd.reportValidity();
        return false;
    }
    else {
        pwd.setCustomValidity("");
        return true;
    }
}

// Password Format Check

function pwdStrength() {
    let pwdValue = document.getElementById("userPass");

    let pwdUpperRegex = /[A-Z]/g;
    let pwdLowerRegex = /[a-z]/g;
    let pwdNumRegex = /[0-9]/g;

    let strCount = 0;

    if (pwdValue.value != "") {
        strCount++;        
    }
    if(pwdUpperRegex.test(pwdValue.value)) {
        strCount++; 
    }
    if(pwdLowerRegex.test(pwdValue.value)) {
        strCount++;
    }
    if(pwdNumRegex.test(pwdValue.value)) {
        strCount++;
    }
    if(pwdValue.value.length >= 8) {
        strCount++;
    }

    if (strCount >= 5) {
        return true;
    }
}