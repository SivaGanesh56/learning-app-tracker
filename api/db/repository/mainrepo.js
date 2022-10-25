import {Main, Article} from "../models/Main";

class Main {
    main;
    constructor(){
       this.main = Main;
    }
    getTaskOfTheDay({date, user}){
        return this.main.findAll({
            where: {
                date : date,
                user : user,
            },
            include : {
                model : Article,
                required : true,  
            }
        })
    }   
    
}