import { findeHeroById } from "./services/hero.service.js";





const hero = findeHeroById(5);
console.log(hero?.name ?? 'Hero not found');
