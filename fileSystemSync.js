
//------------------- Synchronous way -------------------
const fs = require('fs');
const txtIn = fs.readFileSync('./txt/input.txt', 'utf-8');//readFileSync es una funcion sincrona que permite leer archivos
console.log(txtIn);

const textOut = `This is what we know about the avocato: ${txtIn}.\nCreated on ${Date.now()}`;//Aca definimos el texto que queremos escribir en el archivo output.txt
fs.writeFileSync('./txt/output.txt', textOut);//WriteFileSync es una funcion sincrona que permite escribir archivos
console.log('File writen\n', textOut);


