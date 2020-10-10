let frase=prompt("Ingrese una frase")
let letra=prompt("una letra")

let cambiarVocales=(cadena, letraCambiar)=>{
    const expresionRegular = /[aeiou]/gi;
    let nuevaCadena=cadena.replace(expresionRegular, letraCambiar)
    return nuevaCadena;
}

console.log(cambiarVocales(frase,letra))