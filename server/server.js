import express from "express";
import cors from "cors";
import api from "./api.js";
import dotenv from "dotenv";
import {connectDB} from "./connect.js";
dotenv.config({path: "./config.env"});

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", api);

await connectDB();

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})