import express from "express";
import {
  getAllNotes,
  createdNote,
  updateNote,
  deleteNote,
  getNoteById,
} from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createdNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
