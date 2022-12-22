import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { ForgotPassword } from '../models/ForgotPasswordDto';
=======
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d

const AUTH_API = 'https://localhost:5001/api/User/login';
const apiUrl='https://localhost:5001/api/User/Register';
const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API , {
      UserName : username,
      Password : password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(apiUrl + '/', {
      username,
      email,
      password,

    }, httpOptions);
  }
<<<<<<< HEAD
  // Send forgot password email
  resetpassword(model: any) {
    return this.http.post(apiUrl + 'forgotpassword', model);
  }

  // Change a users forgotten password
  resetChangePassword(email: string, token: string, model: any) {
    return this.http.post(apiUrl + 'ResetPassword' + model + email, token);
  }
  resetChangePassword1(email: string, token: string, model: any) {
    return this.http.post(apiUrl + 'ResetPassword' + model + email, token);
  }

=======
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
}
