// REQUIREDS
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');



const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar') // Si utilizamos los corchetes despues de un const/let estamos haciendo uso de una "destructuracion"
    //, dentro de ello podemos meter la funcion especifica que queremos importar.




let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;


    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(err => console.log(err));
        console.log('crear');
        break;

    default:
        console.log('Comando no reconocido');
}



console.log(argv.base);
// console.log(argv);
// console.log(argv.base);
// let parametro = argv[2]
// let base = parametro.split('=')[1]