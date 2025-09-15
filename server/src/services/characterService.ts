import mongoose from "mongoose";
import Character, {
  type ICharacter,
  type keystoneProfileCurrentSeason,
} from "../models/character.ts";
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
// TODO: Break out these types/intarfaces to its own file.
export interface characterMplusProfileResponse {
  best_runs: [
    {
      completed_timestamp: number;
      duration: number;
      keystone_level: number;
      keystone_affixes: [
        {
          name: string;
        },
      ];
      members: [
        {
          character: {
            name: string;
          };
          specialization: {
            name: string;
          };
          race: {
            name: string;
          };
          equipped_item_level: number;
        },
      ];
      dungeon: {
        name: string;
        id: number;
      };
      is_completed_within_time: boolean;
      mythic_rating: {
        rating: string;
      };
    },
  ];
  mythic_rating: {
    rating: number;
  };
}

interface characterGearResponse {}

interface asset {
  key: string;
  value: string;
}

interface characterMediaResponse {
  assets: Array<asset>;
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
  const token = await GetBlizzardAPIToken();

  // fetch character summary from Bliizards api
  const characterProfile: characterProfileResponse =
    await getCharacterProfileSummary(token.AccessToken, name, realm, region);

  //Fetch characters media from blizzards api
  const media: characterMediaResponse = await getCharacterMedia(
    token.AccessToken,
    name,
    realm,
    region,
  );

  // Fetch characters keystone profile from blizzards api
  const keyRuns: characterMplusProfileResponse =
    await getCharacterMythicPlusProfileForCurrentSeason(
      token.AccessToken,
      name,
      realm,
      region,
      15,
    );
  // fetch characters gear/equipment from blizzards api
  await getCharacterGear(token.AccessToken, name, realm, region);
  // fetch characters spec info from blizzards api

  //TODO: fix spec endpoint, getting wrong info as it is. Should use the 'specializations' field not active_spec
  const newCharacter = new Character({
    name: characterProfile.name,
    level: characterProfile.level,
    itemLevelEquipped: characterProfile.equipped_item_level,
    faction: characterProfile.faction.name,
    race: characterProfile.race.name,
    class: characterProfile.character_class.name,
    spec: characterProfile.active_spec.name,
    keystoneProfileCurrentSeason: keyRuns,
    assets: media.assets,
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
  //FIXME: Fix return object only returning fields I need?

  return data;
};

const getCharacterMythicPlusProfileForCurrentSeason = async (
  accessToken: string,
  characterName: string,
  characterRealm: string,
  characterRegion: string,
  currentMplusSeason: number,
): Promise<characterMplusProfileResponse> => {
  const response = await fetch(
    `https://${characterRegion}.api.blizzard.com/profile/wow/character/${characterRealm}/${characterName}/mythic-keystone-profile/season/${currentMplusSeason}?namespace=profile-eu&locale=en_GB`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  );

  const data = (await response.json()) as characterMplusProfileResponse;

  return data;
};

const getCharacterGear = async (
  accessToken: string,
  characterName: string,
  characterRealm: string,
  characterRegion: string,
) => {
  const response = await fetch(
    `https://${characterRegion}.api.blizzard.com/profile/wow/character/${characterRealm}/${characterName}/equipment?namespace=profile-eu`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  );

  const data = await response.json();

  // TODO: fix return
};

const getCharacterMedia = async (
  accessToken: string,
  characterName: string,
  characterRealm: string,
  characterRegion: string,
): Promise<characterMediaResponse> => {
  const response = await fetch(
    `https://${characterRegion}.api.blizzard.com/profile/wow/character/${characterRealm}/${characterName}/character-media?namespace=profile-eu`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  );

  const data = (await response.json()) as characterMediaResponse;

  //FIXME: Fix return object only returning fields I need?
  return data;
};
