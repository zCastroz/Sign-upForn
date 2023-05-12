const pass = document.getElementById('password');
const confirmPass = document.getElementById('confirm-password');
const errorPass = document.querySelectorAll('.error-password');


pass.addEventListener('input', () => checkPass(pass.value, confirmPass.value));
confirmPass.addEventListener('input', () => checkPass(pass.value, confirmPass.value));


function checkPass(pass, cPass) {
    if (pass !== cPass) {
        errorPass.forEach(errorMsg => {
            errorMsg.classList.remove('hidden');
        })
    }
    else {
        errorPass.forEach(errorMsg => {
            errorMsg.classList.add('hidden');
        })
    }
}
