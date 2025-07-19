let usuariosRecuperados = localStorage.getItem("arrayDeUsuarios")
let Usuarios = JSON.parse(usuariosRecuperados)

const usuarioOn = localStorage.getItem("usuarioOn");
const usuarioLoggeado = JSON.parse(usuarioOn);

const carterasJSON = localStorage.getItem("arrayDeCarteras");
const Carteras = JSON.parse(carterasJSON);

let OrdenesJSON = localStorage.getItem("arrayDeOrdenes");
let Ordenes = JSON.parse(OrdenesJSON);

const indexUsuario = Usuarios.findIndex(usuario => usuario.nombreUsuario === usuarioLoggeado.nombreUsuario);
const CarteraOn = Carteras[indexUsuario]

console.log(CarteraOn);
console.log(usuarioLoggeado);

let totalInvertidoCedears = 0;
let liquidezUsuario = usuarioLoggeado.liquidez;
let totalInversionEnBroker = 0;

console.log(liquidezUsuario);

for (const obj of CarteraOn) {
  totalInvertidoCedears += obj.cantidad * obj.precio;
}

let totalInvertidoBroker = totalInvertidoCedears + usuarioLoggeado.liquidez


let inputNombreUsuarioPrestamo = document.getElementById("inputNombreUsuarioPrestamo");


