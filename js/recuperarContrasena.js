let usuariosRecuperados = localStorage.getItem("arrayDeUsuarios")
const usuariosJSON = JSON.parse(usuariosRecuperados)
console.log(usuariosJSON);

const BotonRecuperar = document.getElementById("botonRecuperar")
const nombreUsuario = document.getElementById("nombreRecuperacion")
const palabraSecreta = document.getElementById("palabraSecreta")
const NuevaContrasena = document.getElementById("nuevaContrasena")
const RepetirNuevaContrasena = document.getElementById("repetirNuevaContrasena")



BotonRecuperar.addEventListener("click", (event) =>{
    event.preventDefault();

    let usuarioPassRecuperar = usuariosJSON.find(e => e.nombreUsuario === nombreUsuario.value)

    if(palabraSecreta.value === usuarioPassRecuperar.palabraSecreta && NuevaContrasena.value === RepetirNuevaContrasena.value){

        usuarioPassRecuperar.contrasena = RepetirNuevaContrasena.value

        alert("Contraseña actualizada")
        window.location.replace("./inicio.html")

    }else{

        alert("Error, verifique los datos ingresados")
    }

})


