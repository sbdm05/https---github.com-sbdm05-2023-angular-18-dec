import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appStateClient]',
})
export class StateClientDirective {
  @Input() stateObj!: string;
  @HostBinding('class') tdClassName!: string;

  constructor() {}

  ngOnInit() {
    //console.log(this.stateObj); // valeur disponible
    this.tdClassName = `state-${this.stateObj.toLowerCase()}`;
  }
}
