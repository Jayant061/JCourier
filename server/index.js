import  express  from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
import cors from "cors"
import { sendEmail } from "./api/config.js";
config();

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Working all Good!");
});

app.post("/sendEmail",(req,res)=>{
    const name = req?.body?.name;
    const email = req?.body?.email;
    const message = req?.body?.message
    sendEmail(name,email,message,res);
})

app.listen(3002,()=>{console.log("Server is running at port 3002");});