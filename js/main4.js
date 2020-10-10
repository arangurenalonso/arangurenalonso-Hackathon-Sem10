alert("Ver código en la consola")

const sumar=(...datos)=>{
    Suma=0;
    datos.forEach(element => {
        Suma=Suma+element;
    });
    return Suma
}

console.log(sumar(1,2,3))
console.log(sumar(1,2,3,4,5))
/*

*/