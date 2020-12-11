const database = firebase.database();
const auth = firebase.auth();

const datos = document.getElementById('datos');

//para saber quien esta
auth.onAuthStateChanged(
    (userFuncionario)=>{
        //si entra a index y no hay usuario lo devuelve
        if(userFuncionario == null){
            window.location.href = 'SignUp.html';
        }else{
            database.ref('Ado/fundacion/Fundación Sisben para Perros y Gatos/solicitudes/').on(
                'value',
                (data)=>{
                    data.forEach(
                        adoptante => {
                            let valor = adoptante.val();
                            console.log(valor);

                            let render = new panDatosRender(valor);
                            datos.appendChild(render.render());
                        }
                    );
                }); 
            
        }
    }
);


