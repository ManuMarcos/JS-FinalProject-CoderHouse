



const logOutButton = document.getElementById("log-out");
logOutButton.addEventListener("click", (e) => {
    localStorage.clear();
    alert("Local Storage Cleaner")
})
