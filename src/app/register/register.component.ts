import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateNotEmpty } from 'validation-utils';
<<<<<<< HEAD
import { UserService } from '../_services/user.service';
=======
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = ''

<<<<<<< HEAD
  constructor(private authService: AuthService, private userService:UserService,
    private formBuilder: FormBuilder) { }
=======
  constructor(private authService: AuthService,private formBuilder: FormBuilder) { }
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
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
  

  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe(
      data => {
        console.log(data);
<<<<<<< HEAD
        this.userService.setToken(data.token);

=======
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
   }
   }


