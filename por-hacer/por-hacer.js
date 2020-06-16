const fs=require('fs');
let listadoPorHacer=[];
const guardarDb=()=>
{
    let data=JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json',data,(err)=>
    {
        if(err)
        {
            throw new error ('No se pudo grabar ',err);
        }
    })
}
const cargarDb=()=>
{
    try {
        listadoPorHacer=require('../db/data.json');
    } catch (error) {
        listadoPorHacer=[];
    }
    

}
const crear=(descripcion)=>
{
    cargarDb();
    let porHacer=
    {
        descripcion,
        completado:false
    }
    listadoPorHacer.push(porHacer);
    guardarDb();
    return porHacer;
}
const borrar=(descripcion)=>
{
    cargarDb();
    let index=listadoPorHacer.findIndex(tarea=>tarea.descripcion===descripcion);
    if(index>=0)
    {
        let auxiliar=listadoPorHacer.splice(index,1);
        guardarDb();
        return auxiliar;
    }else
    {
        return false;
    }
}
const actualizar=(descripcion,completado=true)=>
{
    cargarDb();
    let index=listadoPorHacer.findIndex(tarea=>tarea.descripcion===descripcion);
    if(index>=0)
    {
        listadoPorHacer[index].completado=completado;
        guardarDb();
        return true;
    }else
    {
        return false;
    }
}
const getListado=()=>
{
    cargarDb();
    return listadoPorHacer;
}
module.exports=
{
    crear,
    getListado,
    actualizar,
    borrar
}