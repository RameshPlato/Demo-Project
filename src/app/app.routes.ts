import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { TechnologyComponent } from './technology/technology.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'service/:id', component: ServicesComponent }, 
  { path: 'technology/:id', component: TechnologyComponent }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect empty path to Home
  { path: '**', component: HomeComponent }, // Wildcard route for unmatched paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
