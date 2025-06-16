// shared/utils/compare.ts
import { Breed } from "../types/Breed";

// Compares two breeds and returns useful fields for charting
export function compareBreeds(a: Breed, b: Breed) {
  return {
    size: {
      a: a.size,
      b: b.size,
      match: a.size === b.size
    },
    lifespan: {
      a: a.lifespan,
      b: b.lifespan,
      diff: Math.abs(a.lifespan - b.lifespan)
    },
    traits: {
      a: a.traits,
      b: b.traits,
      common: a.traits.filter(trait => b.traits.includes(trait)),
      onlyA: a.traits.filter(trait => !b.traits.includes(trait)),
      onlyB: b.traits.filter(trait => !a.traits.includes(trait))
    }
  };
}


// import { Breed } from "../types/Breed";

// export function compareBreeds(a: Breed, b: Breed) {
//   return {
//     sizeMatch: a.size === b.size,
//     lifespanDiff: Math.abs(a.lifespan - b.lifespan),
//     commonTraits: a.traits.filter(t => b.traits.includes(t))
//   };
// }

// export function compareBreedsBySize(a: Breed, b: Breed) {
//   return a.size === b.size;
// }