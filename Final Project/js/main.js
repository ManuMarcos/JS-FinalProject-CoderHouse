class Usuario{
    constructor(nombre, apellido, interno, sector){
        this.nombre = nombre; 
        this.apellido = apellido;
        this.interno = interno;
        this.sector = sector;
        this.equipos = [];
        this.licencias = [];
    }

    mostrarDatos(){
        alert(`
            --------------------------
            Nombre: ${this.nombre}
            Apellido: ${this.apellido}
            Interno: ${this.interno}
            Sector: ${this.sector}
            --------------------------
        `)
    }

    agregarEquipo(equipo){
        this.equipos.push(equipo);
        alert("Equipo agregado exitosamente")
        alert(this.equipos);
    }

    agregarLicencia(licencia){
        this.licencias.push(licencia);
        alert("Licencia agregada exitosamente")
    }

    mostrarEquipos(){
        let mensaje = `EQUIPOS EN TU INVENTARIO:\n`;
        for (const equipo of this.equipos){
            mensaje += `Categoria: ${equipo.categoria}, Marca: ${equipo.marca}, Modelo: ${equipo.modelo}, Nro de serie: ${equipo.nroDeSerie}, Precio: ${equipo.precio}\n---------------------------------------\n`;
        }
        alert(mensaje);
    }
}

class Equipo{
    constructor(categoria, marca, modelo, nroDeSerie, precio){
        this.categoria = categoria.toUpperCase();
        this.marca = marca.toUpperCase();
        this.modelo = modelo.toUpperCase();
        this.nroDeSerie = nroDeSerie.toUpperCase();
        this.precio = parseInt(precio);
    }

    mostrarDatosVertical(){
        alert(`
            Categoria: ${this.categoria}
            Marca: ${this.marca}
            Modelo: ${this.modelo}
            Nro de serie: ${this.nroDeSerie}
            Precio: $${this.precio}
        `)
    }

    mostrarDatosHorizontal(){
        alert(`Categoria: ${this.categoria}, Marca: ${this.marca}, Modelo: ${this.modelo}, Precio: $${this.precio}`)
    }
}

class Inventario{
    constructor(){
        this.equipos = [];
        this.licencias = [];
    }

    agregarEquipo(equipo){
        this.equipos.push(equipo);
    }

    agregarLicencia(licencia){
        this.licencias.push(licencia);
    }

    obtenerPcs(){
        const pcs = this.equipos.filter(equipo => equipo.categoria === "PC")
        return pcs;
    }

    obtenerMonitores(){
        const monitores = this.equipos.filter(equipo => equipo.categoria === "MONITOR");
        return monitores;
    }

    obtenerTeclados(){
        const teclados = this.equipos.filter(equipo => equipo.categoria === "TECLADO");
        return teclados;
    }

    obtenerMouses(){
        const mouses = this.equipos.filter(equipo => equipo.categoria === "MOUSE");
        return mouses;
    }

}




class Login{
    constructor(){
        let user;
    }

    efectuarLogin(){
        let nombre = prompt("Nombre:");
        let apellido = prompt("Apellido");
        let interno = prompt("Interno:");
        let sector = prompt("Sector:");

        const usuario = new Usuario(nombre, apellido, interno, sector);
        return usuario;
    }
}

function main(inventario){
    const login = new Login();
    const usuario = login.efectuarLogin();
    usuario.mostrarDatos();
    menu(usuario, inventario);
}

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








//Modularizacion de la validacion de opciones ingresadas
/* function solicitarOpcion (cantOpciones, mensaje){
    let opcionesDisponibles = [];
    for (let i = 1; i <= cantOpciones; i++){
        opcionesDisponibles.push(i);
    }
    alert(opcionesDisponibles);
    let opcionSeleccionada = parseInt(prompt(mensaje));
    while(!opcionesDisponibles.includes(opcionSeleccionada)){
        opcionSeleccionada = parseInt(prompt(mensaje));
    } 
    return opcionSeleccionada;
} */

//Cargamos inventario
const inventario = new Inventario();
//PCs
let pc1 = new Equipo("pc", "dell" , "latitude 7420" , "iWgRr9Za", 290.000)
inventario.agregarEquipo(pc1)
let pc2 = new Equipo("pc", "dell" , "latitude 7420" , "3wUXMH2b", 290.000)
inventario.agregarEquipo(pc2)
let pc3 = new Equipo("pc", "hp" ,"probook 440" ,  "9BTuHNed", 180.000)
inventario.agregarEquipo(pc3)
let pc4 = new Equipo("pc", "hp" ,"probook 440" ,  "YR6oru6o", 180.000)
inventario.agregarEquipo(pc4)
//Mouses
let mouse1 = new Equipo("mouse", "logitech","m280",  "7kPfkFkR", 1.500)
inventario.agregarEquipo(mouse1)
let mouse2 = new Equipo("mouse", "logitech","m280",  "nmvLs9na", 1.500)
inventario.agregarEquipo(mouse2)
let mouse3 = new Equipo("mouse", "genius","dx-110",  "GwsZand8", 500 )
inventario.agregarEquipo(mouse3)
let mouse4 = new Equipo("mouse", "genius","dx-110",  "QHDQ6Z3Y", 500 )
inventario.agregarEquipo(mouse4)
//Teclados
let teclado1 = new Equipo("teclado","logitech", "k120",  "A8xYzgGq", 1.300 )
inventario.agregarEquipo(teclado1)
let teclado2 = new Equipo("teclado", "logitech", "k120", "5Cfq4CdD", 1.300 )
inventario.agregarEquipo(teclado2)
let teclado3 = new Equipo("teclado", "genius","kb-118",  "ygz6ScnT", 1.500 )
inventario.agregarEquipo(teclado3)
let teclado4 = new Equipo("teclado","genius", "kb-118",  "pF3p2tUq", 1.500 )
inventario.agregarEquipo(teclado4)
//Monitor
let monitor1 = new Equipo("monitor",  "lg","22mn430h", "kMcPi4Dc", 48.000 )
inventario.agregarEquipo(monitor1)
let monitor2 = new Equipo("monitor", "lg","22mn430h",  "wMDVZsXT", 48.000 )
inventario.agregarEquipo(monitor2)
let monitor3 = new Equipo("monitor", "samsung","f390",  "W247RU5H", 45.000 )
inventario.agregarEquipo(monitor3)
let monitor4 = new Equipo("monitor", "samsung","f390",  "r4VTDEXo", 45.000 )
inventario.agregarEquipo(monitor4)

//Main
main(inventario);







