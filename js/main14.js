
let num=parseInt(prompt("Ingrese un numero"))
let sumaCuadrados=(numero)=>{
    suma=0;
    for(i=1;i<=numero;i++){
        suma=suma+i**2
    }
    return suma
}

console.log(sumaCuadrados(num))