<p align='left'>
    <img src='' </img>
</p>

# Project - Breaking Bad App

<p align="left">
  <img height="200" src="" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas están el código del back-end y el front-end respectivamente.

Adicionalmente se creo desde psql una base de datos llamada `breakingbad`

El contenido de `client` fue creado usando: Create React App.

## Enunciado

Esta es una aplicación en la cual se pueden ver distintos personajes de la serie "Breaking Bad", junto con información relevante sobre los mismos, utilizando la api externa [Brecking Bad API](https://breakingbadapi.com/api/characters) y a partir de ella poder, entre otras cosas:

  - Buscar personajes
  - Filtrarlos / Ordenarlos
  - Agregar nuevos personajes

### Únicos Endpoints/Flags utilizados

  - GET https://breakingbadapi.com/api/characters
  - GET https://breakingbadapi.com/api/characters?name={name}

#### Tecnologías utilizadas:
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
- [ ] Área donde se ve el listado de los personajes con los siguientes datos:
  - Name
  - Nickname
  - Birthday
  - Image
  - Status
  - Occupations
- [ ] Botones/Opciones para filtrar por:
    - Status 
    - Personaje existente (es decir los que vienen de la API) o agregado por nosotros (creados mediante el form)
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los personajes por:
    - Orden ascendente y descendente
    
- [ ] Paginado para ir buscando y mostrando los siguientes personajes, mostrando 6 personajes por página.

__IMPORTANTE__: Dentro de la Ruta Principal se muestran tanto los personajes traidos desde la API como así también los de la base de datos, creados desde el form.

__Ruta de detalle del personaje__: contiene
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

- [ ] Character con las siguientes propiedades:
  - ID *
  - Name *
  - Nickname *
  - Birthday *
  - Status
  - Image
- [ ] Occupation con las siguientes propiedades:
  - ID
  - Name

La relación entre ambas entidades es de muchos a muchos ya que un personaje puede tener varias "ocupaciones" en simultaneo y, a su vez, una "ocupacion" puede corresponder a múltiples personajes distintos. 

#### Backend

- [ ] __GET /characters__:
  - Obtener un listado de los personajes
  - Devuelve solo los datos necesarios para la ruta principal
- [ ] __GET /characters?name="..."__:
  - Obtener un listado de los personajes que contengan la palabra ingresada como query parameter
  - Si no existe ningun personaje, muestra un mensaje adecuado
- [ ] __GET /characters/:id__:
  - Obtener un personaje mediante el id ingresado
  - Si no existe, muestra un mensaje adecuado
- [ ] __GET /occupations__:
  - Obtener todas las ocupaciones posibles
  - En una primera instancia se obtienen desde la API externa y se guardan en la propia base de datos y luego ya se las utiliza desde allí
- [ ] __POST /character__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de personaje, por body
  - Crea un nuevo personaje en la base de datos

#### Testing
- [ ] Frontend con sus tests respectivos
- [ ] Backend con sus tests respectivos
- [ ] Modelo de la base de datos con sus tests respectivos
