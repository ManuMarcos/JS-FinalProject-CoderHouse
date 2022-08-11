export {obtenerFormulario,renderTickets};

//Retorna el elemento formulario del DOM
function obtenerFormulario(){
    let formulario = document.getElementById("login-form");
    return formulario;
}

function renderTickets(){
    const user = JSON.parse(localStorage.getItem("user"));

    const ticketContainer = document.getElementById("ticketsContainer")

    for (const ticket of user.tickets) {
        const ticketDom = document.createElement("tr");
        ticketDom.classList.add("main__table-row");

        ticketDom.innerHTML = `
        <td>${"N/A"}</td>
        <td>${ticket.category}</td>
        <td>${ticket.affair}</td>
        <td>${"N/A"}</td>
        <td>${"N/A"}</td>
        `

        ticketContainer.append(ticketDom);

    }
}

