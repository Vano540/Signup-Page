const signUpButton = document.querySelector("button");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector("#message");

function validateSignUp() {
    const emailText = email.value;
    const isNotEmpty = emailText !== "";
    const passwText = password.value;
    const passwIsGood = validatePassword(passwText);

    if (isNotEmpty && passwIsGood === true) {
        message.style.color = "green";
        message.innerText = "Welcome!";
    } else {
        message.style.color = "red";
        message.innerText = "email missing or incorrect password";
    }
}

signUpButton.addEventListener("click", validateSignUp);

function validatePassword(pw) {
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return pattern.test(pw);
}