import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
=======
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
<<<<<<< HEAD
  constructor(private cookieService: CookieService,
    private authService: AuthService, 
    private userService: UserService, 

    private tokenStorage: TokenStorageService, 
    private formBuilder: FormBuilder) 
    { }
=======
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private formBuilder: FormBuilder) { }
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
<<<<<<< HEAD
            Validators.minLength(15),
=======
            Validators.minLength(6),
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
       // validators: [Validation.match('password', 'confirmPassword')]
      }
    );

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser();
    }
  }
  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
<<<<<<< HEAD
        //save cookie 
       // this.cookieService.set('username', username);
        this.userService.setToken(data.token);
=======
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser();
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
<<<<<<< HEAD
//this.cookies.delete("token");
=======
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d

}
