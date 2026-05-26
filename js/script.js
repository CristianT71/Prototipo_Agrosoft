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

//Funcionamiento de los botones de reportes
const select = document.querySelector('.select');
const boton = document.querySelector('.select-boton');
const opciones = document.querySelectorAll('.select-menu li');
const texto = document.querySelector('.select-texto');

if (boton && select) {
    boton.addEventListener('click', () => {
        select.classList.toggle('abierto');
    });

    opciones.forEach(opcion => {
        opcion.addEventListener('click', () => {
            texto.textContent = opcion.textContent;
            select.classList.remove('abierto');
        });
    });
}

//Sobre los tipos de reporte
const selectFormato = document.querySelector('.select-formato');
const botonFormato = document.querySelector('.boton-formato');

if (botonFormato && selectFormato) {
    const opcionesFormato = selectFormato.querySelectorAll('.select-menu2 li');
    const textoFormato = selectFormato.querySelector('.select-texto2');

    botonFormato.addEventListener('click', () => {
        selectFormato.classList.toggle('abierto');
    });

    opcionesFormato.forEach(opcion => {
        opcion.addEventListener('click', () => {
            textoFormato.textContent = opcion.textContent;
            selectFormato.classList.remove('abierto');
        });
    });
}

document.addEventListener('click', (e) => {
    if (select && !select.contains(e.target)) select.classList.remove('abierto');
    if (selectFormato && !selectFormato.contains(e.target)) selectFormato.classList.remove('abierto');
});

//Para que seleccione donde estoy ubicado
const linksMenu = document.querySelectorAll('.lista-menu a');

linksMenu.forEach(link => {
    if (link.href === window.location.href) {
        link.parentElement.classList.add('activo');
    } else {
        link.parentElement.classList.remove('activo');
    }
});

//Botones activas y resueltas
const botonesOpcion = document.querySelectorAll('.opcion');
const contenidosOpcion = document.querySelectorAll('.opcion-contenido');

botonesOpcion.forEach(opcion => {
    opcion.addEventListener('click', () => {
        botonesOpcion.forEach(o => o.classList.remove('activo'));
        contenidosOpcion.forEach(c => c.classList.remove('activo'));

        opcion.classList.add('activo');
        document.getElementById(opcion.dataset.tab).classList.add('activo');
    });
});