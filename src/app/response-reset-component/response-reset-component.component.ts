import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-response-reset-component',
  templateUrl: './response-reset-component.component.html',
  styleUrls: ['./response-reset-component.component.css']
})
export class ResponseResetComponentComponent implements OnInit {

  ResponseResetForm: any = {
    newPassword: null,
    confirmPassword: null
  };
  //ResponseResetForm !: FormGroup 
  errorMessage="";
  successMessage="";
  resetToken= 0;
  email:string = "";
  CurrentState: any;
  IsResetFormValid = true;
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { 
    
    this.CurrentState = 'Wait';
    this.route.params.subscribe(params => {
      this.email = params['email'];
      //console.log(this.resetToken);
      //this.VerifyToken();
    });
  }
  VerifyToken() {
    this.userService.ValidPasswordToken({ resettoken: this.resetToken }).subscribe(
      data => {
        this.CurrentState = 'Verified';
      },
      err => {
        this.CurrentState = 'NotVerified';
      }
    );
  }

  ngOnInit(): void {
    this.Init();
  }
  Init() {
    this.ResponseResetForm = this.fb.group(
      {
        //resettoken:[this.resetToken],
        newPassword: ['', [Validators.required,Validators.minLength(4)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(4)]]
      }
    );
  }
  
  Validate(passwordFormGroup: FormGroup) {
    const new_password = passwordFormGroup.controls['newPassword'].value;
    const confirm_password = passwordFormGroup.controls['confirmPassword'].value;

    if (confirm_password.length <= 0) {
      return null;
    }

    if (confirm_password !== new_password) {
      return {
        doesNotMatch: true
      };
    }

    return null;
  }


  ResetPassword(form:any) {
    console.log(form.get('confirmPassword'));
    if (form.valid) {
      this.IsResetFormValid = true;
      const { newPassword, confirmPassword } = this.ResponseResetForm;

      this.userService.newPassword(newPassword, this.email).subscribe(
        data => {
          this.ResponseResetForm.reset();
          this.successMessage = data.message;
          setTimeout(() => {
            this.successMessage = "";
            this.router.navigate(['sign-in']);
          }, 3000);
        },
        err => {
          if (err.error.message) {
            this.errorMessage = err.error.message;
          }
        }
      );
    } else { this.IsResetFormValid = false; }
  }

}
