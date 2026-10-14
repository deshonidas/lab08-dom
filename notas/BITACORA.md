# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: Google Chrome

## Ejercicio 2: Seleccionar y modificar el DOM

| Instrucción                     | Qué cambió en la pantalla                                | Se mantiene al recargar (Sí/No) |
| :------------------------------ | :------------------------------------------------------- | :------------------------------ |
| `textContent` desde la consola  | El título cambió temporalmente a "Hola desde la consola" | No                              |
| `textContent` desde `app.js`    | El título cambió permanentemente a "Hola TECSUP"         | Sí                              |
| `style.color`                   | El texto del título cambió a color azul                  | Sí                              |
| `classList.add`                 | El párrafo se resaltó con un fondo amarillo              | Sí                              |
| `createElement` + `appendChild` | Se agregó "JavaScript" como un nuevo ítem a la lista     | Sí                              |

## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara                           | Cuanto suma por accion |
| :------------- | :---------------------------------------------- | :--------------------- |
| click          | Hacer un solo clic con el ratón sobre el botón  | 1                      |
| dblclick       | Hacer un doble clic rápido sobre el botón       | 1                      |
| mouseover      | Pasar el puntero del ratón por encima del botón | 1                      |

## Ejercicio 4: Eventos input y submit

| Prueba                                      | Qué pasó en la pantalla                              | Se recargó la página (Sí/No) |
| :------------------------------------------ | :--------------------------------------------------- | :--------------------------- |
| Escribir en el campo nombre                 | El saludo cambia letra por letra en tiempo real      | No                           |
| Enviar sin `preventDefault`                 | Muestra el texto un instante y la página se refresca | Sí                           |
| Enviar con `preventDefault`, correo sin `@` | Muestra en rojo "Correo no valido: falta @"          | No                           |
| Enviar con `preventDefault`, correo con `@` | Muestra el texto "Enviado: correo"                   | No                           |

## Ejercicio 5: Clases y objetos

| Objeto  | nombre  | precio | descripcion()       | conDescuento(0.25) |
| :------ | :------ | :----- | :------------------ | :----------------- |
| laptop  | Laptop  | 2500   | Laptop - S/ 2500.00 | 1875.00            |
| mouse   | Mouse   | 45     | Mouse - S/ 45.00    | 33.75              |
| teclado | Teclado | 120    | Teclado - S/ 120.00 | 90.00              |
| monitor | Monitor | 680    | Monitor - S/ 680.00 | 510.00             |

Usar la clase permite definir una sola plantilla estructurada para todos los productos, evitando duplicar código manual en HTML.
Además, facilita agregar, modificar o formatear datos de manera automática desde JavaScript.

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba          | Total que muestra la pagina                              | Correcto (Si/No) |
| :-------------- | :------------------------------------------------------- | :--------------- |
| Cuaderno 12.50  | 12.50                                                    | Si               |
| + Lapicero 3.20 | 15.70                                                    | Si               |
| + Mochila 89.90 | 105.60                                                   | Si               |
| Sin Number()    | Error en consola (this.precio.toFixed is not a function) | No               |

| Pieza  | Linea de tu codigo donde aparece                                           | Para que sirve                                                                    |
| :----- | :------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| DOM    | const listaCarrito = document.querySelector("#carrito");                   | Selecciona el elemento de la lista para insertar los nuevos nodos li              |
| Evento | formProducto.addEventListener("submit", (evento) => { ... })               | Captura el envío del formulario sin recargar la página gracias a preventDefault() |
| Objeto | const producto = new Producto(prodNombre.value, Number(prodPrecio.value)); | Instancia la clase Producto para manejar los datos y calcular totales             |
