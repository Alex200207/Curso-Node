import { heroes } from "../data/hero.js";

export const findeHeroById = (id: number) => {
  return heroes.find((hero) => hero.id === id);
};
