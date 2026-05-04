/** Funcionamiento del cierre del menu */
const iconoCerrar2 = document.querySelector('.icono-cerrar2');
const menuLateral = document.querySelector('.menu-lateral');

if (iconoCerrar2 && menuLateral) {
    iconoCerrar2.addEventListener('click', () => {
        menuLateral.classList.toggle('colapsado');
    });
}

/* Funcion de boton hamburguesa */
const botonHamburguesa = document.querySelector('.boton-hamburguesa');
const iconoCerrar = document.querySelector('.icono-cerrar');

if (botonHamburguesa && menuLateral) {
    botonHamburguesa.addEventListener('click', () => {
        menuLateral.classList.toggle('activo');
    });
}

if (iconoCerrar && menuLateral) {
    iconoCerrar.addEventListener('click', () => {
        menuLateral.classList.remove('activo');
    });
}