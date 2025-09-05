export type Zone = 'DECK'|'HAND'|'ACTIVE'|'BENCH'|'DISCARD'|'PRIZES'|'STADIUM'|'TOOL';
export type EnergyKind = 'GRASS'|'DARK'|'WATER';
export type Energy = { kind: EnergyKind };
export type CardRef = { id:string; name:string; supertype:'POKEMON'|'TRAINER'|'ENERGY'; tags?:string[] };
export type PokemonState = { card:CardRef; hp:number; maxHp:number; energies:Energy[]; tool?:CardRef; damage:number; };
export type PlayerState = { deck:CardRef[]; hand:CardRef[]; prizes:CardRef[]; active?:PokemonState; bench:PokemonState[]; discard:CardRef[]; stadium?:CardRef; supporterUsed:boolean; attached:boolean; };
export type GameState = { turn:number; current:0|1; players:[PlayerState,PlayerState]; log:string[] };
