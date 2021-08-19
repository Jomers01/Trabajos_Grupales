import Planeta  from "./planetas.js"

let id;
let distancias;
let nombrePlaneta = [];
let arregloPlanetas = [];
let aTamanio = [];

let enviar = document.getElementById('btnEnviar');

enviar.addEventListener("click", () => {

    let numPlanetas = [...document.querySelectorAll('.numeroPlaneta')];
    let nomPlanetas = [...document.querySelectorAll('.nombrePlaneta')];
    let dPlaneta = [...document.querySelectorAll('.distanciaPlaneta')];
    let tamanio = [...document.querySelectorAll('.tamanioPlanetas')];

    id = numPlanetas.map(numero => {
        return parseInt(numero.value);
    });
    nombrePlaneta = nomPlanetas.map(name =>{
        return name.value
    });
    distancias = dPlaneta.map(distancia => {
        return distancia.value
    });
    aTamanio = tamanio.map(longitud =>{
        return longitud.value
    });


    for (let x = 1; x <= id.length; x++) {

        if (document.getElementById(`numeroP_${x}`).value == ''){

        }else{
            let planeta = new Planeta();
            planeta.distancia_tierra = document.getElementById(`distancia_${x}`).value;
            planeta.nombre = document.getElementById(`nombreP_${x}`).value;
            planeta.numero_clasificacion = document.getElementById(`numeroP_${x}`).value;
            planeta.tamanio = document.getElementById(`tamanioP_${x}`).value;
            arregloPlanetas.push(planeta);       
        }
    }
    alert("Arreglo creado correctamente");
});

let ordernarValores = (e) => {
    
    let copiid = id.map(numero => numero);
    let copiaArregloPlanetas = arregloPlanetas.map(planeta => planeta);

    copiid.sort((a, b) => {
        return a - b;
    });

    copiaArregloPlanetas.sort((a, b) => {
        return a.numero_clasificacion - b.numero_clasificacion;
    });

    let copia2ArregloPlanetas = copiaArregloPlanetas.map(planeta => planeta);

    console.log("********Arreglos ascendente***********")
    console.log(copiid);
    console.log(copiaArregloPlanetas);

    console.log("********Arreglos descendente***********")
    copiid.reverse();
    copia2ArregloPlanetas.reverse();
    console.log(copiid);
    console.log(copia2ArregloPlanetas);

}

let filtrarDistancia = (e) => {
    let distanciaABuscar = prompt("Digite la distacia a filtrar");

    let arregloFiltradoDistancia = distancias.filter(
        (distancia) => distancia >= distanciaABuscar);

    if (arregloFiltradoDistancia == undefined)
        alert("No existe el planeta");
    else
        alert("Informacion del filtro",arregloFiltradoDistancia);
        console.log(arregloFiltradoDistancia)
}

let buscarPlaneta = (e) => {
    let nombrePlanetaABuscar = prompt("Digite el nombre del planeta a buscar");
    console.log(nombrePlanetaABuscar);
    let r = nombrePlaneta.find((nombre) => nombrePlanetaABuscar.toLowerCase() == nombre.toLowerCase());
    console.log(r)

    if (r == undefined)
        alert("No existe el planeta");
    else
        alert("El planeta si existe");
}

document.querySelector("#btnOrdenarValores").addEventListener("click", ordernarValores);
document.querySelector("#btnFiltrarDistancia").addEventListener("click", filtrarDistancia);
document.querySelector("#btnBuscarPlaneta").addEventListener("click", buscarPlaneta);