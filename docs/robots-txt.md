---
id: robots-txt
title: Doc - DevBlinders Robots.txt
slug: devblinders-robotstxt
---

Tu mejor aliado para optimizar tu robots.txt y mejorar tu crawl budget de forma rápida y segura.

---

## Instalación
Una vez descargado el zip desde el area de clientes de DevBlinders tienes que instalar el módulo como cualquier otro módulo de PrestaShop:

- Acceder al Backoffice de PrestaShop.
- Dirigete a Personalizar > Módulos > Module Manager.
- Pulsar el botón de arriba a la derecha llamado "Subir un módulo".
- Seleccionar el zip descargado en tu ordenador.

Cuando tengas el módulo activo, encontrarás el acceso a la configuración en Personalizar > Módulos > Module Manager y en el buscador escribe "robots" y pulsa enter. 

![img](https://devblinders.com/img/cms/documentaciones/robotstxt/configurar-robotstxt.jpg)

---

## Configuración
En este paso podremos configurar nuestro robots.txt siguiendo las reglas que necesitemos. 

![img](https://devblinders.com/img/cms/documentaciones/robotstxt/archivo-robotstxt.jpg)

### Archivo Robots.txt

Identificamos 2 acciones para hacer:

**1. Restaurar versiones antiguas.** En el caso de tener que publicar antiguas versiones lo podemos hacer seleccionando la versión que necesitemos y clicando en "Publicar nuevo robots.txt" se restauraría la versión seleccionada. 

![img](https://devblinders.com/img/cms/documentaciones/robotstxt/restaurar-robotstxt.jpg)

**2. Aplicar nuevas reglas.**

  **2.1 Aplicar nuevas reglas manualmente.** Podemos escribir la nueva regla en el mismo archivo añadiendo una línea y seguidamente publicar la nueva versión generada.
  
 ![img](https://devblinders.com/img/cms/documentaciones/robotstxt/nueva-regla-manual.jpg)
 
 **2.2. Generar nuevas reglas.** Disponemos de un generdor de reglas para ayudarnos en la sintaxis de ésta para el correto bloqueo o permiso de algún parámetro o useragent específico. 
 
 Tendremos que tener en cuenta qué acción queremos bloquear o permitir:

 ![img](https://devblinders.com/img/cms/documentaciones/robotstxt/generador-de-reglas-accion.jpg)
 
 A qué User-Agent queremos que vaya dirigida la regla: a todos o uno específico:
 
 ![img](https://devblinders.com/img/cms/documentaciones/robotstxt/generador-regla-useragent.jpg)
 
 Y si el path o parámetro que queramos bloquear o permitir para todos los User-Agent: empieza por, termina por o contiene:
 
 ![img](https://devblinders.com/img/cms/documentaciones/robotstxt/generador-regla-contenido.jpg)
 
 Finalmente, escribimos el path o parámetro y clicamos a "Generar". Automáticamente se nos añadirá la nueva regla en el comentario al archivo del robots.txt perteneciente. En este caso, como hemos bloqueado el path que contiene "forum" para todos los User-Agents se ha añadido la regla en la última fila porque no tenemos ningún comentario hecho en el archivo para agrupar reglas.

 ![img](https://devblinders.com/img/cms/documentaciones/robotstxt/mueva-regla-generada.jpg)
 
### Probador de URLs
 
Este módulo también nos ayuda a saber si una URL ya está en Disallow o Allow con el probador de URLs:

![img](https://devblinders.com/img/cms/documentaciones/robotstxt/url-bloqueada.jpg)

### Comandos del Robots.txt 

Si tienes dudas o necesitas recordar cómo escribir una regla tambieén tienes una leyenda con los significados de la sintaxis para generar nuevas reglas o interpretar las ya generadas.

![img](https://devblinders.com/img/cms/documentaciones/robotstxt/leyenda-robotstxt-sintaxis.jpg)
 
### Errores y Advertencias

Los **errores** se identificarán cuando alguna regla no esté bien escrita con los comandos correctos. Cada error se identificará mediante la cruz roja en la fila del archivo robots.txt mal configurada.

![img](https://devblinders.com/img/cms/documentaciones/robotstxt/errores-robotstxt.jpg)

Las **advertencias** son los comandos mal escritos de la regla a generar, no son generadas como un error porque se puede interpretar la regla ya que la sintaxis está bien escrita. Por ejemplo, escribir mal "Disallow" o "Allow": 

![img](https://devblinders.com/img/cms/documentaciones/robotstxt/advertencias-robotstxt.jpg)
 
 
 
