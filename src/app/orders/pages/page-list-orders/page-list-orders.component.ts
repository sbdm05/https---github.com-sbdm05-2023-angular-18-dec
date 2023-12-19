import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent {
  // créer un tableau vide
  // public tab!: Order[];

  // création d'une propriété pour stocker observable

  public tab$!: Observable<Order[]>


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

  constructor(private ordersService: OrdersService) {
    //console.log(this.ordersService.sumUp(1, 2));
    // this.ordersService.getDatas().subscribe((data) => {
    //   console.log(data);
    // });
    // utilisation du pipe async
    this.tab$ = this.ordersService.getOrders()

  }

  // remplacée par Pipe total
  // public total(val: number, coef: number, tva?: number) {
  //   console.log('déclenché'); // combien de fois

  //   if (tva) return val * coef * (1 + tva / 100);
  //   return val * coef;
  // }
}
