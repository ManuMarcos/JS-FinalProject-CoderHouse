export {Licencia};

class Licencia{
    constructor(softwareName, type, price, renewal, img){
        this.softwareName = softwareName.toUpperCase();
        this.type = type.toUpperCase();
        this.price = parseInt(price);
        this.renewal = renewal.toUpperCase();
        this.img = img;
    }
}