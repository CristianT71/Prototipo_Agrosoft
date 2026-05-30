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

//Parte de Gestion de usuario
const selects = document.querySelectorAll('.select-gestion');

selects.forEach(select => {
    select.addEventListener('change', function() {
        if(this.value !== this.options[0].value) {
            this.classList.add('select-activo');
        } else {
            this.classList.remove('select-activo');
        }
    });
});
//Despliegue de los menu
const menusDesplegables = document.querySelectorAll('.menu-desplegable');

menusDesplegables.forEach(menu => {
    menu.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('abierto');
    });

    const items = menu.querySelectorAll('.desplegable-item');
    items.forEach(item => {
        item.addEventListener('click', function() {
            const seleccionado = menu.querySelector('.desplegable-seleccionado span');
            seleccionado.textContent = this.textContent;
            items.forEach(i => i.classList.remove('desplegable-activo'));
            this.classList.add('desplegable-activo');
            menu.classList.remove('abierto');
        });
    });
});

document.addEventListener('click', () => {
    menusDesplegables.forEach(m => m.classList.remove('abierto'));
});