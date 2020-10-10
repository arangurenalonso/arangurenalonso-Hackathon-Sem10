
let num=[]

let cant= prompt("ingresar la cantidad de numeros a calcular su suma de cubo")
for(i=0;i<cant;i++){
    numeroIngresado=prompt(`Ingrese el numero ${i+1}`)
    num.push(numeroIngresado)
}
console.log(num)

    let suma=0
    num.forEach(element => {
        suma=suma+element**3;
    });
    alert(`La suma de cubos es ${suma}`)
    console.log(`La suma de cubos es ${suma}`)
