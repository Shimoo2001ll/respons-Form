let username = document.querySelector("#username").value;
let email = document.querySelector("#email-inp").value;
let pass = document.querySelector("#username").value;
let confirm_pass = document.querySelector("#username").value;
let login_btn = document.querySelector(".btn");
login_btn.addEventListener("click", function() {
    if (username == "") {
        let div = document.createElement('div')
        let span = document.createElement("span")
        let textSpan = document.createTextNode("please enter the Name")
        div.appendChild(span)
        span.appendChild(textSpan)
        document.querySelector(".username").appendChild(div)
        div.classList.add("error")

    } else if (username !== "") {
        email.focuse()
    }
})