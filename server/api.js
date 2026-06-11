import { connectDB } from "./connect.js";
import express from "express";

const router = express.Router();

router.get("/reservations", async (req, res) => {
  try {
    const db = await connectDB();
    const results = await db.collection("reservations").find({}).toArray();
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/tables", async (req, res) => {
  try {
    const db = await connectDB();
    const results = await db.collection("tables").find({}).toArray();
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

router.post("/reservations",async (req, res) => {
    try {
        const body = {...req.body, status: "pending", table: null};
        const db = await connectDB();
        await db.collection("reservations").insertOne(body);
        res.status(200).json({ message: "Reservation created successfully" });
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
})

export default router;