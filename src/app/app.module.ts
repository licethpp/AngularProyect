import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { CheesesComponent } from './cheeses/cheeses.component';
import { CheesesServiceService } from './cheeses/cheeses-service.service';
import { EditComponent } from './edit/edit.component';
import { StartComponent } from './start/start.component';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './footer/footer.component';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import{authInterceptorProviders}from './ayudas/auth.interceptor';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { AboutComponent } from './about/about.component';
import { NgbdCarouselBasicComponent } from './ngbd-carousel-basic/ngbd-carousel-basic.component';


@NgModule({
  declarations: [
    AppComponent,
    CheesesComponent,
    EditComponent,
    StartComponent,
    DetailsComponent,
    FooterComponent,
    AddComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardUserComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    AboutComponent,
    NgbdCarouselBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CheesesServiceService,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
