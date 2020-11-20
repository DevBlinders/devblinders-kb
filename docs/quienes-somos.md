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

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/nombre-y-email.jpg)

El e-mail no se mostrará visualmente, el cliente no tiene manera de saber el e-mail del autor. Pero el nombre si que sale visualmente, se ve en:

![img](https://devblinders.com/img/cms/documentaciones/quienes-somos/nombre-front.jpg)

---

## Multi idioma

---

## Personalización CSS

---

## FAQ

---

## Recursos externos relacionados
