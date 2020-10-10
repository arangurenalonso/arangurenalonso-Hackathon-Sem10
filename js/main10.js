let ObjA=({ 
    a: 1, 
    b: 2 
})
  

let funcion=(objeto)=>{
    let array = [];
    for(let i in objeto) {
      array.push([i, objeto[i]]);
    }
    return array
}
console.table(funcion(ObjA))