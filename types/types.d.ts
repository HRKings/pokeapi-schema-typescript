/* tslint:disable */
/** Execute `npm run gentypes` to regenerate **/

export interface ApiResource {
  url: string;
  
}

export interface Index {
  ability: string;
  berry: string;
  "berry-firmness": string;
  "berry-flavor": string;
  characteristic: string;
  "contest-effect": string;
  "contest-type": string;
  "egg-group": string;
  "encounter-condition": string;
  "encounter-condition-value": string;
  "encounter-method": string;
  "evolution-chain": string;
  "evolution-trigger": string;
  gender: string;
  generation: string;
  "growth-rate": string;
  item: string;
  "item-attribute": string;
  "item-category": string;
  "item-fling-effect": string;
  "item-pocket": string;
  language: string;
  location: string;
  "location-area": string;
  machine: string;
  move: string;
  "move-ailment": string;
  "move-battle-style": string;
  "move-category": string;
  "move-damage-class": string;
  "move-learn-method": string;
  "move-target": string;
  nature: string;
  "pal-park-area": string;
  "pokeathlon-stat": string;
  pokedex: string;
  pokemon: string;
  "pokemon-color": string;
  "pokemon-form": string;
  "pokemon-habitat": string;
  "pokemon-shape": string;
  "pokemon-species": string;
  region: string;
  stat: string;
  "super-contest-effect": string;
  type: string;
  version: string;
  "version-group": string;
  
}

export interface NamedApiResource {
  name: string;
  url: string;
  
}

export interface Ability {
  effect_changes: {
    effect_entries: {
      effect: string;
      language: {
        name: string;
        url: string;
        
      };
      
    }[];
    version_group: {
      name: string;
      url: string;
      
    };
    
  }[];
  effect_entries: {
    effect: string;
    language: {
      name: string;
      url: string;
      
    };
    short_effect: string;
    
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
      
    };
    version_group: {
      name: string;
      url: string;
      
    };
    
  }[];
  generation: {
    name: string;
    url: string;
    
  };
  id: number;
  is_main_series: boolean;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokemon: {
    is_hidden: boolean;
    pokemon: {
      name: string;
      url: string;
      
    };
    slot: number;
    
  }[];
  
}

export interface ApiResourceList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    url: string;
    
  }[];
  
}

export interface Berry {
  firmness: {
    name: string;
    url: string;
    
  };
  flavors: {
    flavor: {
      name: string;
      url: string;
      
    };
    potency: number;
    
  }[];
  growth_time: number;
  id: number;
  item: {
    name: string;
    url: string;
    
  };
  max_harvest: number;
  name: string;
  natural_gift_power: number;
  natural_gift_type: {
    name: string;
    url: string;
    
  };
  size: number;
  smoothness: number;
  soil_dryness: number;
  
}

export interface BerryFirmness {
  berries: {
    name: string;
    url: string;
    
  }[];
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

export interface BerryFlavor {
  berries: {
    berry: {
      name: string;
      url: string;
      
    };
    potency: number;
    
  }[];
  contest_type: {
    name: string;
    url: string;
    
  };
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

export interface Characteristic {
  descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  gene_modulo: number;
  highest_stat: {
    name: string;
    url: string;
    
  };
  id: number;
  possible_values: number[];
  
}

export interface ContestEffect {
  appeal: number;
  effect_entries: {
    effect: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  id: number;
  jam: number;
  
}

export interface ContestType {
  berry_flavor: {
    name: string;
    url: string;
    
  };
  id: number;
  name: string;
  names: {
    color: string;
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

export interface EggGroup {
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokemon_species: {
    name: string;
    url: string;
    
  }[];
  
}

export interface EncounterCondition {
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  values: {
    name: string;
    url: string;
    
  }[];
  
}

export interface EncounterConditionValue {
  condition: {
    name: string;
    url: string;
    
  };
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

export interface EncounterMethod {
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  order: number;
  
}

export interface EvolutionChain {
  baby_trigger_item: null | {
    name: string;
    url: string;
    
  };
  chain: {
    evolution_details: unknown[];
    evolves_to: {
      evolution_details: {
        gender: number | null;
        held_item: null | {
          name: string;
          url: string;
          
        };
        item: null | {
          name: string;
          url: string;
          
        };
        known_move: null | {
          name: string;
          url: string;
          
        };
        known_move_type: null | {
          name: string;
          url: string;
          
        };
        location: null | {
          name: string;
          url: string;
          
        };
        min_affection: number | null;
        min_beauty: number | null;
        min_happiness: number | null;
        min_level: number | null;
        needs_overworld_rain: boolean;
        party_species: null | {
          name: string;
          url: string;
          
        };
        party_type: null | {
          name: string;
          url: string;
          
        };
        relative_physical_stats: number | null;
        time_of_day: string;
        trade_species: null | {
          name: string;
          url: string;
          
        };
        trigger: {
          name: string;
          url: string;
          
        };
        turn_upside_down: boolean;
        
      }[];
      evolves_to: {
        evolution_details: {
          gender: number | null;
          held_item: null | {
            name: string;
            url: string;
            
          };
          item: null | {
            name: string;
            url: string;
            
          };
          known_move: null | {
            name: string;
            url: string;
            
          };
          known_move_type: null;
          location: null | {
            name: string;
            url: string;
            
          };
          min_affection: null;
          min_beauty: null;
          min_happiness: number | null;
          min_level: number | null;
          needs_overworld_rain: boolean;
          party_species: null;
          party_type: null;
          relative_physical_stats: null;
          time_of_day: string;
          trade_species: null;
          trigger: {
            name: string;
            url: string;
            
          };
          turn_upside_down: boolean;
          
        }[];
        evolves_to: unknown[];
        is_baby: boolean;
        species: {
          name: string;
          url: string;
          
        };
        
      }[];
      is_baby: boolean;
      species: {
        name: string;
        url: string;
        
      };
      
    }[];
    is_baby: boolean;
    species: {
      name: string;
      url: string;
      
    };
    
  };
  id: number;
  
}

export interface EvolutionTrigger {
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokemon_species: {
    name: string;
    url: string;
    
  }[];
  
}

export interface Gender {
  id: number;
  name: string;
  pokemon_species_details: {
    pokemon_species: {
      name: string;
      url: string;
      
    };
    rate: number;
    
  }[];
  required_for_evolution: {
    name: string;
    url: string;
    
  }[];
  
}

export interface Generation {
  abilities: {
    name: string;
    url: string;
    
  }[];
  id: number;
  main_region: {
    name: string;
    url: string;
    
  };
  moves: {
    name: string;
    url: string;
    
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokemon_species: {
    name: string;
    url: string;
    
  }[];
  types: {
    name: string;
    url: string;
    
  }[];
  version_groups: {
    name: string;
    url: string;
    
  }[];
  
}

export interface GrowthRate {
  descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  formula: string;
  id: number;
  levels: {
    experience: number;
    level: number;
    
  }[];
  name: string;
  pokemon_species: {
    name: string;
    url: string;
    
  }[];
  
}

export interface Item {
  attributes: {
    name: string;
    url: string;
    
  }[];
  baby_trigger_for: null | {
    url: string;
    
  };
  category: {
    name: string;
    url: string;
    
  };
  cost: number;
  effect_entries: {
    effect: string;
    language: {
      name: string;
      url: string;
      
    };
    short_effect: string;
    
  }[];
  flavor_text_entries: {
    language: {
      name: string;
      url: string;
      
    };
    text: string;
    version_group: {
      name: string;
      url: string;
      
    };
    
  }[];
  fling_effect: null | {
    name: string;
    url: string;
    
  };
  fling_power: number | null;
  game_indices: {
    game_index: number;
    generation: {
      name: string;
      url: string;
      
    };
    
  }[];
  held_by_pokemon: {
    pokemon: {
      name: string;
      url: string;
      
    };
    version_details: {
      rarity: number;
      version: {
        name: string;
        url: string;
        
      };
      
    }[];
    
  }[];
  id: number;
  machines: {
    machine: {
      url: string;
      
    };
    version_group: {
      name: string;
      url: string;
      
    };
    
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  sprites: {
    default: string;
    
  };
  
}

export interface ItemAttribute {
  descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  id: number;
  items: {
    name: string;
    url: string;
    
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

export interface ItemCategory {
  id: number;
  items: {
    name: string;
    url: string;
    
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pocket: {
    name: string;
    url: string;
    
  };
  
}

export interface ItemFlingEffect {
  effect_entries: {
    effect: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  id: number;
  items: {
    name: string;
    url: string;
    
  }[];
  name: string;
  
}

export interface ItemPocket {
  categories: {
    name: string;
    url: string;
    
  }[];
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

export interface Language {
  id: number;
  iso3166: string;
  iso639: string;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  official: boolean;
  
}

export interface Location {
  areas: {
    name: string;
    url: string;
    
  }[];
  game_indices: {
    game_index: number;
    generation: {
      name: string;
      url: string;
      
    };
    
  }[];
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  region: null | {
    name: string;
    url: string;
    
  };
  
}

export interface LocationArea {
  encounter_method_rates: {
    encounter_method: {
      name: string;
      url: string;
      
    };
    version_details: {
      rate: number;
      version: {
        name: string;
        url: string;
        
      };
      
    }[];
    
  }[];
  game_index: number;
  id: number;
  location: {
    name: string;
    url: string;
    
  };
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
      
    };
    version_details: {
      encounter_details: {
        chance: number;
        condition_values: {
          name: string;
          url: string;
          
        }[];
        max_level: number;
        method: {
          name: string;
          url: string;
          
        };
        min_level: number;
        
      }[];
      max_chance: number;
      version: {
        name: string;
        url: string;
        
      };
      
    }[];
    
  }[];
  
}

export interface Machine {
  id: number;
  item: {
    name: string;
    url: string;
    
  };
  move: {
    name: string;
    url: string;
    
  };
  version_group: {
    name: string;
    url: string;
    
  };
  
}

export interface Move {
  accuracy: number | null;
  contest_combos: null | {
    normal: {
      use_after:
        | null
        | {
            name: string;
            url: string;
            
          }[];
      use_before:
        | null
        | {
            name: string;
            url: string;
            
          }[];
      
    };
    super: {
      use_after:
        | null
        | {
            name: string;
            url: string;
            
          }[];
      use_before:
        | null
        | {
            name: string;
            url: string;
            
          }[];
      
    };
    
  };
  contest_effect: null | {
    url: string;
    
  };
  contest_type: null | {
    name: string;
    url: string;
    
  };
  damage_class: null | {
    name: string;
    url: string;
    
  };
  effect_chance: number | null;
  effect_changes: {
    effect_entries: {
      effect: string;
      language: {
        name: string;
        url: string;
        
      };
      
    }[];
    version_group: {
      name: string;
      url: string;
      
    };
    
  }[];
  effect_entries: {
    effect: string;
    language: {
      name: string;
      url: string;
      
    };
    short_effect: string;
    
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
      
    };
    version_group: {
      name: string;
      url: string;
      
    };
    
  }[];
  generation: {
    name: string;
    url: string;
    
  };
  id: number;
  learned_by_pokemon: {
    name: string;
    url: string;
    
  }[];
  machines: {
    machine: {
      url: string;
      
    };
    version_group: {
      name: string;
      url: string;
      
    };
    
  }[];
  meta: null | {
    ailment: {
      name: string;
      url: string;
      
    };
    ailment_chance: number;
    category: {
      name: string;
      url: string;
      
    };
    crit_rate: number;
    drain: number;
    flinch_chance: number;
    healing: number;
    max_hits: number | null;
    max_turns: number | null;
    min_hits: number | null;
    min_turns: number | null;
    stat_chance: number;
    
  };
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  past_values: {
    accuracy: number | null;
    effect_chance: number | null;
    effect_entries: {
      effect: string;
      language: {
        name: string;
        url: string;
        
      };
      short_effect: string;
      
    }[];
    power: number | null;
    pp: number | null;
    type: null | {
      name: string;
      url: string;
      
    };
    version_group: {
      name: string;
      url: string;
      
    };
    
  }[];
  power: number | null;
  pp: number | null;
  priority: number;
  stat_changes: {
    change: number;
    stat: {
      name: string;
      url: string;
      
    };
    
  }[];
  super_contest_effect: null | {
    url: string;
    
  };
  target: {
    name: string;
    url: string;
    
  };
  type: {
    name: string;
    url: string;
    
  };
  
}

export interface MoveAilment {
  id: number;
  moves: {
    name: string;
    url: string;
    
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

export interface 1List {
  id: number;
  moves: {
    name: string;
    url: string;
    
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

export interface MoveBattleStyle {
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

export interface MoveCategory {
  descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  id: number;
  moves: {
    name: string;
    url: string;
    
  }[];
  name: string;
  
}

export interface MoveDamageClass {
  descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  id: number;
  moves: {
    name: string;
    url: string;
    
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

export interface MoveLearnMethod {
  descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  version_groups: {
    name: string;
    url: string;
    
  }[];
  
}

export interface MoveTarget {
  descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  id: number;
  moves: {
    name: string;
    url: string;
    
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

export interface NamedApiResourceList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface Nature {
  decreased_stat: null | {
    name: string;
    url: string;
    
  };
  hates_flavor: null | {
    name: string;
    url: string;
    
  };
  id: number;
  increased_stat: null | {
    name: string;
    url: string;
    
  };
  likes_flavor: null | {
    name: string;
    url: string;
    
  };
  move_battle_style_preferences: {
    high_hp_preference: number;
    low_hp_preference: number;
    move_battle_style: {
      name: string;
      url: string;
      
    };
    
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokeathlon_stat_changes: {
    max_change: number;
    pokeathlon_stat: {
      name: string;
      url: string;
      
    };
    
  }[];
  
}

export interface PalParkArea {
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokemon_encounters: {
    base_score: number;
    pokemon_species: {
      name: string;
      url: string;
      
    };
    rate: number;
    
  }[];
  
}

export interface PokeathlonStat {
  affecting_natures: {
    decrease: {
      max_change: number;
      nature: {
        name: string;
        url: string;
        
      };
      
    }[];
    increase: {
      max_change: number;
      nature: {
        name: string;
        url: string;
        
      };
      
    }[];
    
  };
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

export interface Pokedex {
  descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  id: number;
  is_main_series: boolean;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokemon_entries: {
    entry_number: number;
    pokemon_species: {
      name: string;
      url: string;
      
    };
    
  }[];
  region: null | {
    name: string;
    url: string;
    
  };
  version_groups: {
    name: string;
    url: string;
    
  }[];
  
}

export type $id = {
  location_area: {
    name: string;
    url: string;
    
  };
  version_details: {
    encounter_details: {
      chance: number;
      condition_values: {
        name: string;
        url: string;
        
      }[];
      max_level: number;
      method: {
        name: string;
        url: string;
        
      };
      min_level: number;
      
    }[];
    max_chance: number;
    version: {
      name: string;
      url: string;
      
    };
    
  }[];
  
}[];

export interface Pokemon {
  abilities: {
    ability: {
      name: string;
      url: string;
      
    };
    is_hidden: boolean;
    slot: number;
    
  }[];
  base_experience: number;
  forms: {
    name: string;
    url: string;
    
  }[];
  game_indices: {
    game_index: number;
    version: {
      name: string;
      url: string;
      
    };
    
  }[];
  height: number;
  held_items: {
    item: {
      name: string;
      url: string;
      
    };
    version_details: {
      rarity: number;
      version: {
        name: string;
        url: string;
        
      };
      
    }[];
    
  }[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: {
      name: string;
      url: string;
      
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
        
      };
      version_group: {
        name: string;
        url: string;
        
      };
      
    }[];
    
  }[];
  name: string;
  order: number;
  past_types: {
    generation: {
      name: string;
      url: string;
      
    };
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
        
      };
      
    }[];
    
  }[];
  species: {
    name: string;
    url: string;
    
  };
  sprites: {
    back_default: null | string;
    back_female: null | string;
    back_shiny: null | string;
    back_shiny_female: null | string;
    front_default: null | string;
    front_female: null | string;
    front_shiny: null | string;
    front_shiny_female: null | string;
    other: {
      dream_world: {
        front_default: null | string;
        front_female: null | string;
        
      };
      "official-artwork": {
        front_default: null | string;
        
      };
      
    };
    versions: {
      "generation-i": {
        "red-blue": {
          back_default: null | string;
          back_gray: null | string;
          front_default: null | string;
          front_gray: null | string;
          
        };
        yellow: {
          back_default: null | string;
          back_gray: null | string;
          front_default: null | string;
          front_gray: null | string;
          
        };
        
      };
      "generation-ii": {
        crystal: {
          back_default: null | string;
          back_shiny: null | string;
          front_default: null | string;
          front_shiny: null | string;
          
        };
        gold: {
          back_default: null | string;
          back_shiny: null | string;
          front_default: null | string;
          front_shiny: null | string;
          
        };
        silver: {
          back_default: null | string;
          back_shiny: null | string;
          front_default: null | string;
          front_shiny: null | string;
          
        };
        
      };
      "generation-iii": {
        emerald: {
          front_default: null | string;
          front_shiny: null | string;
          
        };
        "firered-leafgreen": {
          back_default: null | string;
          back_shiny: null | string;
          front_default: null | string;
          front_shiny: null | string;
          
        };
        "ruby-sapphire": {
          back_default: null | string;
          back_shiny: null | string;
          front_default: null | string;
          front_shiny: null | string;
          
        };
        
      };
      "generation-iv": {
        "diamond-pearl": {
          back_default: null | string;
          back_female: null | string;
          back_shiny: null | string;
          back_shiny_female: null | string;
          front_default: null | string;
          front_female: null | string;
          front_shiny: null | string;
          front_shiny_female: null | string;
          
        };
        "heartgold-soulsilver": {
          back_default: null | string;
          back_female: null | string;
          back_shiny: null | string;
          back_shiny_female: null | string;
          front_default: null | string;
          front_female: null | string;
          front_shiny: null | string;
          front_shiny_female: null | string;
          
        };
        platinum: {
          back_default: null | string;
          back_female: null | string;
          back_shiny: null | string;
          back_shiny_female: null | string;
          front_default: null | string;
          front_female: null | string;
          front_shiny: null | string;
          front_shiny_female: null | string;
          
        };
        
      };
      "generation-v": {
        "black-white": {
          animated: {
            back_default: null | string;
            back_female: null | string;
            back_shiny: null | string;
            back_shiny_female: null | string;
            front_default: null | string;
            front_female: null | string;
            front_shiny: null | string;
            front_shiny_female: null | string;
            
          };
          back_default: null | string;
          back_female: null | string;
          back_shiny: null | string;
          back_shiny_female: null | string;
          front_default: null | string;
          front_female: null | string;
          front_shiny: null | string;
          front_shiny_female: null | string;
          
        };
        
      };
      "generation-vi": {
        "omegaruby-alphasapphire": {
          front_default: null | string;
          front_female: null | string;
          front_shiny: null | string;
          front_shiny_female: null | string;
          
        };
        "x-y": {
          front_default: null | string;
          front_female: null | string;
          front_shiny: null | string;
          front_shiny_female: null | string;
          
        };
        
      };
      "generation-vii": {
        icons: {
          front_default: null | string;
          front_female: null | string;
          
        };
        "ultra-sun-ultra-moon": {
          front_default: null | string;
          front_female: null | string;
          front_shiny: null | string;
          front_shiny_female: null | string;
          
        };
        
      };
      "generation-viii": {
        icons: {
          front_default: null | string;
          front_female: null | string;
          
        };
        
      };
      
    };
    
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
      
    };
    
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
      
    };
    
  }[];
  weight: number;
  
}

export interface PokemonColor {
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokemon_species: {
    name: string;
    url: string;
    
  }[];
  
}

export interface PokemonForm {
  form_name: string;
  form_names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  form_order: number;
  id: number;
  is_battle_only: boolean;
  is_default: boolean;
  is_mega: boolean;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  order: number;
  pokemon: {
    name: string;
    url: string;
    
  };
  sprites: {
    back_default: null | string;
    back_female: null | string;
    back_shiny: null | string;
    back_shiny_female: null | string;
    front_default: null | string;
    front_female: null | string;
    front_shiny: null | string;
    front_shiny_female: null | string;
    
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
      
    };
    
  }[];
  version_group: {
    name: string;
    url: string;
    
  };
  
}

export interface PokemonShape {
  awesome_names: {
    awesome_name: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokemon_species: {
    name: string;
    url: string;
    
  }[];
  
}

export interface PokemonHabitat {
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokemon_species: {
    name: string;
    url: string;
    
  }[];
  
}

export interface PokemonSpecies {
  base_happiness: number;
  capture_rate: number;
  color: {
    name: string;
    url: string;
    
  };
  egg_groups: {
    name: string;
    url: string;
    
  }[];
  evolution_chain: {
    url: string;
    
  };
  evolves_from_species: null | {
    name: string;
    url: string;
    
  };
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
      
    };
    version: {
      name: string;
      url: string;
      
    };
    
  }[];
  form_descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: {
    genus: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  generation: {
    name: string;
    url: string;
    
  };
  growth_rate: {
    name: string;
    url: string;
    
  };
  habitat: null | {
    name: string;
    url: string;
    
  };
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  order: number;
  pal_park_encounters: {
    area: {
      name: string;
      url: string;
      
    };
    base_score: number;
    rate: number;
    
  }[];
  pokedex_numbers: {
    entry_number: number;
    pokedex: {
      name: string;
      url: string;
      
    };
    
  }[];
  shape: {
    name: string;
    url: string;
    
  };
  varieties: {
    is_default: boolean;
    pokemon: {
      name: string;
      url: string;
      
    };
    
  }[];
  
}

export interface Region {
  id: number;
  locations: {
    name: string;
    url: string;
    
  }[];
  main_generation: {
    name: string;
    url: string;
    
  };
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokedexes: {
    name: string;
    url: string;
    
  }[];
  version_groups: {
    name: string;
    url: string;
    
  }[];
  
}

export interface Stat {
  affecting_moves: {
    decrease: {
      change: number;
      move: {
        name: string;
        url: string;
        
      };
      
    }[];
    increase: {
      change: number;
      move: {
        name: string;
        url: string;
        
      };
      
    }[];
    
  };
  affecting_natures: {
    decrease: {
      name: string;
      url: string;
      
    }[];
    increase: {
      name: string;
      url: string;
      
    }[];
    
  };
  characteristics: {
    url: string;
    
  }[];
  game_index: number;
  id: number;
  is_battle_only: boolean;
  move_damage_class: null | {
    name: string;
    url: string;
    
  };
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

export interface SuperContestEffect {
  appeal: number;
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  id: number;
  moves: {
    name: string;
    url: string;
    
  }[];
  
}

export interface Type {
  damage_relations: {
    double_damage_from: {
      name: string;
      url: string;
      
    }[];
    double_damage_to: {
      name: string;
      url: string;
      
    }[];
    half_damage_from: {
      name: string;
      url: string;
      
    }[];
    half_damage_to: {
      name: string;
      url: string;
      
    }[];
    no_damage_from: {
      name: string;
      url: string;
      
    }[];
    no_damage_to: {
      name: string;
      url: string;
      
    }[];
    
  };
  game_indices: {
    game_index: number;
    generation: {
      name: string;
      url: string;
      
    };
    
  }[];
  generation: {
    name: string;
    url: string;
    
  };
  id: number;
  move_damage_class: null | {
    name: string;
    url: string;
    
  };
  moves: {
    name: string;
    url: string;
    
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  past_damage_relations: {
    damage_relations: {
      double_damage_from: {
        name: string;
        url: string;
        
      }[];
      double_damage_to: {
        name: string;
        url: string;
        
      }[];
      half_damage_from: {
        name: string;
        url: string;
        
      }[];
      half_damage_to: {
        name: string;
        url: string;
        
      }[];
      no_damage_from: {
        name: string;
        url: string;
        
      }[];
      no_damage_to: {
        name: string;
        url: string;
        
      }[];
      
    };
    generation: {
      name: string;
      url: string;
      
    };
    
  }[];
  pokemon: {
    pokemon: {
      name: string;
      url: string;
      
    };
    slot: number;
    
  }[];
  
}

export interface Version {
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  version_group: {
    name: string;
    url: string;
    
  };
  
}

export interface VersionGroup {
  generation: {
    name: string;
    url: string;
    
  };
  id: number;
  move_learn_methods: {
    name: string;
    url: string;
    
  }[];
  name: string;
  order: number;
  pokedexes: {
    name: string;
    url: string;
    
  }[];
  regions: {
    name: string;
    url: string;
    
  }[];
  versions: {
    name: string;
    url: string;
    
  }[];
  
}

export interface BerryList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface BerryFirmnessList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface CharacteristicList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    url: string;
    
  }[];
  
}

export interface AbilityList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface BerryFlavorList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface ContestEffectList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    url: string;
    
  }[];
  
}

export interface EggGroupList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface EncounterConditionList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface ContestTypeList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface EncounterConditionValueList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface EncounterMethodList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface EvolutionChainList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    url: string;
    
  }[];
  
}

export interface EvolutionTriggerList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface GenderList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface GenerationList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface GrowthRateList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface ItemList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface ItemAttributeList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface ItemCategoryList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface ItemPocketList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface ItemFlingEffectList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface LanguageList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface LocationList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface LocationAreaList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface MachineList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    url: string;
    
  }[];
  
}

export interface MoveList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface MoveAilmentList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface MoveBattleStyleList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface MoveDamageClassList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface MoveCategoryList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface MoveLearnMethodList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface MoveTargetList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface NatureList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface PalParkAreaList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface PokeathlonStatList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface PokedexList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface PokemonList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface PokemonColorList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface PokemonHabitatList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface PokemonShapeList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface PokemonSpeciesList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface RegionList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface StatList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface SuperContestEffectList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    url: string;
    
  }[];
  
}

export interface TypeList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface VersionList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface VersionGroupList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

export interface PokemonFormList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

