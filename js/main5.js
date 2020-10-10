let array = [1,2,3,"Alonso", "Patricia",2,3,"Bernardo",false,null,undefined,"Vilma"]


let mostrarValoresString=(coleccionDatos)=>{
    coleccionDatos.forEach(element => {
        if(typeof element=="string"){
            console.log(element)
        }
            });
    
}

mostrarValoresString(array)






