import {
  Component,
  EventEmitter,
  input,
  model,
  output,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  search = model<string>('Initial search value');

  searchButtonClick = output({ alias: 'submit' });

  searchClick() {
    this.searchButtonClick.emit();
  }
}
