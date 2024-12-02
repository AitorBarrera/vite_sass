# P3.1 Maquetación con Vite y SASS

![Image](assets/nocheEstrelladaLienzo.jpg)

| **Curso**       | S2DAW 2024-2025                     |
|------------------|-------------------------------------|
| **Módulo**       | Diseño de Interfaces Web           |
| **Autor**        | Aitor González Barrera             |
| **Fecha de entrega** | 2 de diciembre de 2024            |


## Tabla de contenidos
- [Descripción](#1-descripción)
- [Enlaces de Interés](#2-enlaces-de-interés)
- [Recursos Usados](#3-recursos-usados)
- [Uso de Variables para Textos](#4-uso-de-variables-para-textos)
- [Uso de Mixin para Diseño Responsivo](#5-uso-de-mixin-para-diseño-responsivo)
- [Diseño SPA (Single Page Application)](#6-diseño-spa-single-page-application)


## 1. Descripción

Se trata de una página web sobre la famosa obra de **Van Gogh**, *"La noche estrellada"*. Este cuadro muestra una representación postimpresionista de la noche antes del amanecer en *Saint-Rémy-de-Provence*. El contenido incluye su historia, su ubicación actual, y una breve biografía del artista, **Van Gogh**.

Además, la página incorpora un formulario que permite a los visitantes contactar con el equipo de desarrollo para resolver dudas, enviar comentarios o reportar errores.


## 2. Enlaces de interés

[Enlace a la página desplegada en GitHub Pages](https://aitorbarrera.github.io/vite_sass/)

[Enlace para ver el diseño en figma](https://www.figma.com/design/9FJvu4DPMYo4faR8lpUPxY/Sistema-de-dise%C3%B1o-y-Web?node-id=0-1&t=Qw39dpkX7pUXDYij-1)


## 3. Recursos usados

1. https://es.wikipedia.org/wiki/La_noche_estrellada
2. https://es.wikipedia.org/wiki/Vincent_van_Gogh
3. https://historia-arte.com/obras/noche-estrellada-van-gogh

## 4. Uso de variables para textos
Listado de estilos cuyo cada estilo contiene tres propiedades: 
1. Tamaño de letra.
2. Espaciado entre lineas.
3. Tipografia.
```scss
$font-styles: (
  etiqueta: (
    font-size: 1.12rem,
    line-height: 1.59375rem,
    font-family: "Lato"
  ),
  parrafo-movil: (
    font-size: 1.125rem,
    line-height: 2.8125rem,
    font-family: "Merienda"
  ),
  pequenyo: (
    font-size: 1.3125rem,
    line-height: 1.96875rem,
    font-family: "Merienda"
  ),
  parrafo: (
    font-size: 1.875rem,
    line-height: 2.8125rem,
    font-family: "Merienda"
  ),
  h2: (
    font-size: 6rem,
    line-height: 9rem,
    font-family: "Kristi"
  ),
  h1: (
    font-size: 9rem,
    line-height: 13.5rem,
    font-family: "Kristi"
  )
);
```

Se utiliza un mixin especial en el cual se indica el estilo de texto que se quiere utilizar como parametro y asignará las propiedas automaticamente, por ejemplo:

### Mixin
```scss
#Mixin diseñado para insertar estilos:
@mixin font($type) {
  $style: map.get($font-styles, $type);

  font-size: map.get($style, font-size);
  line-height: map.get($style, line-height);
  font-family: map.get($style, font-family);
}
```
### Cambia el estilo de las etiquetas **h1**, **h2** y **p**:
```scss
h1{
    @include globals.font(h1);
    color: globals.$color-secundario;
}

h2{
    @include globals.font(h2);
    color: globals.$color-secundario;
}

p{
    @include globals.font(parrafo);
    color: globals.$color-secundario-texto;

    @include globals.respond-to(large){
        @include globals.font("parrafo-movil");
    };
}
```

## 5. Uso de mixin para diseño responsivo
Se usará un mixin el cual tiene preestablecido los tamaños responsivos y se le indica el ancho de la ventana por parametro del cual se desea cambiar el estilo del selector y dentro se declara las propiedades a cambiar.

### Mixin:

```scss
@mixin respond-to($breakpoint) {
  $breakpoints: (
    "small": "max-width: 599px",
    "medium": "max-width: 900px",
    "large": "max-width: 1500px"
  );

  $query: map.get($breakpoints, $breakpoint);

  @if $query {
    @media (#{$query}) {
      @content;
    }

  } @else {
      @error "No se encontró el breakpoint `#{$breakpoint}`.";
  }
}
```
### Ejemplo
En este caso un contenedor **flex** pasa a  ser un contenedor **flex** cuando el ancho de pantalla pasa del *tamaño medio* (**900px**)
```scss
article#ciudadCuadro{
        @include globals.grid-container(globals.$grid-cols);

        margin: globals.$space-xl 0;

        div.texto{
            grid-column: 1/7;
            
            @include globals.flex-container(space-evenly,start,column);
        }

        figure{
            grid-column: 7/13;
            width: 100%;
            
            img{
                width: 100%;
            }
        }

        // movil
        @include globals.respond-to(medium){
            @include globals.flex-container(start, start, column);
        }
    }
```

### 6. Diseño SPA (Single page application)
Esta pagina utiliza scripts de JavaScript para evitar tener que cargar otras archivos *html* y poder tener cargar contenido de manera dinamica.

Este son los scripts usados:
```js
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

// Inserta el evento para mostrar solo la pagina de contacto en los botones que rediriguen a contacto
const botonContacto = document.querySelectorAll(".botonContacto");

botonContacto.forEach(boton =>{
    boton.addEventListener("click", event =>{

        cambiarHtml("contacto");
        
    })
})

// Funcion auxiliar que cambia la pagina que se quiere mostrar
function cambiarHtml(id) { 
    const paginas = document.querySelectorAll(".pagina");
    paginas.forEach(pagina => {
        pagina.classList.remove("d-block")
        pagina.classList.add("d-none")
    }
    );

    const paginaAMostrar = document.querySelector(`#${id}`);
    paginaAMostrar.classList.remove("d-none");
    paginaAMostrar.classList.add("d-block");
}
```

## 7. Conclusión
Este proyecto usa Vite el cual proporciona un desarrollo fluido y un despliegue facil de usar junto Github pages, tambien usa SASS para tener un diseño más organizado gracias a la indentación, uso de variables y mixins.