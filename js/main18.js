let listaInicial=[1, 2, 3,"x", "y", 10]

let obtenerEnteros=(coleccionDatos)=>{
    let listaSoloEntero=[]
    coleccionDatos.forEach(element => {
        if(validarEntero(element)){
            listaSoloEntero.push(element) ;
        }
    });
    return listaSoloEntero
}
let nuevoArray=obtenerEnteros(listaInicial)
console.log(nuevoArray)

//Funcion para validar Entero
function validarEntero(valor){
    if(!Number.isInteger(valor)){
        return false
    }
    return true
}
