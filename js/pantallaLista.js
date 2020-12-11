const database = firebase.database();
const auth = firebase.auth();
const logOut = document.getElementById('logOut');
const nombres = document.getElementById('nombres');




auth.onAuthStateChanged(
    (userFuncionario) => {
        database.ref('Ado/funcionario/'+userFuncionario.uid).on (
            'value',
            (data)=> {
                let userFuncionarioDB = data.val();
                nombreFundacion.innerHTML="Hola fundación"+" "+userFuncionarioDB.laFundacion+"!"+" "+"estas son tus solicitudes pendientes:";
            }
        )

        //lectura del firebase
        database.ref('Ado/fundacion/Fundación Sisben para Perros y Gatos/solicitudes/').on('value', function(data1){
            nombres.innerHTML = '';
            data1.forEach(adoptante => {
                let valor = adoptante.val();
                console.log(valor.id);
                let render = new panListaRender(valor);
                nombres.appendChild(render.render());
            });
        }

        );

        
    }

    

);


logOut.addEventListener('click', () => {
    /*auth.signOut().then(
        ()=>{
            window.location.href="SignIn.html";
        }
    ).catch (
        (error) => {
            alert(error.message);
        }
    );*/
    
});