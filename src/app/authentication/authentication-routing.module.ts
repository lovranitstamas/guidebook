import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';


const ROUTES: Routes = [
  {path: 'app-friends-login', component: LoginComponent},
  {path: 'app-friends-signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {
}
