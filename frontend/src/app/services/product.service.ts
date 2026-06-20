import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Observable }  from 'rxjs';
import { map }         from 'rxjs/operators';
import { Product }     from '../models/product.model';

interface ApiResponse {
  success: boolean;
  data: Product[];
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly apiUrl = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<ApiResponse>(this.apiUrl)
      .pipe(map(res => res.data));
  }
}
