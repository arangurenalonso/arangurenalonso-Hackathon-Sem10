let findLargestNums=([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0]
])

let nuevoArrayNumMax=(coleccionDatos)=>{
    array=[]
    coleccionDatos.forEach(function(element){
    array.push(Math.max(...element))
    
})
return array
}
console.log(nuevoArrayNumMax(findLargestNums))


