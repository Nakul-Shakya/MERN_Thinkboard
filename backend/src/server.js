import express from "express";
import notesRouters from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
connectDB();

app.use("/api/notes", notesRouters);




app.listen(3000, () => {
  console.log("Sercer started on PORT: 3000");
});
