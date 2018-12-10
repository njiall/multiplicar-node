// Configuración de yargs

const opts = {
    base: {
        demand: true, //El parámetro es obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo .txt en la carpeta "Tablas" con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}