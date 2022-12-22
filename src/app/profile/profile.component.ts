import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../_services/user.service';
import { user } from '../models/user';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs';
import { json } from 'body-parser';
=======

>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
<<<<<<< HEAD

export class ProfileComponent implements OnInit {
  currentUser:any

  constructor(private token: TokenStorageService,   private actRoute: ActivatedRoute,private cookie: CookieService, private userService: UserService,
=======
export class ProfileComponent implements OnInit {
  currentUser: any;


  constructor(private token: TokenStorageService,   private actRoute: ActivatedRoute
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
    ) {
  
   }

<<<<<<< HEAD
  ngOnInit(): void {
    //const { username } = this.currentUser;
    //this.currentUser = this.token.getUser();
    //this.currentUser = this.UserService.getUserNaam(this.cookie.get("username"));
    this.getUserLogged();
    this.userService.getUserNaam(this.cookie.get("username")).subscribe(map(data=>{
      this.currentUser= data;
      console.log(data)
    }))
   // data => {
    //   this.currentUser = JSON.parse(JSON.stringify(data));
      // let t = 0
   //  },
   //  err => {
        
   //   }
  //  );
    this.currentUser=this.cookie.get("username")
  }

  getUserLogged() {
    this.userService.getUser().subscribe(user => {
      console.log(user);
    });
  }
=======

  
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
}
