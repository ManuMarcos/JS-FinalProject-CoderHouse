import {renderStockItems,renderCart} from "./manejo_del_dom.js"
import{getUserLocalStorage,setUserLocalStorage} from "./local_storage.js"
export{removeFromCart, addToCart}

//Fetch that brings information from --> hardware-stock.json and licencias-stock.json
const fetchData  = async() => {
    try{
        const stockRequest = await fetch("../stock.json");
        const stock = await stockRequest.json();
        renderStockItems(stock);
        renderCart(getUserLocalStorage().cart);
    }catch (error){
        console.log(error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetchData();
})

function addToCart(e){
    let user = getUserLocalStorage();
    
    const selectedItem = {
        //Se puede mejorar obteniendo solo una vez el parentElement
        category: e.target.parentElement.querySelector(".shop_item-title").textContent,
        brand: e.target.parentElement.querySelector(".shop_item-brand").textContent,
        model_version: e.target.parentElement.querySelector(".shop_item-model").textContent,
        price: parseInt(e.target.parentElement.querySelector(".shop_item-price").textContent.slice(1)),
        id: parseInt(e.target.dataset.id)
    }

    user.cart.push(selectedItem);
    setUserLocalStorage(user);
    renderCart(user.cart);
}

function removeFromCart(e){
    let user = getUserLocalStorage();
    console.log(e.target.parentElement.dataset.id);
    console.log(user.cart);
    let newCart = user.cart.filter((item) => item.id != parseInt(e.target.parentElement.dataset.id));
    user.cart = newCart;
    renderCart(user.cart);
    setUserLocalStorage(user);
}



/* function addToCart(e, user){
    const cartItems = document.getElementById("cart_items");
    //Table ROW items
    const row = document.createElement("tr");
    //Total Items DOM
    const totalItems = document.getElementById("cart_icon-totalItems");
    //Total value DOM
    const totalValue = document.getElementById("cart_total-value")
    //Remove Item
    const removeItem = document.getElementsByClassName("cart_removeItem")

    //user.cart ? console.log("Existe") : user.cart = new Cart();

    console.log(user)

    const selectedItem = {
        //Se puede mejorar obteniendo solo una vez el parentElement
        category: e.target.parentElement.querySelector(".shop_item-title").textContent,
        brand: e.target.parentElement.querySelector(".shop_item-brand").textContent,
        model_version: e.target.parentElement.querySelector(".shop_item-model").textContent,
        price: e.target.parentElement.querySelector(".shop_item-price").textContent,
        id: e.target.dataset.id
    }
    //Print data of selected item
    console.log(`${selectedItem.category} + ${selectedItem.brand} + ${selectedItem.model_version} + ${selectedItem.price}`)
    if (user.cart.items.some((el) => el.category  == selectedItem.category) && (selectedItem.category != "LICENCIA")){
        alert(`Ya tenes un item de la categoria ${selectedItem.category} en el carrito`)
    }
    else if (user.cart.items.some((el) => el.brand  == selectedItem.brand) && (selectedItem.category === "LICENCIA")){
        alert(`Ya tenes una licencia para la aplicacion de ${selectedItem.brand}`)
    }
    else{
        alert("Se agrego el Item al carrito")
        row.innerHTML = `
        <th scope="row">${selectedItem.category}</td>
        <td>${selectedItem.brand}</td>
        <td>${selectedItem.model_version}</td>
        <td>${selectedItem.price}</td>
        <td>
            <a data-id=${selectedItem.id} class="cart_removeItem">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </a>
        </td>
        `

        removeItem.addEventListener("click", (e) => {
            alert(`Se quiere eliminar el item ${e.target.parentElement.dataset.id}`);
        });
        //Agrega el nuevo item al DOM carrito
        cartItems.append(row)
        //Modifica datos del user.cart => Agrega item al carrito, Suma 1 al totalItems, Suma el valor del item al totalValue
        user.cart.items.push(selectedItem);
        user.cart.totalItems += 1;
        user.cart.totalValue += parseInt(selectedItem.price.slice(1));
        //Guarda el usuario con los nuevos datos en el local storage
        setUserLocalStorage(user);
        //Suma una unidad al total de items en el DOM
        totalItems.textContent = `${user.cart.totalItems}`
        //Actualizo el valor del totalValue
        totalValue.textContent = `$${user.cart.totalValue}`
    }
} */



