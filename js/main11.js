let getBudgets =([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ])
  
  let funcion=(objeto)=>{
    let suma = 0;
    objeto.forEach((item)=>{
        suma+=item.budget;
    })
    return suma
}

console.table(funcion(getBudgets))
