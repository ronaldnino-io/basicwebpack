Que es webpack

   Es un empaquetado dor de modulos y tambien puede ser usuado como un gestor de tareas 


Los sistemas que soporta webpack son los siguientes:

AMD
CommonJs
ES2015

Componentes de Webpack:

Entry points
Output
Loaders
Plugins


Configuración en webpack

1.- Webpack es configuration driven

Hot module replacement (HMR)

Esta caracteristica nos permite actualizar los módulos en tiempo de ejecución
sin necesidad de hacer un full refresh.

Ventajas 

Mantiene todo el estado de la aplicación
Nos ahorra tiempo 
Las modificaciones efectuadas en el css y js tienen ejecto de inmediato
en el navegador

 
Instalar webpack


Generar un budle.js


Creando en archivo webpack.config.js

     contenido del archivo 


Funcionamiento de webpack

Entry y Output
Entry: El módulo de entrada en nuestra aplicación. Aquí empezará el proceso de Webpack

Output: El fichero resultante de aplicar todo el proceso de Webpack

Proceso de ejecución
El proceso de Webpack comienza en los entry points. Primero Webpack tratará de resolver los imports contra el sistema de ficheros. Despues se irán aplicando los loaders contra los ficheros resueltos. Los plugins tambien se ejecutarán en este punto. Finalmente nos generará uno o varios ficheros de salida.

Tipos de ficheros soportados
Webpack irá generando un grafo de dependencias a medida que vaya pasando a traves de todos los imports. Este proceso se puede hacer contra muchos tipos de ficheros.
Los mas habituales con los que trabajaras en Webpack son:

Ficheros Javascript
Imágenes
Fuentes
Videos
Ficheros JSON
Ficheros .vue
Entre muchos otros…

Configuración multiple de webpack

¿Por qué?
En nuestros proyectos es habitual tener varios entornos y aplicar una configuración distinta por cada uno de ellos.

Los entornos mas comunes suelen ser:

Development
Production
Test
Pero tu puedes querer crear otros.

Cambiar entre configuraciones
Para alternar entre configuraciones tan solo debes pasar la opción —option al comando de webpack:

webpack --config webpack.prod.js
webpack --config webpack.dev.js

Variables de entorno
Podemos ir cargando programativamente las configuraciones ayudandonos de variables de entorno.

Para definirlas simplemente debemos usar la opción —env.var_name=value cuando ejecutemos webpack:

webpack --env.myVar=myValue

Para usarlo, tenemos que exportar una función en nuestro webpack.config.js y el primer parametro será un objeto con todas las variables definidas.

Webpack mode
En Webpack 4 podemos definer 2 modos de ejecución: development y production. Depende de cual seleccionemos Webpack cargará configuracón por defecto de forma transparente a nosotros.

