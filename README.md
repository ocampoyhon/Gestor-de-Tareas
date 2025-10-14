# 📚 Mis Tareas Escolares - Organizador de Actividades

Una aplicación web minimalista y moderna diseñada para ayudar a estudiantes a organizar, priorizar y dar seguimiento a sus tareas, exámenes, y proyectos escolares de manera eficiente.

## 🚀 Requisitos Funcionales (Funcionalidades)

El sistema de gestión de tareas escolares ofrece las siguientes capacidades clave:

### 1. Gestión de Tareas
* **Creación de Tareas:** Permite al usuario añadir nuevas tareas especificando:
    * Nombre de la tarea (con validación para solo letras y números).
    * Tipo de actividad (`Tarea/Deber`, `Examen/Prueba`, `Proyecto/Trabajo`, `Lectura`, `Estudio/Repasar`, `Exposición`).
    * Materia o Categoría (con validación para solo letras).
    * Fecha de entrega.
* **Listado de Tareas:** Muestra todas las tareas en una lista organizada.
* **Persistencia de Datos:** Las tareas se guardan y cargan automáticamente usando el almacenamiento local del navegador (`localStorage`).
* **Priorización y Orden:** Las tareas se ordenan visualmente por su tipo (Examen, Exposición, Proyecto, Tarea, etc.) para ayudar a la priorización.
* **Feedback Visual:** Las tareas completadas se marcan visualmente con una línea tachada y un fondo de color atenuado.

### 2. Interacción y Estado
* **Marcar Estado:** Permite al usuario marcar una tarea como **Completada** o **Pendiente** con un solo clic.
* **Eliminación:** Permite eliminar tareas de la lista con una ventana de confirmación (`confirm`).
* **Estado Vacío (`Empty State`):** Muestra mensajes de ánimo y orientación claros cuando la lista está vacía o un filtro no arroja resultados.

### 3. Filtros y Búsqueda
* **Filtros Rápidos:** El usuario puede alternar fácilmente entre ver:
    * **Todas** las tareas.
    * Tareas **Completadas** (`✅`).
    * Tareas **Pendientes** (`⏳`).

### 4. Estadísticas y Progreso
* **Barra de Progreso:** Muestra visualmente el porcentaje de tareas completadas respecto al total.
* **Resumen Numérico:** Muestra contadores actualizados de:
    * **Total** de tareas creadas.
    * Tareas **Por hacer** (Pendientes).
    * Tareas **Hechas** (Completadas).

### 5. Interfaz de Usuario (UI)
* **Diseño Responsivo:** Interfaz optimizada para su visualización en diferentes tamaños de pantalla (móvil y escritorio).
* **Estética Moderna:** Utiliza gradientes, sombras suaves y animaciones (`fadeIn`, `slideIn`) para una experiencia de usuario agradable.
* **Etiquetas Claras:** Uso de **Badges** (insignias) de color para identificar rápidamente el tipo de tarea y la materia.

## 💻 Tecnología

* **HTML5** (Estructura)
* **CSS3** (Estilos y Diseño)
* **JavaScript (ES6+)** (Lógica y Manipulación del DOM)

## 🧑‍💻 Autor

Este sistema fue desarrollado íntegramente por:

**Yhon Ocampo**

