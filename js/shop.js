import {renderStockItems,renderCart, renderAssignedItems} from "./manejo_del_dom.js"
import{getUserLocalStorage,setUserLocalStorage} from "./local_storage.js"
export{removeFromCart, addToCart, assignItems, filterItems}

//Fetch that brings information from --> hardware-stock.json and licencias-stock.json
const fetchData  = async() => {
    try{
        const stockRequest = await fetch("../stock.json");
        const stock = await stockRequest.json();
        const localStorageUser = getUserLocalStorage();
        renderStockItems(stock, "todos");
        renderCart(localStorageUser.cart);
        renderAssignedItems(localStorageUser.assignedItems);
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

    if (checkItemsQuantity (user, selectedItem)){
        user.cart.push(selectedItem);
        setUserLocalStorage(user);
        renderCart(user.cart);
    }
}


function removeFromCart(e){
    let user = getUserLocalStorage();
    console.log(e.target.parentElement.dataset.id);
    console.log(user.cart);
    let newCart = user.cart.filter((item) => item.id != parseInt(e.target.parentElement.dataset.id));
    user.cart = newCart;
    setUserLocalStorage(user);
    renderCart(user.cart);
}


function checkItemsQuantity(user, selectedItem){
    const filterCart = user.cart.filter((item) => item.category == selectedItem.category);
    const filterAssignedItems = user.assignedItems.filter((item) => item.category == selectedItem.category);

    if (selectedItem.category === "LICENCIA"){
        if (filterCart.some((item) => item.brand === selectedItem.brand)){
            alert(`Ya tenes una licencia para ${selectedItem.brand} en el carrito`);
            return false;
        }
        else if (filterAssignedItems.some((item) => item.brand === selectedItem.brand)){
            alert(`Ya tenes asignada una licencia para ${selectedItem.brand}`);
            return false;
        }
        return true;
    }
    
    if (filterCart.length > 0){
        alert(`Ya tenes un item de la categoria ${selectedItem.category} en el carrito`);
        return false;
    }
    else if (filterAssignedItems.length > 0){
        alert(`Ya tenes asignado un item de la categoria ${selectedItem.category}`)
        return false;
    }
    return true;
}

function assignItems(){
    const user  = getUserLocalStorage();
    user.cart.forEach(item => {
        user.assignedItems.push(item);
    });

    //Empty cart
    user.cart = [];
    //Update de localstorage user
    setUserLocalStorage(user);
    //Render empty cart
    renderCart(user.cart)
    //Render assigned items
    renderAssignedItems(user.assignedItems);
}

function filterItems(category){

}