import {Login} from "./classes/login.js";
import {Inventario} from "./classes/inventario.js"
import {Equipo} from "./classes/equipo.js";
import {Usuario} from "./classes/usuario.js";



function main(){
    
    const user = localStorage.getItem("user");

    if (user === null){
        const login = new Login();
        const newUser = login.efectuarLogin();
    }
    else{
        const login = new Login();
        login.ingresarUsuario(JSON.parse(user));
        window.location = "/html/main.html"
    }

    
    /* console.log(usuario.nombre);
    console.log(usuario.apellido);
    console.log(usuario.interno);
    console.log(usuario.sector); */
    /* menu(usuario, inventario); */
}


function hardwareOSoftware(usuario, inventario){
    const opcionesDisponibles = [1, 2]
    const mensaje = `1. Hardware\n2. Software`
    opcionSeleccionada = parseInt(prompt(mensaje));
    while(!opcionesDisponibles.includes(opcionSeleccionada)){
        alert("Opcion fuera de rango");
        opcionSeleccionada = parseInt(prompt(mensaje));
    }
    switch(opcionSeleccionada){
        case 1:
            //Hardware
            categoriasHardware(usuario, inventario);
            break;
        case 2:
            //Software
            alert("Opcion no disponible en este momento")
            break;
    }
}

function categoriasHardware(usuario, inventario){
    const opcionesDisponibles = [1, 2, 3, 4];
    const mensaje = `1. Pc\n2. Teclado\n3. Mouse\n4. Monitor`
    opcionSeleccionada = parseInt(prompt(mensaje));
    while(!opcionesDisponibles.includes(opcionSeleccionada)){
        alert("Opcion fuera de rango");
        opcionSeleccionada = parseInt(prompt(mensaje));
    }
    switch(opcionSeleccionada){
        case 1:
            //PC
            const pcs = inventario.obtenerPcs();
            equipoSeleccionado = seleccionarEquipo(pcs);
            usuario.agregarEquipo(equipoSeleccionado);
            usuario.mostrarEquipos();
            break;
        case 2:
            //Teclado
            const teclados = inventario.obtenerTeclados();
            equipoSeleccionado = seleccionarEquipo(teclados);
            usuario.agregarEquipo(equipoSeleccionado);
            usuario.mostrarEquipos();
            break;
        case 3:
            //Mouse
            const mouses = inventario.obtenerMouses();
            equipoSeleccionado = seleccionarEquipo(mouses);
            usuario.agregarEquipo(equipoSeleccionado);
            usuario.mostrarEquipos();
            break;
        case 4:
            //Monitor
            const monitores = inventario.obtenerMonitores();
            equipoSeleccionado = seleccionarEquipo(monitores);
            usuario.agregarEquipo(equipoSeleccionado);
            usuario.mostrarEquipos();
            break;
    }
}

function seleccionarEquipo(equipos){
    let mensaje = ``;
    let contador = 1;
    for (equipo of equipos){
        mensaje += `${contador}. Marca: ${equipo.marca}, Modelo: ${equipo.modelo}, Precio: ${equipo.precio}\n`;
        contador += 1;
    }
    let opcionSeleccionada = parseInt(prompt(mensaje + "\nSeleccione el equipo deseado:")) - 1;
    return equipos[opcionSeleccionada];
}



//Main
main();







