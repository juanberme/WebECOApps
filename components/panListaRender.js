class panListaRender{

    constructor(adoptante){
        this.adoptante = adoptante;
    }

    render = () =>{

        let component = document.createElement('div');
        component.className = 'solicitudes';

        let solicite = document.createElement('div');
        //component.className = 'eachsolicitudes';
        component.innerHTML = (
            this.adoptante.nombre
        );

        
        component.appendChild(solicite);

        component.addEventListener ('click', () => {
            const localstorage = window.localStorage;
            let json = JSON.stringify(this.adoptante);
            localstorage.setItem('adoptante', json);
            window.location.href="pantallaDatos.html"
        });
        
        return component;        
    }

}