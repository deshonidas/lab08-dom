// Clase propia (debe ir al inicio del archivo)
class TareaItem {
  constructor(titulo, prioridad) {
    this.id = Date.now();
    this.titulo = titulo;
    this.prioridad = prioridad;
    this.completada = false;
  }

  toggleEstado() {
    this.completada = !this.completada;
  }

  obtenerEtiqueta() {
    return `[${this.prioridad}] ${this.titulo}`;
  }
}

// Estado del componente
const tareas = [];

// Elementos del DOM
const formTarea = document.querySelector("#formTarea");
const txtTitulo = document.querySelector("#txtTitulo");
const selPrioridad = document.querySelector("#selPrioridad");
const msjValidacion = document.querySelector("#msjValidacion");
const txtFiltro = document.querySelector("#txtFiltro");
const listaTareas = document.querySelector("#listaTareas");
const numPendientes = document.querySelector("#numPendientes");

// Función de renderizado
function renderizar(filtro = "") {
  listaTareas.innerHTML = "";

  const tareasFiltradas = tareas.filter((t) =>
    t.titulo.toLowerCase().includes(filtro.toLowerCase()),
  );

  tareasFiltradas.forEach((tarea) => {
    const li = document.createElement("li");

    const spanText = document.createElement("span");
    spanText.textContent = tarea.obtenerEtiqueta();
    if (tarea.completada) spanText.classList.add("completada");

    const badge = document.createElement("span");
    badge.textContent = tarea.prioridad;
    badge.className = `badge ${tarea.prioridad}`;

    const divAcciones = document.createElement("div");

    const btnToggle = document.createElement("button");
    btnToggle.textContent = tarea.completada ? "Desmarcar" : "Completar";
    btnToggle.addEventListener("click", () => {
      tarea.toggleEstado();
      renderizar(txtFiltro.value);
    });

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Borrar";
    btnEliminar.style.marginLeft = "4px";
    btnEliminar.addEventListener("click", () => {
      const idx = tareas.findIndex((t) => t.id === tarea.id);
      if (idx !== -1) tareas.splice(idx, 1);
      renderizar(txtFiltro.value);
    });

    divAcciones.appendChild(btnToggle);
    divAcciones.appendChild(btnEliminar);

    li.appendChild(badge);
    li.appendChild(spanText);
    li.appendChild(divAcciones);

    listaTareas.appendChild(li);
  });

  const pendientes = tareas.filter((t) => !t.completada).length;
  numPendientes.textContent = pendientes;
}

// Evento 1: Submit del Formulario
formTarea.addEventListener("submit", (e) => {
  e.preventDefault();
  const valor = txtTitulo.value.trim();

  if (valor.length < 3) {
    msjValidacion.textContent = "La tarea debe tener al menos 3 caracteres.";
    return;
  }

  msjValidacion.textContent = "";
  const nuevaTarea = new TareaItem(valor, selPrioridad.value);
  tareas.push(nuevaTarea);

  txtTitulo.value = "";
  renderizar(txtFiltro.value);
});

// Evento 2: Input para filtro de texto
txtFiltro.addEventListener("input", () => {
  renderizar(txtFiltro.value);
});
