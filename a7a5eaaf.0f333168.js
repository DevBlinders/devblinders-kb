(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{72:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return b}));var a=r(2),o=r(6),n=(r(0),r(88)),c={id:"robots-txt",title:"Doc - DevBlinders Robots.txt",slug:"devblinders-robotstxt"},i={unversionedId:"robots-txt",id:"robots-txt",isDocsHomePage:!1,title:"Doc - DevBlinders Robots.txt",description:"Tu mejor aliado para optimizar tu robots.txt y mejorar tu crawl budget de forma r\xe1pida y segura.",source:"@site/docs/robots-txt.md",slug:"/devblinders-robotstxt",permalink:"/docs/devblinders-robotstxt",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/robots-txt.md",version:"current"},s=[{value:"Instalaci\xf3n",id:"instalaci\xf3n",children:[]},{value:"Configuraci\xf3n",id:"configuraci\xf3n",children:[{value:"Archivo Robots.txt",id:"archivo-robotstxt",children:[]},{value:"Probador de URLs",id:"probador-de-urls",children:[]},{value:"Comandos del Robots.txt",id:"comandos-del-robotstxt",children:[]},{value:"Errores y Advertencias",id:"errores-y-advertencias",children:[]}]}],l={rightToc:s};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Tu mejor aliado para optimizar tu robots.txt y mejorar tu crawl budget de forma r\xe1pida y segura."),Object(n.b)("hr",null),Object(n.b)("h2",{id:"instalaci\xf3n"},"Instalaci\xf3n"),Object(n.b)("p",null,"Una vez descargado el zip desde el area de clientes de DevBlinders tienes que instalar el m\xf3dulo como cualquier otro m\xf3dulo de PrestaShop:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Acceder al Backoffice de PrestaShop."),Object(n.b)("li",{parentName:"ul"},"Dirigete a Personalizar > M\xf3dulos > Module Manager."),Object(n.b)("li",{parentName:"ul"},'Pulsar el bot\xf3n de arriba a la derecha llamado "Subir un m\xf3dulo".'),Object(n.b)("li",{parentName:"ul"},"Seleccionar el zip descargado en tu ordenador.")),Object(n.b)("p",null,'Cuando tengas el m\xf3dulo activo, encontrar\xe1s el acceso a la configuraci\xf3n en Personalizar > M\xf3dulos > Module Manager y en el buscador escribe "robots" y pulsa enter. '),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"https://devblinders.com/img/cms/documentaciones/robotstxt/configurar-robotstxt.jpg",alt:"img"}))),Object(n.b)("hr",null),Object(n.b)("h2",{id:"configuraci\xf3n"},"Configuraci\xf3n"),Object(n.b)("p",null,"En este paso podremos configurar nuestro robots.txt siguiendo las reglas que necesitemos. "),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"https://devblinders.com/img/cms/documentaciones/robotstxt/archivo-robotstxt.jpg",alt:"img"}))),Object(n.b)("h3",{id:"archivo-robotstxt"},"Archivo Robots.txt"),Object(n.b)("p",null,"Identificamos 2 acciones para hacer:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},'Restaurar versiones antiguas. En el caso de tener que publicar antiguas versiones lo podemos hacer seleccionando la versi\xf3n que necesitemos y clicando en "Publicar nuevo robots.txt" se restaurar\xeda l versi\xf3n seleccionada. ')),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"https://devblinders.com/img/cms/documentaciones/robotstxt/restaurar-robotstxt.jpg",alt:"img"}))),Object(n.b)("ol",{start:2},Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Aplicar nuevas reglas."),Object(n.b)("p",{parentName:"li"}," 2.1 Aplicar nuevas reglas manualmente. Podemos escribir la nueva regla en el mismo archivo a\xf1adiendo una l\xednea y seguidamente publicar la nueva versi\xf3n generada."),Object(n.b)("p",{parentName:"li"},Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"https://devblinders.com/img/cms/documentaciones/robotstxt/nueva-regla-manual.jpg",alt:"img"}))),Object(n.b)("p",{parentName:"li"},"2.2. Generar nuevas reglas. Disponemos de un generdor de reglas para ayudarnos en la sintaxis de \xe9sta para el correto bloqueo o permiso de alg\xfan par\xe1metro o useragent espec\xedfico. "),Object(n.b)("p",{parentName:"li"},"Tendremos que tener en cuenta qu\xe9 acci\xf3n queremos bloquear o permitir:"),Object(n.b)("p",{parentName:"li"},Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"https://devblinders.com/img/cms/documentaciones/robotstxt/generador-de-reglas-accion.jpg",alt:"img"}))),Object(n.b)("p",{parentName:"li"},"A qu\xe9 User-Agent queremos que vaya dirigida la regla: a todos o uno espec\xedfico:"),Object(n.b)("p",{parentName:"li"},Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"https://devblinders.com/img/cms/documentaciones/robotstxt/generador-regla-useragent.jpg",alt:"img"}))),Object(n.b)("p",{parentName:"li"},"Y si el path o par\xe1metro que queramos bloquear o permitir para todos los User-Agent: empieza por, termina por o contiene:"),Object(n.b)("p",{parentName:"li"},Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"https://devblinders.com/img/cms/documentaciones/robotstxt/generador-regla-contenido.jpg",alt:"img"}))),Object(n.b)("p",{parentName:"li"},'Finalmente, escribimos el path o par\xe1metro y clicamos a "Generar". Autom\xe1ticamente se nos a\xf1adir\xe1 la nueva regla en el comentario al archivo del robots.txt perteneciente. En este caso, como hemos bloqueado el path que contiene "forum" para todos los User-Agents se ha a\xf1adido la regla en la \xfaltima fila porque no tenemos ning\xfan comentario hecho en el archivo para agrupar reglas.'),Object(n.b)("p",{parentName:"li"},Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"https://devblinders.com/img/cms/documentaciones/robotstxt/mueva-regla-generada.jpg",alt:"img"}))))),Object(n.b)("h3",{id:"probador-de-urls"},"Probador de URLs"),Object(n.b)("p",null,"Este m\xf3dulo tambi\xe9n nos ayuda a saber si una URL ya est\xe1 en Disallow o Allow con el probador de URLs:"),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"https://devblinders.com/img/cms/documentaciones/robotstxt/url-bloqueada.jpg",alt:"img"}))),Object(n.b)("h3",{id:"comandos-del-robotstxt"},"Comandos del Robots.txt"),Object(n.b)("p",null,"Si tienes dudas o necesitas recordar c\xf3mo escribir una regla tambie\xe9n tienes una leyenda con los significados de la sintaxis para generar nuevas reglas o interpretar las ya generadas."),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"https://devblinders.com/img/cms/documentaciones/robotstxt/leyenda-robotstxt-sintaxis.jpg",alt:"img"}))),Object(n.b)("h3",{id:"errores-y-advertencias"},"Errores y Advertencias"),Object(n.b)("p",null,"Los errores se identificar\xe1n cuando alguna regla no est\xe9 bien escrita con los comandos correctos. Cada error se identificar\xe1 mediante la cruz roja en la fila del archivo robots.txt mal configurada."),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"https://devblinders.com/img/cms/documentaciones/robotstxt/errores-robotstxt.jpg",alt:"img"}))),Object(n.b)("p",null,'Las advertencias son los comandos mal escritos de la regla a generar, no son generadas como un error porque se puede interpretar la regla ya que la sintaxis est\xe1 bien escrita. Por ejemplo, escribir mal "Disallow" o "Allow":'),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"https://devblinders.com/img/cms/documentaciones/robotstxt/advertencias-robotstxt.jpg",alt:"img"}))))}b.isMDXComponent=!0},88:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return p}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(r),m=a,p=d["".concat(c,".").concat(m)]||d[m]||u[m]||n;return r?o.a.createElement(p,i(i({ref:t},l),{},{components:r})):o.a.createElement(p,i({ref:t},l))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,c=new Array(n);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<n;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);