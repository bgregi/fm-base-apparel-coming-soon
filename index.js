let emailDiv = document.getElementById("email-div")
let emailInput = document.getElementById("email-input")

function emailDivFocus() {
    
    emailDiv.classList.toggle("email-div-error")
    
}

function emailDivError() {
    emailDiv.classList.toggle("email-div-error")
}

emailInput.addEventListener("focus", emailDivFocus)
emailInput.addEventListener("focusout", emailDivFocus)