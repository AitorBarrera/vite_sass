import "../styles/main.scss";

// Carga por defecto con la pagina inicial
document.addEventListener("DOMContentLoaded", event =>{
    cambiarHtml("inicio");
})

// Inserta el evento para mostrar solo la pagina inicial en los botones que 
// rediriguen a inicio
const botonInicio = document.querySelectorAll(".botonInicio");

botonInicio.forEach(boton =>{
    boton.addEventListener("click", event =>{

        cambiarHtml("inicio");
        
    })
})

// Inserta el evento para mostrar solo la pagina de contacto en los botones que 
// rediriguen a contacto
const botonContacto = document.querySelectorAll(".botonContacto");

botonContacto.forEach(boton =>{
    boton.addEventListener("click", event =>{

        cambiarHtml("contacto");
        
    })
})

// funcion auxiliar que cambia la pagina que se quiere mostrar
function cambiarHtml(id) { 
    const paginas = document.querySelectorAll(".pagina");
    paginas.forEach(pagina => {
        pagina.classList.remove("d-block")
        pagina.classList.add("d-none")
    }
    );

    const paginaMostrada = document.querySelector(`#${id}`);
    paginaMostrada.classList.remove("d-none");
    paginaMostrada.classList.add("d-block");
}