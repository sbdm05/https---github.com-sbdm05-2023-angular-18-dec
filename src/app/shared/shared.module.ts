import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { RouterModule } from '@angular/router';
import { StateClientDirective } from './directives/state-client.directive';
import { TotalTtcClientPipe } from './pipes/total-ttc-client.pipe';
import { ModalComponent } from './components/modal/modal.component';

// decorateur @NgModule
@NgModule({
  declarations: [
    // aucun composant

    BtnComponent,
    TotalPipe,
    StateDirective,
    StateClientDirective,
    TotalTtcClientPipe,
    ModalComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    BtnComponent,
    TotalPipe,
    StateDirective,
    StateClientDirective,
    TotalTtcClientPipe,
    ModalComponent,
  ],
})
export class SharedModule {}


// href = rafraichir la page
// liens externes
