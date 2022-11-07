import { Component, OnInit } from '@angular/core';
import { Cheese } from '../models/cheese';
import { CheesesServiceService } from '../cheeses/cheeses-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  cheese: Cheese = {
    id: 0,
    naam: "",
    soort: "" ,
    smaak: ""
  };
  submitted = false;

  constructor(private cheesesServiceService:CheesesServiceService) { }

  ngOnInit(): void {

  }


  saveCheese(): void {
    const data = {
      id: this.cheese. id,
      naam: this.cheese. naam,
      soort: this.cheese.soort,
      smaak: this.cheese.smaak
    };

    this.cheesesServiceService.createCheese(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newCheese(): void {
    this.submitted = false;
    this.cheese = {
      id: 0,
      naam: '',
      soort: "" ,
      smaak: ""
    };
  }

}

