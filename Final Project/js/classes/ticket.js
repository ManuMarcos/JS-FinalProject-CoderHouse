export{Ticket};

class Ticket{

    constructor(affair, description, finishDate, category){
        this.creationDate = this.setDate();
        this.affair = affair;
        this.description = description;
        this.finishDate = new Date(finishDate);
        this.category = category;
        this.priority = this.setPriority();
        this.state = "abierto";
    }



    /*Obtiene la fecha del dia de hoy y la convierte a milisegundos. Luego obteniene la diferencia entre la fecha de finalizacion y la fecha actual
    Si la diferencia es:
    < 2 --> Prioridad: Alta
    > 2 y < 10 --> Prioridad: Media
    > 10 --> Prioridad: Baja
    */


    setDate(){
        const todayDate = Date();
        return `${todayDate}`;
    }

    setPriority(){
        const todayDateinTime = new Date().getTime();
        console.log(todayDateinTime);
        const diffInTime = this.finishDate.getTime() - todayDateinTime;
        const diffInDays = diffInTime / (1000 * 3600 * 24);

        if (diffInDays < 2){
            return "alta";
        }
        else if (2 < diffInDays && diffInDays < 10){
            return "media"
        }
        else{
            return "baja"
        }
    }
}