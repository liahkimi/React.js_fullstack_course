import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import rootRouter from "./routes/rootRouter.js";
//import rootRouter

const app = express();
const port = 8000;
dotenv.config();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
})
app.use(cors({
    origin:"*",
    method : ["GET", "POST", "DELETE", "PUT"],
}))

app.use("/", rootRouter);
app.listen(port, ( ) => {
    console.log(`${port}서버 실행!`)
})