const database = firebase.database();
const auth = firebase.auth();
const logOut = document.getElementById('logOut');




auth.onAuthStateChanged(
    (userFuncionario) => {
        database.ref('Ado/funcionario/'+userFuncionario.uid).on (
            'value',
            (data)=> {
                let userFuncionarioDB = data.val();
                nombreFundacion.innerHTML="Hola fundación"+" "+userFuncionarioDB.laFundacion+"!"+" "+"estas son tus solicitudes pendientes:";
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