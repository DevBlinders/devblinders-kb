---
id: redirecciones-301-y-410-para-prestashop
title: Doc - Redirecciones 301 y 410 para PrestaShop
slug: redirecciones-301-y-410-para-prestashop
---
Módulo para crear y gestionar redirecciones 301 y 410

---

## Instalación
Una vez descargado el zip desde el area de clientes de DevBlinders tienes que instalar el módulo como cualquier otro módulo de PrestaShop:

- Acceder al Backoffice de PrestaShop.
- Dirigete a Personalizar > Módulos > Module Manager.
- Pulsar el botón de arriba a la derecha llamado "Subir un módulo".
- Seleccionar el zip descargado en tu ordenador.

Cuando tengas el módulo activo, encontrarás el acceso en el menú de navegación lateral izquierdo de la administración:
![img](https://devblinders.com/img/cms/redirects/redirects-install.jpg)


## Gestión

Hemos separado los dos distintos tipos de redirects en listados distintos. Veamos cada uno por separado. 

### Redirecciones 301
![img](https://devblinders.com/img/cms/redirects/admin-redirects301.jpg)

En la administración de las redirecciones encontraremos dos grandes bloques: tabla de redirecciones e importador de redirecciones (este último sólo para la versión premium del módulo)

#### 1. Tabla de redirecciones

Las columnas de la tabla son: 

- Columna 1: selector para acciones agrupadas
- Columna 2: ID de la redirección (se asigna automáticamente)
- Columna 3: URL que es redireccionada
- Columna 4: URL que recibe la redirección
- Columna 5: fecha en la que se ha dado de alta la redirección (sólo en la versión premium del módulo)
- Columna 6: estado de la redirección. Puede estar activa o desactivada.
- Columna 7: acciones. Toda redirección se puede modificar o eliminar. 

![img](https://devblinders.com/img/cms/redirects/columnas-tabla-redirects.jpg)

##### Crear una nueva redirección 301

Nos vamos a la esquina superior derecha de la tabla de redirecciones y le damos al icono del más:
![img](https://devblinders.com/img/cms/redirects/crear-nuevas-redirecciones.jpg)

Y ahora, lo único que tienes que hacer es rellenar datos. Sólo tienes que tener en cuenta que la URL antigua debe de ser sin el dominio, por ejemplo: /ruta-antigua-redireccion . Y la URL nueva, debe ser la url con el dominio, por ejemplo: https://www.midominio.com/ruta-antigua-redireccion

Ejemplo de redirección: 
![img](https://devblinders.com/img/cms/redirects/ejemplo-redirect.jpg)

:::tip
El módulo comprueba si la URL que quieres redirigir ya existe. Si ya existe, te avisa de que no puede hacer el 301. ¡Así nunca tendrás la misma URL redireccionando a dos distintas o duplicadas!
:::



#### 2. Importador de redirecciones 301 (sólo en la versión premium)

![img](https://devblinders.com/img/cms/redirects/importador-301.jpg)

Subiendo un sencillo CSV con el formato del CSV de ejemplo, se importarán todas tus 301. Además, checkea si hay URLS a redirigir que ya están dadas de alta en la tabla y además de no importar la duplicada, te avisa de cuáles son las duplicadas. 

Un ejemplo de importación con algunas URLs que ya existen en la tabla: 
![img](https://devblinders.com/img/cms/redirects/ejemplo-error.jpg)


### Redirecciones 410
![img](https://devblinders.com/img/cms/redirects/redirecciones-410.jpg)

En la administración de las redirecciones 410 encontraremos dos grandes bloques: tabla de redirecciones e importador de redirecciones (este último sólo para la versión premium del módulo)

#### 1. Tabla de redirecciones

- Columna 1: selector para acciones agrupadas
- Columna 2: ID de la redirección (se asigna automáticamente)
- Columna 3: URL que dará el 410
- Columna 4: fecha en la que se ha dado de alta el 410 (sólo en la versión premium del módulo)
- Columna 5: estado de la redirección 410. Puede estar activa o desactivada.
- Columna 6: acciones. Toda redirección 410 se puede modificar o eliminar. 

![img](https://devblinders.com/img/cms/redirects/tabla-410.jpg)

##### Crear una nueva redirección 410

Nos vamos a la esquina superior derecha de la tabla de redirecciones y le damos al icono del más:
![img](https://devblinders.com/img/cms/redirects/new-410.jpg)


Y ahora, lo único que tienes que hacer es rellenar datos. Sólo ten en cuenta que debes de meter la URL sin el dominio, por ejemplo: /ruta-antigua-url

Ejemplo de 410: 
![img](https://devblinders.com/img/cms/redirects/ejemplo-410.jpg)

:::tip
Si subes una URL que ya exista, no te preocupes. El módulo eliminará la duplicada para dejar sólo una y que no ocupe espacio de más en tu base de datos ;)
:::

#### 2. Importador de redirecciones 410 (sólo en la versión premium)
![img](https://devblinders.com/img/cms/redirects/importador-410.jpg)

Subiendo un sencillo CSV con el formato del CSV del ejemplo, se importarán todas tus 410. Además, checkea si hay URLS a dar un 410 que ya están dadas de alta en la tabla y elimina las duplicadas. 

