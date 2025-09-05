import { Router } from "express";
import {
  addNewCharacter,
  getAllCharacters,
  getCharacterById,
  updateCharacter,
  deleteCharacter,
} from "../controllers/characterController.ts";

const router = Router();

router.get("/", getAllCharacters);
router.get("/:id", getCharacterById);
router.post("/", addNewCharacter);
router.put("/:id", updateCharacter);
router.delete("/:id", deleteCharacter);

export default router;
