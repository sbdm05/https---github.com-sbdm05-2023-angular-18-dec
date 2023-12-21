import { Component } from '@angular/core';

// decorateur
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  public counter: number = 0;

  onAdd() {
    this.counter++;
  }
}
