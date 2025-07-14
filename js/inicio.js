let totalinversion
const URLUsuario = "./db//usuario.json"
let usuarioLoggeado = ""

function obtenerUsuario(){
    fetch(URLUsuario)
        .then(response => response.json())
        .then(data => {usuarioLoggeado = data;
        })
    }
    
    usuarioLoggeado = obtenerUsuario()
    
    const spane = document.getElementById("spane")
    
    

const divMisOrdenes = document.getElementById("divMisOrdenes")
const colorOrdenes = document.getElementsByClassName("ordenesUsuario")

const URLOrdenes = "./db/dataOrdenes.json"

function obtenerOrdenes(){
    fetch(URLOrdenes)
    .then(response => response.json())
    .then(data => renderOrdenes(data))

}

obtenerOrdenes()

function renderOrdenes(ListaOrdenes) {
    ListaOrdenes.forEach(orden =>{
        const ordenes = document.createElement("section")
        ordenes.classList.add("sectionMisOrdenes")
        ordenes.style.borderBottom = "1px solid grey";

        ordenes.innerHTML = `
            <section>${orden.Nombre}</section>
            <section>${orden.ticker}</section>
            <section>$${orden.precio}</section>
            <section>${orden.cantidad}</section>
            <section class="ordenesUsuario">${orden.orden}</section>
            
            `
            
            divMisOrdenes.appendChild(ordenes);
            
        const tipoOrden = ordenes.querySelector(".ordenesUsuario");
        if (orden.orden === "compra") {
            tipoOrden.style.color = "green";
        } else if (orden.orden === "venta") {
            tipoOrden.style.color = "red";
        } 
    })

};
if (divMisOrdenes.length > 0) {
    renderOrdenes(ListaOrdenes);
} else {
    const ordenesVacia = document.createElement("section");
    ordenesVacia.classList.add("noHayOrdenes");
    ordenesVacia.innerHTML = `<span>No existen órdenes que mostrar</span>`;
    divMisOrdenes.appendChild(ordenesVacia);
}  


const listaCedears = document.getElementById("divInversiones")

const URLCatera = "./db/data.json"

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



