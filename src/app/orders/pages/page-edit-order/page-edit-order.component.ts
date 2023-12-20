import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent {
  // récupérer l'id
  // appel get pour récupérer obj + nouvelle méthode dans service
  // passer l'obj à app-form-order

  // propriété pour stocker l'obj retourné
  public obj!: Order;

  public isModalOpen: boolean = false;

  //public obj$!: Observable<Order>

  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private router: Router
  ) {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(typeof id); // type de id

    if (id) {
      // à compléter avec méthode getObjById
      this.ordersService.getObjById(id).subscribe((data) => {
        //console.log(data);
        this.obj = data;
      });
      //this.obj$ = this.ordersService.getObjById(id);
    }
  }

  public onEdit(obj: Order) {
    //console.log(obj);
    // appel vers service pour update + redirection
    this.ordersService.update(obj).subscribe((data) => {
      console.log(data);
      this.router.navigate(['']);
    });
  }

  public onOpenModal() {
    this.isModalOpen = true;
    // console.log('test');

  }

  // annuler l'action de l'utilisateur
  public closeModal() {
    this.isModalOpen = false;
  }

  // l'utilsateur confirme
  public onDelete(obj: Order) {
    this.ordersService.delete(obj.id).subscribe((data) => {
      console.log(data);
      this.router.navigate(['']);
    });
  }
}
