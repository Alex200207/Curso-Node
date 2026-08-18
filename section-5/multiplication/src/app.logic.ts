import fs from 'fs';
import { yarg } from './config/plugins/args.plugin.js';

const { b, l, show } = yarg;

let ouputMessge = '';
const base = b;
const limit = l;
const header = `
=============================
      Tabla del ${base} 
=============================\n
`;

for (let i = 1; i <= limit; i++) {
  ouputMessge += `${base} x ${i} = ${base * i}\n `;
}

ouputMessge = header + ouputMessge;

if (show) {
  console.log(ouputMessge);
}

const ouputPath = `outputs`;

// crear folder y los crea d forma recursiva
fs.mkdirSync(ouputPath, { recursive: true });
fs.writeFileSync(`${ouputPath}/tabla-${base}.txt`, ouputMessge);

console.log('file created');
