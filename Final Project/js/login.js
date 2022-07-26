class Login{
    constructor(){
        let user;
    }

    efectuarLogin(){
        let nombre = document.getElementById("login_name");
        let apellido = document.getElementById("login_surname");
        let interno = document.getElementById("login_phone");
        let sector = document.getElementById("login_sector");

        
        let boton = document.getElementById("login_button");
        let form = document.getElementById("login_form");
        let error = false;
        
        const usuario = new Usuario(nombre.value, apellido.value, interno.value, sector.value);

        boton.onclick = (e) => {
            if (nombre.value == "" || apellido.value == "" || interno.value == "" || sector.value == ""){
                e.preventDefault();
                let alerta = document.createElement("p");
                alerta.innerHTML = "<h6>Por favor completar todos los campos</h6>";
                alerta.classList.add("msj_alerta");
                console.log(form.lastChild);
                if (error == false){
                    form.appendChild(alerta);
                }
                error = true;
            }
            
        };

        return usuario;
    }
}