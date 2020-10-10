let MatriEstudiante=([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
])
  
let funcion=(objeto)=>{
    let array = [];
    objeto.forEach((item)=>{
        array.push(item.name);
    })
    return array
}

console.table(funcion(MatriEstudiante))


