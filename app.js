const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

crearArchivo(argv.directorio, argv.base, argv.listar, argv.hasta)
    .then(archivo => console.log(`Archivo ${archivo.bold} creado`.bgWhite.black))
    .catch(err => console.log(err));
