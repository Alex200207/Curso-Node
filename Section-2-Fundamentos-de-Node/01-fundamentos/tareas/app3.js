const fs = require('fs');

const content = fs.readFileSync('../README.md', 'utf-8');

const wordCount = content.split(' ');

console.log('Palabras', wordCount.length);

// Tareas contar la cantidad de palabras react


const reactCount2 = wordCount.filter(w => w.toLowerCase().includes('react')).length

const reactCount = content.match(/react/gi).length;

console.log('cantidad de palabras react con expresion regular', reactCount);
console.log('cantidad de palabras react filter', reactCount2);
