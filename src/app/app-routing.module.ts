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
const routes: Routes = [
  {path:'home', component:StartComponent},

  {path:'cheese', component:CheesesComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'detail/:id', component:DetailsComponent},
  {path:'add', component:AddComponent},
  {path:'about', component:AboutComponent},



  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
