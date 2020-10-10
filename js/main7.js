let arrayNum=[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


let crearCadena=(arrayIng)=>{
   let cadenaNueva="";

    for (i=0;i<arrayIng.length;i++){
        if(i==0){
            cadenaNueva+="("
        }
        if(i==3){
            cadenaNueva+=") "
        }
        if(i==6){
            cadenaNueva+="-"
        }
        cadenaNueva+=arrayIng[i]
    }
    return cadenaNueva
}

console.log(crearCadena(arrayNum))