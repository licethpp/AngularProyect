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
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './contact/contact.component';
import { CookieService } from 'ngx-cookie-service';
import { ContactService } from './_services/contact.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RequestResetPasswordComponent } from './request-reset-password/request-reset-password.component';
import { ResponseResetComponentComponent } from './response-reset-component/response-reset-component.component';
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
    NgbdCarouselBasicComponent,
    CheckoutComponent,
    CartComponent,
    ProductComponent,
    HeaderComponent,
    ContactComponent,
    ForgotPasswordComponent,
    RequestResetPasswordComponent,
    ResponseResetComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [CheesesServiceService,authInterceptorProviders,CookieService,ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
