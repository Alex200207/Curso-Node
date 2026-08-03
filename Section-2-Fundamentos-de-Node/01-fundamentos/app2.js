// paquetes incluidos
const fs = require('fs');

// el utf-8 es para que nos devuelva el contenido en texto y no en binario

const data = fs.readFileSync('README.md', 'utf-8');

// case insensitive es para que no distinga entre mayusculas y minusculas
const newData = data.replace(/React/gi, 'Angular');


// crear nuevo archivo con el contenido modificado 
fs.writeFileSync('README-Angular.md', newData, 'utf-8');
