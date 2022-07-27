export {Equipo};



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