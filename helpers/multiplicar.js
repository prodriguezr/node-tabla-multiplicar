const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (directorio, base, listar, hasta) => {
    const archivo = `${directorio}/tabla-${base}.txt`;

    let salida = '';
    let consola = '';

    for(let i = 1;i<=hasta;i++) {
        salida  += `${base} x ${i} = ${base*i}\n`;
        consola += `${base} ${ 'x'.green } ${i} ${ '='.green } ${base*i}\n`;
    }
    
    if (listar) {
        console.log('========================================'.green);
        console.log('   Tabla de multiplicar del '.green, colors.blue(base));
        console.log('========================================'.green);
        console.log(consola);
    }
    
    try {
        fs.writeFileSync(archivo, salida);
        
        return archivo;
    }
    catch(err) {
        throw err;
    }
    
}; 

module.exports = { crearArchivo }