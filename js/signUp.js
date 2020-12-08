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
                    fundacion: fundacion.value,
                    email: email.value,
                    password: password.value,
                    Rpassword: Rpassword.value
                };
                //Se crea en el db
                database.ref('ADO/Fundacion'+userFundationDB.id).set(userFundationDB).then (
                    () => {
                        //va al home
                        alert("Si funciona");
                    }
                );
            } else {
                //Si ya estoy loggeado y entro a registro me lleva al home
                alert("Epa");
            }
        }
    }
);
//Realizo el registro
ingresarBtn.addEventListener('click', ()=> {

    //Crear usuario en authentication
    auth.createUserWithEmailAndPassword(email.value, password.value);
});
