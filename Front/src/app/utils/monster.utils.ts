export enum MonsterType {
  PLANT = 'plant',
  FIRE = 'fire',
  WATER = 'water',
  ELECTRIC = 'electric',
}

export interface IMonsterProperties {
  imageUrl: string;
  color: string;
}

export const MonsterTypeProperties: { [key: string]: IMonsterProperties } = {
  [MonsterType.PLANT]: {
    imageUrl: 'assets/img/energy/Plant.webp',
    color: 'rgba(135,255,124)',
  },
  [MonsterType.FIRE]: {
    imageUrl: 'assets/img/energy/fire.png',
    color: 'rgba(255,104,104)',
  },
  [MonsterType.WATER]: {
    imageUrl: 'assets/img/energy/water.png',
    color: 'rgba(118,235,255)',
  },
  [MonsterType.ELECTRIC]: {
    imageUrl: 'assets/img/energy/electric.svg.png',
    color: 'rgba(255,255,104)',
  },
};
