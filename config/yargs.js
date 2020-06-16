const descripcion=
{
    demand:true,
    alias:'d',
    desc:'Descripción de la tarea por hacer'
}
const completado=
{
    demand:true,
    alias:'c',
    desc:'Marca como completado o pendiente la tarea'
}
const  argv=require('yargs')
            .command('crear','Crea un elemento por hacer',
            {
                descripcion
            })
            .command('actualizar','Actualiza el estado de la tarea por hacer',
            {
                descripcion,
                completado
            })
            .command('borrar','Borra una tarea',
            {
                descripcion
            })
            .help()
            .argv

module.exports=
{
    argv
}            