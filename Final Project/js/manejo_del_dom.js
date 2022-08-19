export {obtenerFormulario,renderTickets,renderHardware,renderSoftware};
import{capitalize} from "./capitalize.js"


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
        <td>${capitalize(ticket.category)}</td>
        <td>${ticket.affair}</td>
        <td>${"N/A"}</td>
        <td>${"N/A"}</td>
        `

        ticketContainer.append(ticketDom);

    }
}

//Renderiza en el DOM los objetos Hardware almacenados en hardware-stock.json
function renderHardware(hardwareArray){
    let itemsShopContainer = document.getElementById("shop_items");
    hardwareArray.forEach(item => {
        let card = document.createElement("div");
        card.classList.add("card","shop_item");
        card.style = "width: 13rem;"
        card.innerHTML = `
        <img class="shop_item-img" src="${item.img}" alt="Card image cap">
        <div class="shop_item-body">
            <h5 class="shop_item-title">${item.categoria.toUpperCase()}</h5>
            <h7 class="shop_item-brand">${capitalize(item.marca)}</h7>
            <span class="shop_item-model">${capitalize(item.modelo)}</span>
            <p class="shop_item-price">$${item.precio}</p>
            <a  id=${item.id} class="btn shop_item-btn">Agregar</a>
        </div>`;
        itemsShopContainer.append(card);
    });
}

//Renderiza en el DOM los objetos Software almacenados en licencias-stock.json
function renderSoftware(softwareArray){
    let itemsShopContainer = document.getElementById("shop_items");
    softwareArray.forEach(item => {
        let card = document.createElement("div");
        card.classList.add("card","shop_item");
        card.style = "width: 13rem";
        card.innerHTML = `
        <img class="shop_item-img" src="${item.img}" alt="Card image cap">
        <div class="shop_item-body">
            <h5 class="shop_item-title">${item.softwareName.toUpperCase()}</h5>
            <h7 class="shop_item-brand">${capitalize(item.type)}</h7>
            <span class="shop_item-model">${capitalize(item.renewal)}</span>
            <p class="shop_item-price">$${item.price}</p>
            <a  id=${item.id} class="btn shop_item-btn">Agregar</a>
        </div>`;
        itemsShopContainer.append(card);
    })
}


