import {fetch as fetchPolyfill} from 'whatwg-fetch'

class Funciones{
    
    async obtenerItems(){
        const resp = await fetch('https://jomers01.github.io/Trabajos_Grupales/PrincipeFresco/API/ProductosTotal.json')
        const items = await resp.json();
        return items;
    }

}
export default Funciones;