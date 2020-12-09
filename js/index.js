const ingresarBtn = document.getElementById('ingresarBtn');
const registerBtn = document.getElementById('registerBtn');

ingresar = () => {
    window.location.href="SignIn.html";
}

registrarse = () => {
    window.location.href="SignUp.html";
}

ingresarBtn.addEventListener('click', ingresar);
registerBtn.addEventListener('click', registrarse);
