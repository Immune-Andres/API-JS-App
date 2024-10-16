# API JS App

Este proyecto implementa una API en JavaScript que consume la API pública de OpenWeather y contiene vulnerabilidades intencionales para su análisis con SonarQube.

## Funcionalidades
- Consultar el clima en una ciudad específica usando la API de OpenWeather.

La aplicación en JavaScript contiene las siguientes vulnerabilidades:

1. **Cross-Site Scripting (XSS)**:
   - **Descripción**: Permite la ejecución de scripts maliciosos en el navegador del usuario.
   - **Ruta**: `/greet?name=<script>alert('XSS')</script>`
   - **Exploit**: Inyectar código JavaScript en el nombre para ejecutar alertas o realizar ataques de phishing.

2. **Server-Side Request Forgery (SSRF)**:
   - **Descripción**: Permite que un atacante realice solicitudes a servicios internos del servidor.
   - **Ruta**: `/fetch?url=<url_insegura>`
   - **Exploit**: Acceder a `/fetch?url=http://127.0.0.1:3000` para realizar solicitudes internas.

3. **Inyección de Código (Code Injection)**:
   - **Descripción**: Permite la ejecución de código JavaScript arbitrario en el servidor.
   - **Ruta**: `/calculate?formula=<expresión>`
   - **Exploit**: Acceder a `/calculate?formula=process.exit()` para cerrar el servidor.

4. **Inyección de Cabeceras HTTP (HTTP Header Injection)**:
   - **Descripción**: Permite manipular cabeceras HTTP y redirigir a los usuarios a URLs maliciosas.
   - **Ruta**: `/redirect?url=<url>`
   - **Exploit**: Acceder a `/redirect?url=http://malicious.com` para redirigir a un sitio malicioso.

5. **Almacenamiento Inseguro en `localStorage`**:
   - **Descripción**: Almacena datos sensibles sin encriptar en `localStorage`, lo que puede ser accesible a atacantes.
   - **Ruta**: Almacenamiento en la ruta `/login`.
   - **Exploit**: Un atacante puede ejecutar `localStorage.getItem('authToken')` en la consola del navegador para obtener el token almacenado.

---

## Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Immune-Andres/API-JS-App.git
2. Instalar dependencias:
   ```bash
   npm install
3. Ejecutar el proyecto:
   ```bash
   node index.js
