import mongoose, { Schema, Document } from "mongoose";

export interface ICharacter extends Document {
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
  character_gear: [
    {
      item: {
        id: number;
      };
      name: string;
    },
  ];
  keystoneProfileCurrentSeason: {
    bestRuns: [
      {
        completed_timestamp: number;
        duration: number;
        keystone_level: number;
        keystone_affixes: [
          {
            id: number;
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
        is_completed_within_time: boolean;
        mythic_rating: {
          rating: number;
        };
      },
    ];
    mythic_rating: {
      rating: number;
    };
  };
  specializations: [
    {
      specialization: {
        name: string;
      };
      loadouts: [
        {
          is_active: boolean;
          talent_loadout_code: string;
          selected_class_talents: [
            {
              tooltip: {
                spell_tooltip: {
                  spell: {
                    name: string;
                    id: number;
                  };
                };
              };
            },
          ];
          selected_spec_talents: [
            {
              tooltip: {
                spell_tooltip: {
                  spell: {
                    name: string;
                    id: number;
                  };
                };
              };
            },
          ];
          selected_hero_talents: [
            {
              tooltip: {
                spell_tooltip: {
                  spell: {
                    name: string;
                    id: number;
                  };
                };
              };
            },
          ];
        },
      ];
    },
  ];
  assets: [
    {
      key: string;
      value: string;
    },
  ];
}

//TODO: Clean up/refactor the model at some point. the specializations array is especially egrious, don't need to dig that deep. Could probably just move the spell object to the top or something

const characterSchema: Schema = new Schema<ICharacter>({
  name: { type: String, required: true },
  level: { type: Number, required: true },
  equipped_item_level: { type: Number, required: true },
  faction: {
    name: { type: String, required: true },
  },
  race: {
    name: { type: String, required: true },
  },
  character_class: {
    name: { type: String, required: true },
  },
  active_spec: {
    name: { type: String, required: true },
  },
  specializations: [
    {
      specialization: {
        name: { type: String },
      },
      loadouts: [
        {
          is_active: { type: Boolean },
          talent_loadout_code: { type: String },
          selected_class_talents: [
            {
              tooltip: {
                spell_tooltip: {
                  spell: {
                    name: { type: String },
                    id: { type: Number },
                  },
                },
              },
            },
          ],
          selected_spec_talents: [
            {
              tooltip: {
                spell_tooltip: {
                  spell: {
                    name: { type: String },
                    id: { type: Number },
                  },
                },
              },
            },
          ],
          selected_hero_talents: [
            {
              tooltip: {
                spell_tooltip: {
                  spell: {
                    name: { type: String },
                    id: { type: Number },
                  },
                },
              },
            },
          ],
        },
      ],
    },
  ],
  character_gear: [
    {
      item: {
        id: { type: Number },
      },
      name: { type: String },
    },
  ],
  keystoneProfileCurrentSeason: {
    best_runs: [
      {
        completed_timestamp: { type: Number },
        duration: { type: Number },
        keystone_level: { type: Number },
        keystone_affixes: [
          {
            id: { type: Number },
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
        is_completed_within_time: { type: Boolean },
        mythic_rating: {
          rating: { type: Number },
        },
      },
    ],
    mythic_rating: {
      rating: { type: Number },
    },
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
