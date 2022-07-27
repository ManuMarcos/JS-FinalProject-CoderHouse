export {Login};
import {Usuario} from "./usuario.js";
import {obtenerFormulario} from "./manejo_del_dom.js"
import {validarFormulario} from "./validar_formulario.js"

class Login{
    constructor(){
        let user;
    }

    efectuarLogin(){
        let formulario = obtenerFormulario();
        formulario.addEventListener("submit", validarFormulario);
    }
}