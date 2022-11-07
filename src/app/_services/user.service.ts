import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = 'https://localhost:44379/api/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL , { responseType: 'text' });
  }
  

  getPublicContent(id:number): Observable<any> {
    return this.http.get(API_URL + '/'  + id,{ responseType: 'text' });
  }
}
