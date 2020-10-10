let objString="ALONSO"
let objNumero=2
let objBoleano=true
let objUndefined
let objObjeto=[1,2,3,4]

let tipo=(valor)=>{
    return (typeof valor);
}

console.log(tipo(objString))
console.log(tipo(objNumero))
console.log(tipo(objBoleano))
console.log(tipo(objUndefined))
console.log(tipo(objObjeto))
