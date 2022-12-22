import { Component, Input, OnInit } from '@angular/core';
import { CheesesServiceService } from '../cheeses/cheeses-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input()cheese:any;
  submitted = false;
  modalTitle:any;
  activateAddEditStuCom:boolean = false;
<<<<<<< HEAD
  isSuccessful = false;

=======
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
  constructor(private cheesesServiceService:CheesesServiceService) { }

  ngOnInit(): void {

  }

   //actualizar datos 


   Update(): void {
     this.cheesesServiceService.Updatecheese(this.cheese)
       .subscribe(data=>{
        console.log(data)
        this.submitted = true;
<<<<<<< HEAD
        this.isSuccessful = true;
=======
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d

       }          
       )}
      
  saveCheese(): void {
    const data = {
      id: this.cheese. id,
      naam: this.cheese. naam,
      soort: this.cheese.soort,
<<<<<<< HEAD
      smaak: this.cheese.smaak,
      price: this.cheese.price,

=======
      smaak: this.cheese.smaak
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
    };
}
}