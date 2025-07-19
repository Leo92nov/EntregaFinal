const divTitulos = document.getElementById("divTitulos");
let variacion = ""
const URLTitulos = "../db/cedears.json"

function obtenerCedears(){
    fetch(URLTitulos)
    .then(response => response.json())
    .then(data => renderCedears(data)
    )
}
obtenerCedears()
function renderCedears(Cedears) {
    Cedears.forEach(cedear => {
        const variacionPorcentual = (((cedear.precio * 100) / cedear.ultimoPrecio) - 100).toFixed(2);
        const variacionNominal = (cedear.precio - cedear.ultimoPrecio).toFixed(2);
        const clase = variacionNominal < 0 ? "mala" : "buena";

        const linea = document.createElement("section");
        linea.classList.add("sectionTitulos");

        linea.innerHTML = `
            <section>${cedear.ticker}</section>
            <section>${cedear.Nombre}</section>
            <section>${cedear.precio}</section>
            <section>${cedear.ultimoPrecio}</section>
            <section class="${clase}">${variacionPorcentual}%</section>
            <section class="${clase}">$${variacionNominal}</section>
        `;

        divTitulos.appendChild(linea);
        linea.addEventListener("click", () =>{
            const CompraClick = {
                Nombre: cedear.Nombre,
                ticker: cedear.ticker
            };
            const cedearAComprar = JSON.stringify(CompraClick)
            localStorage.setItem("cedearAVender", cedearAComprar)
            window.location.replace("./operar.html")
        })
        
    });
}