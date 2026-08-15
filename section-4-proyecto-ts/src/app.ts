import { findeHeroById } from "./services/hero.service.js";

const hero = findeHeroById(2);
console.log(hero?.name ?? 'Hero not found');
