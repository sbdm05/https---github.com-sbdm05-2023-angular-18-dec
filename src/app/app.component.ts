import { Component } from '@angular/core';

// décorateur
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'crm';
  public open: boolean = true;

  public onClick() {
    console.log('cliqué');
    this.open = !this.open;
  }
}
