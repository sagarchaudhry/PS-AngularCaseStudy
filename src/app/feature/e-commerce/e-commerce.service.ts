import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from './items';

@Injectable({
  providedIn: 'root'
})
export class ECommerceService {

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<Items[]> {
    let url = "././assets/cart-Items.json";
    return this.httpClient.get<Items[]>(url);
  }
}
