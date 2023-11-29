let Uname = document.querySelector("#username");
let email = document.querySelector("#email-inp");
let pass = document.querySelector("#username");
let confirm_pass = document.querySelector("#username");
let login_btn = document.querySelector(".btn");

login_btn.addEventListener("click", function() {
    checkUserName(username)
    checkUserEmail(email)
    document.querySelector("input").value = " ";

})

function checkUserName(username) {
    username = Uname.value
    if (username == "") {
        let div = document.createElement('div')
        let span = document.createElement("span")
        let textSpan = document.createTextNode("please enter the Name")
        div.appendChild(span)
        span.appendChild(textSpan)
        document.querySelector(".username").appendChild(div)
        div.classList.add("error")

    } else if (username !== "") {
        console.log(username);
        document.querySelector(".error").style.display = "none"
            // username.value = " ";
    }
}

function checkUserEmail(uemail) {
    uemail = email.value
    if (uemail == "") {
        let div = document.createElement('div')
        let span = document.createElement("span")
        let textSpan = document.createTextNode("please enter the Email")
        div.appendChild(span)
        span.appendChild(textSpan)
        document.querySelector(".mail").appendChild(div)
        div.classList.add("error")

    } else if (uemail !== "") {
        console.log(uemail);
        document.querySelector(".error").style.display = "none"
            // Uemail.value = " ";
    }
}