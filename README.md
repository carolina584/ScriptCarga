# ScriptCarga

Prueba de Carga del Servicio de Login
-
Este repositorio contiene los artefactos para realizar una prueba de carga al servicio de login de fakestoreapi.com.


Tecnologías Utilizadas:
-
Apache JMeter v5.6.2
Java JDK v1.8.0_291

Archivos del Proyecto
UserLoadData.jmx: Script de la prueba de carga de JMeter.
users.csv: Archivo con los datos de usuarios para la parametrización.
resultados.jtl: Archivo de resultados de la ejecución de JMeter.
reporte_html/: Carpeta con el reporte HTML de la prueba.
conclusiones.txt: Archivo con el análisis de los resultados.

Instrucciones de Ejecución
-
Asegúrate de tener instalado Java JDK (versión 8 o superior) y Apache JMeter (versión 5.6.2 o superior).
Coloca los archivos UserLoadData.jmx y users.csv en la misma carpeta. Ejemplo: C:\ruta\a\tu\carpeta\ScriptCarga.
Abre una terminal y navega hasta esa carpeta con el comando cd.

Ejecuta el siguiente comando para iniciar la prueba de carga y generar el reporte:

jmeter -n -t "ruta/a/tu/script/UserLoadData.jmx" -l "ruta/a/tu/archivo/results.jtl" -e -o "ruta/a/tu/carpeta/reporte_html"
-
Comando 2: jmeter -g "ruta/a/results.jtl" -o "ruta/a/reporte_html"

jmeter -g "ruta/a/results.jtl" -o "ruta/a/reporte_html"
-
------------------------------------------------------------------------------------------
Comando 1: jmeter -n -t ... -l ... -e -o ...
-
Este comando se usa para ejecutar una prueba de carga completa desde la línea de comandos (-n).

-n: Indica que es una ejecución no-GUI.

-t: Especifica el archivo del plan de prueba (.jmx) que se va a ejecutar.

-l: Le dice a JMeter que guarde los resultados de la prueba en un archivo (.jtl) durante la ejecución.

-e: Indica que se debe generar un reporte HTML después de que la prueba termine.

-o: Especifica la carpeta de salida para el reporte HTML.

-------------------------------------------------------------------------------------
Comando 2: jmeter -g "ruta/a/results.jtl" -o "ruta/a/reporte_html"
-
Este comando NO ejecuta una prueba. Se usa para generar un reporte HTML a partir de un archivo de resultados (.jtl) ya existente.

-g: Le dice a JMeter que tome los datos de un archivo .jtl ya creado.

-o: Especifica la carpeta donde se debe guardar el nuevo reporte HTML.

Al finalizar, la carpeta reporte_html y el archivo results.jtl contendrán el informe completo de la prueba.


