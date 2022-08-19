import {renderHardware,renderSoftware} from "./manejo_del_dom.js"

let cartTextValue = 0;
let cartItemsTotal = 0;

//fetch
const fetchData  = async() => {
    try{
        const hardwareRequest = await fetch("../hardware-stock.json");
        const softwareRequest = await fetch("../licencias-stock.json");
        const hardware = await hardwareRequest.json();
        const software = await softwareRequest.json();
        
        renderHardware(hardware);
        renderSoftware(software);

        agregarEventListener();

    }catch (error){
        console.log(error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetchData();
})



/* const buttons = document.getElementsByClassName("shop_item-btn"); */


/* function pepe(){
    for (const button of buttons) {
        console.log(button.innerHTML)
    }
    alert("hola")
} */

function agregarEventListener(){
    const buttons = document.getElementsByClassName("shop_item-btn");
    console.log(buttons)
    for (const button of buttons) {
        console.log(button);
        button.addEventListener("click", (e) => {
            const cartItems = document.getElementById("cart_items")
            const cartText = document.getElementById("cart_text");
            const row = document.createElement("tr");
            const cartTotal = document.querySelector(".cart_total-value");
            
            let itemPrice = e.target.parentElement.querySelector(".shop_item-price").innerText;

            row.innerHTML = `
            <th scope="row">${e.target.parentElement.querySelector(".shop_item-title").innerText}</th>
            <td>${e.target.parentElement.querySelector(".shop_item-brand").innerText}</td>
            <td>${e.target.parentElement.querySelector(".shop_item-model").innerText}</td>
            <td>${itemPrice}</td>
            <td>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </a>
            </td>
            `
            cartItems.append(row)
            cartTextValue += 1;
            cartText.innerHTML = cartTextValue;  
            cartItemsTotal += parseInt(itemPrice.slice(1));
            console.log(cartItemsTotal);

            cartTotal.innerText = `$${cartItemsTotal}`    
        })
    }
}


/* cartText.innerHTML = "8"
console.log(cartText.innerHTML); */





    







