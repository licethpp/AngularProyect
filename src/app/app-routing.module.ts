import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { CheesesComponent } from './cheeses/cheeses.component';
import { StartComponent } from './start/start.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';
import{ProfileComponent} from'./profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { AboutComponent } from './about/about.component';
<<<<<<< HEAD
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RequestResetPasswordComponent } from './request-reset-password/request-reset-password.component';
import { ResponseResetComponentComponent } from './response-reset-component/response-reset-component.component';
=======
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
const routes: Routes = [
  {path:'home', component:StartComponent},

  {path:'cheese', component:CheesesComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'detail/:id', component:DetailsComponent},
  {path:'add', component:AddComponent},
  {path:'about', component:AboutComponent},
<<<<<<< HEAD
  {path:'contact', component:ContactComponent},

  {path:'checkout', component:CheckoutComponent},
  {path:'cart', component:CartComponent},
  {path:'product', component:ProductComponent},



=======
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d



  { path: 'profile', component: ProfileComponent },
<<<<<<< HEAD
  { path: 'forgotpassword', component: ForgotPasswordComponent },
=======
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
<<<<<<< HEAD
  { path: 'RequestResetPasswordComponent', component: RequestResetPasswordComponent },
  { path: 'ResetPassword/:email', component: ResponseResetComponentComponent },
=======
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d

  { path: '', redirectTo: 'home', pathMatch: 'full' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
