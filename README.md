# API JS App

Este proyecto implementa una API en JavaScript que consume la API pública de OpenWeather y contiene vulnerabilidades intencionales para su análisis con SonarQube.

## Funcionalidades
- Consultar el clima en una ciudad específica usando la API de OpenWeather.

## Vulnerabilidades
- **Exposición de claves API**: La clave de la API está almacenada directamente en el código.

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
