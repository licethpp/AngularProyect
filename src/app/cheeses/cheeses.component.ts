
import { Component, Input, OnInit } from '@angular/core';
import { Decimal128, Number } from 'mongoose';
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
  price:number = 0;
  pictureData=new FileReader();
  isSuccessful = false;
  
  
  @Input()cheese:any;
 alert=false

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
  const reader = new FileReader();

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
    
    this.cheesesServiceService.deletecheese(id).subscribe( data => {
      console.log(data);
      this.isSuccessful = true;


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

 
  
