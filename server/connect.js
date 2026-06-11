import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config({path: "./server/config.env"});

const ATLAS_URI = process.env.ATLAS_URI;
if(!ATLAS_URI) throw new Error("ATLAS_URI is not set");
const client = new MongoClient(ATLAS_URI);
let db;

export async function connectDB(){
    if(!db){
        await client.connect();
        db = client.db("tableReservation");
        console.log("Connected to MongoDB");
    }

    return db;
}