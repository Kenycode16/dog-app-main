// dog-app/packages/shared/types/Breed.ts
export type BreedSize = "Small" | "Medium" | "Large";

export interface BreedVariant {
  name: string;
  image: string;
}

export interface Breed {
  id: string;
  name: string;
  origin: string;
  size: string;
  lifespan: number;
  traits: string[];
  description: string;
  image: string;
  variants?: BreedVariant[];
}

// export interface BreedWithVariants extends Breed {
//   variants: BreedVariant[];
// }