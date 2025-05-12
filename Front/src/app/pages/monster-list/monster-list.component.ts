import { Component, computed, inject, model, signal } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterService } from '../../services/monster/monster.service';
import { CommonModule } from '@angular/common';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-monster-list',
  imports: [CommonModule, PlayingCardComponent, SearchBarComponent],
  templateUrl: './monster-list.component.html',
  styleUrl: './monster-list.component.scss',
})
export class MonsterListComponent {
  monsterService = inject(MonsterService);
  monsters = signal<Monster[]>([]);
  search = model('');
  isEmpty = true;

  filteredMonsters = computed(() => {
    return this.monsters().filter((monster) =>
      monster.name.toLowerCase().includes(this.search().toLowerCase())
    );
  });

  selectedMonsterIndex = signal(1);
  selectedMonster = computed(() => {
    return this.monsters()[this.selectedMonsterIndex()];
  });

  constructor() {
    this.monsters.set(this.monsterService.getAllMonsters());
  }

  addMonster() {
    const newMonster = new Monster();
    this.monsterService.add(newMonster);
    this.monsters.set(this.monsterService.getAllMonsters());
  }
}
