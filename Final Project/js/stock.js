import {Inventario} from "./inventario.js"
import {Equipo} from "./equipo.js"
import{Licencia} from "./licencia.js"
export {stock};

function cargarInventario(){
    //Cargamos inventario
    const inventario = new Inventario();
    //PCs
    let pc1 = new Equipo("pc", "dell" , "latitude 7420" , "iWgRr9Za", "290000", "https://arrichetta.com.ar/wp-content/uploads/2021/07/TGV89-3.jpg")
    inventario.agregarEquipo(pc1)
    let pc2 = new Equipo("pc", "dell" , "latitude 7420" , "3wUXMH2b", "290000", "https://arrichetta.com.ar/wp-content/uploads/2021/07/TGV89-3.jpg")
    inventario.agregarEquipo(pc2)
    let pc3 = new Equipo("pc", "hp" ,"probook 440" ,  "9BTuHNed", "180000", "https://www.computershopping.com.ar/Images/Productos/Grandes/HP-ProBook-440-G8_Foto3g.jpg")
    inventario.agregarEquipo(pc3)
    let pc4 = new Equipo("pc", "hp" ,"probook 440" ,  "YR6oru6o", "180000", "https://www.computershopping.com.ar/Images/Productos/Grandes/HP-ProBook-440-G8_Foto3g.jpg")
    inventario.agregarEquipo(pc4)
    //Mouses
    let mouse1 = new Equipo("mouse", "logitech","m280",  "7kPfkFkR", "1500", "https://logitechar.vteximg.com.br/arquivos/ids/156502-1000-1000/910-004284_1.png?v=636973474471400000")
    inventario.agregarEquipo(mouse1)
    let mouse2 = new Equipo("mouse", "logitech","m280",  "nmvLs9na", "1500", "https://logitechar.vteximg.com.br/arquivos/ids/156502-1000-1000/910-004284_1.png?v=636973474471400000")
    inventario.agregarEquipo(mouse2)
    let mouse3 = new Equipo("mouse", "genius","dx-110",  "GwsZand8", "500",  "https://tecnocompro.com/pub/media/catalog/product/cache/f2fda30fa08589bc3d50957538fec3cf/1/_/1_19.png")
    inventario.agregarEquipo(mouse3)
    let mouse4 = new Equipo("mouse", "genius","dx-110",  "QHDQ6Z3Y", "500", "https://tecnocompro.com/pub/media/catalog/product/cache/f2fda30fa08589bc3d50957538fec3cf/1/_/1_19.png")
    inventario.agregarEquipo(mouse4)
    //Teclados
    let teclado1 = new Equipo("teclado","logitech", "k120",  "A8xYzgGq", "1300", "https://resource.logitech.com/content/dam/logitech/en/products/keyboards/k120/gallery/k120-gallery-01-uk.png")
    inventario.agregarEquipo(teclado1)
    let teclado2 = new Equipo("teclado", "logitech", "k120", "5Cfq4CdD", "1300", "https://resource.logitech.com/content/dam/logitech/en/products/keyboards/k120/gallery/k120-gallery-01-uk.png")
    inventario.agregarEquipo(teclado2)
    let teclado3 = new Equipo("teclado", "genius","kb-118",  "ygz6ScnT", "1500", "https://www.invidcomputers.com/images/0000000000412817000253332KB-118-P1-980x640-2.jpg" )
    inventario.agregarEquipo(teclado3)
    let teclado4 = new Equipo("teclado","genius", "kb-118",  "pF3p2tUq", "1500", "https://www.invidcomputers.com/images/0000000000412817000253332KB-118-P1-980x640-2.jpg")
    inventario.agregarEquipo(teclado4)
    //Monitor
    let monitor1 = new Equipo("monitor",  "lg","22mn430h", "kMcPi4Dc", "48000", "https://www.lg.com/ar/images/monitores/md07509130/gallery/D-1.jpg" )
    inventario.agregarEquipo(monitor1)
    let monitor2 = new Equipo("monitor", "lg","22mn430h",  "wMDVZsXT", "48000", "https://www.lg.com/ar/images/monitores/md07509130/gallery/D-1.jpg" )
    inventario.agregarEquipo(monitor2)
    let monitor3 = new Equipo("monitor", "samsung","f390",  "W247RU5H", "45000" , "https://images.samsung.com/is/image/samsung/es-curved-cf390-lc24f390fhuxen-001-front-black?$650_519_PNG$")
    inventario.agregarEquipo(monitor3)
    let monitor4 = new Equipo("monitor", "samsung","f390",  "r4VTDEXo", "45000" , "https://images.samsung.com/is/image/samsung/es-curved-cf390-lc24f390fhuxen-001-front-black?$650_519_PNG$")
    inventario.agregarEquipo(monitor4)
    //Licencia
    let licencia1 = new Licencia("outlook","365-E1", "1250", "Mensual", "https://s3.us-west-2.amazonaws.com/saveonit-statics/catalog/product/o/f/office365e1-year.png");
    inventario.agregarLicencia(licencia1);
    let licencia2 = new Licencia("outlook", "365-E3", "2876", "Mensual", "https://xyzkeys.com/image/cache/catalog/Products/office%20365%20E3-500x500.jpg");
    inventario.agregarLicencia(licencia2)
    let licencia3 = new Licencia("outlook", "365-E5", "4752", "Mensual", "https://cheapproductkeys.com/wp-content/uploads/2020/08/Microsoft-Office-365-Pro-Plus-Product-Key-Lifetime.jpg" )
    inventario.agregarLicencia(licencia3);
    let licencia4 = new Licencia("autocad", "autocad 2022", "1775", "anual", "http://cdn.shopify.com/s/files/1/0650/3907/3511/products/autodesk-autocad-2022-x64-final-for-windows_60c0dcab0ca9f.jpg?v=1655031570" )
    inventario.agregarLicencia(licencia4);
    let licencia5 = new Licencia ("Adobe", "Acrobat Pro DC", "952", "Mensual", "https://media.ldlc.com/r1600/ld/products/00/05/75/79/LD0005757945_1.jpg")
    inventario.agregarLicencia(licencia5);
    let licencia6 = new Licencia("Adobe", "Acrobat Standard DC", "852", "Mensual", "https://media.ldlc.com/r1600/ld/products/00/05/75/78/LD0005757883_1.jpg" )
    inventario.agregarLicencia(licencia6);






    return inventario;
}

const stock = cargarInventario();