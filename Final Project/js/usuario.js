
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

