const Events = require('events')

class Logger extends Events {
    log(a , b ) {                    
     this.emit("calculate" , a + b)    ///  calculate eventi hohlaganday nom berish mumkin 
    }
}

const logger = new Logger(); 

logger.on("calculate" , (data)=>{     // .on( "event nomi", (malumot) => {})
    console.log(data);
})

logger.log(8 , 5)
