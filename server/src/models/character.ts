export interface Character {
  id: number;
  name: string;
  class: string;
  level: number;
}

export let characters: Character[] = [];

import mongoose, { Schema, Document } from "mongoose";

interface CharacterTest extends Document {
  name: string;
  level: number;
}

const characterSchema: Schema = new Schema<CharacterTest>({
  name: { type: String, required: true },
  level: { type: Number, required: true },
});

const CharacterModel = mongoose.model("Character", characterSchema);

export default CharacterModel;
