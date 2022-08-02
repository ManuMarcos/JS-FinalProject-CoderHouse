import {stock} from "./stock.js";

const cardsBox = document.getElementById("cards-box")

function imprimirInventario(inventario){
    for (const hardware of inventario.equipos) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img class="card-img-top" src="${hardware.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${hardware.categoria}</h5>
                <h6>${hardware.marca}</h6>
                <span class="card-text">${hardware.modelo}</span>
                <p class="card-text">$${hardware.precio}</p>
                <a href="#" class="btn btn-primary">Agregar</a>
            </div>`;
        cardsBox.appendChild(card);
    }
    for (const licencia of inventario.licencias) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img class="card-img-top" src="${licencia.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${licencia.softwareName}</h5>
                <h6>${licencia.type}</h6>
                <span class="card-text">${licencia.renewal}</span>
                <p class="card-text">$${licencia.price}</p>
                <a href="#" class="btn btn-primary">Agregar</a>
            </div>`;
        cardsBox.appendChild(card);
    }
}

function hardwareToDom(inventario){
    for (const hardware of inventario.equipos) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img class="card-img-top" src="${hardware.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${hardware.categoria}</h5>
                <h6>${hardware.marca}</h6>
                <span class="card-text">${hardware.modelo}</span>
                <p class="card-text">$${hardware.precio}</p>
                <a href="#" class="btn btn-primary">Agregar</a>
            </div>`;
        cardsBox.appendChild(card);
    }
}

function softwareToDom(inventario){
    for (const licencia of inventario.licencias) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img class="card-img-top" src="${licencia.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${licencia.softwareName}</h5>
                <h6>${licencia.type}</h6>
                <span class="card-text">${licencia.renewal}</span>
                <p class="card-text">$${licencia.price}</p>
                <a href="#" class="btn btn-primary">Agregar</a>
            </div>`;
        cardsBox.appendChild(card);
    }
}


imprimirInventario(stock);

const buttons = document.getElementsByClassName("btn-check");

for (const button of buttons) {
    button.addEventListener("click", (e) => {   
        let cardsBox = document.getElementById("cards-box");
        cardsBox.innerHTML = "";
        switch(e.target.value){
            case "all":
                imprimirInventario(stock);
                break;
            case "software":
                softwareToDom(stock);
                break;
            case "hardware":
                hardwareToDom(stock);
                break;
        }
    })
}



let cart = document.getElementById("cart");

/* cart.classList.add("none") */