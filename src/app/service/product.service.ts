import {Injectable} from '@angular/core';

import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private static readonly PRODUCT_PATH = 'Product';
  private readonly PRODUCT_BASE_PATH = environment.baseUrl + ProductService.PRODUCT_PATH;

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<any[]> {
    const url = `${this.PRODUCT_BASE_PATH}`;
    return this.httpClient.get<any[]>(url, {observe: 'body'});
  }

  public save(request: any): Observable<void> {
    const url = `${this.PRODUCT_BASE_PATH}`;
    return this.httpClient.post<void>(url, request, {observe: 'body'});
  }

  public update(request: any): Observable<void> {
    const url = `${this.PRODUCT_BASE_PATH}/answer`;
    return this.httpClient.put<void>(url, request, {observe: 'body'});
  }

  public delete(id: number): Observable<void> {
    const url = `${this.PRODUCT_BASE_PATH}/${id}`;
    return this.httpClient.delete<void>(url, {observe: 'body'});
  }

}
