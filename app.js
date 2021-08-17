const form = document.getElementById("sign-up-form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementsByClassName("trial-button")[0];

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (firstName.value === "") {
        firstName.classList.add("error-state");
        document.getElementsByClassName("error-icon")[0].style.display="block";
        document.getElementsByClassName("first-name-error")[0].style.display="block";
    }
    if (lastName.value === "") {
        lastName.classList.add("error-state");
        document.getElementsByClassName("error-icon")[1].style.display="block";
        document.getElementsByClassName("last-name-error")[0].style.display="block";

    }
    if ((email.value === "") || (validateEmail(email.value) !== true)) {
        email.classList.add("error-state");
        document.getElementsByClassName("error-icon")[2].style.display="block";
        document.getElementsByClassName("email-error")[0].style.display="block";

    }
    if (password.value === "") {
        password.classList.add("error-state");
        document.getElementsByClassName("error-icon")[3].style.display="block";
        document.getElementsByClassName("password-error")[0].style.display="block";

    }

    if (firstName.value !== "") {
        firstName.classList.remove("error-state");
        document.getElementsByClassName("error-icon")[0].style.display="none";
        document.getElementsByClassName("first-name-error")[0].style.display="none";
    }

    if (lastName.value !== "") {
        lastName.classList.remove("error-state");
        document.getElementsByClassName("error-icon")[1].style.display="none";
        document.getElementsByClassName("last-name-error")[0].style.display="none";

    }

    if (email.value !== "" && validateEmail(email.value) === true) {
        email.classList.remove("error-state");
        document.getElementsByClassName("error-icon")[2].style.display="none";
        document.getElementsByClassName("email-error")[0].style.display="none";

    }
    if (password.value !== "") {
        password.classList.remove("error-state");
        document.getElementsByClassName("error-icon")[3].style.display="none";
        document.getElementsByClassName("password-error")[0].style.display="none";

    }
})

button.addEventListener("click", function() {
    button.classList.add("brighten-button");

    setTimeout(function(){
        button.classList.remove("brighten-button");
    }, 200)
})


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

