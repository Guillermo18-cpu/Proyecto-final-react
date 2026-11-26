# [NOMBRE DEL PROYECTO]

**Proyecto final — Desarrollo de aplicaciones asistido con inteligencia artificial**  
**Institución:** Institución Universitaria Antonio José Camacho  
**Asignatura / grupo:** 711
**Integrantes:** Juan Guillermo Sanchez y Samuel Beltran Davila  
**Docente:** Pablo Julian Salamanca

> **Estado de esta documentación:** plantilla elaborada a partir de los dos documentos de clase. **Antes de la entrega, reemplazar los campos entre corchetes y verificar en el código cada funcionalidad descrita.** No presentar como implementados requisitos que aún no funcionan.

## Tabla de contenido

1. [Descripción del proyecto](#1-descripción-del-proyecto)
2. [Objetivos y alcance](#2-objetivos-y-alcance)
3. [Tecnologías y herramientas utilizadas](#3-tecnologías-y-herramientas-utilizadas)
4. [Arquitectura y organización del código](#4-arquitectura-y-organización-del-código)
5. [Módulos y funcionalidades](#5-módulos-y-funcionalidades)
6. [Gestión de estado, eventos y asincronía](#6-gestión-de-estado-eventos-y-asincronía)
7. [Integración con inteligencia artificial](#7-integración-con-inteligencia-artificial)
8. [Requisitos previos e instalación](#8-requisitos-previos-e-instalación)
9. [Configuración y ejecución](#9-configuración-y-ejecución)
10. [Guía de uso](#10-guía-de-uso)
11. [Validaciones y manejo de errores](#11-validaciones-y-manejo-de-errores)
12. [Pruebas y criterios de aceptación](#12-pruebas-y-criterios-de-aceptación)
13. [Evidencias del funcionamiento](#13-evidencias-del-funcionamiento)
14. [Limitaciones y mejoras futuras](#14-limitaciones-y-mejoras-futuras)
15. [Autores y referencias](#15-autores-y-referencias)

## 1. Descripción del proyecto

**[NOMBRE DEL PROYECTO]** es una aplicación web desarrollada con React orientada a **[DESCRIBIR PROBLEMA REAL, PÚBLICO OBJETIVO Y SOLUCIÓN]**. El sistema organiza la información del perfil, los proyectos o productos, las habilidades y la propuesta de valor, e incorpora una experiencia de conversación conectada con un modelo de inteligencia artificial.

**Necesidad que resuelve:** [PROBLEMA CONCRETO].  
**Usuarios principales:** [TIPO DE USUARIO].  
**Resultado que ofrece:** [BENEFICIO Y VALOR DIFERENCIAL].

> **Importante:** este párrafo resume el *alcance solicitado*. Adaptar la descripción final al funcionamiento real que demuestra el repositorio.

## 2. Objetivos y alcance

### Objetivo general

[REDACTAR EL OBJETIVO GENERAL DEL PROYECTO ESPECÍFICO, NO UNA FRASE GENÉRICA.]

### Objetivos específicos

- [OBJETIVO ESPECÍFICO 1].
- [OBJETIVO ESPECÍFICO 2].
- [OBJETIVO ESPECÍFICO 3].

### Alcance funcional establecido en la actividad

El docente solicita cinco vistas principales:

1. Presentación y biografía.
2. Listado de proyectos o productos.
3. Stack tecnológico y estudios.
4. Chat de conversación y formulario de contacto.
5. Propuesta de valor.

**Línea de desarrollo seleccionada:** [PORTAFOLIO INDIVIDUAL / ÁREA DE NEGOCIO ESCOGIDA].

## 3. Tecnologías y herramientas utilizadas

Completar esta tabla solamente con tecnologías efectivamente presentes en `package.json`, en el código o en el proceso de desarrollo.

| Tecnología o herramienta | Uso concreto en el proyecto | Evidencia |
| --- | --- | --- |
| React | [COMPONENTES Y VISTAS IMPLEMENTADOS] | [RUTA DEL CÓDIGO] |
| JavaScript | [FUNCIONES, EVENTOS Y MANEJO DE DATOS] | [RUTA DEL CÓDIGO] |
| HTML / JSX | [ESTRUCTURA DE LA INTERFAZ] | [RUTA DEL CÓDIGO] |
| CSS / [OTRA LIBRERÍA] | [ESTILOS Y DISEÑO RESPONSIVO] | [RUTA DEL CÓDIGO] |
| [HERRAMIENTA DE IA 1] | [EN QUÉ SE UTILIZÓ] | [EVIDENCIA] |
| [HERRAMIENTA DE IA 2] | [EN QUÉ SE UTILIZÓ] | [EVIDENCIA] |
| [MODELO / SERVICIO DE IA] | [PROVEEDOR, MODELO E INTEGRACIÓN API] | [RUTA DE INTEGRACIÓN] |
| [OTRAS DEPENDENCIAS REALES] | [USO] | [PACKAGE.JSON] |

## 4. Arquitectura y organización del código

La aplicación emplea una organización por **[VISTAS / COMPONENTES / SERVICIOS / CONTEXTOS, SEGÚN EL REPOSITORIO]**.

| Elemento | Ubicación real | Responsabilidad |
| --- | --- | --- |
| Punto de entrada | `[RUTA]` | Inicializar la aplicación y montar React. |
| Componente principal | `[RUTA]` | [RESPONSABILIDAD REAL]. |
| Vista de inicio | `[RUTA]` | Presentación y biografía. |
| Vista de proyectos | `[RUTA]` | Listado, filtros, paginación y detalle. |
| Vista de stack | `[RUTA]` | Tecnologías, estudios y experiencias. |
| Vista de chat/contacto | `[RUTA]` | Mensajería y formulario. |
| Vista de propuesta de valor | `[RUTA]` | Contenido diferenciador de la propuesta. |
| Componentes reutilizables | `[RUTA]` | [TARJETAS, BOTONES, SIDEBAR, ETC., SI EXISTEN]. |
| Contexto global | `[RUTA / NO APLICA]` | [ESTADO COMPARTIDO CON `useContext`, SI EXISTE]. |
| Servicio de IA | `[RUTA]` | Solicitudes y respuestas del modelo. |
| Datos o fuente de proyectos | `[RUTA / FUENTE]` | [ARREGLO, JSON, API, ETC.]. |

**Flujo de datos:** [DESCRIBIR CÓMO LAS VISTAS OBTIENEN DATOS, QUÉ COMPONENTES RECIBEN `props` Y DÓNDE SE GUARDA EL ESTADO].

## 5. Módulos y funcionalidades

Las siguientes subsecciones reproducen los criterios funcionales del proyecto final. Para la entrega definitiva, explicar **qué se hizo, cómo interactúa el usuario y en qué archivo está implementado**.

### 5.1. Presentación y biografía

**Propósito:** presentar el perfil y facilitar el acceso a las secciones de la aplicación.

**Criterios solicitados:**

- Banner o sección principal de presentación.
- Header y barra de navegación (`navbar`) hacia las demás secciones.
- Título, imagen representativa y descripción del perfil.
- Biografía con **mínimo tres elementos**.
- **Mínimo dos redes sociales** visibles.
- Dos botones de llamada a la acción: **ver proyectos** y **contacto**.
- Footer con información de resumen.

**Funcionamiento implementado:** [EXPLICAR LA NAVEGACIÓN, LOS BOTONES Y LA INFORMACIÓN REAL QUE SE MUESTRA].  
**Componentes involucrados:** `[NOMBRES / RUTAS REALES]`.

### 5.2. Proyectos o productos

**Propósito:** permitir explorar los elementos disponibles y consultar la información completa de uno seleccionado.

**Criterios solicitados:**

- Mostrar los **primeros 10 elementos** al cargar la vista.
- Paginación funcional de **10 elementos por página**.
- Cada elemento se presenta en una tarjeta con **cinco atributos obligatorios**.
- Cada tarjeta incluye una acción **Ver detalle**.
- El detalle se despliega en un **sidebar** y muestra los **ocho atributos** del elemento seleccionado.
- Permitir filtros por **dos atributos diferentes**.
- **Al menos uno de los filtros debe ser un selector**.
- Incluir los botones **Filtrar** y **Limpiar filtros**.

**Origen de los datos:** [ARREGLO LOCAL / JSON / API / OTRA FUENTE].  
**Cinco atributos de la tarjeta:** [ATRIBUTO 1], [ATRIBUTO 2], [ATRIBUTO 3], [ATRIBUTO 4], [ATRIBUTO 5].  
**Ocho atributos del detalle:** [ATRIBUTO 1], [ATRIBUTO 2], [ATRIBUTO 3], [ATRIBUTO 4], [ATRIBUTO 5], [ATRIBUTO 6], [ATRIBUTO 7], [ATRIBUTO 8].  
**Primer filtro:** [ATRIBUTO Y TIPO DE CONTROL].  
**Segundo filtro:** [ATRIBUTO Y TIPO DE CONTROL].

**Funcionamiento implementado:** [EXPLICAR QUÉ OCURRE AL FILTRAR, CAMBIAR DE PÁGINA, LIMPIAR FILTROS, SELECCIONAR UN PROYECTO Y CERRAR EL SIDEBAR].  
**Componentes involucrados:** `[NOMBRES / RUTAS REALES]`.

> El enunciado no define los nombres específicos de los 5 y los 8 atributos. Deben tomarse del modelo de datos real del proyecto; no inventarlos.

### 5.3. Stack tecnológico, estudios y experiencias

**Propósito:** presentar las competencias técnicas, herramientas y trayectoria del perfil.

**Criterios solicitados:**

- Título de la página y descripción del stack utilizado.
- **Mínimo tres tarjetas de tecnologías** con imágenes.
- Presentar **mínimo dos herramientas de IA** utilizadas.
- Timeline con **mínimo tres experiencias laborales**.
- Incluir estudios y certificaciones cuando correspondan con la vista propuesta.

**Tecnologías expuestas:** [LISTA REAL].  
**Herramientas de IA expuestas:** [HERRAMIENTA 1], [HERRAMIENTA 2].  
**Experiencias del timeline:** [EXPERIENCIA 1], [EXPERIENCIA 2], [EXPERIENCIA 3].  
**Componentes involucrados:** `[NOMBRES / RUTAS REALES]`.

### 5.4. Chat de conversación y formulario de contacto

**Propósito:** permitir interacción con un modelo de IA y capturar solicitudes de contacto o nuevos proyectos.

**Criterios solicitados para el chat:**

- Conexión por **API con un modelo de inteligencia artificial**.
- Componente para enviar mensajes y mostrar las respuestas.
- Almacenamiento del **historial de conversación**.

**Criterios solicitados para el formulario:**

| Campo | Restricción indicada |
| --- | --- |
| Nombre | Obligatorio; solo letras; máximo **20 caracteres**. |
| Apellidos | Obligatorio; solo letras; máximo **20 caracteres**. |
| Correo electrónico | Obligatorio; formato de email válido. |
| Teléfono | Obligatorio; solo números. |
| Descripción del proyecto | Obligatoria; campo de texto multilínea. |

El formulario también debe disponer de un botón para enviar la información y un mensaje de confirmación después del diligenciamiento válido.

**Proveedor y modelo de IA:** [NOMBRE REAL].  
**Funcionamiento del chat:** [DESCRIBIR ENVÍO, INDICADOR DE CARGA, RESPUESTA Y ERRORES].  
**Almacenamiento del historial:** [ESTADO, LOCALSTORAGE, BASE DE DATOS U OTRO MECANISMO REAL].  
**Destino de la información del formulario:** [EXPLICAR SI SE GUARDA, ENVÍA O SOLO SE CONFIRMA EN LA INTERFAZ].  
**Componentes y servicio involucrados:** `[NOMBRES / RUTAS REALES]`.

### 5.5. Propuesta de valor

**Propósito:** mostrar el aporte diferencial de **[NOMBRE DEL PROYECTO]** para **[USUARIOS OBJETIVO]**.

**Criterios solicitados:**

- Título de la vista.
- Sección principal con **carrusel informativo**.
- **Segunda sección** de contenido libre relacionado con la propuesta de valor.
- Footer.

**Sección principal:** [EXPLICAR QUÉ INFORMA EL CARRUSEL Y CÓMO FUNCIONA].  
**Sección secundaria:** [EXPLICAR EL BENEFICIO O CONTENIDO].  
**Componentes involucrados:** `[NOMBRES / RUTAS REALES]`.

## 6. Gestión de estado, eventos y asincronía

El proyecto se evalúa por la aplicación práctica de conceptos de JavaScript y React. Documentar **ejemplos realmente implementados**, indicando su ruta en el repositorio.

| Concepto solicitado | Uso concreto en este proyecto | Archivo o función |
| --- | --- | --- |
| Funciones de JavaScript | [FUNCIÓN Y RESULTADO] | `[RUTA]` |
| Arreglos y objetos | [MODELO DE DATOS / LISTADO] | `[RUTA]` |
| Eventos (`onClick`, `onChange`, `onSubmit`, etc.) | [ACCIÓN DEL USUARIO] | `[RUTA]` |
| Promesas / procesos asíncronos | [LLAMADA A API O CARGA ASÍNCRONA] | `[RUTA]` |
| Componentes React | [COMPONENTE REUTILIZABLE] | `[RUTA]` |
| `props` | [DATOS QUE RECIBE UN COMPONENTE] | `[RUTA]` |
| `useState` | [ESTADO DE FILTROS, PAGINACIÓN, FORMULARIO O CHAT] | `[RUTA]` |
| `useEffect` | [CARGA INICIAL O SINCRONIZACIÓN] | `[RUTA]` |
| `useContext` | [ESTADO COMPARTIDO ENTRE COMPONENTES] | `[RUTA]` |
| Ciclo de vida y limpieza | [EFECTO, DESMONTAJE O LIMPIEZA REALES] | `[RUTA]` |

**Ejemplo documentado de interacción:** [DESCRIBIR PASO A PASO UNA INTERACCIÓN REAL: EVENTO → ACTUALIZACIÓN DE ESTADO → CAMBIO EN LA INTERFAZ].

> No afirmar que se usa un hook o una promesa si el código no lo demuestra. Si falta alguno de los conceptos evaluados, es una tarea de implementación, no de redacción.

## 7. Integración con inteligencia artificial

### 7.1. Propósito de la integración

[EXPLICAR QUÉ NECESIDAD RESUELVE EL MODELO Y QUÉ TIPO DE RESPUESTAS PUEDE DAR.]

### 7.2. Modelo, API y flujo de conversación

- **Proveedor:** [PROVEEDOR REAL].
- **Modelo:** [NOMBRE / VERSIÓN EFECTIVAMENTE CONFIGURADA].
- **Método de conexión:** [SERVICIO / ENDPOINT / BACKEND, SIN EXPONER SECRETOS].
- **Entrada:** [CÓMO SE FORMA LA CONSULTA].
- **Salida:** [CÓMO SE PROCESA Y MUESTRA LA RESPUESTA].
- **Historial:** [DÓNDE SE CONSERVA Y POR CUÁNTO TIEMPO].
- **Errores y límites:** [COMPORTAMIENTO ANTE FALLOS DE RED, API O CUOTA].

### 7.3. Prompt engineering

[DESCRIBIR LAS INSTRUCCIONES O EL CONTEXTO QUE SE ENVÍA AL MODELO, POR QUÉ FUERON DISEÑADOS ASÍ Y CÓMO SE ORIENTA LA RESPUESTA. NO PUBLICAR DATOS PRIVADOS.]

### 7.4. Optimización de tokens

[INDICAR LAS MEDIDAS REALMENTE APLICADAS, COMO LIMITACIÓN DEL CONTEXTO O DEL HISTORIAL; SI NO EXISTEN, IDENTIFICARLAS COMO PENDIENTES.]

### 7.5. Seguridad de credenciales

No incluir tokens, claves API ni contraseñas en el README ni subir archivos `.env` privados al repositorio. [EXPLICAR CÓMO SE GESTIONAN LAS CREDENCIALES EN EL PROYECTO REAL; SI SE USA UNA API DE PAGO, VERIFICAR QUE LA CLAVE NO QUEDE EXPUESTA EN EL NAVEGADOR].

## 8. Requisitos previos e instalación

**Requisitos de ejecución:**

- [VERSIÓN DE NODE.JS VERIFICADA CON EL PROYECTO].
- [GESTOR DE PAQUETES Y VERSIÓN: npm, pnpm o yarn].
- Conexión a Internet para los servicios externos que utilice la aplicación.
- [CUENTA O CONFIGURACIÓN NECESARIA PARA LA API DE IA, SI APLICA].

**Instalación — ajustar estos comandos al repositorio real:**

```bash
git clone [URL_REAL_DEL_REPOSITORIO]
cd [CARPETA_REAL_DEL_PROYECTO]
npm install
```

Para inspeccionar los scripts disponibles en `package.json`:

```bash
npm run
```

## 9. Configuración y ejecución

1. Configurar [VARIABLES DE ENTORNO NECESARIAS]. Documentar únicamente los **nombres** de las variables y un ejemplo sin secretos.
2. Iniciar la aplicación con el **script existente** en `package.json`:

```bash
# Si el proyecto usa Vite y tiene el script "dev":
npm run dev

# Si utiliza otro sistema de ejecución, sustituir por su comando real.
```

3. Abrir la URL indicada por la terminal: `[URL LOCAL REAL]`.
4. Para generar una compilación de producción, usar `[COMANDO REAL, SI EXISTE]`.
5. Para ejecutar pruebas automatizadas, usar `[COMANDO REAL, SI EXISTE]`.

**Configuración de la API:** [INDICAR SI SE NECESITA BACKEND, CÓMO INICIARLO Y CÓMO SE ESTABLECE LA URL DEL SERVICIO].

> **Nota:** no ejecutar comandos inventados. Los scripts y las versiones definitivas deben copiarse del proyecto real.

## 10. Guía de uso

1. **Inicio:** acceder a la vista de presentación, revisar la biografía y utilizar la barra de navegación o los botones de acción.
2. **Proyectos:** explorar los elementos, avanzar por las páginas, seleccionar atributos de filtrado y presionar **Filtrar**. Utilizar **Limpiar filtros** para restablecer el listado.
3. **Detalle:** seleccionar **Ver detalle** en una tarjeta para consultar los ocho atributos en el sidebar.
4. **Stack:** revisar las tecnologías, las herramientas de IA, los estudios y las experiencias laborales.
5. **Chat:** escribir una consulta y enviar el mensaje; revisar la respuesta del modelo y el historial de la conversación.
6. **Contacto:** completar los cinco campos obligatorios y enviar la información; comprobar que se muestre la confirmación correspondiente.
7. **Propuesta de valor:** recorrer el carrusel y explorar las dos secciones principales.

> Los pasos anteriores describen la **experiencia exigida por el docente**. Antes de entregar, comprobar que cada interacción realmente se pueda realizar y ajustar la guía a la interfaz final.

## 11. Validaciones y manejo de errores

**Formulario de contacto:** [DESCRIBIR MENSAJES DE ERROR, VALIDACIÓN DE CAMPOS Y RESPUESTA DE ENVÍO IMPLEMENTADOS].

**Listado:** [EXPLICAR QUÉ OCURRE CUANDO NINGÚN ELEMENTO CUMPLE LOS FILTROS O UNA PÁGINA NO TIENE RESULTADOS].

**Chat:** [EXPLICAR LA RESPUESTA ANTE ERRORES DE CONEXIÓN, RESPUESTAS VACÍAS O SERVICIO INDISPONIBLE].

**Estados visuales:** [CARGA, VACÍO, ÉXITO Y ERROR, CUANDO EXISTAN].

## 12. Pruebas y criterios de aceptación

Marcar como **Verificado** solo después de ejecutar la aplicación y comprobar el resultado. Añadir evidencia o referencia de código en la última columna.

| ID | Prueba funcional | Estado | Evidencia |
| --- | --- | --- | --- |
| PF-01 | El inicio contiene banner, navbar, biografía de 3 elementos, 2 redes, 2 CTA y footer. | Pendiente | [CAPTURA / RUTA] |
| PF-02 | Al abrir proyectos se muestran 10 elementos en la primera página. | Pendiente | [CAPTURA / RUTA] |
| PF-03 | La paginación muestra los siguientes elementos correctamente. | Pendiente | [CAPTURA / RUTA] |
| PF-04 | Cada tarjeta presenta los cinco atributos definidos. | Pendiente | [CAPTURA / RUTA] |
| PF-05 | El sidebar abre el proyecto seleccionado y muestra sus ocho atributos. | Pendiente | [CAPTURA / RUTA] |
| PF-06 | Los dos filtros funcionan y uno es de tipo selector. | Pendiente | [CAPTURA / RUTA] |
| PF-07 | **Filtrar** y **Limpiar filtros** producen el resultado esperado. | Pendiente | [CAPTURA / RUTA] |
| PF-08 | Se muestran al menos 3 tarjetas de stack con imágenes. | Pendiente | [CAPTURA / RUTA] |
| PF-09 | Se muestran 2 herramientas de IA y 3 experiencias en timeline. | Pendiente | [CAPTURA / RUTA] |
| PF-10 | El chat envía un mensaje por API y recibe una respuesta del modelo. | Pendiente | [CAPTURA / RUTA] |
| PF-11 | El historial de conversación se almacena según la solución definida. | Pendiente | [CAPTURA / RUTA] |
| PF-12 | Nombre y apellidos admiten solo letras, con máximo 20 caracteres. | Pendiente | [CAPTURA / RUTA] |
| PF-13 | El formulario rechaza email no válido, teléfono no numérico y campos vacíos. | Pendiente | [CAPTURA / RUTA] |
| PF-14 | El formulario muestra un mensaje de confirmación cuando es válido. | Pendiente | [CAPTURA / RUTA] |
| PF-15 | La propuesta de valor contiene un carrusel, otra sección y footer. | Pendiente | [CAPTURA / RUTA] |
| PF-16 | La aplicación demuestra uso de props, eventos, estado, efectos y contexto. | Pendiente | [ARCHIVOS REALES] |
| PF-17 | La aplicación demuestra promesas / asincronía e integración de IA. | Pendiente | [ARCHIVOS REALES] |
| PF-18 | El README permite instalar, configurar, ejecutar y comprender cada módulo. | Pendiente | [VALIDACIÓN] |

## 13. Evidencias del funcionamiento

Incluir **capturas reales** del proyecto al terminar; no agregar enlaces a imágenes inexistentes.

| Evidencia | Qué debe mostrar | Archivo o enlace real |
| --- | --- | --- |
| Inicio | Presentación y biografía | [RUTA / URL] |
| Listado | Tarjetas y paginación | [RUTA / URL] |
| Filtros | Resultado de aplicar y limpiar filtros | [RUTA / URL] |
| Detalle | Sidebar con los 8 atributos | [RUTA / URL] |
| Stack | Tecnologías, IA y timeline | [RUTA / URL] |
| Chat | Solicitud, respuesta e historial | [RUTA / URL] |
| Contacto | Validación y confirmación | [RUTA / URL] |
| Valor | Carrusel y secciones | [RUTA / URL] |

## 14. Limitaciones y mejoras futuras

**Limitaciones actuales verificadas:** [ANOTAR SOLAMENTE LIMITACIONES REALES].

**Mejoras futuras propuestas:** [IDEAS QUE NO SE DEBEN CONFUNDIR CON CARACTERÍSTICAS YA DESARROLLADAS].

## 15. Autores y referencias

**Integrantes y responsabilidades**

| Integrante | Responsabilidad real |
| --- | --- |
| [NOMBRE 1] | [MÓDULOS / TAREAS] |
| [NOMBRE 2, SI EXISTE] | [MÓDULOS / TAREAS] |

**Material académico utilizado para definir el alcance:**

- *Proyecto Final – React con AI 711-2026*: requisitos funcionales, condiciones, entregables y rúbrica.
- *UseState in React-AI-2026-711* (Ing. Pablo Julián Salamanca): conceptos de componentes, props, eventos, estado y recordatorio del proyecto final.

**Licencia:** [LICENCIA REAL / INDICAR SI NO SE HA DEFINIDO].
