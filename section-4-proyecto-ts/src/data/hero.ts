export interface Hero {
  id: number;
  name: string;
  owner: string;
}

export const heroes: Hero[] = [
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
