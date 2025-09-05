import type { Request, Response, NextFunction } from "express";
import { characters, type Character } from "../models/character.ts";

export const addNewCharacter = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name } = req.body;
    const newCharacter: Character = {
      id: Date.now(),
      name,
      class: "priest",
      level: 10,
    };
    characters.push(newCharacter);
    res.status(201).json(newCharacter);
  } catch (error) {
    next(error);
  }
};

export const getAllCharacters = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.json(characters);
  } catch (error) {
    next(error);
  }
};

export const getCharacterById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.id!, 10);
    const character = characters.find((i) => i.id === id);
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
    const id = parseInt(req.params.id!, 10);
    const { name } = req.body;
    const charIndex = characters.findIndex((i) => i.id === id);
    if (charIndex === -1) {
      res.status(404).json({ message: "Character not found" });
      return;
    }
    characters[charIndex]!.name = name;
    res.json(characters[charIndex]);
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
    const id = parseInt(req.params.id!, 10);
    const charIndex = characters.findIndex((i) => i.id === id);
    if (charIndex === -1) {
      res.status(404).json({ message: "Character not found" });
      return;
    }
    const deletedCharacter = characters.splice(charIndex, 1)[0];
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
