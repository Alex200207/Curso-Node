const heroes = [
    {
        id: 1,
        name: 'iroman',
        owner: ' marvel',
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel',
    },
    {
        id: 3,
        name: 'Batman',
        owner: 'DC',
    },
];
const findeHeroById = (id) => {
    return heroes.find((hero) => hero.id === id);
};
const hero = findeHeroById(5);
console.log(hero?.name ?? 'Hero not found');
export {};
//# sourceMappingURL=app.js.map