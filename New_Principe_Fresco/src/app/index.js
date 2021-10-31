//Imports
import Funciones from './funciones';
import './style.css';

//variables
let carrito = [];
let inventario = [];
const com = new Funciones();
const divPrincipal = document.getElementById('principal');
const ropa = document.getElementById('container-ropa');
const productos = document.querySelector('#container-productos');


document.addEventListener('DOMContentLoaded', ()=>{
    // carrito = JSON.parse(localStorage.getItem('Carrito'))
    // const container = document.getElementById('container-prod');
    inicio();
})

async function inicio(){
    
    let res = await com.obtenerItems();   
    const rand = Math.floor(Math.random() * res.inventario.length);
    const it = res.inventario.find(id2 => id2["id"] == rand);
    const item1 = res.inventario.splice(rand, 1)
    
    item(item1)
    productos1(res.inventario)
}

function item(item1) {

    ropa.innerHTML = 
        `<div class="imagenes">
        <a href="#img1"><img src="${item1[0].imagen1}" alt="" /></a>
        <a href="#img2"><img src="${item1[0].imagen2}" alt="" /></a>
        <a href="#img3"><img src="${item1[0].imagen3}" alt="" /></a>
        
    </div>
    <div class="img-principal">
    <img id="img1" src="${item1[0].imagen1}" alt="" />
    <img id="img2" src="${item1[0].imagen2}" alt="" />
    <img id="img3" src="${item1[0].imagen3}" alt="" />
    </div>
    <div class="descripcion">
    <h2 class="title-img">Camisa</h2>
    <h3 class="precio">$10.000</h3>
    <h4 class="text-talla">Size</h4>
    <div class="tallas">
        <div class="container-talla marco"><p class="talla">S</p></div>
        <div class="container-talla"><p class="talla">L</p></div>
        <div class="container-talla"><p class="talla">M</p></div>
        <div class="container-talla"><p class="talla">XL</p></div>
        <div class="container-talla"><p class="talla">XXL</p></div>
    </div>
    <button class="aniadir">ADD TO CART</button>
    <button class="comprar">BUY IT NOW</button>
    <p class="text-descripcion">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quasi
        incidunt aliquam voluptatum similique velit sit eius ducimus minima
        repudiandae mollitia modi laboriosam doloribus veritatis unde,
        dolorem alias quibusdam vitae!
    </p>
    </div>
    `
}

// container.addEventListener('click', ciclo)

function productos1(inv) {

    productos.innerHTML = '';
    console.log(inv);
    inv.forEach(items => {
        const {imagen1, nombre, precio, id} = items;
        console.log(id);
        productos.innerHTML += 
        `<div class="container-prod" id="container-prod">
          <img src="${imagen1}" alt="">
          <h4 class="text-product">${nombre}</h4>
          <p class="text-product price">${precio}</p>
          <input type="number" value="${id}" id="chismoso">
        </div>`
    });
}

// function ciclo() {
//     let id1 = document.getElementById('chismoso').value;
//     console.log(id1);
// }