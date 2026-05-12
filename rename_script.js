const fs = require('fs');

try {
    let content = fs.readFileSync('index.html', 'utf8');

    // Replace JSON-LD image with %20
    content = content.replace(/Yeiny%20fotógrafa%201\.jpg/g, 'Yeiny-fotógrafa-1.jpg');
    
    // Process the file to replace spaces with hyphens inside public/assets/ paths
    content = content.replace(/(['"`])(\.\/public\/assets\/.*?)(['"`])/g, (match, prefix, path, suffix) => {
        return prefix + path.replace(/ /g, '-') + suffix;
    });

    fs.writeFileSync('index.html', content, 'utf8');
    console.log("Successfully replaced image paths in index.html");
} catch (e) {
    console.error("Error processing file:", e);
}
