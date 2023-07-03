// Interfaces for the API ONLY

export interface PokemonResourceListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonBriefResponse[];
}

export interface PokemonBriefResponse {
  name: string;
  url: string;
}

export interface PokemonApiResponse {
  abilities: AbilityResponse[];
  base_experience: number;
  forms: SpeciesResponse[];
  game_indices: GameIndexResponse[];
  height: number;
  held_items: HeldItemResponse[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: MoveResponse[];
  name: string;
  order: number;
  past_types: any[];
  species: SpeciesResponse;
  sprites: SpritesResponse;
  stats: StatResponse[];
  types: TypeResponse[];
  weight: number;
}

export interface AbilityResponse {
  ability: SpeciesResponse;
  is_hidden: boolean;
  slot: number;
}

export interface SpeciesResponse {
  name: string;
  url: string;
}

export interface GameIndexResponse {
  game_index: number;
  version: SpeciesResponse;
}

export interface HeldItemResponse {
  item: SpeciesResponse;
  version_details: VersionDetailResponse[];
}

export interface VersionDetailResponse {
  rarity: number;
  version: SpeciesResponse;
}

export interface MoveResponse {
  move: SpeciesResponse;
  version_group_details: VersionGroupDetailResponse[];
}

export interface VersionGroupDetailResponse {
  level_learned_at: number;
  move_learn_method: SpeciesResponse;
  version_group: SpeciesResponse;
}

export interface GenerationVResponse {
  "black-white": SpritesResponse;
}

export interface GenerationIvResponse {
  "diamond-pearl": SpritesResponse;
  "heartgold-soulsilver": SpritesResponse;
  platinum: SpritesResponse;
}

export interface Versions {
  "generation-i": GenerationIResponse;
  "generation-ii": GenerationIiResponse;
  "generation-iii": GenerationIiiResponse;
  "generation-iv": GenerationIvResponse;
  "generation-v": GenerationVResponse;
  "generation-vi": { [key: string]: HomeResponse };
  "generation-vii": GenerationViiResponse;
  "generation-viii": GenerationViiiResponse;
}

export interface SpritesResponse {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: OtherResponse;
  versions?: Versions;
  animated?: SpritesResponse;
}

export interface GenerationIResponse {
  "red-blue": RedBlueResponse;
  yellow: RedBlueResponse;
}

export interface RedBlueResponse {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface GenerationIiResponse {
  crystal: CrystalResponse;
  gold: GoldResponse;
  silver: GoldResponse;
}

export interface CrystalResponse {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface GoldResponse {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent?: string;
}

export interface GenerationIiiResponse {
  emerald: OfficialArtworkResponse;
  "firered-leafgreen": GoldResponse;
  "ruby-sapphire": GoldResponse;
}

export interface OfficialArtworkResponse {
  front_default: string;
  front_shiny: string;
}

export interface HomeResponse {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface GenerationViiResponse {
  icons: DreamWorldResponse;
  "ultra-sun-ultra-moon": HomeResponse;
}

export interface DreamWorldResponse {
  front_default: string;
  front_female: null;
}

export interface GenerationViiiResponse {
  icons: DreamWorldResponse;
}

export interface OtherResponse {
  dream_world: DreamWorldResponse;
  home: HomeResponse;
  "official-artwork": OfficialArtworkResponse;
}

export interface StatResponse {
  base_stat: number;
  effort: number;
  stat: SpeciesResponse;
}

export interface TypeResponse {
  slot: number;
  type: SpeciesResponse;
}

