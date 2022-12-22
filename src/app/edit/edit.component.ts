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
  isSuccessful = false;

  constructor(private cheesesServiceService:CheesesServiceService) { }

  ngOnInit(): void {

  }

   //actualizar datos 


   Update(): void {
     this.cheesesServiceService.Updatecheese(this.cheese)
       .subscribe(data=>{
        console.log(data)
        this.submitted = true;
        this.isSuccessful = true;

       }          
       )}
      
  saveCheese(): void {
    const data = {
      id: this.cheese. id,
      naam: this.cheese. naam,
      soort: this.cheese.soort,
      smaak: this.cheese.smaak,
      price: this.cheese.price,

    };
}
}