# Alejo López — Portafolio

Portafolio personal de Alejo López, desarrollado con React, React Router y Vite. El proyecto se publica en GitHub Pages y utiliza el dominio personalizado [alejo117.dev](https://alejo117.dev).

## Tecnologías principales

- React 18
- React Router 6
- Vite 7
- GitHub Pages

## Requisitos previos

Antes de comenzar, instala las siguientes herramientas:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) 20.19 o superior
- npm, incluido con Node.js

Puedes comprobar las versiones instaladas ejecutando:

```bash
git --version
node --version
npm --version
```

Si `node --version` muestra una versión inferior a 20.19, actualiza Node.js antes de instalar las dependencias.

## Clonar e inicializar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/alejo117lp/portfolio.git
cd portfolio
```

### 2. Instalar las dependencias

Para instalar exactamente las versiones registradas en `package-lock.json`, ejecuta:

```bash
npm ci
```

`npm ci` es la opción recomendada después de clonar el repositorio. Si estás agregando, eliminando o actualizando dependencias, utiliza `npm install` en su lugar.

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local de la aplicación, normalmente:

```text
http://localhost:5173/
```

Abre esa dirección en el navegador. El servidor se actualiza automáticamente al guardar cambios en el código.

También puedes iniciar el mismo servidor mediante el alias:

```bash
npm start
```

Para detenerlo, presiona `Ctrl + C` en la terminal.

## Generar y comprobar el build de producción

Antes de publicar cambios, genera el sitio optimizado:

```bash
npm run build
```

Este comando:

1. Compila y optimiza la aplicación con Vite.
2. Guarda el resultado en la carpeta `build/`.
3. Copia `build/index.html` como `build/404.html` para que las rutas de React Router funcionen al acceder directamente desde GitHub Pages.

La carpeta `build/` es generada automáticamente y no debe agregarse manualmente al repositorio.

Para revisar localmente el resultado de producción:

```bash
npm run preview
```

Vite mostrará una dirección de previsualización, normalmente `http://localhost:4173/`.

## Publicar el sitio en GitHub Pages

El despliegue utiliza el paquete `gh-pages`. El código fuente permanece en la rama `main` y los archivos compilados se publican en la rama `gh-pages`.

### Despliegue habitual

1. Confirma que estás en la rama principal y que tienes los últimos cambios:

   ```bash
   git checkout main
   git pull origin main
   ```

2. Instala las dependencias del lockfile:

   ```bash
   npm ci
   ```

3. Comprueba el build localmente:

   ```bash
   npm run build
   ```

4. Guarda y sube los cambios del código fuente:

   ```bash
   git add .
   git commit -m "Descripción de los cambios"
   git push origin main
   ```

5. Publica el build:

   ```bash
   npm run deploy
   ```

El script `deploy` ejecuta automáticamente `npm run build` mediante `predeploy` y después envía el contenido de `build/` a la rama `gh-pages`.

La publicación puede tardar algunos minutos en verse reflejada en [alejo117.dev](https://alejo117.dev).

### Configuración inicial de GitHub Pages

Esta configuración solo es necesaria al preparar el repositorio por primera vez o si GitHub Pages fue desactivado:

1. Abre el repositorio en GitHub.
2. Ve a **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Selecciona la rama `gh-pages` y la carpeta `/ (root)`.
5. Guarda la configuración.
6. Verifica que el dominio personalizado sea `alejo117.dev` y activa **Enforce HTTPS** cuando GitHub lo permita.

El archivo `public/CNAME` contiene el dominio personalizado. Vite lo copia al build y `gh-pages` lo publica junto con el sitio. No elimines este archivo mientras se utilice `alejo117.dev`.

El proveedor DNS del dominio también debe apuntar a GitHub Pages. Si el dominio deja de funcionar, revisa tanto los registros DNS como la sección **Settings → Pages** del repositorio.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo de Vite. |
| `npm start` | Alias de `npm run dev`. |
| `npm run build` | Genera el sitio optimizado en `build/`. |
| `npm run preview` | Sirve localmente el build de producción. |
| `npm run deploy` | Genera y publica el sitio en la rama `gh-pages`. |

## Estructura principal

```text
portfolio/
├── public/             # Archivos públicos, manifest, CNAME e imágenes estáticas
├── src/
│   ├── assets/         # Imágenes importadas por React
│   ├── components/     # Componentes reutilizables
│   ├── context/        # Contextos de React
│   ├── hooks/          # Hooks y componentes auxiliares
│   └── pages/          # Páginas y vistas del portafolio
├── index.html          # Documento HTML de entrada de Vite
├── package.json        # Dependencias y scripts
└── vite.config.js      # Configuración de Vite y del build
```

## Variables de entorno

Actualmente el proyecto no necesita variables de entorno para ejecutarse. Si se agregan en el futuro, Vite solo expone al navegador las variables cuyo nombre comienza por `VITE_`.

Ejemplo en un archivo `.env.local`:

```env
VITE_API_URL=https://api.example.com
```

Uso desde el código:

```js
const apiUrl = import.meta.env.VITE_API_URL;
```

Los archivos `.env.local` están ignorados por Git. Nunca guardes contraseñas, tokens ni secretos privados en variables que empiecen por `VITE_`, porque su contenido queda incluido en el código del navegador.

## Solución de problemas

### El comando `vite` no existe

Instala primero las dependencias:

```bash
npm ci
```

### La versión de Node.js no es compatible

Comprueba la versión con `node --version` y actualiza a Node.js 20.19 o superior. Después vuelve a ejecutar `npm ci`.

### El puerto 5173 está ocupado

Vite intentará utilizar otro puerto automáticamente. También puedes seleccionar uno manualmente:

```bash
npm run dev -- --port 3000
```

### Una ruta muestra 404 después de publicarla

Ejecuta nuevamente `npm run deploy` y confirma que `build/404.html` fue generado. Revisa además que GitHub Pages esté sirviendo la rama `gh-pages` desde `/ (root)`.

### Los cambios publicados no aparecen

Espera unos minutos y actualiza el navegador sin caché. Confirma en GitHub que la rama `gh-pages` recibió un commit nuevo y que no hay errores en **Settings → Pages**.

### El despliegue solicita autenticación

Verifica que tu cuenta tenga permisos de escritura sobre el repositorio y que Git pueda autenticarse con GitHub. Para remotos HTTPS puedes utilizar Git Credential Manager o iniciar sesión con GitHub CLI.

## Flujo rápido después de clonar

```bash
git clone https://github.com/alejo117lp/portfolio.git
cd portfolio
npm ci
npm run dev
```

## Flujo rápido para publicar

```bash
git checkout main
git pull origin main
npm ci
npm run build
git add .
git commit -m "Actualizar portafolio"
git push origin main
npm run deploy
```
