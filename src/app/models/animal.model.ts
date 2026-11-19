export type Species = 'Chien' | 'Chat' | 'Lapin' | 'Oiseau';

export interface Animal {
  id: number;
  name: string;
  species: Species;
  age: number;
  energy: number;
  isAdopted: boolean;
}