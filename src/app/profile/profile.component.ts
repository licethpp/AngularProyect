import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../_services/user.service';
import { user } from '../models/user';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs';
import { json } from 'body-parser';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  currentUser:any

  constructor(private token: TokenStorageService,   private actRoute: ActivatedRoute,private cookie: CookieService, private userService: UserService,
    ) {
  
   }

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
}
