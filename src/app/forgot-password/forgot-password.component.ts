import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm = FormGroup
  successMessage= ""  ;
  errorMessage= "";
  showSuccess= true;
  showError= false 
  formBuilder: any;
  model: any;
  email= "";
  token= "";
  router: any;
  constructor(private authService:AuthService ,private userService:UserService  ) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(15),
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

  
  }

  resetChangePassword() {
    this.authService.resetChangePassword(this.email, this.token, this.model).subscribe(next => {
    }, error => {
     error(error);
    }, () => {
      this.router.navigate(['/passwordchanged']);
    });
  }
 
  }


