# Práctica 13 - Sesión PE

Suponga que tiene que crear un API con Express que haga uso de Mongoose (siga las instrucciones proporcionadas en los apuntes para instalar este módulo) para almacenar información sobre cartas Magic.

En primer lugar, deberá hacer que su máquina ejecute un servidor de MongoDB para poder crear una base de datos, la cual denominaremos, por ejemplo, magic-app. Siga las instrucciones especificadas en los apuntes para instalar MongoDB. Al mismo tiempo, también se recomienda la instalación de la extensión MongoDB en VS Code para poder visualizar el estado de la base de datos en cualquier momento.

A continuación, su aplicación debe cumplir los siguientes requisitos:

Los documentos con la información de las cartas deberán almacenarse en una colección denominada cards.

La información a almacenar para una carta es la que hemos estado utilizando durante prácticas anteriores de la asignatura. Luego, debe poder hacer el siguiente tipo de peticiones a su API:

Debe poder crear una carta en la base de datos.
Debe poder obtener todas las cartas almacenadas en la base de datos.
Debe poder obtener una carta concreta de la base de datos según su ID (el modelado en el esquema, no el que asigna MongoDB automáticamente).
Debe poder actualizar una carta concreta en la base de datos según su ID (el modelado en el esquema, no el que asigna MongoDB automáticamente).
Debe poder borrar una carta concreta de la base de datos según su ID (el modelado en el esquema, no el que asigna MongoDB automáticamente).
No se permite el uso de callbacks. Solo puede hacer uso de promesas.