import {Injectable} from '@angular/core';

import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private static readonly ORDER_PATH = 'Orders';
  private static readonly ORDER = 'finishOrder?';
  private readonly ORDER_BASE_PATH = environment.baseUrl + OrderService.ORDER_PATH;
  private readonly ORDER_PATH = environment.baseUrl + OrderService.ORDER;

  constructor(private httpClient: HttpClient) {
  }

  public getAll(userId: number): Observable<any[]> {
    const url = `${environment.baseUrl + /getAllOrdersByUserId/}${userId}`;
    return this.httpClient.get<any[]>(url, {observe: 'body'});
  }

  public save(request: any): Observable<void> {
    const url = `${this.ORDER_BASE_PATH}`;
    return this.httpClient.post<void>(url, request, {observe: 'body'});
  }

  public finish(userId: any, orderId: any): Observable<void> {
    const url = `${this.ORDER_PATH}userid=${userId}&&orderid=${orderId}`;
    return this.httpClient.get<void>(url, {observe: 'body'});
  }

  public update(request: any): Observable<void> {
    const url = `${this.ORDER_BASE_PATH}/answer`;
    return this.httpClient.put<void>(url, request, {observe: 'body'});
  }

  public delete(id: number): Observable<void> {
    const url = `${environment.baseUrl}/deleteOrder/${id}`;
    return this.httpClient.delete<void>(url, {observe: 'body'});
  }

}
