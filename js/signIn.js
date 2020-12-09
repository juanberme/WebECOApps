const database = firebase.database();
const auth = firebase.auth();
const email = document.getElementById('email');
const password = document.getElementById('password');
const ingresarBtn = document.getElementById('ingresarBtn');
const linkSignUp = document.getElementById('linkSignUp');

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