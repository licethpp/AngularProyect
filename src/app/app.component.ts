import { Component } from '@angular/core';
import { EditComponent } from './edit/edit.component';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from './_services/token-storage.service';
<<<<<<< HEAD
import { CartServiceService } from './_services/cart-service.service';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
=======

>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  [x: string]: any;
  imageSrc = '../app/Imagen/kesoLogo.jpg'  
  imageAlt = 'cheese'
=======
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
  title = 'appKazen';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
<<<<<<< HEAD
  public totalItem : number = 0;
  public searchTerm !: string;
  

  constructor(private cookie: CookieService, private router: Router,private cartService : CartServiceService,
   private activatedRouter: ActivatedRoute,private tokenStorageService: TokenStorageService){}
=======
  constructor( private router: Router,
    private activatedRouter: ActivatedRoute,private tokenStorageService: TokenStorageService){}
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d



    ngOnInit(): void {
<<<<<<< HEAD

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
=======
      this.isLoggedIn = !!this.tokenStorageService.getToken();
  
      if (this.isLoggedIn) {
        const user = this.tokenStorageService.getUser();
      //  this.roles = user.roles;
     this.username = user.username;
     //   this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
  
     
    }
<<<<<<< HEAD
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })

    
=======
  
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
  }
  
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
<<<<<<< HEAD
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}


=======


}
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
