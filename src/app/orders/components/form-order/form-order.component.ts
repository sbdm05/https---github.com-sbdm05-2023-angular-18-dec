import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent {
  // propriété pour identifier le form
  public form!: FormGroup;
  @Input() objOrder!: Order;
  @Output() submitted = new EventEmitter();
  @Output() deleted = new EventEmitter();

  // convertir enum en tableau
  public states = Object.values(StateOrder);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      tjmHt: [this.objOrder.tjmHt],
      typePresta: [
        this.objOrder.typePresta,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
      nbJours: [
        this.objOrder.nbJours,
        [Validators.required, Validators.min(2), Validators.max(10)],
      ],
      tva: [this.objOrder.tva],
      state: [this.objOrder.state],
      client: [this.objOrder.client],
      comment: [this.objOrder.comment],
      id: [this.objOrder.id],
    });
  }

  onSubmit() {
    console.log(this.form.value); // objet complet
    // envoyer le formulaire au composant parent
    this.submitted.emit(this.form.value);
  }

  onDelete() {
  console.log('supprimer');
  this.deleted.emit();
  }
}
