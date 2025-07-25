Buen día, profesor.
Le paso a explicar, a grandes rasgos, qué hace el proyecto.

El proyecto es un simulador de broker. Dentro del index, el usuario se carga por localStorage y dispone de liquidez, que sería su dinero en la cuenta.
También, dentro de su cartera —que se carga desde otro lugar del storage— tiene algunos CEDEARs que se muestran dentro del inicio en la sección de “Mis inversiones”.
Además, tiene ciertas órdenes cargadas a la espera de que otro usuario las ejecute, las cuales se muestran en el apartado “Órdenes activas”.

Desde el index puede ir a ingresar dinero, donde puede simular una transferencia rápida de dinero a la cuenta. También está la opción de egresar dinero, que simula una extracción de dinero, la cual está condicionada a si el usuario tiene una deuda con el broker o no (es decir, si tomó un préstamo en el apartado “Préstamo”).

También está “Panel general”, que lleva a una página en la que se ven todos los títulos que se comercializan en el broker. Haciendo clic sobre uno de ellos, lo lleva a la página de “Operar”, donde se precarga el nombre de la empresa y el ticker para enviar una orden, que se va a mostrar en el index en el apartado de “Órdenes activas”.

En la página “Operar”, puede escribir un ticker en la caja de puntas, y le va a sugerir los tickers de los CEDEARs que tienen una orden activa en el momento, exceptuando los propios.
Allí, si hace clic sobre una de las opciones, va a cargar todos los datos en el apartado inferior derecho para ejecutar dicha orden y adquirir o vender el activo.
Si se ejecuta una orden de venta, el usuario adquiere el activo; y si se ejecuta una orden de compra, el usuario necesita tener en su cartera dicho activo para poder venderlo. En caso de no poseer la cantidad de activos que solicita la orden, la ejecución da error.
Si vende un activo que posee, se resta su cantidad, y si vende todos los que tiene, el activo se elimina de su cartera. De la misma forma, si los compra y no los posee, se agregan como un nuevo objeto a su array de títulos poseídos. En caso de que ya los tenga, solo se suma la cantidad.

Por último, en la sección “Préstamos”, el usuario puede solicitar un préstamo al broker. El préstamo no puede exceder la suma del dinero que tiene en la cuenta más lo que valen la totalidad de sus activos, y si tiene un préstamo vigente, no puede retirar dinero del broker, como expliqué anteriormente.

Esto sería todo. Me quedo a la espera de sus correcciones.
¡Saludos!
