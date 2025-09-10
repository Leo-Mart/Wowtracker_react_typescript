import mongoose, { Schema, Document } from "mongoose";

export interface ICharacter extends Document {
  name: string;
  level: number;
  itemLevelEquipped: number;
  faction: string;
  race: string;
  class: string;
  spec: string;
  assets: [
    {
      key: string;
      value: string;
    },
  ];
}

const characterSchema: Schema = new Schema<ICharacter>({
  name: { type: String, required: true },
  level: { type: Number, required: true },
  itemLevelEquipped: { type: Number, required: true },
  faction: { type: String, required: true },
  race: { type: String, required: true },
  class: { type: String, required: true },
  spec: { type: String, required: true },
  assets: [
    {
      key: { type: String },
      value: { type: String },
    },
  ],
});

const Character = mongoose.model("Character", characterSchema);

export default Character;
