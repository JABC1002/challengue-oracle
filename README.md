# CHALLENGUE AMIGO SECRETO

## Algunos de los temas vistos:

- Variables
- Arrays ([], push)
- Funciones
- Condicionales (if/else)
- Ciclos (for)
- Métodos de arrays
- Manipulación del DOM (getElementById, querySelector, createElement, appendChild, innerHTML)
- Formularios (value, trim)
- Eventos (onclick)
- Math (Math.random, Math.floor)


## Tecnologias usadas

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4xo2cq28cbiSLVJW42FZ5sQ5IZ7nOBGb0g&s)![](https://lineadecodigo.com/wp-content/uploads/2014/04/css.png) ![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s)

## Funciones

###### limpiarCaja()
Esta función borra el contenido del input donde se escribe el nombre del amigo. Se asegura de que, después de añadir un nombre, la caja quede vacía para ingresar otro.

###### recorreLista(amigos)
Recibe el array de amigos y genera una lista <li>por cada elemento. Primero limpia la lista en el HTML y luego la vuelve a llenar con los nombres actuales.

###### agregarAmigo()
Toma el valor del input y valida que no esté vacío. Si hay un nombre, lo agrega al array, limpia la caja y actualiza la lista en pantalla.

###### sortearAmigo()
Elige un nombre aleatorio del array usando Math.random y lo muestra en pantalla. Si no hay amigos, muestra una alerta pidiendo que se agreguen.

