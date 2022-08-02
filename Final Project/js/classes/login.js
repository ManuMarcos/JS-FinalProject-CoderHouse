export {Login};
import {Usuario} from "./usuario.js";
import {obtenerFormulario} from "../manejo_del_dom.js"
import {validarFormulario} from "../validar_formulario.js"

class Login{
    constructor(){
        let user;
    }

    ingresarUsuario(user){
        this.user = user;
    }

    efectuarLogin(){
        let formulario = document.getElementById("login-form")
        formulario.addEventListener("submit", validarFormulario);
    }
}
