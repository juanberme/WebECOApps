const database = firebase.database();
const auth = firebase.auth();
const email = document.getElementById('email');
const password = document.getElementById('password');
const ingresarBtn = document.getElementById('ingresarBtn');
const linkSignUp = document.getElementById('linkSignUp');

auth.onAuthStateChanged(
    (userFuncionario) => {
        if (userFuncionario != null) {
            //Si ya estoy loggeado y entro a registro me lleva al home
            window.location.href="pantallaLista.html";
            
        }
    }
);

ingresarBtn.addEventListener ('click', () => {
    auth.signInWithEmailAndPassword(email.value, password.value). then(
        (data) => {
            window.location.href='pantallaLista.html';
        }
    ).catch(
        (error)=>{
            alert(error.message);
        }
    );
});