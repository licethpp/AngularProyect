import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';  
import { FormBuilder} from '@angular/forms';
import { ContactService } from '../_services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: any = {
    UserName: null,
    email: null,
    Comment: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = ''
  constructor( private formBuilder: FormBuilder,private contact: ContactService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        UserName: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        Comment: [
          '',
          [
            Validators.required,
            Validators.minLength(20),
            Validators.maxLength(20)
          ]
        ],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
       // validators: [Validation.match('password', 'confirmPassword')]
      }
    );
    
  }



  onSubmit(): void {
    const { UserName, email, Comment } = this.form;
    this.contact.PostMensaje(UserName,email, Comment).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
    console.error();
    this.isSignUpFailed = false;
      }
    );
   }
}
