let objectToArray=({
    likes: 2,
    dislikes: 3,
    followers: 10
  })

let funcion=(objeto)=>{
    let array = [];
    for(let i in objeto) {
      array.push([i, objeto[i]]);
    }
    return array
}
console.table(funcion(objectToArray))

