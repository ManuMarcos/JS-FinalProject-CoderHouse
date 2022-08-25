export {obtenerFormulario,renderTickets,renderStockItems,renderCart};
import{capitalize} from "./capitalize.js"
import {removeFromCart, addToCart} from "./shop.js"
import {getUserLocalStorage} from "./local_storage.js";


//Retorna el elemento formulario del DOM
function obtenerFormulario(){
    let formulario = document.getElementById("login-form");
    return formulario;
}

function renderTickets(userTickets){
    const ticketContainer = document.getElementById("ticketsContainer")
    
    //Reset ticketsContainer
    ticketContainer.innerHTML = "";

    for (const ticket of userTickets) {
        const ticketDom = document.createElement("tr");
        const creationDate = new Date(ticket.creationDate);
        ticketDom.classList.add("main__table-row");
        

        ticketDom.innerHTML = `
        <td>${creationDate.getDate()}/${creationDate.getMonth() + 1}/${creationDate.getFullYear()} ${creationDate.getHours()}:${creationDate.getMinutes()}:${creationDate.getSeconds()}</td>
        <td>${capitalize(ticket.category)}</td>
        <td>${ticket.affair}</td>
        <td>${capitalize(ticket.state)}</td>
        <td>${capitalize(ticket.priority)}</td>
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
    const buttons = document.getElementsByClassName("shop_item-btn");
    for (const button of buttons) {
        button.addEventListener("click", (e) => addToCart(e), false)
    }
}

function renderCart(userCart){
    const cartItemsDom = document.getElementById("cart_items")
    const totalItemsDom = document.getElementById("cart_icon-totalItems")
    const totalValueDom = document.getElementById("cart_total-value")
    const removeItemButtons = document.getElementsByClassName("cart_removeItem")

    let totalPrice = 0;

    //Reset cart DOM
    cartItemsDom.innerHTML = "";

    for (const item of userCart) {
        const row = document.createElement("tr");
        
        row.innerHTML = `
        <th scope="row">${item.category}</th>
        <td>${item.brand}</td>
        <td>${item.model_version}</td>
        <td>${item.price}</td>
        <td>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <a data-id=${item.id} class="cart_removeItem">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>   
                </a>
            </svg> 
        </td>
        `
        totalPrice += item.price;
        cartItemsDom.append(row);
    }
    
    //Add eventlistener to remove item buttons
    for (const button of removeItemButtons) {
        button.addEventListener("click", (e) => removeFromCart(e));
    }

    //Show total items in cart
    totalItemsDom.textContent = `${userCart.length}`;
    //Show total price
    totalValueDom.textContent = `$${totalPrice}`
}



