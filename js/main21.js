let frase =prompt("Ingrese una frase y encontramos la palabra nemo")

let buscarNemo=cadenaPalabras=>{
    let textoMayuscula=cadenaPalabras.toLocaleUpperCase()
    let cadenaArray=textoMayuscula.split(" ")
    if (cadenaArray.includes("NEMO")){
        let posicion=cadenaArray.findIndex(function(position){
            return "NEMO"==position;})
        return  `I found Nemo at ${posicion+1}!`
    }else{
        console.log("Tu frase no tiene la palabra nemo")
    }
}

console.log(buscarNemo(frase))