# Proyecto Golden 🏆  
Este proyecto incluye tanto el **frontend** como el **backend** para la gestión de publicaciones.  

![Java](https://img.shields.io/badge/Java-17-orange?style=for-the-badge&logo=openjdk)  
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.1-green?style=for-the-badge&logo=springboot)  
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-brightgreen?style=for-the-badge&logo=mongodb)  
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)  
![Node.js](https://img.shields.io/badge/Node.js-18-green?style=for-the-badge&logo=nodedotjs)  

---

## Descripción 📖  

Desarrollado con **Spring Boot** para el backend y **React** para el frontend. Proporciona una solución para:  
- **Gestión de publicaciones.**  
- **Consulta y búsqueda de publicaciones.**  
- **Visualización y análisis de datos en tiempo real.**  

---

## Configuración inicial ⚙️  

### Requisitos previos 🛠️  
- **Java 17 o superior**  
- **Spring Boot 3.x**  
- **MongoDB 6.x**  
- **Node.js 18 o superior**  
- **NPM 8.x**  

---

### Configuración del backend  

1. Edita el archivo `application.properties` ubicado en `src/main/resources/`:  

   ```properties
   spring.application.name=golden
   spring.data.mongodb.host=tu_ip
   spring.data.mongodb.port=27017
   spring.data.mongodb.database=testGolden
   ```

2. Compila y ejecuta el backend:  

   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

El backend estará disponible en `http://localhost:8080/api`.  

---

### Configuración del frontend  

1. Navega al directorio del frontend:  

   ```bash
   cd frontend
   ```

2. Instala las dependencias:  

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:  

   ```bash
   npm start
   ```

El frontend estará disponible en `http://localhost:3000`.  

---



### Backend 🌐  

1. **Obtener todas las publicaciones**  
   **`GET /post`**  
   Parámetros: `page`, `size`  

2. **Buscar publicaciones por texto**  
   **`GET /post/search`**  
   Parámetros: `q`, `page`, `size`  

3. **Obtener detalles de una publicación por ID**  
   **`GET /post/{id}`**  
   Parámetro: `id`  

---

### Frontend 💻  

- **Visualización interactiva** de las publicaciones en tiempo real.  
- **Filtros** para búsquedas personalizadas.  

---

## Ejemplo de ejecución 💻  

1. Clona el repositorio:  

   ```bash
   git clone https://github.com/tu_usuario/golden.git
   cd golden
   ```

2. Configura y ejecuta el backend y frontend siguiendo las instrucciones anteriores.  

---

## Contacto ✉️  

Creador: **Andrés**  
Correo: [andresroman45678@gmail.com](mailto:andresroman45678@gmail.com)  

¡Gracias Golden! 🎉