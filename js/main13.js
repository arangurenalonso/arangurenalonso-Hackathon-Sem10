let objectToArray=({
    likes: 2,
    dislikes: 3,
    followers: 10
  })




let array = [];


for(let i in objectToArray) {
  array.push([i, objectToArray[i]]);
}
console.log(array)


