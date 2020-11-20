---
id: quienes-somos
title: Doc - DevBlinders Quiénes Somos
---

La solución Nº1 para dejar claro la autoría de tu tienda online para PrestaShop como requiere el filtro E-A-T del algoritmo de Google.
Esto es una prueba de Nacho

---

## Instalación
Una vez descargado el zip desde el area de clientes de DevBlinders tienes que instalar el módulo como cualquier otro módulo de PrestaShop:

- Acceder al Backoffice de PrestaShop.
- Dirigete a Personalizar > Módulos > Module Manager.
- Pulsar el botón de arriba a la derecha llamado "Subir un módulo".
- Seleccionar el zip descargado en tu ordenador.

Cuando tengas el módulo activo, encontrarás el acceso a la configuración debajo del todo en la columna de la izquierda:

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/quienes-somos-acceso.jpg)

---

## Administración
Veamos paso a paso la configuración de 0 a 100 del módulo y una serie de tips expertos para que le saques el máximo rendimiento a tu nuevo módulo. 

Antes de nada, tienes que entender que la administración de este módulo se divide en: 

1. **Configuración**: es la sección desde donde puedes editar la página del equipo. 
1. **Etiquetas de Experto**: es donde podrás administrar las etiquetas de experto que posteriormente podrás asociar a tus autores. 
1. **Especialidades**: es donde podrás administrar las especialidades que posteriormente asociarás a tus autores. 
1. **Autores**: aquí podrás administar a tus autores.

Veamos a continuación cada uno de los bloques en detalle. 

### 1. Configuración
En esta sección podrás controlar la información que muestras en tu página de equipo ([ejemplo de página de equipo](https://devblinders.com/es/quienes-somos/))

Para acceder a la configuración, ve aquí:

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/configuracion-admin.jpg)

Los campos que podrás configurar son: 

#### 1.1 Nombre de página
Corresponde a este campo: 

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/admin-nombre-pagina.jpg)

Por defecto, esta página la llamamos "Quiénes somos". Puedes dejarla tal y como está o puedes personalizarla a tu gusto, aunque te recomendamos que la dejes como está. 

Si piensas personalizarla, ten en cuenta que es este bloque de texto en la página front del equipo:

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/nombre-quienes-somos-pagina.jpg)

Es decir, lo que pongas en ese campo de la administración luego lo verás en el título principal de la página de equipo y en las migas de pan.

#### 1.2 Etiquetas SEO
Los siguientes dos campos, pertenecen al <title> y <meta name="description">, dos de las etiquetas SEO que más tienes que cuidar. 

Hablamos de estos dos campos:

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/metas-quienes-somos.jpg)

Si quieres saber más sobre cómo escribir un buen title y description, [puedes consultar este artículo de Google](https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets). 

:::tip

En vez de escribir las etiquetas en la administración del PrestaShop, puedes primero escribirlo visualizándolo en un [simulador de snippet en la SERP como este de nuestros amigos de Sistrix](https://app.sistrix.com/en/serp-snippet-generator) y cuando veas que están con la dimensión correcta tanto para mobile como para desktop, lo copias y lo pegas en tu PrestaShop.

:::
  
#### 1.3 URL
El siguiente campo es para poder customizar tu URL. Por defecto, se llamará "quienes-somos".

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/url-quienes-somos.jpg)

:::caution

Mucho cuidado con cambiar la URL. Si editas este campo y Google ya conoce tu página de Quiénes somos, ten en cuenta que afectará tanto a la URL del equipo como a la de cada autor por individual. Si tienes que cambiarla, recuerda hacer una redirección 301 de las URLs antiguas a las nuevas.

:::


#### 1.4 Descripción corta
La descripción corta en la parte pública será el bloque de texto que se verá encima del listado de autores. 

En la administración corresponde a:

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/desc-corta-quienes-somos.jpg)

Como ves, puedes editarlo de manera cómoda con el mismo editor HTML que tienes en fichas de producto o categorías. Podrás añadir contenido, estilos, imágenes, vídeos...

En la parte pública, corresponde a este bloque: 

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/desc-corta-front.jpg)

:::tip

No metas mucho contenido en este bloque, piensa en lo largo que se verá en el móvil. Tienes que mostrar a tu equipo cuanto antes, si quieres meter una descripción más extensa usa el campo de "descripción larga". 

:::


### 2. Etiquetas de experto

Para acceder a las etiquetas de experto, ve aquí:

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/expert-tags-admin.jpg)

Desde aquí podrás visualizar todas tus etiquetas de expertos. Podrás crear nuevas o editar, eliminar o desactivar/activar las que ya tengas creadas. 

Para crear una nueva etiqueta de experto o editar alguna existente tendrás que gestionar los mismos campos. Así tiene que mostrarse tu pantalla cuando le des a crear una nueva etiqueta: 

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/nueva-etiqueta_1.jpg)

Simplemente tendrás que rellenar el texto que quieres que muestre tu etiqueta en la página de autor. 

Ejemplo de etiqueta de experto en página de autor: 

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/etiqueta-front.jpg)

De momento, sólo estás gestionando tus etiquetas. En el **capítulo 4. Autores** veremos cómo hacer para que salga la etiqueta que se seleccione en el autor que se quiera.


### 3. Especialidades
Para acceder a las especialidades, ve aquí:

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/especialdiades-expertos-quienessomos.jpg)

Desde esta sección podrás gestionar todas las especialidades que posteriomente asociaremos a los autores. Como siempre, podrás crear, editar, eliminar y desactivar cada una de ellas. 

Cuando le des a crear una nueva funcionalidad, verás la siguiente pantalla en la que simplemente tienes que rellenar el nombre de la especialidad:

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/nueva-especialidad.jpg)

Una vez rellenadas y asociadas a un autor, en la parte pública se verá así:

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/especialidades-front.jpg)

De nuevo recordarte que en esta sección sólo estas gestionando tus especialidades. Es en el **capítulo 4. Autores** donde veremos cómo asociar especialidades a Autores.


### 4. Autores

Esta es sin duda la sección donde más te tienes que esforzar. Veamos cada uno de los campos posibles a rellenar con detalle. 

Para acceder a tus autores,  tendrás que ir a:

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/autores-admin.jpg)

Desde aquí vas a poder crear, modificar, desactivar, eliminar y ordenar a tus autores. 

#### 4.1 Nombre y e-mail del autor

Ambos campos son obligatorios.

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/nombre-y-email.jpg)

El e-mail no se mostrará visualmente, el cliente no tiene manera de saber el e-mail del autor. Pero el nombre si que sale visualmente, se ve en:

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/nombre-front.jpg)


#### 4.2 Cargo en la empresa

Este campo también es obligatorio:

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/cargo-empresa-back.jpg)

En la parte pública se visualiza en dos secciones: 

**En la página de autor**

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/cargo-empresa-front.jpg)

**En el listado de la página de autores**

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/cargo-empresa-front-listado.jpg)


#### 4.3 Nº de colegiado

Este campo es opcional. Si este autor tiene una carrera donde tenga un número de colegiado, rellena este campo con dicho número. 

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/numero-colegiado-backdd.jpg)

En la parte pública, si lo rellenas se vería así:

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/colegiado-front.jpg)


#### 4.4 Especialidades

Ahora es el momento de seleccionar las especialidades que has creado antes que te interesen asociar a este autor. Ten en cuenta que para seleccionar más de una, tendrás que tener pulsada la letra Control y pinchar con el ratón encima de tantas especialidades como desees.

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/especialidades-back.jpg)

En la parte pública, como ya hemos visto anteriormente, se verán así:

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/especialidades-front.jpg)


#### 4.5 Etiquetas de experto

Y ahora es cuando seleccionamos la etiqueta de experto al autor. Ten en cuenta que sólo se puede asociar una etiqueta de experto por autor aunque una etiqueta de experto puede estar asociada a más de un autor. 

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/etiqueta-experto-back.jpg)

Como ya hemos visto, en la parte pública se verá en la página de autor así:

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/etiqueta-front.jpg)


#### 4.6 Descripción corta y descripción larga

Ninguno de estos dos campos son obligatorios, aunque te recomendamos que por lo menos rellenes la descripción corta. 

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/descripcioncortaylargaback.jpg)

Visualmente, se verá así:

**Descripción corta**

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/desccortafront.jpg)


**Descripción larga**

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/desclarga-front.jpg)


#### 4.7 Me has podido ver en

Este campo tampoco es obligatorio. Está destinado a que pongas enlaces a entrevistas, charlas u otras páginas donde se hable del autor. 

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/mehasvistoenback.jpg)


El estilo de la parte pública no es configurable desde la administración, pero tocando el código del módulo puedes cambiarlo fácilmente si quieres personalizarlo (aunque no es necesario).

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/mehaspodidoverfrontt.jpg)


#### 4.8 Imagen del autor

Aquí es donde podrás subir la imagen de tu autor. Trata de elegir una imagen profesional y de buena calidad.

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/imagen-back.jpg)

Ten en cuenta que en la parte pública se verá tanto en la página de autor como en la página de equipo.


#### 4.9 Redes sociales y web

Estos campos tampoco son obligatorios, aunque te recomendamos que pongas todas las redes visibles y actualizadas del autor. Recuerda que la que pongas, tienes que poner la URL completa.

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/redessociales-back.jpg)

En la parte pública se verá así:

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/redessocialesfront.jpg)


#### 4.10 Etiquetas SEO y URL

Tal y como hemos visto en la sección de "Configuración general", podrás poner el title y la description de cada autor. Además, podrás customizar su URL aunque te recomendamos del mismo modo que tengas cuidado tocando URL y si lo haces hagas una redirección 301 de la antigua URL a la nueva.

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/metasseoyurl.jpg)

---


## Multi idioma

Todos nuestros módulos están pensados para multi idioma. Como ya habrás visto, al lado de cada campo tienes el selector del idioma al que quieres que aplique ese contenido:

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/camposmultiidioma.jpg)

---

## Personalización CSS

---

## FAQ
##### ¿Cómo elegir qué especializaciones crear?
##### ¿Qué lógica seguir con las etiquetas de expertos?
##### ¿Puedo poner sitios en los que ha salido el autor pero no enlazar al sitio donde sale?
##### ¿El módulo cuenta con con marcado de datos?
##### ¿Qué extensión deben de tener las descripciones?


---

## Recursos externos relacionados
