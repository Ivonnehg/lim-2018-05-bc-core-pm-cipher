# Cifrado César
***

## Objetivo:
Diseñar un producto pensando en la necesidad de los usuarios en comunicarse mediante un cifrado con las personas que deseen de esta forma puedan asegurar la confiabilidad de que no pueda ser entendido por alguna tercera persona, construir una interfaz que le sea amigable y fácil de acceder, para ello se considera los siguientes puntos:
-	 Escuchar eventos básicos del DOM
-	 Una lógica para llevar a cabo el cifado/descifrado
-	 Tests unitarios básicos para comprobar (y documentar) dicha lógica
-	 Manipulación del DOM para mostrar (escribir) los resultados.

***
## Proceso:

1### Definición del producto

Para poder definir el producto se pensó en el problema y la necesidad del usuario, en este caso el usuario tiene la necesidad de comunicarse con sus amistades para organizar una fiesta sorpresa a su pareja, se plantea la solución de crear una aplicación que permita enviar mensajes cifrados y que las demás personas (partícipes de la fiesta) puedan tener una interfaz para descifrarlo.
Los principales usuarios del producto son aquellas personas que deseen tener una comunicación confidencial mediante un cifrado y descifrado de texto, de esta forma el producto les da la seguridad de que sus mensajes no serán entendibles para terceras personas.
2### UI
La interfaz permite al usuario:
Tener una definición de qué es y cómo usar el producto
* insertar un mensaje (texto) que quiera cifrar
* elegir un `offset` indicando cuántas posiciones queremos que el cifrado
  desplace cada carácter
* ver el resultado del mensaje cifrado
* insertar un mensaje (texto) a descifrar
* ver el resultado del mensaje descifrado

3### Scripts / Archivos

* `README.md`: El producto es ejecutable en cualquier lugar desde cualquier máquina que tenga acceso a internet, el usuario tiene una descripción del modo de uso en la interfaz.
La aplicación es una herramienta que permite cifrar y descifrar texto a través de un algoritmo llamado cifrado César, para cifrar un texto el usuario debe poner en el primer recuadro lo que desee cifrar y colocar un número que será entendible como una clave de los cuales se entiende como el desplazamiento que tendrá el texto a cifrar, De igual forma el usuario podrá descifrar el texto que necesite.
Para el diseño se consultó a algunas personas del entorno y se llegó a la conclusión que el producto debe ser sencillo, fácil de usar y debe poder amoldarse en cualquier pantalla de dispositivo que tenga navegación a internet (laptop, Tablet y celular).
* `src/index.html`: Este archivo Contiene_markup_ (HTML) e incluye el CSS y JavaScript necesario.
* `src/cipher.js`: acá se implementa el objeto cipher, el cual está
  _exportado_ en el objeto global (`window`). Este objeto (`cipher`) contine dos métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos decifrar.
* `src/index.js`: Contiene eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.



***
### Trabajo realizado por:

#### Ivonne Huatuco Gabriel
