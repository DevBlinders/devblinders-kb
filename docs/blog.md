##Introducción

Módulo del blog para PrestaShop optimizado por SEO y E-A-T.

##Instalación:

Con el módulo del Blog te regalamos el módulo de Quienes somos. Cuando tengas los dos módulos descargados proceder a la instalación de los mismos. 

Primero deberás instalar el módulo de Quienes Somos. Una vez esté instalado correctamente proceder a la instalación del módulo del Blog. 

Acceder al Backoffice de PrestaShop.
Dirígete a Personalizar > Módulos > Module Manager.
Pulsar el botón de arriba a la derecha llamado "Subir un módulo".
Seleccionar el zip descargado en tu ordenador.

Cuando tengas los dos módulos ya activos aparecerán en el menú de administración de tu Backoffice.

![img](https://devblinders.com/img/cms/menu-blog.png)

##Configuración

Para poder proceder a ajustar los estilos así como diversas funcionalidades del Blog deberás ir a Configuración del blog. 

Encontramos distintos apartados:

###General: 

En este apartado podrás configurar el nombre de la home del blog, así como añadir una descripción corta y una larga como campos de texto. 

![img](https://devblinders.com/img/cms/configuracion-general-blog.png)

Podrás elegir el color corporativo del blog introduciendo el valor hexadecimal. 

![img](https://devblinders.com/img/cms/configuracion-color-blog.png)

A continuación, podrás elegir el número de artículos que se listan en la home del blog así como en las categorías y, por último, en la página de autor. 

![img](https://devblinders.com/img/cms/final-configuracion-general-blog.png)

Una vez definidos estos valores, deberás guardar. 

###SEO:

La configuración SEO del blog te permite modificar la URL amigable de la home del blog así como añadir los metadatos: title y description. 

![img](https://devblinders.com/img/cms/configuracion-seo-blog.png)

###Sidebar:

Podrás configurar el número de artículos que se mostrarán en el sidebar dentro del bloque de los artículos más vistos, últimos posts y el número de autores. 

![img](https://devblinders.com/img/cms/configuracion-sidebar-blog.png)

###Comentarios:

Podrás configurar si quieres permitir o no comentarios de los usuarios en los artículos del blog. También, podrás añadir un campo de texto para añadir correctamente un texto que haga referencia a la ley del Reglamento General de la Protección de Datos. 

Elige qué URL corporativa quieres enlazar para que antes de publicar el comentario puedan leer y estar conformes con la política de vuestra empresa. 

Añade si necesitas un reCAPTCHA con clave pública o privada para que puedan introducirlo antes de publicar el comentario. 

![img](https://devblinders.com/img/cms/configuracion-comentarios-blog.png)

![img](https://devblinders.com/img/cms/comentarios-publicos-blog.png)

###Posts:

La configuración de los Posts hace referencia al listado de los posts en tipologías de página como la home del blog, categorías o autores. 

Podrás configurar si quieres que en el listado de los artículos en home y categorías aparezca un extracto del texto, añadir el anchor “Leer más”. 

![img](https://devblinders.com/img/cms/configuracion-post-blog.png)

También puedes configurar el número de posts relacionados y números de artículos del mismo autor que se listan siempre en un artículo visto. 

![img](https://devblinders.com/img/cms/configuracion-post-relacionados-blog.png)

![img](https://devblinders.com/img/cms/comentarios-publicos-blog.png)

###Home PrestaShop:

Podrás configurar también que en la home de tu eCommerce puedas listar artículos del blog con las lógicas de los últimos posts creados así como los artículos más leídos.

![img](https://devblinders.com/img/cms/configuracion-home-prestashop.png)

###Sidebar PrestaShop:

Podrás configurar los post más leídos así como los últimos creados en el propio sidebar de tu eCommerce. 

![img](https://devblinders.com/img/cms/configuracion-sidebar-prestashop.png)

##Cómo crear categorías

Para crear categorías tendremos que acceder mediante el menú del backoffice donde se encuentra el blog y el apartado de Categorías. 

![img](https://devblinders.com/img/cms/configurar-categorias-blog.png)

Para añadir una categoría tendrás que clicar en + :

![img](https://devblinders.com/img/cms/anadir-categorias-blog.png)

Seguidamente deberás seleccionar qué categoría padre tiene la categoría que estas creando mediante el selector:

![img](https://devblinders.com/img/cms/seleccionar-categoria-padre-blog.png)

Añade el nombre de la categoría y una descripción corta y una larga en los campos de texto definidos:

![img](https://devblinders.com/img/cms/nombre-categorias-blog.png)

Añade los metadatos: title y description para mejorar sus resultados en los motores de búsqueda y añade una URL amigable. También podrás configurar las meta robots si quiere que la categoría se incluya en el índice de buscadores o si quieres que la categoría esté activa o no.

![img](https://devblinders.com/img/cms/metadatos-categorias-blog.png)

##Cómo crear un artículo

Para crear un artículo tendremos que acceder mediante el menú del backoffice donde se encuentra el blog y el apartado de Posts.

![img](https://devblinders.com/img/cms/configurar-articulos-blog.png)

Para añadir un artículo nuevo deberás clicar en +:

![img](https://devblinders.com/img/cms/anadir-posts-blog.png)

###Categoría

Deberás seleccionar la categoría que quieres que ese post esté asociado. Si quieres que se asocie en más de una categoría deberás mantener pulsado la tecla Ctrl y seleccionar las categorías que creas convenientes. 

![img](https://devblinders.com/img/cms/seleccionar-categorias-posts-blog.png)

###Categoría principal y título

Seguidamente, deberás seleccionar la categoría principal del artículo y añadir el título del post. 

![img](https://devblinders.com/img/cms/seleccionar-categoria-principal-post-blog.png)

#Descripción corta y larga:

En los siguientes campos de texto podrás añadir una descripción corta para que se vea debajo del título del artículo y en la descripción larga deberás añadir el cuerpo del artículo completo. 

![img](https://devblinders.com/img/cms/descripcion-corta-larga-posts-blog.png)

###Carrusel de productos:

En la descripción larga del artículo podrás añadir a través del código fuente con el siguiente shortcode:

{dbblog_products id_category=156 order=seller way=desc num=8}

![img](https://devblinders.com/img/cms/carrusel-productos-posts-blog.png)

Puedes crear el carrusel de productos con la lógica que necesites más adecuada:

Orden de ventas: order=seller
Por id de productos: order=id_product
Por fecha de publicación: order=date_add
Por nombre: order=name
Por marca o fabricante: order=manufacturer
Por precio: order=price

Así como opciones de ordenación (way): ascendente o descendente.

Ascendente: way=asc
Descendente: way=desc

Y el número (num) de productos a mostrar en el carrusel: num=8

###Listar un único producto:

Si no quieres mostrar un carrusel de productos porque necesitas sólo listar un producto específico deberás usar el shortcode:

{dbblog_products id_product=8644}

Simplemente, poniendo la id del producto que corresponda ya se listará un único producto.

###Imagen principal

Para mostrar la imagen destacada o principal del artículo deberas subir la imagen desde el selector:

![img](https://devblinders.com/img/cms/imagen-principal-articulo-blog.png)

###Meta datos y URL amigable

Podrás añadir el title y la description así como la url amigable del artículo:

![img](https://devblinders.com/img/cms/metadatos-articulos-blog.png)

###Autor

En cada artículo deberás seleccionar el autor del post entre los autores que tengas dados de alta en el módulo de Quienes Somos. 

![img](https://devblinders.com/img/cms/autores-articulos-blog.png)

##Comentarios:

Todos los comentarios requieren de una aprobación previa para que se muestren públicamente. Podrás gestionar todos los comentarios nuevos y antiguos desde el apartado Comentarios:

![img](https://devblinders.com/img/cms/configurar-comentarios-posts.png)

Cuando recibas comentarios se listan en el apartado principal, desde donde podrás gestionarlos:

![img](https://devblinders.com/img/cms/lista-de-comentarios-posts.png)

Para gestionar un comentario en particular deberás clicar al botón “Modificar”:

![img](https://devblinders.com/img/cms/modificar-comentarios-posts.png)

Cuando accedes al comentario podrás aprobar o no el comentario que ha dejado el usuario.

![img](https://devblinders.com/img/cms/gestion-comentario-posts.png)
