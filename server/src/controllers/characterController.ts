import type { Request, Response, NextFunction } from "express";
import { type ICharacter } from "../models/character.ts";
import {
  findAllCharacters,
  findCharacterById,
  findCharacterByIdAndDelete,
  saveNewCharacter,
  updateCharacterById,
} from "../services/characterService.ts";
import mongoose from "mongoose";

export const addNewCharacter = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, realm, region } = req.body;
    const newCharacter = await saveNewCharacter(name, realm, region);
    res.status(201);
  } catch (error) {
    next(error);
  }
};

export const getAllCharacters = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const characters: ICharacter[] = await findAllCharacters();
    if (!characters) {
      res.status(404).json({ message: "Could not find characters" });
      return;
    }
    res.json(characters);
  } catch (error) {
    next(error);
  }
};

export const getCharacterById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(
      req.params.id!,
    );
    const character: ICharacter | null = await findCharacterById(id);
    if (!character) {
      res.status(404).json({ message: "Character not found" });
      return;
    }
    res.json(character);
  } catch (error) {
    next(error);
  }
};

export const updateCharacter = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(
      req.params.id!,
    );
    const { name } = req.body;
    const updatedCharacter = updateCharacterById(id, name);
    res.json(updatedCharacter);
  } catch (error) {
    next(error);
  }
};

export const deleteCharacter = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(
      req.params.id!,
    );
    const deletedCharacter = findCharacterByIdAndDelete(id);
    res.json(deletedCharacter);
  } catch (error) {
    next(error);
  }
};
