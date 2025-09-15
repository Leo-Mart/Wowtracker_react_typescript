import mongoose, { Schema, Document } from "mongoose";

export interface ICharacter extends Document {
  name: string;
  level: number;
  itemLevelEquipped: number;
  faction: string;
  race: string;
  class: string;
  spec: string;
  keystoneProfileCurrentSeason: keystoneProfileCurrentSeason;
  assets: [
    {
      key: string;
      value: string;
    },
  ];
}

export interface keystoneProfileCurrentSeason {
  bestRuns: [
    {
      completedAt: number;
      duration: number;
      keystoneLevel: number;
      affixes: [
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
          equippedItemLevel: number;
        },
      ];
      dungeon: {
        name: string;
        id: number;
      };
      completedInTime: boolean;
      earnedRating: {
        rating: number;
      };
    },
  ];
  currentMythicRating: number;
}

const characterSchema: Schema = new Schema<ICharacter>({
  name: { type: String, required: true },
  level: { type: Number, required: true },
  itemLevelEquipped: { type: Number, required: true },
  faction: { type: String, required: true },
  race: { type: String, required: true },
  class: { type: String, required: true },
  spec: { type: String, required: true },
  keystoneProfileCurrentSeason: {
    best_runs: [
      {
        completedAt: { type: Number },
        duration: { type: Number },
        keystoneLevel: { type: Number },
        affixes: [
          {
            name: { type: String },
          },
        ],
        members: [
          {
            character: {
              name: { type: String },
            },
            specialization: {
              name: { type: String },
            },
            race: {
              name: { type: String },
            },
            equippedItemLevel: { type: Number },
          },
        ],
        dungeon: {
          name: { type: String },
          id: { type: Number },
        },
        completedInTime: { type: Boolean },
        earnedRating: {
          rating: { type: Number },
        },
      },
    ],
    currentMythicRating: { type: Number },
  },
  assets: [
    {
      key: { type: String },
      value: { type: String },
    },
  ],
});

const Character = mongoose.model("Character", characterSchema);

export default Character;
