import dotenv from "dotenv";
import { MongoClient } from "mongodb";
dotenv.config();

let client;
let db;
const uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    if (!client) {
      client = new MongoClient(uri);
      await client.connect();
      db = client.db(process.env.DB_NAME);
      console.log("Connected to MongoDB");
    }
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    process.exit(1);
  }
};

export { connectDB, db };
