import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import events from "events";




const emitter = new EventEmitter();

emitter.addListener("show", data => {
    console.log("show ON: ", data)
})

emitter.addListener("hide", data => {
    console.log("hide ON: ", data)
})

emitter.emit("show", {message: "Show products page"});
emitter.emit("hide", {message: "Hided products page"});
const __dirname = path.resolve(path.dirname("."));
fs.readFile(path.resolve(__dirname, "logs", "data.json"), (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    else {
        console.log(JSON.parse(data.toString()));
        console.log(`${student.name} ${student.age} ${student.group}`);
    }
})