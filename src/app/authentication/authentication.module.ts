import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthenticationRoutingModule} from './authentication-routing.module';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {AuthenticationService} from '../service/authentication.service';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class AuthenticationModule {
}
