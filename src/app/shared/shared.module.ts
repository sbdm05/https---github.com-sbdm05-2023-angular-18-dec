import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';


// decorateur @NgModule
@NgModule({
  declarations: [
    // aucun composant
  
    BtnComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
