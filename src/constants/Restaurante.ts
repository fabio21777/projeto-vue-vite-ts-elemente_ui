import type { StuatusRestaurante } from "./StuatusRestaurante";


export interface Restaurante {
    nome: string;
    endereco: string;
    status: StuatusRestaurante;
    pratos: string[];
  }