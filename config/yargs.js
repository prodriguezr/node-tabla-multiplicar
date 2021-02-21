const colors = require('colors');
const { existsSync } = require('fs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar',
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en la consola',
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Número hasta donde se multiplicará. Por defecto es 10',
    })
    .option('d', {
        alias: 'directorio',
        type: 'string',
        default: '',
        demandOption: true,
        describe: 'Directorio donde se guardará el archivo'
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw colors.red('La base debe ser un número');
        }
        if (isNaN(argv.hasta)) {
            throw colors.red('El valor de hasta debe ser un número');
        }
        if (!existsSync(argv.directorio)) {
            throw colors.red('No existe el directorio');
        }

        return true;
    })
    .argv;

module.exports = argv;