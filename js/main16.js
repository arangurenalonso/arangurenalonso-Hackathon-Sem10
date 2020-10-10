let num=parseInt(prompt("Ingresar un numero entero"))

let MatrizContHaciAbajo=(valor)=>{
    let arrayCreado=[]
    for(i=valor;i>=0;i--){
        arrayCreado.push(i) ;
    }
    return arrayCreado
}

console.log(MatrizContHaciAbajo(num))