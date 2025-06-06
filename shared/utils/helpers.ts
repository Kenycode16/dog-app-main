export function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

export function filterByTrait(breeds, trait) {
  return breeds.filter(b => b.traits.includes(trait));
}
