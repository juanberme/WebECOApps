const ingresarBtn = document.getElementById('ingresarBtn');
const registerBtn = document.getElementById('registerBtn');
const database = firebase.database();
const auth = firebase.auth();

auth.onAuthStateChanged(
    (userFuncionario) => {
        if (userFuncionario != null) {
            //Si ya estoy loggeado y entro a registro me lleva al home
            window.location.href="pantallaLista.html";
            
        }
    }
);

ingresar = () => {
    window.location.href="SignIn.html";
}

registrarse = () => {
    window.location.href="SignUp.html";
}

ingresarBtn.addEventListener('click', ingresar);
registerBtn.addEventListener('click', registrarse);
