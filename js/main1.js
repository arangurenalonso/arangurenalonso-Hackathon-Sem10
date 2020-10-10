let nombre=prompt("ingrese su nombre");
let apellido=prompt("ingrese su Apellido");
let edad=prompt("ingrese su Edad");


let saludo=(Nombre,Apellido,Edad)=>`Hola mi nombre es ${Nombre} ${Apellido} y mi edad ${Edad}`

alert(saludo(nombre,apellido,edad))
console.log(saludo(nombre,apellido,edad))