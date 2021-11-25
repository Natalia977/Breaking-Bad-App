<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Breacking Bad

<p align="left">
  <img height="200" src="./dog.png" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `breackingbad`

El contenido de `client` fue creado usando: Create React App.

## Enunciado

Esta es una aplicación en la cual se pueden ver distintos personajes junto con información relevante de los mismos, utilizando la api externa [Breacking Bad API](https://breakingbadapi.com/api/characters) y a partir de ella poder, entre otras cosas:

  - Buscar personajes
  - Filtrarlos / Ordenarlos
  - Agregar nuevos personajes

### Únicos Endpoints/Flags utilizados

  - GET https://breakingbadapi.com/api/characters
  - GET https://breakingbadapi.com/api/characters?name={name}

#### Tecnologías necesarias:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

#### Frontend

Aplicación de React/Redux con las siguientes pantallas/rutas.

__Pagina inicial__: landing page con
- [ ] Imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: contiene
- [ ] Input de búsqueda para encontrar personajes por nombre
- [ ] Área donde se verá el listado de los personajes. Deberá mostrar su:
  - Name
  - Nickname
  - Birthday
  - Image
  - Status
  - Occupations
- [ ] Botones/Opciones para filtrar por:
    - Occupations 
    - Personaje existente (es decir los que vienen de la API) o agregado por nosotros (creados mediante el form)
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los personajes por:
    - Orden alfabético 
    
- [ ] Paginado para ir buscando y mostrando los siguientes personajes, mostrando 8 personajes por página.

__IMPORTANTE__: Dentro de la Ruta Principal se muestran tanto los personajes traidos desde la API como así también los de la base de datos, creados desde el form.

__Ruta de detalle de raza de perro__: contiene
- [ ] Los campos mostrados en la ruta principal para cada personaje (name, nickname, birthday, image, occupations, status)

__Ruta de creación de personaje__: contiene
- [ ] Un formulario __controlado__ con los siguientes campos
  - Name
  - Nickname
  - Birthday
  - Image
- [ ] Posibilidad de seleccionar/agregar una o mas ocupaciones
- [ ] Botón/Opción para crear un nuevo personaje

#### Base de datos

El modelo de la base de datos tiene las siguientes entidades:

- [ ] Personaje o Character con las siguientes propiedades:
  - ID *
  - Name *
  - Nickname *
  - Birthday *
  - Status
  - Image
- [ ] Temperamento con las siguientes propiedades:
  - ID
  - Name

La relación entre ambas entidades debe ser de muchos a muchos ya que un personaje puede tener varias "ocupaciones" en simultaneo y, a su vez, una "ocupacion" puede corresponder a múltiples personajes distintos. 

#### Backend

- [ ] __GET /characters__:
  - Obtener un listado de los personajes
  - Devuelve solo los datos necesarios para la ruta principal
- [ ] __GET /characters?name="..."__:
  - Obtener un listado de los personajes que contengan la palabra ingresada como query parameter
  - Si no existe ningun personaje, muestra un mensaje adecuado
- [ ] __GET /occupations__:
  - Obtener todas las ocupaciones posibles
  - En una primera instancia deberán obtenerlas desde la API externa y guardarlas en su propia base de datos y luego ya utilizarlas desde allí
- [ ] __POST /character__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de personaje, por body
  - Crea un nuevo personaje en la base de datos

#### Testing
- [ ] Al menos tener un componente del frontend con sus tests respectivos
- [ ] Al menos tener una ruta del backend con sus tests respectivos
- [ ] Al menos tener un modelo de la base de datos con sus tests respectivos
