export {obtenerFormulario, alertaFormulario, getUserName, getUserPhone, getUserSector, getUserSurname};

//Retorna el elemento formulario del DOM
function obtenerFormulario(){
    let formulario = document.getElementById("login-form");
    return formulario;
}

//It creates an alert on the form
function alertaFormulario(alerta){
    let formulario = obtenerFormulario();
    let alertaFormulario = document.createElement("p");
    alertaFormulario.innerHTML = `<h6 class="form-alert">${alerta}</h6>`;
    formulario.appendChild(alertaFormulario)
}
   
//Get user name from DOM
function getUserName(){
    let userName = document.getElementById("user-name").value;
    return userName;
}
//Get user surname from DOM
function getUserSurname(){
    let userSurname = document.getElementById("user-surname").value;
    return userSurname;
}
//Get user phone from DOM
function getUserPhone(){
    let userPhone = document.getElementById("user-phone").value;
    return userPhone;
}
//Get user sector from DOM
function getUserSector(){
    let userSector = document.getElementById("user-sector").value;
    return userSector;
}

