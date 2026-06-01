document.addEventListener("DOMContentLoaded", () => {

    const botonNoLeidas = document.getElementById("boton-no-leidas");
    const botonTodas = document.getElementById("boton-todas");
    const contenedor = document.getElementById("contenedor-notificaciones");
    const contador = document.querySelector(".contador-nuevas-notificaciones");

    const noLeidas = `
    <article class="tarjeta-notificacion-notificaciones">

        <div class="icono-notificacion-notificaciones">
            <img src="" alt="">
        </div>

        <div class="contenido-tarjeta-notificaciones">

            <h3 class="titulo-tarjeta-notificaciones">
                Incidencia activa requiere atención
            </h3>

            <p class="descripcion-tarjeta-notificaciones">
                La incidencia "Manchas amarillas" lleva 3 días activa
            </p>

            <div class="fecha-tarjeta-notificaciones">
                Hace 2 horas
            </div>

        </div>

        <div class="indicador-no-leida-notificaciones"></div>

    </article>

    <article class="tarjeta-notificacion-notificaciones">

        <div class="icono-notificacion-notificaciones">
            <img src="" alt="">
        </div>

        <div class="contenido-tarjeta-notificaciones">

            <h3 class="titulo-tarjeta-notificaciones">
                Tratamiento próximo a vencer
            </h3>

            <p class="descripcion-tarjeta-notificaciones">
                El insecticida de contacto vence mañana
            </p>

            <div class="fecha-tarjeta-notificaciones">
                Hace 3 horas
            </div>

        </div>

        <div class="indicador-no-leida-notificaciones"></div>

    </article>

    <article class="tarjeta-notificacion-notificaciones">

        <div class="icono-notificacion-notificaciones">
            <img src="" alt="">
        </div>

        <div class="contenido-tarjeta-notificaciones">

            <h3 class="titulo-tarjeta-notificaciones">
                Stock bajo de insumos
            </h3>

            <p class="descripcion-tarjeta-notificaciones">
                NPK 10-10-10 por debajo del mínimo
            </p>

            <div class="fecha-tarjeta-notificaciones">
                Hace 5 horas
            </div>

        </div>

        <div class="indicador-no-leida-notificaciones"></div>

    </article>
    `;

    const todas = `
    ${noLeidas}

    <article class="tarjeta-notificacion-notificaciones">

        <div class="icono-notificacion-notificaciones">
            <img src="" alt="">
        </div>

        <div class="contenido-tarjeta-notificaciones">

            <h3 class="titulo-tarjeta-notificaciones">
                Cosecha registrada exitosamente
            </h3>

            <p class="descripcion-tarjeta-notificaciones">
                45 kg de tomate cherry registrados
            </p>

            <div class="fecha-tarjeta-notificaciones">
                Ayer
            </div>

        </div>

    </article>

    <article class="tarjeta-notificacion-notificaciones">

        <div class="icono-notificacion-notificaciones">
            <img src="" alt="">
        </div>

        <div class="contenido-tarjeta-notificaciones">

            <h3 class="titulo-tarjeta-notificaciones">
                Sincronización completada
            </h3>

            <p class="descripcion-tarjeta-notificaciones">
                Todos tus datos están actualizados
            </p>

            <div class="fecha-tarjeta-notificaciones">
                Hace 2 días
            </div>

        </div>

    </article>
    `;

    function mostrarNoLeidas() {

        contenedor.innerHTML = noLeidas;

        botonNoLeidas.classList.add("activo-notificaciones");
        botonTodas.classList.remove("activo-notificaciones");

        if (contador) {
            contador.textContent = "3 nuevas";
        }
    }

    function mostrarTodas() {

        contenedor.innerHTML = todas;

        botonTodas.classList.add("activo-notificaciones");
        botonNoLeidas.classList.remove("activo-notificaciones");

        if (contador) {
            contador.textContent = "3 nuevas";
        }
    }

    mostrarNoLeidas();

    botonNoLeidas.addEventListener("click", mostrarNoLeidas);
    botonTodas.addEventListener("click", mostrarTodas);

});