import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { RouterModule } from '@angular/router';

// decorateur @NgModule
@NgModule({
  declarations: [
    // aucun composant

    BtnComponent,
    TotalPipe,
    StateDirective,
  ],
  imports: [CommonModule, RouterModule],
  exports: [BtnComponent, TotalPipe, StateDirective],
})
export class SharedModule {}


// href = rafraichir la page
// liens externes
