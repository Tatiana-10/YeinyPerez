# 📸 Guía de Mantenimiento - Yeiny Perez Fotografía

¡Hola, Yeiny! Esta guía está diseñada para que puedas cuidar y actualizar tu página web tú misma, sin necesidad de ser programadora. Aquí tienes todo lo que necesitas saber.

---

## 1. ¿Cómo ver mi página en mi computadora? (Modo Edición)

Para poder hacer cambios y verlos antes de publicarlos, necesitas preparar tu computadora:

1.  **Instala Node.js**: Descárgalo en [nodejs.org](https://nodejs.org/) (elige la versión "LTS"). Es el motor que hace que la web funcione localmente.
2.  **Abre la carpeta**: Abre la carpeta del proyecto en un editor de código (como Visual Studio Code).
3.  **Instala las herramientas**: Abre una terminal (como el Símbolo del sistema o PowerShell) dentro de la carpeta y escribe:
    ```bash
    npm install
    ```
    *(Esto solo se hace la primera vez o si mueves la carpeta a otra computadora).*
4.  **Arranca el modo prueba**: Escribe:
    ```bash
    npm run dev
    ```
    Te dará una dirección como `http://localhost:5173`. Ábrela en tu navegador y verás tu página en vivo mientras editas.

---

## 2. ¿Cómo actualizar los textos y precios?

La mayoría de la información está organizada en un solo lugar para que sea fácil de encontrar.

*   **Ruta del archivo**: `src/data/services.js`
*   **Qué puedes cambiar**:
    *   **Precios y Paquetes**: Busca el apartado `packages` dentro de cada servicio. Puedes cambiar los nombres de los paquetes y los detalles (como "3 horas de cobertura").
    *   **Descripciones**: Busca el texto que dice `description` y cámbialo por lo que prefieras.
    *   **Preguntas Frecuentes (FAQs)**: Al final del archivo verás las preguntas y respuestas.

> [!TIP]
> **Regla de oro**: Ten cuidado de no borrar las comas (`,`) o las llaves (`{ }`), ya que son las que mantienen el código ordenado.

---

## 3. ¿Cómo cambiar o agregar fotos?

Tus fotos están en la carpeta `public/assets`.

1.  **Agrega la foto**: Pega tu nueva imagen en `public/assets`.
2.  **Optimízala (Importante)**: Para que la web cargue rápido, he creado un script. Ejecútalo en la terminal con:
    ```bash
    node optimize-images.js
    ```
    Esto convertirá tus fotos pesadas a formato `.webp` (más ligero).
3.  **Regístrala**: En el archivo `src/data/services.js`, agrega el nombre de la foto (ejemplo: `/assets/mi-nueva-foto.webp`) en la lista de `images` del servicio correspondiente.

---

## 4. ¿Cómo publicar los cambios en Internet? (GitHub)

Tu página está guardada en GitHub. Para enviar tus cambios a la nube:

1.  **Prepara los archivos**: En la terminal, escribe:
    ```bash
    git add .
    ```
2.  **Ponle un nombre a tu cambio**:
    ```bash
    git commit -m "Actualicé los precios de bodas"
    ```
3.  **Súbelo**:
    ```bash
    git push origin main
    ```
    *GitHub procesará los cambios y en un par de minutos tu web real se actualizará sola.*

---

## 5. ¿Cómo mover mi página de lugar?

### Si quieres mover la carpeta a otra computadora:
1.  Copia toda la carpeta **EXCEPTO** la carpeta `node_modules` (es muy pesada y se regenera).
2.  En la nueva computadora, sigue los pasos del punto **1** (`npm install` y `npm run dev`).

### Si quieres cambiar de hosting (ej. dejar GitHub y usar Hostinger/Bluehost):
1.  En la terminal, escribe:
    ```bash
    npm run build
    ```
2.  Esto creará una carpeta llamada `dist`.
3.  Esa carpeta `dist` contiene la versión final de tu web. Solo tienes que subir el contenido de `dist` a tu nuevo servidor mediante FTP o el panel de control de tu nuevo hosting.

---

## 6. Soporte Rápido
*   **Si algo se rompe**: No te asustes. Si usas GitHub, siempre puedes volver a la versión anterior.
*   **Iconos**: Uso la librería `Lucide React`. Si quieres cambiar un icono, busca nombres en [lucide.dev](https://lucide.dev/).

¡Tu web es tuya! Tienes el control total para que crezca junto con tu talento. 📸✨
