import mongoose, { Schema, Document } from "mongoose";

export interface Character extends Document {
  name: string;
  level: number;
}

const characterSchema: Schema = new Schema<Character>({
  name: { type: String, required: true },
  level: { type: Number, required: true },
});

const CharacterModel = mongoose.model("Character", characterSchema);

export default CharacterModel;
