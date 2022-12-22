import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-reset-password',
  templateUrl: './request-reset-password.component.html',
  styleUrls: ['./request-reset-password.component.css']
})
export class RequestResetPasswordComponent implements OnInit {

  RequestResetForm: any = {
    email: null,
    
  };

  //RequestResetForm!: FormGroup;
  forbiddenEmails: any;
  errorMessage!: string;
  successMessage= "";
  IsvalidForm = true;
  submitted = false;

  constructor( private router: Router, private userService: UserService,) { }

  ngOnInit(): void {
    this.RequestResetForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
    });
  }


  RequestResetUser(form: { valid: any; }) {
    console.log(form)
    if (form.valid) {
      this.IsvalidForm = true;
      const { email } = this.RequestResetForm;
      this.userService.requestReset(email).subscribe(
        data => {
       
          this.RequestResetForm.reset();
          this.successMessage = "Reset password link send to email sucessfully.";
         this.submitted =true;
        },
        err => {

          if (err.error.message) {
            this.errorMessage = err.error.message;
          }
        }
      );
    } 
    else {
      this.IsvalidForm = false;
  
    }
  }
  }


