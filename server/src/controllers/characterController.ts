import type { Request, Response, NextFunction } from "express";
import { type Character } from "../models/character.ts";
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
    const { name, level } = req.body;
    //FIXME: temporary. This will only take character name, realm and regoion and then make the request to blizzards api and then create a new character in the db with the fetched character.
    const newCharacter = await saveNewCharacter(name, level);
    res.status(201).json(newCharacter);
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
    const characters: Character[] = await findAllCharacters();
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
    const character: Character | null = await findCharacterById(id);
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

const getCharacterProfileSummary = async (
  accessToken: string,
  characterName: string,
  characterRealm: string,
  characterRegion: string,
) => {
  const response = await fetch(
    `https://${characterRegion}.api.blizzard.com/profile/wow/character/${characterRealm}/${characterName}?namespace=profile-eu&locale=en_GB`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  );
  const data = await response.json();

  console.log(data);
};

//const token: BlizzardAccessToken = await GetBlizzardAPIToken();

//getCharacterProfileSummary(token.AccessToken, "ashir", "shadowsong", "eu");
