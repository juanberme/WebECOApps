class panDatosRender{

    constructor(adoptante){
        this.adoptante = adoptante;
    }

    render = () =>{

        let component = document.createElement('div');
        component.className = 'daticos';

        let bb = document.createElement('div');
        bb.className = 'bb';

        let cedula = document.createElement('div');
        cedula.innerHTML = (
            'Cédula :    ' + this.adoptante.cc
        );
        let estado = document.createElement('div');
        estado.innerHTML = (
            'Estado civil :    ' +this.adoptante.estado
        );
        let status = document.createElement('div');
        status.innerHTML = (
            'Status:    ' +this.adoptante.status
        );
        let estrato = document.createElement('div');
        estrato.innerHTML = (
            'Estrato :    ' +this.adoptante.estrato
        );
        let nombre = document.createElement('div');
        nombre.innerHTML = (
            'Nombre :    ' +this.adoptante.nombre
        );
        let salario = document.createElement('div');
        salario.innerHTML = (
            'Salario :    ' +this.adoptante.salario
        );
        let telefono = document.createElement('div');
        telefono.innerHTML = (
            'Teléfono :    ' +this.adoptante.telelefono
        );
        let direccion = document.createElement('div');
        direccion.innerHTML = (
            'Dirección :    ' +this.adoptante.direccion
        );
        let id = document.createElement('div');
        id.innerHTML = (
            'id :    ' +this.adoptante.id
        );

        let btaceptar = document.createElement('button');
        btaceptar.className = 'aceptarBtn';
        btaceptar.innerHTML = (
            'Aceptar'
        );
        let btnegar = document.createElement('button');
        btnegar.className = 'declinarBtn';
        btnegar.innerHTML = (
            'Declinar'
        );

        btaceptar.addEventListener('click', ()=>{
            const database = firebase.database();
            database.ref('Ado/fundacion/Fundación Sisben para Perros y Gatos/solicitudes/'+this.adoptante.id+'/'+this.adoptante.status);
            console.log('presionnS');
    
        });

        btnegar.addEventListener('click', ()=>{
            const database = firebase.database();
            database.ref('Ado/fundacion/Fundación Sisben para Perros y Gatos/solicitudes/'+this.adoptante.id+'/'+this.adoptante.status);
            console.log('presionnN');
    
        });

        component.appendChild(nombre);
        component.appendChild(cedula);
        component.appendChild(telefono);
        component.appendChild(estado);
        component.appendChild(estrato);
        component.appendChild(salario);
        component.appendChild(telefono);
        component.appendChild(direccion);
        component.appendChild(status);
        component.appendChild(id);
        component.appendChild(bb);
        bb.appendChild(btaceptar);
        bb.appendChild(btnegar);
        
        return component;        
    }

}