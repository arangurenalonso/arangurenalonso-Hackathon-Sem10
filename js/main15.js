let valores=[2, 3, 1, 0]

let multiplValores=(coleccionDatos)=>{
    cantValores=coleccionDatos.length
    nuevoArray=[]
    coleccionDatos.forEach(element => {
        nuevoArray.push(element*cantValores) ;
    });
    return nuevoArray;
}

console.log(multiplValores(valores))