function validatePassword(pw) {
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return pattern.test(pw);
}

const txtPassword = document.querySelector("#password");
const pPasswordError = document.querySelector("#pwError");

function passwordChanged() {
    const password = txtPassword.value;
    const passwIsGood = validatePassword(password);
    if (passwIsGood === true) {
        pPasswordError.innerText = "";
    } else {
        pPasswordError.innerText = "Minimum eight characters, at least one letter, one number and one special character";
    }
}

txtPassword.addEventListener("input", passwordChanged);