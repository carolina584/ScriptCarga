# ScriptCarga
Auto de script carga

 ejecutar la prueba de rendimiento y generar el reporte
 -
 Pre-requisitos:
-
Tener Apache JMeter instalado y configurado.

Tener los archivos de la prueba (.jmx, .csv) ubicados en la carpeta ScriptCarga en el escritorio (C:\Users\[TuUsuario]\Desktop\ScriptCarga).

La carpeta de JMeter (apache-jmeter-5.6.3) se encuentra en el escritorio (C:\Users\[TuUsuario]\Desktop\apache-jmeter-5.6.3).

Opción 1: Ejecutar la prueba y generar el reporte en un solo comando
Esta es la forma más directa y recomendada. Ejecutará la prueba y, al finalizar, generará automáticamente el reporte HTML.

Abre la consola de comandos de Windows (CMD).

Navega al directorio bin de JMeter ejecutando el siguiente comando:

cd C:\Users\CaroFel\Desktop\apache-jmeter-5.6.3\bin
Asegúrate de que no exista la carpeta de reporte de pruebas anterior (reporte_html) en tu directorio de proyecto (C:\Users\CaroFel\Desktop\ScriptCarga).

Copia y pega el siguiente comando para ejecutar la prueba y generar el reporte:

jmeter -n -t "..\..\ScriptCarga\CSV Data Set Config.jmx" -l "..\..\ScriptCarga\results.jtl" -e -o "..\..\ScriptCarga\reporte_html"
Una vez finalizada la prueba, el reporte HTML estará disponible en el archivo index.html dentro de la carpeta reporte_html.

Opción 2: Generar el reporte a partir de un archivo de resultados existente
Esta opción es útil si ya has ejecutado la prueba previamente y solo necesitas generar el reporte HTML a partir del archivo results.jtl.

Abre la consola de comandos de Windows (CMD).

Navega al directorio bin de JMeter ejecutando el siguiente comando:

cd C:\Users\CaroFel\Desktop\apache-jmeter-5.6.3\bin
Asegúrate de que el archivo results.jtl exista en tu carpeta de proyecto (C:\Users\CaroFel\Desktop\ScriptCarga).

la carpeta de reporte de pruebas anterior no exista (reporte_html). Si existe, bórrala o cámbiale el nombre.

Copia y pega el siguiente comando para generar el reporte:
-

jmeter -g "..\..\ScriptCarga\results.jtl" -o "..\..\ScriptCarga\reporte_html"
Una vez finalizado el proceso, el reporte HTML estará disponible en el archivo index.html dentro de la carpeta reporte_html.

Nota: Reemplaza CaroFel con tu nombre de usuario si es diferente. El uso de rutas relativas (..\..\) hace que los comandos sean más portables, siempre y cuando la estructura de carpetas (JMeter y tu proyecto en el escritorio) se mantenga.


