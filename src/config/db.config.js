import mongoose from "mongoose";

import { config } from "dotenv";

const innnitializeDatabaseConnection = () => {
  config();
  const { MONGO_URI } = process.env;
  mongoose.connect(MONGO_URI);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "Connection error:"));
  db.once("open", () => console.log("Connected to the database"));
};






export default innnitializeDatabaseConnection;
