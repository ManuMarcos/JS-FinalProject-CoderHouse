



function menu(usuario, inventario){
    const opcionesDisponibles = [1,2,3,4];
    let finalizar = false;
    const mensajeOpciones = `1. Generar un ticket (Incidente, Cambio, Capacitacion)\n2. Solicitar Hardware/Software\n3. Ver estado de servidores\n4. Finalizar`
    while (finalizar == false){
        let opcionSeleccionada = parseInt(prompt(mensajeOpciones))
        while (!opcionesDisponibles.includes(opcionSeleccionada)){
            alert("La opcion seleccionada esta fuera de rango")
            opcionSeleccionada = parseInt(prompt(mensajeOpciones))
        }
        switch(opcionSeleccionada){
            case 1:
                //Generar Ticket
                alert("Opcion no disponible en este momento")
                break;
            case 2:
                //Solicitar Hardware o software
                hardwareOSoftware(usuario,inventario);
                break;
            case 3:
                //Ver estado de servidores
                alert("Opcion no disponible en este momento")
                break;
            case 4:
                //Finalizar
                alert("Hasta luego!!")
                finalizar = true;
                break;
        }
    }
    
}