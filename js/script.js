// Password Popup toggle

function show() {
    var popup = document.getElementById("pwdPopup");
    popup.style.visibility = "visible";
}

function hide() {
    var popup = document.getElementById("pwdPopup");
    popup.style.visibility = "hidden";
}

// Mobile Number Popup toggle

function mobilePopupshow() {
    var mobilePopup = document.getElementById("mobilePopup");
    mobilePopup.style.visibility = "visible";
}

function mobilePopuphide() {
    var mobilePopup = document.getElementById("mobilePopup");
    mobilePopup.style.visibility = "hidden";
}

function showPassword() {
    let userPass = document.getElementById("userPass");
    if (userPass.type === "password") {
        userPass.type = "text";
    } else {
        userPass.type = "password";
    }
}


// Sign Up form validations----------------------------------------------------------------------

const form = document.getElementById("signupform");

form.addEventListener('submit', function(Event) {
    // let mailFlag = validateMail();
    // let mobileFlag = validateMobile();
    // let pwdFlag = validatepwd();
    // let pwdStrengthFlag = pwdStrength();

    if (!validateMail() || !validateMobile() || !validatepwd() || !pwdStrength()) {
        Event.preventDefault();
    }
})

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

function validatepwd() {
    let pwd = document.getElementById("userPass");
    let pwdrpt = document.getElementById("userPassRepeat");

    if (!pwdStrength()) {
        pwd.setCustomValidity('Password should match the required format'); 
        pwd.reportValidity();  
    }

    if (pwd.value != pwdrpt.value) {
        pwdrpt.classList.add("border", "border-danger","border");   //red border
        pwdrpt.setCustomValidity('Password and Repeat Password should match');
        pwdrpt.reportValidity();
        return false;
    }
    pwdrpt.classList.remove("border", "border-danger");     //remove red border
    pwdrpt.setCustomValidity('');
    return true;
}

function validateMobile() {
    let mobileNumber = document.getElementById("userMobile");    
    let regexMob = /^\d{3}[\.\-\s]?\d{3}[\.\-\s]?\d{4}$/;

    if(regexMob.test(mobileNumber.value)) {
        mobileNumber.classList.remove("border", "border-danger");
        return true;
    }
    mobileNumber.classList.add("border", "border-danger");
    mobileNumber.setCustomValidity('Invalid Mobile Number'); 
    mobileNumber.reportValidity();  
    return false;
    
}

// Password Strength Check

function pwdStrength() {
    let pwdValue = document.getElementById("userPass");
    let pb1 = document.getElementById("pb1");
    let pb2 = document.getElementById("pb2");
    let pb3 = document.getElementById("pb3");
    let strengthValue = document.getElementById("strengthValue");
    let pwdli1 = document.getElementById("pwdli1");
    let pwdli2 = document.getElementById("pwdli2");
    let pwdli3 = document.getElementById("pwdli3");
    let pwdli4 = document.getElementById("pwdli4");

    let pwdUpperRegex = /[A-Z]/g;
    let pwdLowerRegex = /[a-z]/g;
    let pwdNumRegex = /[0-9]/g;

    let strCount = 0

    if(pwdValue.value == "") {
        pb1.removeAttribute("style");
        pb2.removeAttribute("style");
        pb3.removeAttribute("style");

        pwdli1.classList.remove("greenTick");
        pwdli1.removeAttribute("style");

        pwdli2.classList.remove("greenTick");
        pwdli2.removeAttribute("style");

        pwdli3.classList.remove("greenTick");
        pwdli3.removeAttribute("style");

        pwdli4.classList.remove("greenTick");
        pwdli4.removeAttribute("style");
        
        strengthValue.innerText = ""
        return;
    } else {
        pb1.setAttribute("style", "width: 20%");
        strengthValue.innerText = "Weak";
        strCount++;        
    }

    if(pwdUpperRegex.test(pwdValue.value)) {
        pwdli1.setAttribute("style", "list-style: none;");
        pwdli1.classList.add("greenTick");
        strCount++;
    } else {
        pwdli1.removeAttribute("style");
        pwdli1.classList.remove("greenTick");
    }

    if(pwdLowerRegex.test(pwdValue.value)) {
        pwdli2.setAttribute("style", "list-style: none;");
        pwdli2.classList.add("greenTick");
        strCount++;
    } else {
        pwdli2.removeAttribute("style");
        pwdli2.classList.remove("greenTick");
    }

    if(pwdNumRegex.test(pwdValue.value)) {
        pwdli3.setAttribute("style", "list-style: none;");
        pwdli3.classList.add("greenTick");
        strCount++;
    } else {
        pwdli3.removeAttribute("style");
        pwdli3.classList.remove("greenTick");
    }

    if(pwdValue.value.length >= 8) {
        pwdli4.setAttribute("style", "list-style: none;");
        pwdli4.classList.add("greenTick");
        strCount++;
    } else {
        pwdli4.removeAttribute("style");
        pwdli4.classList.remove("greenTick");
    }

    // console.log(pwdValue.value, strCount, pwdValue.value.length);

    if(strCount >= 3) {
        pb2.setAttribute("style", "width: 30%");
        pb3.removeAttribute("style");
        strengthValue.innerText = "Medium";
    }

    if (strCount >= 5) {
        pb2.setAttribute("style", "width: 30%");
        pb3.setAttribute("style", "width: 50%");
        strengthValue.innerText = "Strong";
        return true;
    }
}

function tick() {
    let pwd = document.getElementById("userPass");
    let pwdrpt = document.getElementById("userPassRepeat");
    let verified = document.getElementById("verified");

    if ((pwd.value == pwdrpt.value) && (pwd.value != "") && pwdStrength()) {
        verified.style.visibility = "visible";
    } else {
        verified.style.visibility = "hidden";
    }
}

//----------------------------------------------------------------------------------------------------------