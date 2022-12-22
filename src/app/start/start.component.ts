
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  content!: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
     
    this.userService.getPublicContent().subscribe((map(data=>{
     this.content = data

  },
  
  ))
   
    );
  }



  

  }


