import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { connectDB } from "./database/db.js";
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

// imports route will go here

// mongodb connection will appear here
connectDB();

// routes will go here

app.get("/", (req, res) => {
  res.send("Line Nai server is running");
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
