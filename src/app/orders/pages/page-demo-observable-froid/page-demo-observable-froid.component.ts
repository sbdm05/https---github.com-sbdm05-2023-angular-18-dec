import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-demo-observable-froid',
  templateUrl: './page-demo-observable-froid.component.html',
  styleUrls: ['./page-demo-observable-froid.component.scss'],
})
export class PageDemoObservableFroidComponent {
  observable = new Observable((obs) => {
    obs.next(1);
    obs.next(2);
    obs.next(Math.random())
  });

  constructor() {
    // souscrire à l'observable
    this.observable.subscribe((data) => {
      console.log(data, 'premier observer');
    });

    this.observable.subscribe((data) => {
      console.log(data, 'deuxième observer');
    });
  }
}
