 
  let elementoRepetirse=prompt("Ingrese un elemento a repetir")
  let cantRepeticiones= parseInt(prompt("Ingrese las veces a repetir"))
 
 
 const crearArrayElementoRepetido=(elemento,tiempos)=>{
    let arrayCrear=[];
    for(let i=1;i<=tiempos;i++){
        arrayCrear.push(elemento) ;
    }
    return arrayCrear
 }
 
 let nuevacadena=crearArrayElementoRepetido(elementoRepetirse,cantRepeticiones)



console.log(nuevacadena)