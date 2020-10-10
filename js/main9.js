let palabra=prompt("Ingrese una cadena de texto");
let caracter=prompt("Ingrese el caracter a buscar");

let buscarPosicion = (cadena,char)=>{
   let arrayCadena=cadena.split("")
   let ultimoIndice="No encontrado";
   let primerIndice="No encontrado";
   for(i=1;i<arrayCadena.length;i++){
       if(arrayCadena[i]=="l"){
        ultimoIndice=i;
       }
   }for(i=arrayCadena.length-1;i>=0;i--){
    if(arrayCadena[i]=="l"){
     primerIndice=i;
    }
}
   return `The first "${char}" has index ${primerIndice}, the last "${char}" has index ${ultimoIndice}`
}
console.log(buscarPosicion(palabra,caracter))