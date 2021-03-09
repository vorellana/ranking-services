# Ranking Services
Desarrollado principalmente en **Node.js, React y MongoDB** y con despliegue en **Docker**.
<Imagen total>

## Instalación y uso
**Es un requisito tener instalado docker-compose.** Si no lo tiene puede ver el siguiente enlace para su instalación.
https://docs.docker.com/compose/install/
```sh
git clone https://github.com/vorellana/ranking-services.git # descargamos el proyecto
cd ranking-services # entramos a la carpeta del proyecto
docker-compose up -d # iniciamos la instalación del proyecto
```
Una vez finalizado el proceso de instalación ingresamos en un navegador a la siguiente dirección
```sh
http://localhost:5000
```
Ingresamos con cualquiera de las siguientes credenciales
user: admin / Password: admin
user: vorellana / Password: 123456

## Tecnologías de desarrollo
Para el presente proyecto se utilizarón las siguientes tecnologías como librerías, frameworks, servicios en la nube, herramientas de despliegue entre otros.

### Backend
*  **Node.js:** Entorno en tiempo de ejecución para desarrollar el Backend en Javascript.
* **Express:** Infraestructura web rápida, minimalista y flexible para Node.js. 
* **node-postgres:** Módulo para la conexión como cliente a PostgreSQL database.
* **jsonwebtoken:** Implementación de JSON web Token para Node.js.
* **node.bcrypt.js:** Librería para la encriptación de contraseñas.
* **Nodemon:** Para que se reinicie el servidor automáticamente después de cada cambio.
* **Morgan:** Es un Middleware para ver por consola las petciones HTTP.
### Frontend
*  **React:** Biblioteca para crear aplicaciones SPA.
*  **nginx:** Servidor web donde correrá la aplicación.
* **Axios:** Para realizar operaciones como cliente HTTP.
* **Bootstrap:** Librería CSS para facilitar el uso de estilos.
* **Universal cookie:** Para el manejo de cookies.
* **jwt-decode:** Para decodificar JWT.
### Database
*  **PostgreSQL:** Base de datos del proyecto.

### Deployment
*  **Docker:** Tecnología de contenedores que posibilita la creación y el uso de contenedores.
*  **Docker Compose:** Herramienta que permite simplificar el uso de Docker y gestionar varios contenedores.
*  **GitHub**: Servicio de repositorio de código fuente en donde se encuentran almacenados todo el código del proyecto.

## Características
* La aplicación cuenta con 5 vistas: login, menu, players, ranking y test.
* La función **Ranking Board** esta siendo utilizada en las 3 opciones del menú.
* El diseño es totalmente responsivo por lo cual se adapta a cualquier dispositivo.
* Manejo de seguridad con JWT entre el Backend y el Frontend.
* Módulo de acceso.
* Rutas protegidas.
* Todos los endpoints del backend están protegidos excepto los de seguridad.
* Todas las entidades tienen sus operaciones CRUD a través de los endpoints del backend.
* El despliegue se maneja con docker-compose y contiene 3 servicios (backend, frontend y database).
* Creación automática de la BD Ranking y de sus objetos por script configurado en Docker.
