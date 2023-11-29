let Uname = document.querySelector("#username");
let email = document.querySelector("#email-inp");
let pass = document.querySelector("#username");
let confirm_pass = document.querySelector("#username");
let login_btn = document.querySelector(".btn");

login_btn.addEventListener("click", function(userName, userEmail) {
        userName = Uname.value;
        userEmail = email.value;
        if (userName == "" || userEmail !== " ") {

            checkUserName()

        } else if (userName == "" || userEmail !== " ") {
            checkUserEmail()
                // document.querySelectorAll(".error").style.display = "none";
        }
        // username.value = " ";
    }



)

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

    }

}

function checkUserEmail(uemail) {
    uemail = email.value
    if (uemail == "") {
        let divmail = document.createElement('div')
        let span = document.createElement("span")
        let textSpan = document.createTextNode("please enter the Email")
        divmail.appendChild(span)
        span.appendChild(textSpan)
        document.querySelector(".mail").appendChild(divmail)
        divmail.classList.add("error")

    }
    // else if (uemail !== "") {
    //     console.log(uemail);
    //     document.querySelector(".mail .error").style.display = "none"
    //         // Uemail.value = " ";
    // }
}