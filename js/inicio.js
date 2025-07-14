let totalinversion;
const URLUsuario = "./db/usuario.json";
let usuarioLoggeado = "";

const spane = document.getElementById("spane");
const divMisOrdenes = document.getElementById("divMisOrdenes");
const URLOrdenes = "./db/dataOrdenes.json";


function obtenerUsuario() {
    fetch(URLUsuario)
        .then(response => response.json())
        .then(data => {
            usuarioLoggeado = data;
            spane.innerText = `Bienvenido, ${usuarioLoggeado.nombre}`;
        })
        .catch(error => console.error("Error al obtener usuario:", error));
}

obtenerUsuario();


function obtenerOrdenes() {
    fetch(URLOrdenes)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                mostrarOrdenesVacias();
            } else {
                renderOrdenes(data);
            }
        })
        .catch(error => console.error("Error al obtener órdenes:", error));
}

obtenerOrdenes();

function renderOrdenes(ListaOrdenes) {
    ListaOrdenes.forEach(orden => {
        const ordenes = document.createElement("section");
        ordenes.classList.add("sectionMisOrdenes");
        ordenes.style.borderBottom = "1px solid grey";

        ordenes.innerHTML = `
            <section>${orden.Nombre}</section>
            <section>${orden.ticker}</section>
            <section>$${orden.precio}</section>
            <section>${orden.cantidad}</section>
            <section class="ordenesUsuario">${orden.orden}</section>
        `;

        const tipoOrden = ordenes.querySelector(".ordenesUsuario");
        if (orden.orden === "compra") {
            tipoOrden.style.color = "green";
        } else if (orden.orden === "venta") {
            tipoOrden.style.color = "red";
        }

        divMisOrdenes.appendChild(ordenes);
    });
}


function mostrarOrdenesVacias() {
    const ordenesVacia = document.createElement("section");
    ordenesVacia.classList.add("noHayOrdenes");
    ordenesVacia.innerHTML = `<span>No existen órdenes que mostrar</span>`;
    divMisOrdenes.appendChild(ordenesVacia);
}
    
    
    
const URLCatera = "./db/data.json"
const listaCedears = document.getElementById("divInversiones")

function ObtenerCartera() {
    fetch(URLCatera)
    .then(response => response.json())
    .then(data => {
            renderCartera(data);
  
            const totalInversion = data.reduce((acum, cedear) => {
                return acum + (cedear.cantidad * cedear.precio);
            }, 0);

            const totalInversiones = document.getElementById("spanTotalInvertido")
            totalInversiones.innerText = "$" + totalInversion.toFixed(2);
            totalInversiones.innerText = "$" + totalInversion 
        })
        
}


ObtenerCartera()


function renderCartera(ListaCedears) {

    ListaCedears.forEach(cedear => {
        const lineas = document.createElement("section");
        lineas.classList.add("sectionInversion")
        lineas.style.borderBottom = "1px solid grey";

        lineas.innerHTML = `
            <section>${cedear.Nombre}</section>
            <section>${cedear.ticker}</section>
            <section>$${cedear.precio}</section>
            <section>${cedear.cantidad}</section>
            <section>$${cedear.cantidad * cedear.precio}</section>
            <section class="inversionesVenderComprar"><a href="./ordenes.html" class="inversionesComprar">Comprar</a><a href="./ordenes.html" class="inversionesVender">Vender</a></section>
        `;
        listaCedears.appendChild(lineas);
    });
}



