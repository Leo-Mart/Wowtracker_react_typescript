import mongoose from "mongoose";
import type { HydratedDocument } from "mongoose";
import Character, { type ICharacter } from "../models/character.ts";
import { GetBlizzardAPIToken } from "../utils/helpers.ts";

interface characterProfileResponse {
  name: string;
  level: number;
  equipped_item_level: number;
  faction: {
    name: string;
  };
  race: {
    name: string;
  };
  character_class: {
    name: string;
  };
  active_spec: {
    name: string;
  };
}

export const findAllCharacters = async (): Promise<ICharacter[]> => {
  const characters: ICharacter[] = await Character.find();
  return characters;
};

export const findCharacterById = async (
  id: mongoose.Types.ObjectId,
): Promise<ICharacter | null> => {
  const foundCharacter: ICharacter | null = await Character.findById(id);
  if (!foundCharacter) {
    console.error("Could not find character with id: ", id);
    return null;
  }
  return foundCharacter;
};

export const saveNewCharacter = async (
  name: string,
  realm: string,
  region: string,
) => {
  // fetch character data from Bliizards api
  const token = await GetBlizzardAPIToken();

  const characterProfile = await getCharacterProfileSummary(
    token.AccessToken,
    name,
    realm,
    region,
  );

  const newCharacter = new Character({
    name: characterProfile.name,
    level: characterProfile.level,
    itemLevelEquipped: characterProfile.equipped_item_level,
    faction: characterProfile.faction.name,
    race: characterProfile.race.name,
    class: characterProfile.character_class.name,
    spec: characterProfile.active_spec.name,
  });

  const savedCharacter = await newCharacter.save();

  return savedCharacter;
};

export const updateCharacterById = async (
  id: mongoose.Types.ObjectId,
  name: string,
) => {
  const updatedCharacter = await Character.findByIdAndUpdate(id, {
    name: name,
  });
  return updatedCharacter;
};

export const findCharacterByIdAndDelete = async (
  id: mongoose.Types.ObjectId,
) => {
  //FIXME: PROMISE DOCUMENT UNKNOWN, check for correct type. HydratedDocument?
  const deletedCharacter = await Character.findByIdAndDelete(id);
  return deletedCharacter;
};

const getCharacterProfileSummary = async (
  accessToken: string,
  characterName: string,
  characterRealm: string,
  characterRegion: string,
): Promise<characterProfileResponse> => {
  const response = await fetch(
    `https://${characterRegion}.api.blizzard.com/profile/wow/character/${characterRealm}/${characterName}?namespace=profile-eu&locale=en_GB`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  );
  const data = (await response.json()) as characterProfileResponse;

  return data;
};
