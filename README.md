# Portafolio - Victor Olivares (viktorolivares.github.io)

Mi sitio web y CV profesional desarrollado como Single Page Application (SPA) con **React 19**, **Vite**, **React Router 8** y **Tailwind CSS 4**.

---

## 🛠️ Tecnologías y Stack

- **React 19**
- **Vite 8**
- **React Router 8** (con soporte para enrutamiento SPA y URLs limpias)
- **Tailwind CSS 4**
- **Framer Motion** & **Three.js / React Three Fiber**

---

## 💻 Desarrollo Local

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar el servidor de desarrollo
```bash
npm run dev
```

### 3. Generar build de producción
```bash
npm run build
```

---

## ⚙️ Configuración Única Requerida en GitHub.com

Si ves el error **"404 - There isn't a GitHub Pages site here"**, es porque debes activar GitHub Pages en la configuración de tu repositorio en GitHub:

1. Ingresa a tu repositorio: **[github.com/viktorolivares/viktorolivares.github.io](https://github.com/viktorolivares/viktorolivares.github.io)**.
2. Haz clic en **Settings** (Configuración) ⚙️ -> menú izquierdo **Pages**.
3. En la sección **Build and deployment**:
   - **Si usas `npm run deploy`**:
     - **Source**: Selecciona `Deploy from a branch`.
     - **Branch**: Selecciona la rama **`gh-pages`** y la carpeta **`/ (root)`**.
     - Presiona **Save**.
   - **Si usas GitHub Actions**:
     - **Source**: Selecciona **`GitHub Actions`**.
4. Guarda los cambios y espera 1 a 2 minutos mientras GitHub activa el sitio web.

---

## 🚀 Paso a Paso para Desplegar

### Opción A: Despliegue Manual con `npm run deploy`

Para compilar y publicar directamente a la rama `gh-pages`:

```bash
npm run deploy
```

#### ¿Qué ejecuta este comando?
1. `npm run build` (compila la app en `dist/` incluyendo `404.html`, `index.html` y `.nojekyll`).
2. `gh-pages -d dist` (publica el contenido de `dist/` en la rama `gh-pages`).

---

### Opción B: Despliegue Automático con GitHub Actions (CI/CD)

El proyecto incluye la configuración en [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

1. Configura el **Source** en GitHub Pages como **GitHub Actions** (ver sección de configuración previa).
2. Haz `git push` de tus cambios a la rama `main`:
   ```bash
   git add .
   git commit -m "feat: deploy to github pages"
   git push origin main
   ```

---

## 🔍 Configuración SPA y URLs Limpias en GitHub Pages

Este proyecto utiliza el patrón estandarizado de redirección 404 para aplicaciones SPA en GitHub Pages:
- **`public/.nojekyll`**: Evita que GitHub Pages ignore archivos o carpetas al compilar.
- **`public/404.html`**: Captura cualquier ruta que no sea un archivo físico (ej. `/cv/v1`) y redirige hacia la raíz con un parámetro de consulta (`/?p=cv%2Fv1`).
- **`index.html`**: En la cabecera `<head>`, restaura la URL limpia original en el historial antes de que React Router monte la aplicación.
- **`BrowserRouter`**: Permite recargar la página (F5) o acceder directamente a cualquier ruta (`/cv/v1`, `/cv/v2`) sin obtener errores 404 ni perder el formato de URL limpia (sin hash `#`).