// ============================================================
//   script.js - AgroSoft
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

    // ----- CERRAR TODOS LOS SELECTS AL HACER CLIC FUERA -----
    document.addEventListener('click', function (e) {
        // Select unidades productivas
        const wrapUp = document.querySelector('.up-select-wrap');
        const opcionesUp = document.getElementById('selectOpciones');
        if (opcionesUp && wrapUp && !wrapUp.contains(e.target)) {
            opcionesUp.classList.remove('abierto');
        }
        // Selects formularios (nueva unidad y nuevo tratamiento)
        document.querySelectorAll('.nu-select-opciones.abierto').forEach(opciones => {
            const wrap = opciones.closest('.nu-select-wrap');
            if (wrap && !wrap.contains(e.target)) opciones.classList.remove('abierto');
        });
        // Selects incidencias
        document.querySelectorAll('.inc-select-opciones.abierto').forEach(opciones => {
            const wrap = opciones.closest('.inc-select-wrap');
            if (wrap && !wrap.contains(e.target)) opciones.classList.remove('abierto');
        });
    });

});


// ----- UNIDADES PRODUCTIVAS -----

let tipoSeleccionado = '';

function filtrarUnidades() {
    const inputBuscar = document.getElementById('inputBuscar');
    if (!inputBuscar) return;
    const texto = inputBuscar.value.toLowerCase();
    const cards = document.querySelectorAll('.up-unit-card');
    cards.forEach(card => {
        const titulo = card.querySelector('.up-card-titulo').textContent.toLowerCase();
        const cardTipo = card.getAttribute('data-tipo');
        const coincideTexto = titulo.includes(texto);
        const coincideTipo = tipoSeleccionado === '' || cardTipo === tipoSeleccionado;
        card.style.display = (coincideTexto && coincideTipo) ? 'block' : 'none';
    });
}

function toggleSelectTipo(event) {
    event.stopPropagation();
    const opciones = document.getElementById('selectOpciones');
    if (opciones) opciones.classList.toggle('abierto');
}

function seleccionarTipo(el, valor, event) {
    event.stopPropagation();
    tipoSeleccionado = valor;
    document.querySelectorAll('.up-opcion').forEach(o => o.classList.remove('up-opcion-activa'));
    el.classList.add('up-opcion-activa');
    document.getElementById('selectTipoTexto').textContent = el.textContent;
    document.getElementById('selectOpciones').classList.remove('abierto');
    filtrarUnidades();
}

function abrirFormulario() {
    window.location.href = './nueva-unidad.html';
}

function verDetalle(card) {
    window.location.href = './detalle-unidad.html';
}


// ----- SELECT PERSONALIZADO FORMULARIOS (nueva unidad y nuevo tratamiento) -----

function toggleSelectNu(idOpciones, event) {
    event.stopPropagation();
    const opciones = document.getElementById(idOpciones);
    document.querySelectorAll('.nu-select-opciones.abierto').forEach(el => {
        if (el.id !== idOpciones) el.classList.remove('abierto');
    });
    if (opciones) opciones.classList.toggle('abierto');
}

function seleccionarNu(idOpciones, idTexto, idHidden, el, valor, event) {
    event.stopPropagation();
    document.getElementById(idOpciones).querySelectorAll('.nu-opcion').forEach(o => o.classList.remove('nu-opcion-activa'));
    el.classList.add('nu-opcion-activa');
    const textoEl = document.getElementById(idTexto);
    if (textoEl) {
        textoEl.textContent = valor;
        textoEl.parentElement.classList.add('seleccionado');
    }
    const hiddenEl = document.getElementById(idHidden);
    if (hiddenEl) hiddenEl.value = valor;
    document.getElementById(idOpciones).classList.remove('abierto');
}

function guardarUnidad() {
    const nombre = document.getElementById('nombreUnidad').value.trim();
    const tipo = document.getElementById('tipoCultivoVal').value;
    const zona = document.getElementById('zonaVal').value;
    const area = document.getElementById('area').value;

    if (!nombre || !tipo || !zona || !area) {
        alert('Por favor completa todos los campos obligatorios (*)');
        return;
    }

    alert('Unidad guardada exitosamente');
    window.location.href = './Unidades-Productivas.html';
}


// ----- DETALLE UNIDAD -----

function cambiarTab(btn, id) {
    document.querySelectorAll('.du-tab').forEach(t => t.classList.remove('activo'));
    btn.classList.add('activo');
    ['general', 'incidencias', 'tratamientos', 'cosechas'].forEach(t => {
        const el = document.getElementById('tab-' + t);
        if (el) el.style.display = t === id ? 'block' : 'none';
    });
}

function editarUnidad() {
    window.location.href = './editar-unidad.html';
}

function confirmarEliminar() {
    if (confirm('¿Estás seguro de que deseas eliminar esta unidad productiva? Esta acción no se puede deshacer.')) {
        window.location.href = './Unidades-Productivas.html';
    }
}


// ----- INCIDENCIAS -----

function toggleSelectInc(idOpciones, event) {
    event.stopPropagation();
    const opciones = document.getElementById(idOpciones);
    document.querySelectorAll('.inc-select-opciones.abierto').forEach(el => {
        if (el.id !== idOpciones) el.classList.remove('abierto');
    });
    if (opciones) opciones.classList.toggle('abierto');
}

function seleccionarInc(idOpciones, idTexto, idHidden, el, valor, event) {
    event.stopPropagation();
    document.getElementById(idOpciones).querySelectorAll('.inc-opcion').forEach(o => o.classList.remove('inc-opcion-activa'));
    el.classList.add('inc-opcion-activa');
    const textoEl = document.getElementById(idTexto);
    if (textoEl) textoEl.textContent = el.textContent;
    const hiddenEl = document.getElementById(idHidden);
    if (hiddenEl) hiddenEl.value = valor;
    document.getElementById(idOpciones).classList.remove('abierto');
    filtrarIncidencias();
}

function filtrarIncidencias() {
    const inputBuscar = document.getElementById('inputBuscarInc');
    if (!inputBuscar) return;
    const texto = inputBuscar.value.toLowerCase();
    const estadoEl = document.getElementById('estadoVal');
    const severidadEl = document.getElementById('severidadVal');
    const estado = estadoEl ? estadoEl.value : '';
    const severidad = severidadEl ? severidadEl.value : '';

    document.querySelectorAll('.inc-card').forEach(card => {
        const titulo = card.querySelector('.inc-titulo').textContent.toLowerCase();
        const cEstado = card.getAttribute('data-estado');
        const cSev = card.getAttribute('data-severidad');
        const ok = titulo.includes(texto)
            && (estado === '' || cEstado === estado)
            && (severidad === '' || cSev === severidad);
        card.style.display = ok ? 'flex' : 'none';
    });
}

function verDetalleInc() {
    window.location.href = './detalle-incidencia.html';
}


// ----- NUEVO TRATAMIENTO -----

function registrarTratamiento() {
    const producto = document.getElementById('producto').value.trim();
    const dosificacion = document.getElementById('dosificacion').value.trim();
    const unidad = document.getElementById('unidadProductivaVal').value;
    const fechaAplicacion = document.getElementById('fechaAplicacion').value;
    const fechaVencimiento = document.getElementById('fechaVencimiento').value;

    if (!producto || !dosificacion || !unidad || !fechaAplicacion || !fechaVencimiento) {
        alert('Por favor completa todos los campos obligatorios (*)');
        return;
    }

    alert('Tratamiento registrado exitosamente');
    window.location.href = './tratamientos.html';
}

function mostrarFotos(event) {
    const archivos = Array.from(event.target.files).slice(0, 3);
    const preview = document.getElementById('fotosPreview');
    preview.innerHTML = '';
    archivos.forEach((archivo, i) => {
        const reader = new FileReader();
        reader.onload = function (e) {
            const div = document.createElement('div');
            div.classList.add('nt-foto-item');
            div.innerHTML = `
                <img src="${e.target.result}" alt="Foto ${i + 1}">
                <button class="nt-foto-eliminar" onclick="this.parentElement.remove()">✕</button>
            `;
            preview.appendChild(div);
        };
        reader.readAsDataURL(archivo);
    });
}



