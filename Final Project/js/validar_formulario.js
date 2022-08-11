export {validarFormulario};
import {Usuario} from "./classes/usuario.js";


function validarFormulario(event){
    event.preventDefault();

    const {userName, userSurname, userPhone, userEmail, userSector} = event.target;

    let alertText = "";
    let isValid = true;
    let alertBox = document.getElementById("alert-box")

    if (userName.value.length === 0){
        const alert = "<h5>No ingreso su nombre</h5>";
        alertText += alert;
        isValid = false;
    }

    if (userSurname.value.length === 0){
        const alert = "<h5>No ingreso su apellido</h5>"
        alertText += alert;
        isValid = false;
    }

    if (userPhone.value.length === 0 || userPhone.value.length > 4){
        const alert = "<h5>El numero ingresado es incorrecto</h5>"
        alertText += alert;
        isValid = false;
    }

    if (userSector.value ==="none"){
        const alert = "<h5>No ingreso su sector</h5>"
        alertText += alert;
        isValid = false;
    }


    alertBox.innerHTML = alertText;


    //It validates that each variable is correct
    if (isValid === true){
        let user = new Usuario(userName.value, userSurname.value, userPhone.value, userEmail.value, userSector.value);
        const userJson = JSON.stringify(user);
        localStorage.setItem("user",userJson);
        console.log(userJson);
        user.mostrarDatos();
        window.location = "/html/main.html"
        return user;
    }
    else{
        return null;
    }
    
}


