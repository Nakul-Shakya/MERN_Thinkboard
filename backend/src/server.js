import express from "express";
import notesRouters from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5001;
dotenv.config();


// Middleware
app.use(express.json());
app.use(rateLimiter);
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/notes", notesRouters);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Sercer started on PORT: ${PORT}`);
  });
});
