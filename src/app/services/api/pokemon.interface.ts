export interface IPokemon {
  abilities: IAbilities[];
  base_experience: number;
  forms: IBase[];
  game_indices: IGameIndices[];
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
    };
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
  species: ISpecies[];
  sprites: ISprites;
  stats: IStats[];
  types: ITypes[];
  weight: number;
}

export interface ITypes {
  slot: number;
  type: IBase;
}

export interface IStats {
  base_stat: number;
  effort: number;
  stat: IBase;
}

export interface ISpecies extends IBase {}

export interface IGameIndices {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface ISprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: {
    dream_world: {
      front_default: string;
      front_female: number;
    };
    'official-artwork': {
      front_default: string;
    };
  };
}

export interface IAbilities {
  ability: IBase;
  is_hidden: boolean;
  slot: number;
}

export interface IGeracao {
  id: number;
  name: string;
  abilities: IAbilities[];
  main_region: IBase;
  moves: IBase[];
  names: {
    name: string;
    language: IBase;
  }[];
  pokemon_species: IBase[];
  types: IBase[];
  version_groups: IBase[];
}

interface IBase {
  name: string;
  url: string;
}
