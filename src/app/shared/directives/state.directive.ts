import { Directive, HostBinding, Input } from '@angular/core';

// decorateur
@Directive({
  selector: '[appState]',
})
export class StateDirective {

  @Input() stateObj!: string;
  @HostBinding('class') tdClassName!: string;


  constructor() {
    // console.log('test depuis directive');
    //console.log(this.stateObj); // undefined
  }

  // LIFECYCLE HOOKS
  // ngOnInit()
  ngOnInit(){
    //console.log(this.stateObj); // valeur disponible
    this.tdClassName = `state-${this.stateObj.toLowerCase()}`;
  }

}
