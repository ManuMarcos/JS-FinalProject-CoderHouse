export {obtenerFormulario,renderTickets,renderStockItems,renderCart, renderAssignedItems};
import{capitalize} from "./capitalize.js"
import {removeFromCart, addToCart, assignItems, filterItems} from "./shop.js"
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
function renderStockItems(stockArray, itemCategory){
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
    })
    

    const addButtons = document.getElementsByClassName("shop_item-btn");
    for (const addButton of addButtons) {
        addButton.addEventListener("click", (e) => addToCart(e), false)
    }

    const myItemsButton = document.getElementById("button_nav-myItems");
    

}

function renderAssignedItems (assignedItems){
    const assignedItemsTable = document.getElementById("assignedItemsBody");
    assignedItemsTable.innerHTML = "";
    assignedItems.forEach(item => { 
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.category}</td>
        <td>${item.brand}</td>
        <td>${item.model_version}</td>
        <td>$${item.price}</td>
        `
        assignedItemsTable.append(row);
    })
}


function renderCart(userCart){
    const cartItemsDom = document.getElementById("cart_items")
    const cartTable = document.getElementById("cart_table")
    const totalItemsDom = document.getElementById("cart_icon-totalItems")
    const totalValueDom = document.getElementById("cart_total-value")
    const removeItemButtons = document.getElementsByClassName("cart_removeItem")
    const emptyCart = document.querySelector(".empty_cart")
    console.log(emptyCart)
    
    let totalPrice = 0;

    //Reset cart DOM
    cartItemsDom.innerHTML = "";

    if (userCart.length > 0){
        cartTable.classList.remove("hide");
        emptyCart.classList.add("hide");
        for (const item of userCart) {
            const row = document.createElement("tr");
            row.innerHTML = `
            <th scope="row">${item.category}</th>
            <td>${item.brand}</td>
            <td>${item.model_version}</td>
            <td>$${item.price}</td>
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
    }
    else{
        cartTable.classList.add("hide")
        emptyCart.classList.remove("hide")
    }

    //Add eventlistener to confirm cart button
    const confirmButton = document.getElementById("cart_btn-confirm");
    confirmButton.addEventListener("click", assignItems);

    //Show total items in cart
    totalItemsDom.textContent = `${userCart.length}`;
    //Show total price
    totalValueDom.textContent = `$${totalPrice}`
}



