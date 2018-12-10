// Requireds
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log(`Listar tabla del ${argv.base} con límite ${argv.limite}`);
        listarTabla(argv.base, argv.limite)
            .then(listado => console.log(listado))
            .catch(e => console.log('Error: ', e))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo ${colors.yellow(archivo)} creado`))
            .catch(e => console.log('Error: ', e))
        break;
    default:
        console.log('Comando no reconocido');
}