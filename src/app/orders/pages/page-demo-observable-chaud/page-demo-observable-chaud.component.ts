import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-page-demo-observable-chaud',
  templateUrl: './page-demo-observable-chaud.component.html',
  styleUrls: ['./page-demo-observable-chaud.component.scss'],
})
export class PageDemoObservableChaudComponent {
  subj = new Subject();

  constructor() {
    this.subj.subscribe((data) => {
      console.log(data, 'premier observer'); // pas de résultat
    });

    this.subj.next(1);

    this.subj.subscribe((data) => {
      console.log(data, 'deuxième observer'); // pas de résultat
    });

    this.subj.next(2);

    this.subj.next(Math.random());


  }

}
