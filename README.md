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
results.jtl: Archivo de resultados de la ejecución de JMeter.
reporte_html/: Carpeta con el reporte HTML de la prueba.
Documentos de prueba: conclusiones.txt: Archivo con el análisis de los resultados, evidencias ejecucion, etc

Instrucciones de Ejecución
-
Asegúrate de tener instalado Java JDK (versión 8 o superior) y Apache JMeter (versión 5.6.2 o superior).
Coloca los archivos UserLoadData.jmx y users.csv en la misma carpeta. Ejemplo: C:\ruta\a\tu\carpeta\ScriptCarga.
Abre una terminal y navega hasta esa carpeta con el comando cd.

Ejecuta el siguiente comando1 para iniciar la prueba de carga y generar results.jtl:

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

En resumen:
-
Comando 1: para correr la prueba y guardar los resultados.
Comando 2: para analizar los resultados de una prueba que ya se ejecutó, creando un reporte HTML a partir del archivo .jtl generado.
-

Al finalizar, la carpeta reporte_html y el archivo results.jtl contendrán el informe completo de la prueba.

------------------------------------------------------------------------------------------------------------
En la herramienta de JMETER
-
1. Iniciar JMeter
Abre la interfaz gráfica de JMeter ejecutando el archivo jmeter.bat en la carpeta bin.

3. Crear el Test Plan
Test Plan es el elemento raíz. Aquí puedes guardar y abrir tus scripts.

4. Agregar un Thread Group
Haz clic derecho en Test Plan -> Add -> Threads (Users) -> Thread Group.

Este es el motor de tu prueba. Configura:

Number of Threads (users): La cantidad de usuarios virtuales.
Ramp-up period (seconds): El tiempo en el que JMeter iniciará todos los usuarios.
Loop Count: Cuántas veces se repetirá la prueba.

4. Agregar un Sampler (la petición HTTP)
Haz clic derecho en Thread Group -> Add -> Sampler -> HTTP Request.

Este es el UserLoadData de tu script. Aquí configuras la petición de login:

Name: UserLoadData (o el nombre que prefieras).
Protocol: https
Server Name or IP: fakestoreapi.com
Method: POST
Path: /auth/login

En la sección Body Data, pega el JSON de login. Para la parametrización, puedes usar variables, por ejemplo:

JSON

{
  "username": "${username}",
  "password": "${password}"
}
5. Agregar un HTTP Header Manager
Haz clic derecho en UserLoadData -> Add -> Config Element -> HTTP Header Manager.

Añade una fila en la tabla de encabezados:

Name: Content-Type
Value: application/json

6. Agregar un CSV Data Set Config (Para parametrizar los datos)
Haz clic derecho en Thread Group -> Add -> Config Element -> CSV Data Set Config.

Aquí le dices a JMeter cómo leer tu archivo de datos:

Filename: users.csv (asegúrate de que esté en la misma carpeta que tu script).
Variable Names: username,password (sin espacios y separados por comas).

7. Agregar una Response Assertion (la validación)
Haz clic derecho en UserLoadData -> Add -> Assertions -> Response Assertion.

Field to Test: Response Code
Pattern Matching Rules: Equals
Patterns to Test: 201 

8. Agregar un JSON Extractor
Haz clic derecho en UserLoadData -> Add -> Post Processors -> JSON Extractor.

Esto te permite extraer el token del JSON de respuesta:

Names of created variables: token
JSON Path Expressions: $.token

9. Agregar los Listeners (para ver los resultados)
Haz clic derecho en Thread Group -> Add -> Listener.

Summary Report: Para ver las métricas generales de la prueba.
View Results Tree: Para ver el resultado de cada petición (útil para depurar).

Con estos pasos, tendrás un plan de prueba completo y funcional en JMeter.
-
