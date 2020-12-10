const database = firebase.database();
const auth = firebase.auth();
const logOut = document.getElementById('logOut');


auth.onAuthStateChanged(
    (userFundation) => {
        database.ref('Ado/fundacion/'+userFundation.uid).on (
            'value',
            (data)=> {
                let userFundationDB = data.val();
                nombreFundacion.innerHTML="Hola fundación"+" "+userFundationDB.laFundacion+"!"+" "+"estas son tus solicitudes pendientes:";
            }
        )

    }

    

);


logOut.addEventListener('click', () => {
    auth.signOut().then(
        ()=>{
            window.location.href="SignIn.html";
        }
    ).catch (
        (error) => {
            alert(error.message);
        }
    );
});