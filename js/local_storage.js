export {getUserLocalStorage,setUserLocalStorage};


let cart = [];



const logOutButton = document.getElementById("log-out");
logOutButton.addEventListener("click", (e) => {
    localStorage.clear();
    alert("Se cerro la sesión exitosamente")
})

function addToCart(item){
    
}


function getUserLocalStorage(){
    let user = JSON.parse(localStorage.getItem("user"));
    return user;
}


function setUserLocalStorage(user){
    localStorage.setItem("user",JSON.stringify(user));
}

