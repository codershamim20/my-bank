// console.log('btn-clicked');
document.getElementById('login-button').addEventListener('click', function (){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log('userEmail');
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail == 'abc@def.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
})
