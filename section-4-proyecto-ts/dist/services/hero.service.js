import { heroes } from "../data/hero.js";
export const findeHeroById = (id) => {
    return heroes.find((hero) => hero.id === id);
};
//# sourceMappingURL=hero.service.js.map