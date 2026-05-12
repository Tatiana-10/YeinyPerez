import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = './public/assets/';
const quality = 80;

async function optimizeImages() {
  try {
    const files = fs.readdirSync(assetsDir);
    console.log(`Encontrados ${files.length} archivos en ${assetsDir}`);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const inputPath = path.join(assetsDir, file);
        const fileName = path.parse(file).name;
        const outputPath = path.join(assetsDir, `${fileName}.webp`);

        console.log(`Optimizando: ${file} -> ${fileName}.webp`);
        
        await sharp(inputPath)
          .webp({ quality })
          .toFile(outputPath);
          
        console.log(`✅ ¡Listo!`);
      }
    }
    console.log('\n--- Optimización completada con éxito ---');
  } catch (error) {
    console.error('Error durante la optimización:', error);
  }
}

optimizeImages();
