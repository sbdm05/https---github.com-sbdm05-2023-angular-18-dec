import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageDemoObservableChaudComponent } from './pages/page-demo-observable-chaud/page-demo-observable-chaud.component';
import { PageDemoObservableFroidComponent } from './pages/page-demo-observable-froid/page-demo-observable-froid.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';

const routes: Routes = [
  // on est déjà sur la route orders
  { path: '', component: PageListOrdersComponent },
  { path: 'add', component: PageAddOrderComponent },
  { path: 'edit/:id', component: PageEditOrderComponent },
  { path: 'obs-froid', component: PageDemoObservableFroidComponent },
  { path: 'obs-subject', component: PageDemoObservableChaudComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
