import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { response } from 'express';
import { map, Observable } from 'rxjs';

const API_URL = 'https://localhost:5001/api/User/Comment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable({
  providedIn: 'root'
})
export class ContactService {

 
  constructor(private http: HttpClient) { }

  PostMensaje(username: string, email: string,Comment:string): Observable<any> {
    return this.http.post(API_URL , {
      UserName : username,
      email : email,
      Comment:Comment
    }, 
    httpOptions);
  }


}
