const database = firebase.database();
const auth = firebase.auth();

const fundacion = document.getElementById('fundacion');
const email = document.getElementById('email');
const password = document.getElementById('password');
const Rpassword = document.getElementById('Rpassword');
const ingresarBtn = document.getElementById('ingresarBtn');
const linkSignIn = document.getElementById('linkSignIn');

var isSignUp = false;

auth.onAuthStateChanged(
    (userFundation) => {
        if (userFundation != null) {
            if (isSignUp) {
                //depositar datos
                let userFundationDB = {
                    id: userFundation.uid,
                    laFundacion: fundacion.value,
                    elEmail: email.value,
                    laPassword: password.value,
                };
                //Se crea en el db
                database.ref('Ado/fundacion/'+userFundationDB.laFundacion).set(userFundationDB).then (
                    () => {
                        //va al home
                        window.location.href="pantallaLista.html";
                    }
                );
            } else {
                //Si ya estoy loggeado y entro a registro me lleva al home
                window.location.href="pantallaLista.html";
            }
        }
    }
);
//Realizo el registro
ingresarBtn.addEventListener('click', ()=> {
    isSignUp = true;
    console.log(email.value)
    //Crear usuario en authentication
    auth.createUserWithEmailAndPassword(email.value, password.value);
});
