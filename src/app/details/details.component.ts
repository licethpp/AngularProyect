import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheesesServiceService } from '../cheeses/cheeses-service.service';
import { Cheese } from '../models/cheese';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() cheese: Cheese = {
    id: 0,
    naam: "",
    soort: "" ,
    smaak: ""
  };
  message = '';

  constructor(
    private cheesesServiceService: CheesesServiceService,
    private route: ActivatedRoute,
    private router: Router


  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getdetail(this.route.snapshot.params["id"]);
    }

  }
  getdetail(id: string): void {
    this.cheesesServiceService.get(id)
      .subscribe({
        next: (data) => {
          this.cheese = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
