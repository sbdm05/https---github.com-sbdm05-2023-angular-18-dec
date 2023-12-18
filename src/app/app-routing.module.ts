import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // si chemin est '', alors on affiche le composant
  // ces routes ont été déplacées dans orders-routing.module.ts

  // ajouter une redirection
  { path: '', redirectTo: '/orders', pathMatch: 'full' },

  // ajouter orders en lazy loading
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./error/error.module').then((m) => m.ErrorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// LAZY LOADING

// SI l'utilisateur est sur la route /orders,
// alors on charge le dossier orders
