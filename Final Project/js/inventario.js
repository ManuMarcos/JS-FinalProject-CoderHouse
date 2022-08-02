export {Inventario};

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

    obtenerEquipos(){
        return this.equipos;
    }

    obtenerLicencias(){
        return this.licencias;
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