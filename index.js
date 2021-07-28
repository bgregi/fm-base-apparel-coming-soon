let emailDiv = document.getElementById("email-div")
let emailInput = document.getElementById("email-input")
let button = document.getElementById("button")
let errorImg = document.getElementById("error")

function emailDivFocus() {
    
    emailDiv.classList.toggle("email-div-focus")
    
}

function emailDivError() {
    let successMsg = document.getElementById("success-msg")
    let errorMsg = document.getElementById("error-msg")

    let email = emailInput.value

    let containsAt = email.includes("@")
    let splitEmail = email.split("@")

    if (containsAt && splitEmail[1].length != 0 && splitEmail.length == 2) {
        successMsg.style.display = "block"
        errorMsg.style.display = "none"
        errorImg.style.display = "none"
        
        emailDiv.classList.remove("email-div-error")
        
    } else {
        successMsg.style.display = "none"
        errorMsg.style.display = "block"
        errorImg.style.display = "block"

        emailDiv.classList.add("email-div-error")


    }
    console.log(splitEmail.length)
    // emailDiv.classList.toggle("email-div-error")
}

emailInput.addEventListener("focus", emailDivFocus)
emailInput.addEventListener("focusout", emailDivFocus)

button.addEventListener("click", emailDivError)