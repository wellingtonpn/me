import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ErrorComponent } from './view/errors/error/error.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'404', component: ErrorComponent},
  {path:'**', redirectTo: '404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
