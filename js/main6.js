
let valores=[80, 50, 1, 4, 30]

let diffMaxMin=(coleccionDatos)=>{
    let resultado=[]
    let NumMax=Math.max(...coleccionDatos)
    let NumMin=Math.min(...coleccionDatos)
    resultado.push(NumMin);
    resultado.push(NumMax);
   return resultado
}

console.log(diffMaxMin(valores))
