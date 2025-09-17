// Return types

export interface characterProfileResponse {
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

export interface characterSpecializationsResponse {
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
}

export interface characterGearResponse {
  equipped_items: [
    {
      item: {
        id: number;
      };
      name: string;
    },
  ];
}

export interface asset {
  key: string;
  value: string;
}

export interface characterMediaResponse {
  assets: Array<asset>;
}
