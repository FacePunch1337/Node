import express from "express";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";

dotenv.config();

const app = express();

const __dirname = path.resolve(path.dirname("."));
const pathToFile = path.resolve(__dirname, "pages");
let data = "";
app.get('/', (req,res) =>{
    res.send("Hello");
})

app.get('/home', (req,res) =>{
   
    data = fs.readFileSync(path.resolve(pathToFile, 'home.html'));
    res.write(data);
    
})


app.get('/about', (req,res) =>{
   
    data = fs.readFileSync(path.resolve(pathToFile, 'about.html'));
    res.write(data);
    
})

app.listen(process.env.PORT, () =>{
    console.log(`Server started ${process.env.PORT}`);
})