import { MonsterType } from "../utils/monster.utils";

export class Monster {
  id: number = -1;
  name: string = 'My monster';
  image: string = 'assets/img/monster/pika.jpg';
  type: MonsterType = MonsterType.ELECTRIC;
  hp: number = 60;
  figureCaption: string = 'N°001';
  attackName: string = 'Standard';
  attackStrength: number = 10;
  attackDescription: string =
    'The user attacks the target with a standard attack, dealing 10 damage. The attack requires 1 energy card to use.';

  copy(): Monster {
    return Object.assign(new Monster(), this);

  }
}
