import { Injectable } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterType } from '../../utils/monster.utils';

@Injectable({
  providedIn: 'root',
})
export class MonsterService {
  constructor() {
    this.load();
  }

  currentIndex: number = 1;
  monsters: Monster[] = [];

  private save() {
    localStorage.setItem('monster', JSON.stringify(this.monsters));
  }

  private load() {
    const monsterData = localStorage.getItem('monster');
    if (monsterData) {
      this.monsters = JSON.parse(monsterData).map((monsterJSON: any) =>
        Object.assign(new Monster(), monsterJSON)
      );
      this.currentIndex = Math.max(
        ...this.monsters.map((monster) => monster.id)
      );
    } else {
      this.init();
      this.save();
    }
  }

  private init() {
    this.monsters = [];

    const monster1 = new Monster();
    monster1.id = this.currentIndex++;
    monster1.name = 'Pik';
    monster1.image = 'assets/img/monster/pika.jpg';
    monster1.type = MonsterType.ELECTRIC;
    monster1.hp = 60;
    monster1.figureCaption = 'N°002';
    monster1.attackName = 'Thunder';
    monster1.attackStrength = 10;
    monster1.attackDescription =
      'The user attacks the target with a Thunder attack, dealing 10 damage. The attack requires 1 energy card to use.';
    this.monsters.push(monster1);

    const monster3 = new Monster();
    monster3.id = this.currentIndex++;
    monster3.name = 'Cara';
    monster3.image = 'assets/img/monster/cara2.png';
    monster3.type = MonsterType.WATER;
    monster3.hp = 40;
    monster3.figureCaption = 'N°003';
    monster3.attackName = 'Pistolet à eau';
    monster3.attackStrength = 20;
    monster3.attackDescription =
      'The user attacks the target with a Pistolet à eau attack, dealing 20 damage. The attack requires 2 energy cards to use.';
    this.monsters.push(monster3);

    const monster2 = new Monster();
    monster2.id = this.currentIndex++;
    monster2.name = 'Bulbizarre';
    monster2.image = 'assets/img/monster/bul.jpeg';
    monster2.type = MonsterType.PLANT;
    monster2.hp = 40;
    monster2.figureCaption = 'N°004';
    monster2.attackName = 'thunder';
    monster2.attackStrength = 0;
    monster2.attackDescription =
      'The user attacks the target with a thunder attack, dealing 0 damage. The attack requires  energy cards to use.';
    this.monsters.push(monster2);

    const monster4 = new Monster();
    monster4.id = this.currentIndex++;
    monster4.name = 'Evoli';
    monster4.image = 'assets/img/monster/evoli.jpg';
    monster4.type = MonsterType.FIRE;
    monster4.hp = 40;
    monster4.figureCaption = 'N°005';
    monster4.attackName = 'Météore';
    monster4.attackStrength = 20;
    monster4.attackDescription =
      'The user attacks the target with a Météore attack, dealing 20 damage. The attack requires 2 energy cards to use.';
    this.monsters.push(monster4);
  }

  getAllMonsters(): Monster[] {
    return this.monsters.map((monster) => monster.copy());
  }

  get(id: number): Monster | undefined {
    const monster = this.monsters.find((monster) => monster.id === id);
    return monster ? monster.copy() : undefined;
  }

  add(monster: Monster): Monster {
    const monsterCopy = monster.copy();
    monsterCopy.id = this.currentIndex;
    this.monsters.push(monsterCopy.copy());
    this.currentIndex++;
    this.save();

    return monsterCopy;
  }

  update(monster: Monster): Monster {
    const monsterCopy = monster.copy();

    const monsterIndex = this.monsters.findIndex(
      (originalMonster) => originalMonster.id === monsterCopy.id
    );
    if (monsterIndex != -1) {
      this.monsters[monsterIndex] = monsterCopy.copy();
      this.save();
    }
    return monsterCopy;
  }

  delete(id: number) {
    const monsterIndex = this.monsters.findIndex(
      (originalMonster) => originalMonster.id === id
    );
    if (monsterIndex != -1) {
      this.monsters.splice(monsterIndex, 1);
      this.save();
    }
  }
}
