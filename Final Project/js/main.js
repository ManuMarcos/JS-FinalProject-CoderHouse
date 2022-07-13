/* function generarSolicitud{

} */

function login(){
    //Estos datos se deberian obtener con el simple login del usuario
    let name = prompt("Nombre:");
    let surname = prompt("Apellido:");
    let internalNumber = prompt("Nro de interno:");
    let mailAdress = prompt("Correo:")
    let cellPhone = prompt("Celular:")
    let sector = prompt("Sector:");
    const usuario = new Usuario(name, surname, internalNumber, mailAdress, cellPhone, sector)
    return usuario;
}

class Usuario{
    constructor(nombre, apellido, interno, correo, celular, sector){
        this.nombre = nombre;
        this.apellido = apellido;
        this.interno = interno;
        this.correo = correo;
        this.celular = celular;
        this.sector = sector;
        this.equipos = [];
        this.licencias = [];
    }

    asignarEquipo(equipo){
        this.equipos.push(equipo);
    }

    asingarLicencia(licencia){
        this.licencias.push(licencia);
    }

    mostrarDatos(){
        alert(`
            Nombre: ${this.nombre}
            Apellido: ${this.apellido}
            Interno: ${this.interno}
            Correo: ${this.correo}
            Celular: ${this.celular}
            Sector: ${this.sector}
            `
        )
    }
    
    mostrarEquipos(){
        for (const equipo of this.equipos){
            equipo.mostrarDatos();
        }
    }

    mostrarLicencias(){
        for (const licencia of this.licencias){
            licencia.mostrarDatos();
        }
    }
}

class Equipo{
    constructor(tipo, modelo, marca, numeroDeSerie, garantia, precio){
        this.modelo = modelo;
        this.marca = marca;
        this.numeroDeSerie = numeroDeSerie;
        this.garantia = garantia;
        this.precio = precio;
        this.tipo = tipo;
    }

    mostrarDatos(){
        alert(`
            ---------------------------------------------
            Tipo: ${this.tipo}
            ---------------------------------------------
            Modelo: ${this.modelo}
            ---------------------------------------------
            Marca: ${this.marca}
            ---------------------------------------------
            Numero de serie: ${this.numeroDeSerie}
            ---------------------------------------------
            Garantia: ${this.garantia}
            ---------------------------------------------
            Precio: ${this.precio}
            ---------------------------------------------
            `
            )
    }
}

class Licencia{
    constructor(nombre){
        this.tipo = tipo;
        this.vigencia = vigencia; 
        this.precio = precio;
        this.nombre = nombre;
    }

    mostrarDatos(){
        alert(`
            ---------------------------------------------
            Nombre: ${this.nombre}
            ---------------------------------------------
            Tipo: ${this.tipo}
            ---------------------------------------------
            Vigencia: ${this.vigencia}
            ---------------------------------------------
            Precio: ${this.precio}
            `
        )
    }

}

class Inventario{
    cosntructor(){
        this.equipos = [];
        this.licencias = [];
    }

    agregarEquipo(equipo){
        equipos.push(equipo);
    }

    agregarLicencia(licencia){
        licencias.push(licencia);
    }

    buscarEquipo(tipo){
        const equiposDisponibles = equipos.filter((el) => el.tipo.includes(tipo));
        if (equiposDisponibles != undefined){
            return equiposDisponibles;
        }
        else{
            return undefined;
        }
    }
}


//Valida que el sector ingresado por el usuario sea valido (que pertencezca a la empresa)
/* function validateSector(){
    let selectedSector = prompt("Sector (Contabilidad, TI, Marketing, Ventas):").toLowerCase();
    while (selectedSector != "contabilidad" && selectedSector != "ti" && selectedSector != "ventas" && selectedSector != "marketing"){
        alert("El sector que ha ingresado no existe, por favor ingrese de nuevo");
        selectedSector = prompt("Sector (Contabilidad, TI, Marketing, Ventas):").toLowerCase();
    }
    return selectedSector
} */

function menu(user, inventario){
    let selectedOption = parseInt(prompt("Por favor seleccione una opcion: \n 1. Crear una solicitud \n 2. Crear un pedido de Hardware/Software \n 3. Finalizar"));
    //Valida que la opcion ingresada este definida
    while (selectedOption != 1 && selectedOption != 2 && selectedOption != 3){
        alert("La opcion ingresada es incorrecta");
        selectedOption = parseInt(prompt("Por favor seleccione una opcion: \n 1. Crear una solicitud \n 2. Crear un pedido de Hardware/Software \n 3. Finalizar"));
    }
    switch (selectedOption){
        //Crear ticket
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
        //Pedido de Hardware o Software
        case 2:
            selectedOrder = prompt("Selecciona una opcion: \n 1.Hardware \n 2.Software").toLowerCase();
            while(selectedOrder != "1" && selectedOrder != "2"){
                selectedOrder = prompt("Opcion incorrecta \n Selecciona una opcion: \n 1.Hardware \n 2.Software").toLowerCase();
            }
            if (selectedOrder == "hardware"){
                selectedHardware = prompt("Por favor ingrese el hardware solicitado (ESC para finalizar):").toLowerCase();
                while (selectedHardware != "esc" && selectedHardware != "pc" && selectedHardware != "mouse" && selectedHardware != "teclado" && selectedHardware != "monitor"){ //Validacion del tipo de hardware
                    equiposDisponibles = inventario.buscarEquipo(selectedHardware);
                    if (equiposDisponibles != undefined){
                        
                    }
                    alert("Producto agregado correctamente");
                    selectedHardware = prompt("Seleccione otro elemento de hardware o ESC para finalizar:");
                }
                user.mostrarEquipos();
            }
            else{
                selectedSoftware = prompt("Nombre del software del cual requiere la licencia:").toUpperCase();
                while (selectedSoftware != "esc"){ //Validacion del tipo de hardware
                    let licencia = new Licencia(selectedSoftware);
                    user.asingarLicencia(licencia);
                    alert("Producto agregado correctamente");
                    selectedSoftware = prompt("Seleccione otra software del cual requiere licencia o ESC para finalizar:");
                }
                user.mostrarLicencias();
            } 
            break;
        //Finalizar
        case 3:
            alert("Fin del programa")
    }

}

function main(){
    user = login(); //Retorna objeto usuario con sus propiedades (nombre, apellido, interno, correo, celular, sector)
    inventario = cargarInventario();
    menu(user); 
}



//Cargamos inventario
//PCs
let pc1 = new Equipo("pc", "latitude 7420" , "dell" , "iWgRr9Za", 09/2025, 290.000)
let pc2 = new Equipo("pc", "latitude 7420" , "dell" , "3wUXMH2b", 09/2025, 290.000)
let pc3 = new Equipo("pc", "probook 440" , "hp" , "9BTuHNed", 09/2023, 180.000)
let pc4 = new Equipo("pc", "probook 440" , "hp" , "YR6oru6o", 09/2023, 180.000)
//Mouses
let mouse1 = new Equipo("mouse", "m280", "logitech", "7kPfkFkR", 12/2022, 1.500)
let mouse2 = new Equipo("mouse", "m280", "logitech", "nmvLs9na", 12/2022, 1.500)
let mouse3 = new Equipo("mouse", "dx-110", "genius", "GwsZand8", 8/2022, 500 )
let mouse4 = new Equipo("mouse", "dx-110", "genius", "QHDQ6Z3Y", 8/2022, 500 )
//Teclados
let teclado1 = new Equipo("teclado", "k120", "logitech", "A8xYzgGq", 12/2022, 1.300 )
let teclado2 = new Equipo("teclado", "k120", "logitech", "5Cfq4CdD", 12/2022, 1.300 )
let teclado3 = new Equipo("teclado", "kb-118", "genius", "ygz6ScnT", 11/2022, 1.500 )
let teclado4 = new Equipo("teclado", "kb-118", "genius", "pF3p2tUq", 11/2022, 1.500 )
//Monitor
let monitor1 = new Equipo("monitor", "22mn430h", "lg", "kMcPi4Dc", 4/2025, 48.000 )
let monitor2 = new Equipo("monitor", "22mn430h", "lg", "wMDVZsXT", 4/2025, 48.000 )
let monitor3 = new Equipo("monitor", "f390", "samsung", "W247RU5H", 12/2024, 45.000 )
let monitor4 = new Equipo("monitor", "f390", "samsung", "r4VTDEXo", 12/2024, 45.000 )















main();