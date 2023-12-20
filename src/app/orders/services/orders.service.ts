import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';

// decorateur
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  private url: string = 'http://localhost:3010/orders';

  // créer méthode
  public sumUp(a: number, b: number): number {
    return a + b;
  }

  // this.http.get
  public getDatas() {
    // observable
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  // creer methode getOrders() vers db.json
  public getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.url);
  }

  // créer methode postOrder(obj: Order)
  //  return this.http.post<Order>(this.url, obj);

  public postOrder(obj: Order){
    return this.http.post<Order>(this.url, obj);
  }

  public getObjById(id: number): Observable<Order>{
    return this.http.get<Order>(`${this.url}/${id}`);
  }

  public update(obj: Order): Observable<Order>{
    return this.http.put<Order>(`${this.url}/${obj.id}`, obj);
  }

  public delete(id: number){
    return this.http.delete<Order>(`${this.url}/${id}`);
  }

}
