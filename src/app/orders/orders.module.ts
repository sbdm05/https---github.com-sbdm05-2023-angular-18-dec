import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { SharedModule } from '../shared/shared.module';
import { FormOrderComponent } from './components/form-order/form-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageDemoObservableFroidComponent } from './pages/page-demo-observable-froid/page-demo-observable-froid.component';
import { PageDemoObservableChaudComponent } from './pages/page-demo-observable-chaud/page-demo-observable-chaud.component';


@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageAddOrderComponent,
    PageEditOrderComponent,
    FormOrderComponent,
    PageDemoObservableFroidComponent,
    PageDemoObservableChaudComponent,
  ],
  imports: [CommonModule, OrdersRoutingModule, SharedModule, ReactiveFormsModule],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }],
})
export class OrdersModule {}
