//------------------- Asynchronous way -------------------
const fs = require('fs');//Aca estamos importando el modulo fs
fs.readFile('./txt/start.txt', 'utf-8', (err, text1) => { //El callback tiene 2 argumentos (err, data)
    fs.readFile('./txt/start.txt', 'utf-8', (err, text2) => { //El callback tiene 2 argumentos (err, data)
        console.log(text1);
    });
    console.log(text2);
});
console.log('Se leerá el archivo');//Aca estamos leyendo el archivo start.txt
