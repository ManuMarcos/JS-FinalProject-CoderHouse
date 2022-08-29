import {Cart} from "./cart.js"
export {Usuario};




class Usuario{
    constructor(nombre, apellido, interno, email, sector){
        this.nombre = nombre; 
        this.apellido = apellido;
        this.interno = interno;
        this.email = email;
        this.sector = sector;
        this.tickets = [];
        this.cart = [];
        this.assignedItems = [];
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
    }

    agregarLicencia(licencia){
        this.licencias.push(licencia);
        alert("Licencia agregada exitosamente")
    }

    mostrarTickets(){
        for (const ticket of this.tickets) {
            console.log(ticket);
        }
    }

    mostrarEquipos(){
        let mensaje = `EQUIPOS EN TU INVENTARIO:\n`;
        for (const equipo of this.equipos){
            mensaje += `Categoria: ${equipo.categoria}, Marca: ${equipo.marca}, Modelo: ${equipo.modelo}, Nro de serie: ${equipo.nroDeSerie}, Precio: ${equipo.precio}\n---------------------------------------\n`;
        }
        alert(mensaje);
    }

    agregarTicket(ticket){
        this.tickets.push(ticket);
        alert("Ticket agregado exitosamente")
    }

}

