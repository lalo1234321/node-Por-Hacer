
//const argv=require('yargs').argv;
const argv=require('./config/yargs.js').argv;
const porHacer=require('./por-hacer/por-hacer.js'); 
const color=require('colors');
console.log(argv);

let comando=argv._[0];
switch(comando)
{
    case 'crear':
        let tarea=porHacer.crear(argv.descripcion);
        console.log(tarea);
    break;
    case 'listar':
        let arreglo=porHacer.getListado();
        for(let band of arreglo)
        {
            console.log('=============Por hacer=============='.green);
            console.log(band.descripcion);
            console.log(band.completado);
            console.log('===================================='.green);
        }
    break;
    case 'actualizar':
        let actualizado=porHacer.actualizar(argv.descripcion,argv.completado);
        console.log(actualizado);
    break;
    case 'borrar':
        let borrado=porHacer.borrar(argv.descripcion);
        console.log(borrado);
    break;
    default:
        console.log('Comando no reconocido');
    break;
}