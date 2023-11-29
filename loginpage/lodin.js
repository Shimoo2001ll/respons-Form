let email = document.querySelector("#mail");
let password = document.querySelector("#pass");
let submit = document.querySelector(".btn");
let allInp = document.querySelectorAll('input')
    // when click on the submit btton do functions that check the inputs empty or not
submit.addEventListener('click', function() {
    validationEmail()
    checkPass()
})

//  check if email input empty or not
function validationEmail() {
    if (email.value == "") {
        document.querySelector('.erorr').style.display = "block"
    } else {
        document.querySelector('.erorr').style.display = "none"
    }
}
//  check the password
function checkPass() {
    if (password.value == "") {
        document.querySelector("#message").style.display = "block"
        password.onkeyup = function() {
            // Validate lowercase letters
            let lowerCaseLetters = /[a-z]/g;
            if (password.value.match(lowerCaseLetters)) {
                letter.classList.remove("invalid");
                letter.classList.add("valid");
            } else {
                letter.classList.remove("valid");
                letter.classList.add("invalid");
            }

            // Validate capital letters
            let upperCaseLetters = /[A-Z]/g;
            if (password.value.match(upperCaseLetters)) {
                capital.classList.remove("invalid");
                capital.classList.add("valid");
            } else {
                capital.classList.remove("valid");
                capital.classList.add("invalid");
            }

            // Validate numbers
            let numbers = /[0-9]/g;
            if (password.value.match(numbers)) {
                number.classList.remove("invalid");
                number.classList.add("valid");
            } else {
                number.classList.remove("valid");
                number.classList.add("invalid");
            }

            // Validate length
            // if (password.value.length >= 8) {
            //     length.classList.remove("invalid");
            //     length.classList.add("valid");
            // } else {
            //     length.classList.remove("valid");
            //     length.classList.add("invalid");
            // }
        }
    } else {
        document.querySelector("#message").style.display = "none"
    }
}