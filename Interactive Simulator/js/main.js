/* function generarSolicitud{

} */

function login(){
    let name = prompt("Nombre:");
    let surname = prompt("Apellido:");
    let internalNumber = prompt("Nro de interno:");
    let sector = validateSector(); //Se deberia obtener mediante el login del usuario
    return 0;
}

function validateSector(){
    let selectedSector = prompt("Sector (Contabilidad, TI, Marketing, Ventas):").toLowerCase();
    while (selectedSector != "contabilidad" && selectedSector != "ti" && selectedSector != "ventas" && selectedSector != "marketing"){
        alert("El sector que ha ingresado no existe, por favor ingrese de nuevo");
        selectedSector = prompt("Sector (Contabilidad, TI, Marketing, Ventas):").toLowerCase();
    }
    return selectedSector
}

function menu(){
    let selectedOption = parseInt(prompt("Por favor seleccione una opcion: \n 1. Crear una solicitud \n 2. Crear un pedido de Hardware/Software \n 3. Finalizar"));
    //Valida que la opcion ingresada este definida
    while (selectedOption != 1 && selectedOption != 2 && selectedOption != 3){
        alert("La opcion ingresada es incorrecta");
        selectedOption = parseInt(prompt("Por favor seleccione una opcion: \n 1. Crear una solicitud \n 2. Crear un pedido de Hardware/Software \n 3. Finalizar"));
    }
    switch (selectedOption){
        case 1:
            shortDescription = prompt("Descripcion breve del problema (Max 70 caracteres):");
            detailedDescription = prompt("Drescripcion detallada del problema:");
            priority = prompt("Prioridad:").toUpperCase();
            finishDate = prompt("Fecha de finalizacion (d/M/aaaa)");
            alert(`Solicitud registrada correctamente con los siguientes datos:
            ---------------------------------------------
            Descripcion breve:
            ${shortDescription}
            ---------------------------------------------
            Descripcio detallada:
            ${detailedDescription}
            ---------------------------------------------
            Prioridad: ${priority}
            ---------------------------------------------
            Fecha de finalizacion: ${finishDate}
            `)
            break;
        case 2:
            selectedOrder = prompt("Hardware o Software:").toLowerCase();
            let hardwareList;
            if (selectedOrder == "hardware"){
                selectedHardware = prompt("Por favor ingrese el hardware solicitado (ESC para finalizar):").toLowerCase();
                while (selectedHardware != "ESC"){
                    hardwareList += selectedHardware + "\n";
                    alert("Producto agregado correctamente");
                    selectedHardware = prompt("Seleccione otro elemento de hardware o ESC para finalizar:");
                }
                alert(`Usted ha seleccionado los siguientes elementos: ${hardwareList}`);
            }
            else{
                selectedSoftware = prompt("Nombre del software del cual requiere la licencia:").toUpperCase();
                alert(`Software seleccionado correctamente: ${selectedSoftware}`);
            }
            break;
        case 3:
            alert("Fin del programa")
    }

}

function main(){
    login();
    menu();
}

main();