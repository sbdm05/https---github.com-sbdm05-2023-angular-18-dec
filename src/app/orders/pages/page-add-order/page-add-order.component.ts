import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent {
  // créer un nouvel objet de type order
  public init: Order = new Order();

  constructor(private ordersService: OrdersService, private router : Router) {}

  public onAdd(obj: Order) {
    console.log(obj, 'depuis page add order');
    // faire appel au service

    this.ordersService.postOrder(obj).subscribe((data) => {
      console.log(data);
      // redirection
      this.router.navigate([''])
    });
  }
}
