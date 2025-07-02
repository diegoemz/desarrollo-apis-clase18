# Uso de Caché con Redis en NestJS

Este proyecto incluye una serie de ejercicios prácticos diseñados para aplicar el uso de caché utilizando Redis en una aplicación desarrollada con NestJS. Cada ejercicio incrementa su nivel de complejidad y aborda diferentes escenarios donde la caché puede mejorar el rendimiento del sistema.

---

## Ejercicio 1 – Nivel Básico

**Descripción:**  
Se creó un endpoint `/frases` que devuelve una lista de frases motivacionales.

- La primera solicitud simula una operación costosa utilizando `setTimeout`.
- Las solicitudes siguientes devuelven la respuesta desde Redis, donde se almacena en caché durante **15 segundos**.

---

## Ejercicio 2 – Nivel Intermedio

**Descripción:**  
Se desarrolló un endpoint `/peliculas/:año` que obtiene películas por año desde la API pública de [The Movie Database (TMDB)](https://developer.themoviedb.org/).

- Los resultados de cada año consultado se almacenan en Redis usando una **clave dinámica**.
- El tiempo de vida de cada resultado (TTL) es de **30 segundos**.

---

## Ejercicio 3 – Nivel Avanzado

**Descripción:**  
Se creó una entidad `Product` con los campos `id`, `name` y `price`, y un endpoint `/products` que consulta los productos desde PostgreSQL.

- Para mejorar el rendimiento, los resultados se almacenan en Redis durante **20 segundos**, evitando así consultas repetidas innecesarias a la base de datos.
- La base de datos contiene **al menos 1,000 productos** como muestra.

---

## Integrantes del equipo

- Camila Melara  
- Daniela Pineda  
- Diego Morales  
- Génesis Parada  
- Ximena Zelaya
