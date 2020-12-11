class panListaRender{

    constructor(adoptante){
        this.adoptante = adoptante;
    }

    render = () =>{

        let component = document.createElement('div');
        component.className = 'solicitudes';

        let solicite = document.createElement('div');
        component.innerHTML = (
            this.adoptante.id
        );

        component.appendChild(solicite);
        return component;        
    }

}