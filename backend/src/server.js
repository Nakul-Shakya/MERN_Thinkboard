import express from "express";
import notesRouters from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 5001;
dotenv.config();
connectDB();

// Middleware
app.use(express.json())


app.use("/api/notes", notesRouters);




app.listen(PORT, () => {
  console.log(`Sercer started on PORT: ${PORT}`);
});
