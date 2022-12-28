import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  headers = new HttpHeaders();

  constructor(
    public http: HttpClient
  ) { }
  protected get(url: string, params: any = {}): Observable<any> {
    return this.http.get(environment.apiUrl + url, {
      headers: this.headers,
      params: params
    });
  }
  protected post(url: string, data: any, customHeaders: any = null): Observable<any> {
    let headers: any = this.headers;
    if (customHeaders) {
      headers = Object.assign(this.headers, customHeaders);
    }
    return this.http.post(environment.apiUrl + url, data, { headers: headers });
  }

  protected put(url: string, data: any): Observable<any> {
    return this.http.put(environment.apiUrl + url, data, { headers: this.headers });
  }

  protected delete(url: string, params: any = {}): Observable<any> {
    return this.http.delete(environment.apiUrl + url, { headers: this.headers, params });
  }
}
