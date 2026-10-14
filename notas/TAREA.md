# Tarea: Mi componente interactivo

## Componente elegido

Un Gestor de Tareas por Prioridad que permite agregar tareas clasificadas por nivel de prioridad (Alta, Media, Baja), filtrarlas en tiempo real, marcarlas como completadas o borrarlas de la interfaz.

## Version 1: solo DOM

Estructura inicial donde la página generaba elementos rígidos mediante manipulación directa del DOM sin eventos interactivos.

```js
const listaTareas = document.querySelector("#listaTareas");
const li = document.createElement("li");
li.textContent = "Tarea de prueba inicial (DOM)";
listaTareas.appendChild(li);
```
