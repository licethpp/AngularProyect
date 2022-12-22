
import { Component, Input, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Decimal128, Number } from 'mongoose';
=======
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
import { CheesesServiceService } from './cheeses-service.service';

@Component({
  selector: 'app-cheeses',
  templateUrl: './cheeses.component.html',
  styleUrls: ['./cheeses.component.css']
})
export class CheesesComponent implements OnInit {
  modalTitle:any;
  activateAddEditStuCom:boolean = false;
  cheesList:any = [];
  id:number = 0;
  naam: string ="";
  soort: string ="";
  smaak:string ="";
<<<<<<< HEAD
  price:number = 0;
  pictureData=new FileReader();
  isSuccessful = false;
  
  
  @Input()cheese:any;
 alert=false
=======
  @Input()cheese:any;

>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d

  constructor(private cheesesServiceService:CheesesServiceService) { }

  ngOnInit():void {
    this.ListChees();

  }


  ListChees() {
    this.cheesesServiceService.getAll().subscribe(data =>{
      this.cheesList= data;
    });
    this.cheesesServiceService.Updatecheese(this.id).subscribe(data=>{
      this.cheese =data
  })
<<<<<<< HEAD
  const reader = new FileReader();

=======
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
}

  EditCheese(item: any){
    this.cheese = item;
    this.cheesesServiceService.get(this.cheese.id).subscribe(res =>{
      console.log(JSON.stringify(res));
      this.cheese = res;
      
  })
  this.activateAddEditStuCom = true;

  }
  closeClick(){
    this.activateAddEditStuCom=false;
    this.ListChees();
  }

  deleteChese(id:number){
<<<<<<< HEAD
    
    this.cheesesServiceService.deletecheese(id).subscribe( data => {
      console.log(data);
      this.isSuccessful = true;


=======
    this.cheesesServiceService.deletecheese(id).subscribe( data => {
      console.log(data);
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
    })
  }
  getdetail(id:any) {
    this.cheesesServiceService.get(id)
      .subscribe(
        data => {
          this.cheese = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  }

 
  
