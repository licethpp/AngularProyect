import { Component } from '@angular/core';
import { EditComponent } from './edit/edit.component';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from './_services/token-storage.service';
import { CartServiceService } from './_services/cart-service.service';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  imageSrc = '../app/Imagen/kesoLogo.jpg'  
  imageAlt = 'cheese'
  title = 'appKazen';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  public totalItem : number = 0;
  public searchTerm !: string;
  

  constructor(private cookie: CookieService, private router: Router,private cartService : CartServiceService,
   private activatedRouter: ActivatedRoute,private tokenStorageService: TokenStorageService){}



    ngOnInit(): void {

      let cc = window as any;
       cc.cookieconsent.initialise({
         palette: {
           popup: {
             background: "#164969"
           },
           button: {
             background: "#ffe000",
             text: "#164969"
           }
         },
         theme: "classic",
         content: {
        
         }
       });
      this.isLoggedIn = !!this.tokenStorageService.getToken();
  
      if (this.isLoggedIn) {
        //const user = this.tokenStorageService.getUser();
       //this.roles = user.roles;
     //this.username = user.username;
     this.username=this.cookie.get("username")
       //this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
  
     
    }
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })

    
  }
  
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}


