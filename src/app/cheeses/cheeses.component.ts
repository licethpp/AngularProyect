
import { Component, Input, OnInit } from '@angular/core';
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
  @Input()cheese:any;


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

 
  
