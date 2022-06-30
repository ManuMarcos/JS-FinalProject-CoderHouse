//FOR

/*
let nombre, apellido, dni;

for(let i = 0; i<5; i++){
    nombre = prompt("Ingrese su nombre:");
    apellido = prompt("Ingrese su apellido:");
    dni = parseInt(prompt("Ingrese su dni:"));
    alert(`Buen dia \n-${nombre}\n-${apellido}\n-DNI:${dni}`);
} */

//WHILE

/* let usuarioAceptado = "Manuel";
let usuarioIngresado = prompt("Por favor ingrese su nombre de usuario:");

while (usuarioIngresado != usuarioAceptado){
    alert("El usuario ingresado no esta habilitado");
    usuarioIngresado = prompt("Por favor ingrese su nombre de usuario:");
}
alert("Usuario correcto, ingresando..") */

//DO WHILE
/* do{
    numero = prompt("Ingrese un numero");
}while(parseInt(numero)); */

//SWITCH

/* let nacionalidadUsuario = prompt("Ingrese su nacionalidad:");

switch (nacionalidadUsuario){
    case "Colombiano":
        console.log("Su moneda es el peso colombiano");
        break;
    case "Argentino":
        console.log("Su moneda es el peso argentino");
        break;
    default:
        console.log("El usuario tiene nacionalidad no soportada")
        break;
} */

string = prompt("Por favor ingresa una palabra:")
while(string != "Terminar"){
    /* stringConcatenado += string; */
    string = prompt("Por favor ingresa una palabra:");
}