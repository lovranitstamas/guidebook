import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './notfound/page-not-found.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';
import {AuthenticationModule} from './authentication/authentication.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AuthenticationModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
