import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ErrorComponent } from './view/errors/error/error.component';
import { HomePresentationComponent } from './view/home/home-presentation/home-presentation.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'principal', component: HomePresentationComponent},
  {path:'404', component: ErrorComponent},
  {path:'**', redirectTo: '404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
