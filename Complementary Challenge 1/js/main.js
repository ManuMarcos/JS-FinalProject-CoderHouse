
alert("Este algoritmo va a solicitar la entrada de datos que luego mostrara por pantalla")

let userSelection = parseInt(prompt("Elija de que forma desea mostrar estos datos: \n 1. En la misma fila\n 2. En diferentes filas"));
let concatenatedString = "";
switch (userSelection){
    case 1:{
        let inputString = prompt("Por favor ingresa una palabra: (ESC para finalizar)");
        while(inputString != "ESC"){
            concatenatedString += inputString + " ";
            inputString = prompt("Por favor ingresa una palabra: (ESC para finalizar)");
        }
        break;
    }
    case 2:{
        let inputString = prompt("Por favor ingresa una palabra: (ESC para finalizar)");
        while(inputString != "ESC"){
            concatenatedString += "- " + inputString + "\n";
            inputString = prompt("Por favor ingresa una palabra: (ESC para finalizar)");
        }
        break;
    }
}

alert(concatenatedString);






