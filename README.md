# edimca

Este proyecto es hecho para la prueba de ingreso a edimca. Es una aplicacion orientada a la administración de requerimientos de cualquier persona. Tambien maneja la administracón de estos requerimientos por parte de un usuario administrador (user:admin pass:admin)

## Development

Antes de poder construir este proyecto, debe instalar y configurar las siguientes dependencias en su máquina::

1.[postgresql] Se uso la version 11 de postgresql. Para el correcto funcionamiento de este proyecto debes crear una base con el nombre:
edimca
username: postgres
password: admin

Si desea configurar otras credenciales sera necesario editar con los datos correctos el archivo application-dev.yml donde se encuentran las configuraciones de conexion a la base de datos

2.[Node.js][]: Se uso Node para ejecutar un servidor web de desarrollo y construir el proyecto.  Puedes obtener mas informacion de como hacerlo desde https://www.npmjs.com/products

Después de instalar Node, debería poder ejecutar el siguiente comando para instalar herramientas de desarrollo.  Solo necesitará ejecutar este comando cuando las dependencias cambien en [package.json] (package.json).

    npm install

Una vez terminada la instalacion de las librerias necesarias usted pude levantar la aplicaci'on ejecute los siguientes comandos ubicandose dentre de la raiz del proyecto

    ./mvnw

Espero que sea de su agrado este proyecto. Personalmente disfrute contruyendolo para ustedes
