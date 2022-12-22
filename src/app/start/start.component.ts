
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { map } from 'rxjs';
=======
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
<<<<<<< HEAD
  content!: any;
=======
  content="";
  
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
  constructor(private userService: UserService) { }

  ngOnInit(): void {
     
<<<<<<< HEAD
    this.userService.getPublicContent().subscribe((map(data=>{
     this.content = data

  },
  
  ))
   
=======
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
    );
  }



  

  }


