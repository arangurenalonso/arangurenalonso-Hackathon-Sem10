
let valores=[10, 4, 1, 4, -10, -50, 32, 21]

let diffMaxMin=(coleccionDatos)=>{
    let NumMax=Math.max(...coleccionDatos)
    let NumMin=Math.min(...coleccionDatos)
    let diferencia=NumMax-NumMin
   return diferencia
}

console.log(diffMaxMin(valores))