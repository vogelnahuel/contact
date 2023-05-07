<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Requisitos previos

_Tener docker instalado_

# Ejecutar en desarrollo

1. Clonar el repositorio

2. Ejecutar

```
yarn install o npm install
```

3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos y la app

```
primero sh build (por unica vez) y luego sh start
o en su lugar hacer

1=sudo docker-compose -f docker-compose.yml build contact

2=docker-compose -f docker-compose.yml up -d

para remover el contenedor
sh stop  o docker-compose -f docker-compose.yml down
```

5. Para comprobar que todo funciona correctamente usar comando

```
docker logs -f nombre_del_contenedor (ms-core)
```

## Stack usado

-   MongoDB
-   Nest
-   Typescript
-   Docker
-   jest

## Explicacion de la resolucion

```
La mejor implementacion para esto es utilizar un postgre porque es algo
muy relacional debido a que la propia consigna te da las relaciones pero no especificaba que base usar
use la de mas flexible mongoDB
(la consigna no lo especificaba)
```

```
No vi la necesidad de utilizar micro servicios al ser tan pocas funcionalidades.
pero si tuviese que implementarlo seria con rabbitmq
```

```
Utilize jest para test unitarios ya viene integrado con nest.js  (Comando npm run test para probarlo)
```

```
Patrones de diseños implementados -> DTO,DAO,INYECCION DE DEPENDENCIAS.
```

```
Como todos los endpoints estan referidos a contactos implemente todos los endpoint en el controlador de contactos
```
