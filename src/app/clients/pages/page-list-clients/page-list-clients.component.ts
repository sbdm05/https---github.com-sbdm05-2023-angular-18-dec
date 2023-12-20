import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent {

  public datas$!: Observable<any>;

  public headers = [
    'Action',
    'ID',
    'Name',
    'State',
    'Total HT',
    'Total TTC'
  ]

  constructor(private clientsService: ClientsService){
    this.datas$ = this.clientsService.getClients()
  }



}
