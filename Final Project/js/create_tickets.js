import {Ticket} from "../js/classes/ticket.js";
import {renderTickets} from "./manejo_del_dom.js";
import {getUserLocalStorage,setUserLocalStorage} from "./local_storage.js";



function createTicket(){

    const ticketForm = document.getElementById("ticket-form");
    
    ticketForm.addEventListener("submit", (e) => {
        e.preventDefault();

        console.log(e.target)

        const {ticketAffair, ticketDescription, ticketFinishDate, ticketCategory} = e.target;

        console.log(ticketAffair.value);
        console.log(ticketDescription.value);
        console.log(ticketFinishDate.value);
        console.log(ticketCategory.value);

        const newTicket = new Ticket(ticketAffair.value, ticketDescription.value, ticketFinishDate.value, ticketCategory.value)

        let localStorageUser = getUserLocalStorage();

        localStorageUser.tickets.push(newTicket);

        console.log(localStorageUser);

        renderTickets(localStorageUser.tickets);

        setUserLocalStorage(localStorageUser);
        
        /* sentEmail(localStorageUser.nombre, localStorageUser.email,  newTicket.affair, newTicket.description, newTicket.finishDate, newTicket.category); */
        
        ticketForm.reset();

        

        /* location.reload(); */
        
    })
}



function sentEmail(userName, userEmail, ticketAffair, ticketDescription, ticketFinishDate, ticketCategory){
    var templateParams = {
        to_name: userName,
        to_email: userEmail,
        ticketAffair,
        ticketDescription,
        ticketFinishDate,
        ticketCategory
    };
     
    emailjs.send('service_rpneddl', 'template_qwdr0tp', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert("Se te ha enviado un correo a tu casilla con los datos del ticket")
        }, function(error) {
           console.log('FAILED...', error);
        });
}

/* ------------------------------------RUN-------------------------------------------------- */
let user = getUserLocalStorage();
renderTickets(user.tickets);
createTicket();


let todayDate = new Date();
console.log(todayDate);
console.log(todayDate.getTime());