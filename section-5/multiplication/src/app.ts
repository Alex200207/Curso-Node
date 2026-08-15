import fs from 'fs';

let ouputMessge = '';
const base = 5;
const header = `
=============================
      Tabla del ${base} 
=============================
`;

for (let i = 1; i <= 10; i++) {
  ouputMessge += `${base} x ${i} = ${base * i}\n `;
}

ouputMessge = header + ouputMessge;

console.log(ouputMessge);

const ouputPath = `outputs`;

// crear folder y los crea d forma recursiva
fs.mkdirSync(ouputPath, {recursive: true})
fs.writeFileSync(`${ouputPath}/tabla-${base}.txt`, ouputMessge);

console.log('file created');
