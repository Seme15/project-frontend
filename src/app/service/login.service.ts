import {Injectable} from '@angular/core';

import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private static readonly LOGIN_PATH = 'login';
  private readonly LOGIN_BASE_PATH = environment.baseUrl + LoginService.LOGIN_PATH;

  constructor(private httpClient: HttpClient) {
  }

  public login(request: any): Observable<any> {
    const url = `${this.LOGIN_BASE_PATH}`;
    return this.httpClient.post<any>(url, request, {observe: 'body'});
  }

}
