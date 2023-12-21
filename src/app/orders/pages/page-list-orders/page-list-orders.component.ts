import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageListOrdersComponent {
  // créer un tableau vide
  // public tab!: Order[];

  // création d'une propriété pour stocker observable

  public tab$!: Observable<Order[]>;

  // pour menu déroulant
  public states = Object.values(StateOrder);

  // ici tableau de string
  public headers: string[] = [
    'Action',
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];

  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    //console.log(this.ordersService.sumUp(1, 2));
    // this.ordersService.getDatas().subscribe((data) => {
    //   console.log(data);
    // });
    // utilisation du pipe async
    this.tab$ = this.ordersService.getOrders();
  }

  // remplacée par Pipe total
  // public total(val: number, coef: number, tva?: number) {
  //   console.log('déclenché'); // combien de fois

  //   if (tva) return val * coef * (1 + tva / 100);
  //   return val * coef;
  // }

  public onEdit(id: number) {
    // redirection vers orders/edit
    this.router.navigate(['orders', 'edit', id]);
  }

  public changeState(obj: Order, event: Event) {
    // console.log(event);
    const target = event.target as HTMLSelectElement;
    // console.log(target);
    const newState = target.value as StateOrder;
    console.log(newState);

    // créer un nouvel obj de type Order
    const newObj = new Order(obj);
    newObj.state = newState;
    // on change aussi cette valeur pour bien constater la mise à jour de obj
    // (pas si évident à voir avec le menu déroulant)
    newObj.client = 'nouveau';

    // appel vers le service pour put
    // order à jour
    this.ordersService.update(newObj).subscribe((data) => {
      console.log(data);
      // obj = data;
      Object.assign(obj, data);
    });
  }

  ngDoCheck() {
    console.log('test depuis DoCheck');
    /* à chaque modification d'une valeur dans le ts, cette fonction est
    déclenchée. Le change detection d'angular permet de modifier le DOM en fonction des besoins.

    ici, obj change de valeur (pas de référence). Ce changement sera détecté et permettra
    l'obj de s'actualiser. On n'agit pas directement sur le DOM nous-mêmes.
    */
  }
}
