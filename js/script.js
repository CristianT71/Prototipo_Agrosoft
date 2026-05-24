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




/*Logica para el calendario de tareas */
const monthYearEle = document.getElementById("month-year");
const daysContainer = document.getElementById("calendar-days");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentDate = new Date(); 

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayIndex = new Date(year, month, 1).getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();
  const prevLastDay = new Date(year, month, 0).getDate();

  monthYearEle.innerText = `${months[month]} ${year}`;
  
  let daysHTML = "";

  // 1. Días del mes anterior
  for (let i = firstDayIndex; i > 0; i--) {
    daysHTML += `<div class="inactive">${prevLastDay - i + 1}</div>`;
  }

  // 2. Días del mes actual
  for (let i = 1; i <= lastDay; i++) {
    const today = new Date();
    // Validación para marcar el día de hoy en tiempo real
    if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
      daysHTML += `<div class="active">${i}</div>`;
    } else {
      daysHTML += `<div>${i}</div>`;
    }
  }

  // 3. Días del mes siguiente
  const totalCells = firstDayIndex + lastDay;
  const nextDays = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
  for (let i = 1; i <= nextDays; i++) {
    daysHTML += `<div class="inactive">${i}</div>`;
  }

  daysContainer.innerHTML = daysHTML;
}

prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

// Inicializar
renderCalendar();