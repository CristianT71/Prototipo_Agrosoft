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
const linksMenu = document.querySelectorAll('.lista-menu a');

linksMenu.forEach(link => {
    if (link.href === window.location.href) {
        link.parentElement.classList.add('activo');
    } else {
        link.parentElement.classList.remove('activo');
    }
});


//Movimiento en el dashboard
const tarjetas = document.querySelectorAll('.contenido2-admin');

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('mouseenter', () => {
        tarjeta.style.transform = 'translateY(-4px)';
        tarjeta.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
        tarjeta.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
    });

    tarjeta.addEventListener('mouseleave', () => {
        tarjeta.style.transform = 'translateY(0)';
        tarjeta.style.boxShadow = 'none';
    });
});