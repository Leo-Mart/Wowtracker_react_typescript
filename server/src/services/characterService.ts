import mongoose from "mongoose";
import type { HydratedDocument } from "mongoose";
import CharacterModel, { type Character } from "../models/character.ts";

export const findAllCharacters = async (): Promise<Character[]> => {
  const characters: Character[] = await CharacterModel.find();
  return characters;
};

export const findCharacterById = async (
  id: mongoose.Types.ObjectId,
): Promise<Character | null> => {
  const foundCharacter: Character | null = await CharacterModel.findById(id);
  if (!foundCharacter) {
    console.error("Could not find character with id: ", id);
    return null;
  }
  return foundCharacter;
};

export const saveNewCharacter = async (name: string, level: number) => {
  //FIXME: PROMISE DOCUMENT UNKNOWN, check for correct type. HydratedDocument?
  const newCharacter = new CharacterModel({ name: name, level: level });

  const savedCharacter = await newCharacter.save();
  return savedCharacter;
};

export const updateCharacterById = async (
  id: mongoose.Types.ObjectId,
  name: string,
) => {
  const updatedCharacter = await CharacterModel.findByIdAndUpdate(id, {
    name: name,
  });
  return updatedCharacter;
};

export const findCharacterByIdAndDelete = async (
  id: mongoose.Types.ObjectId,
) => {
  //FIXME: PROMISE DOCUMENT UNKNOWN, check for correct type. HydratedDocument?
  const deletedCharacter = await CharacterModel.findByIdAndDelete(id);
  return deletedCharacter;
};
