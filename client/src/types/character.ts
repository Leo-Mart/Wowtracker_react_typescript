export interface ICharacter {
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

export type CharacterContextType = {
  characters: ICharacter[];
  saveCharacter: (character: ICharacter) => void;
  updateCharacter: (id: string) => void;
};
