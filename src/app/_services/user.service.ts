import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { ForgotPassword } from '../models/ForgotPasswordDto';

const API_URL = 'https://localhost:5001/api/User';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable({
  providedIn: 'root'
})
export class UserService {
  createCompleteRoute(route: string, urlAddress: any): string {
    throw new Error('Method not implemented.');
  }
  envUrl: any;

  constructor(private http: HttpClient,private cookies: CookieService) { }

  //getUserBoard(): Observable<any> {
  //  return this.http.get(API_URL , { responseType: 'text' });
 // }
  
// getPublicContent(): Observable<any> {
///  return this.http.get(API_URL + 'all', { responseType: 'text' });
//}
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + { responseType: 'text' });
 
  
  }
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'User', { responseType: 'text' });
  }

  getUserNaam(naam:string): Observable<any> {
    return this.http.get(API_URL + '/FindByNaam/' + naam, { responseType: 'text' });
  }
  //https://localhost:5001/api/User/naam?naam=liceth
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  login(user: any): Observable<any> {
    return this.http.post("https://localhost:5001/api/User/login", user);
  }
  register(user: any): Observable<any> {
    return this.http.post("https://localhost:5001/api/User/Register", user);
  }
  setToken(token: string) {
    this.cookies.set("token",token);
  }
  getToken() {
    return this.cookies.get("token");
  }
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }
  getUser() {
    return this.http.get("https://localhost:5001/api/User");
  }
   
 forgotPassword = (route: string, body: ForgotPassword) => {
  return this.http.post(this.createCompleteRoute(route, this.envUrl.urlAddress), body);
}


/*requestReset(body: string): Observable<any> {
  return this.http.post("https://localhost:5001/api/User/LinkToEmail/"+ body);
}*/

requestReset(username: string): Observable<any> {
  return this.http.post("https://localhost:44379/api/User/LinkToEmail/" , {
    Email : username,
  }, httpOptions);
}

newPassword(password: string, email:string): Observable<any> {
  //return this.http.post("https://localhost:5001/api/User/ResetPassword", body);
  return this.http.post("https://localhost:44379/api/User/ResetPassword/" , {
    Email : email,
    Password: password
  }, httpOptions);
}

ValidPasswordToken(body: any): Observable<any> {
  return this.http.post("https://localhost:5001/api/User/ResetPassword", body);
}
}

