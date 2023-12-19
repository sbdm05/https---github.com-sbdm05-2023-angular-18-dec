import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { TotalPipe } from './pipes/total.pipe';


// decorateur @NgModule
@NgModule({
  declarations: [
    // aucun composant

    BtnComponent,
    TotalPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TotalPipe
  ]
})
export class SharedModule { }
