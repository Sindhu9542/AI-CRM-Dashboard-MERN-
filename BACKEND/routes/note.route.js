import { Router } from "express";
import{
    getNotes,
    createNotes,
    updateNotes,
    deleteNotes,
} from "../controllers/note.controller.js";
import {protect} from "../middlewares/auth.middleware.js";
const router=Router();
router.use(protect);
router.route("/").get(getNotes).post(createNotes);
router.route("/:id").put (updateNotes).delete(deleteNotes);
export default router;