import http from "http"; 
import fs from "fs";
import path from "path";

const __dirname = path.resolve(path.dirname("."));
const pathToFile = path.resolve(__dirname, "pages");
const PORT = 3000;
let data = "";
const server = http.createServer((request, response) =>{
    console.log(request.url);
    switch(request.url){
        case "/home":
            data = fs.readFileSync(path.resolve(pathToFile, 'home.html'));
            response.end(data);
            break;
        case "/about":
            data = fs.readFileSync(path.resolve(pathToFile, 'about.html'));
            response.end(data);
            break;
        default:
            response.end("Not Found!");
            break;
    }   
    
    
 

})

server.listen(PORT, "localhost", (err) =>{
    if(err) console.log(err);
    else{
        console.log(`Server started http://localhost:${PORT}`);
    }
})