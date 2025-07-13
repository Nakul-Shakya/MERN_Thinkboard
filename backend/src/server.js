import express from "express";
import notesRouters from "./routes/notesRoutes.js";
const app = express();

app.use("/api/notes", notesRouters);
app.use("/api/product", productRoutes);

app.listen(3000, () => {
  console.log("Sercer started on PORT: 3000");
});
