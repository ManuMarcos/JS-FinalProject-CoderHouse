export {validarFormulario};
import {alertaFormulario, getUserName,getUserPhone, getUserSector, getUserSurname, obtenerFormulario} from "./manejo_del_dom.js";
import {Usuario} from "./usuario.js";

function validarFormulario(event){
    event.preventDefault();

    let formulario = obtenerFormulario();
    
    let alerts = document.getElementsByClassName("form-alert");
    console.log(alerts[0])
    console.log(alerts);
    /* while(alerts != null){
        formulario.removeChild(alerts[0]);
        alerts = document.getElementsByClassName("alert-form");
    } */
    

    //Get user name from DOM
    let userName = getUserName();
    //Get user surname from DOM
    let userSurname = getUserSurname();
    //Get user phone from DOM
    let userPhone = getUserPhone();
    //Get user sector from DOM
    let userSector = getUserSector();

    //It validates user name
    let isValidName = validarNombre(userName);
    //It validates user surname
    let isValidSurname = validarApellido(userSurname);
    //It validates user phone
    let isValidPhone = validarTelefono(userPhone);
    //It validates user sector
    let isValidSector = validarSector(userSector);

    //It validates that each variable is correct
    if (isValidName && isValidSurname && isValidPhone && isValidSector){
        //Create the user
        let user = new Usuario(userName, userSurname, userPhone, userSector);
        console.log("Usuario creado exitosamente")
        //Shows user data
        user.mostrarDatos();
        return user;
    }

    
}

function validarNombre(userName){
    let isValid = false;
    if (userName.length === 0 ){
        const alerta = "No has escrito nada en el nombre";
        alertaFormulario(alerta)
    }
    else{
        isValid = true;
    }
    return isValid;
}

function validarApellido(userSurname){
    let isValid = false;
    if (userSurname.length === 0){
        const alerta = "No has escrito nada en el apellido";
        alertaFormulario(alerta);
    }
    else{
        isValid = true;
    }
    return isValid;
}

function validarTelefono(userPhone){
    let isValid = false;
    if (userPhone.length === 0){
        const alerta = "No has escrito ningun numero de interno";
        alertaFormulario(alerta);
    }
    else if(userPhone.length > 4){
        const alerta = "El numero de interno ingresado es incorrecto";
        alertaFormulario(alerta);
    }
    else{
        isValid = true;
    }
    return isValid;
}

function validarSector(userSector){
    let isValid = false;
    if (userSector == "none"){
        const alerta = "No has seleccionado ningun sector";
        alertaFormulario(alerta); 
    }
    else{
        isValid = true;
    }
    return isValid;
}