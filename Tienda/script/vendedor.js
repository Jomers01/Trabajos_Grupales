const container = document.getElementById('container');

document.addEventListener('DOMContentLoaded', async()=>{
    const login = JSON.parse(localStorage.getItem('Login'));

    const usr = await fetch('http://localhost:3000/Usuarios');
    const data = await usr.json();

    const comprobador = data.find(usrL => usrL.nombre == login[0].nombre);

    container.innerHTML = 
    `<div class="container">
    <img src="https://petshopduke.com/wp-content/uploads/2020/09/logo.png" alt="Logo" width="500px"><br>
    <h2 class="title-bienvenida">Bienvenido ${comprobador.nombre}</h2>
    <div class="botones">
        <button class="btnInicio" onclick="btnAgregar()">Agregar un producto</button>
    <button id="bntVerProductos" class="btnInicio">Ver mis productos</button>
    </div>
</div>`

    // productoUsr(login[0].id, login[0].nombre, login[0].email, login[0].tipo, login[0].telefono, login[0].date);
})

function btnAgregar(){
    
    container.innerHTML = 
    `<div class="container">
    <img src="https://petshopduke.com/wp-content/uploads/2020/09/logo.png" alt="Logo" width="500px"><br>
    <h2 class="title-bienvenida">Bienvenido Jose Garcia</h2>
    <div class="formulario">
        <div action="" id="form" class="form">
            <label for="tipoMascota">Que tipo de mascota es:</label>
            <select name="tipoMascota" id="tipoMascota">
                <option value="perro">Perro</option>
                <option value="gato">Gato</option>
                <option value="Ave">Ave</option>
                <option value="haster">Haster</option>
            </select>
            <input type="text" id="nombre-mascota" placeholder="Nombre de la mascota">
            <input type="text" id="raza-mascota" placeholder="Raza de la mascota">
            <input type="number" id="edad-mascota" placeholder="Edad de la mascota">
            <input type="text" id="dire-mascota" placeholder="Direccion de la mascota">
            <input type="url" id="img-mascota" placeholder="Imagen de la mascota">
            <input type="text" id="usr-mascota" placeholder="Nombre de quien publica">
            <input type="text" id="email-mascota" placeholder="Email del usuario">
            <button class="btnAgregar" onclick="agregar()">Agregar un producto</button>
        </div>
    </div>
    </div>`;

};

async function agregar(){

    const tipoMascota = document.getElementById('tipoMascota').value;
    const nombreMascota = document.getElementById('nombre-mascota').value;
    const razaMascota = document.getElementById('raza-mascota').value;
    const edadMascota = document.getElementById('edad-mascota').value;
    const direMascota = document.getElementById('dire-mascota').value;
    const imgMascota = document.getElementById('img-mascota').value;
    const usrMascota = document.getElementById('usr-mascota').value;
    const emailMascota = document.getElementById('email-mascota').value;

    await fetch('http://localhost:3001/mascotas',({
        method: 'POST',
        body:JSON.stringify({
            categoria: tipoMascota,
            nombre: nombreMascota,
            raza: razaMascota,
            edad: edadMascota,
            ubicacion: direMascota,
            imagen: imgMascota,
            usuario: usrMascota,
            email: emailMascota
        }),
        headers: { "Content-Type": "application/json; charset=UTF-8" }
    }))
}

// async function productoUsr(id, nombre, email, tipo, tel, date) {
//     const emailM = await fetch(`http://localhost:4000/mascotas`)
//     const data = await emailM.json();
//     let identificador = '';
//     data.forEach(element => {
//         if (data.email == email){
//             identificador += data.email;
//         }
//     });
//     const usr = await fetch(`http://localhost:3000/Usuarios/${id}`, ({
//         method: 'PUT',
//         body:JSON.stringify({
//             categoria: tipo,
//             nombre: nombre,
//             email: email,
//             telefono: tel,
//             date: date,
//             producto: identificador
//         }),
//         headers: { "Content-Type": "application/json; charset=UTF-8" }
//     }))
// }