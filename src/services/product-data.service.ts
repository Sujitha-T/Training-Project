import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appConstant } from '../app/app.constant';
import { environment } from '../environment/environment';
import { Product } from '../products/product';


@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  apiUrl = `${environment.apiEndpoint}${appConstant.apiRoute.products}`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
