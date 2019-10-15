import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about/about.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './notfound/page-not-found.component';

export const ROUTES: Routes = [
  {path: 'app-friends-about', component: AboutComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'PageNotFoundComponent'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
