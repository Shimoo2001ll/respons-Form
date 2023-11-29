let username = document.querySelector('#username');
let email = document.querySelector('#email-inp');
let password = document.querySelector('#pass');
let con_pass = document.querySelector('#con-pass');
let error_pass = document.querySelector('#message');
let logIn = document.querySelector('.btn');



window.onload = function() {
        username.focus()
    }
    //  check 
    // logIn.onclick = function(event) {
    //     if (username.value == "" || email.value == "" || password.value == "" || con_pass.value == "") {
    //         clickEV()
    //         event.preventDefault();
    //         console.log(event);
    //     } else {}
    // }



logIn.addEventListener('click', function(event) {
    if (username.value == "" || email.value == "" || password.value == "" || con_pass.value == "") {

        event.preventDefault();
        checkName()
        checkEmail()
        checkPass()
            // console.log(event);


        // checkPass()

    }
})

//make function that checkif the user name input empty or not
function checkName() {
    if (username.value == "") {
        document.querySelector('.username .error').style.display = "block"
    } else {


        document.querySelector('.username .error').style.display = "none"

    }
}
//  check the email
function checkEmail() {
    if (email.value == "") {
        document.querySelector('.mail .error').style.display = "block"
    } else {
        document.querySelector('.mail .error').style.display = "none"
    }
}

//  check the pass
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

            // // Validate length
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