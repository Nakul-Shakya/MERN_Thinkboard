import express from "express";
import {
  getAllNotes,
  createdNote,
  updateNote,
  deleteNote,
} from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/sth", getAllNotes);
router.post("/", createdNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
