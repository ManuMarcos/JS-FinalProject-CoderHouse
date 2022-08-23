export {obtenerFormulario,renderTickets,renderStockItems,renderCart};
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
function renderStockItems(stockArray){
    let itemsShopContainer = document.getElementById("shop_items");
    stockArray.forEach(item => {
        let card = document.createElement("div");
        card.classList.add("card","shop_item");
        card.style = "width: 13rem;"
        card.innerHTML = `
        <img class="shop_item-img" src="${item.img}" alt="Card image cap">
        <div class="shop_item-body">
            <h5 class="shop_item-title">${item.category.toUpperCase()}</h5>
            <h7 class="shop_item-brand">${capitalize(item.brand)}</h7>
            <span class="shop_item-model">${capitalize(item.model_version)}</span>
            <p class="shop_item-price">$${item.price}</p>
            <a data-id=${item.id} class="btn shop_item-btn">Agregar</a>
        </div>`;
        itemsShopContainer.append(card);
    });
}

function renderCart(userCart){
    const cartItems = document.getElementById("cart_items")
    const totalItems = document.getElementById("cart_icon-totalItems")
    const totalValue = document.getElementById("cart_total-value")
    const removeItem = document.getElementsByClassName("cart_removeItem")

    for (const item of userCart.items) {
        const row = document.createElement("tr");
        row.innerHTML = `
        <th scope="row">${item.category}</th>
        <td>${item.brand}</td>
        <td>${item.model_version}</td>
        <td>${item.price}</td>
        <td>
            <a data-id=${item.id} class="cart_removeItem">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </a>
        </td>
        `
        cartItems.append(row);
    }
    for (const button of removeItem) {
        button.addEventListener("click", (e) => {
            console.log(e.target.parentElement)
            alert(`Se quiere eliminar el item ${e.target.parentElement.dataset.id}`)
        })
    }
    totalItems.textContent = `${userCart.totalItems}`;
    totalValue.textContent = `$${userCart.totalValue}`
}


