const http = require("http");

const server = http.createServer((req , res)=>{
     // request - sorov
     // response - javob
 console.log(req.url);

 res.write("Helllo world") ; 
 res.end()
})


server.listen(3000 , ()=>{
    console.log('Server has been started 3000 port');
})












