import { Component } from '@angular/core';
import { EditComponent } from './edit/edit.component';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appKazen';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  constructor( private router: Router,
    private activatedRouter: ActivatedRoute,private tokenStorageService: TokenStorageService){}



    ngOnInit(): void {
      this.isLoggedIn = !!this.tokenStorageService.getToken();
  
      if (this.isLoggedIn) {
        const user = this.tokenStorageService.getUser();
      //  this.roles = user.roles;
     this.username = user.username;
     //   this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
  
     
    }
  
  }
  
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }


}
