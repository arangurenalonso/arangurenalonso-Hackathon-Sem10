let frase=prompt("Ingrese una frase")

let capitaliceUltPalabra=(cadena)=>{
     
    let texto=cadena.trim()
    let arrayFrase=texto.split("");
    
    let ultLetra=arrayFrase[arrayFrase.length-1]
    
    arrayFrase[arrayFrase.length-1]=ultLetra.toUpperCase()
    
    frase2=""
    
    nuevaFrase=arrayFrase.forEach(function(i){
            frase2=frase2+i
        })
    
    return frase2
}
console.log(capitaliceUltPalabra(frase))
alert(capitaliceUltPalabra(frase))

