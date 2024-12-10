import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { TechnologyComponent } from './technology/technology.component';
import { OurSpecialtyComponent } from './our-specialty/our-specialty.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'service/:id', component: ServicesComponent }, 
  { path: 'technology/:id', component: TechnologyComponent }, 
  { path: 'our-specialties', component: OurSpecialtyComponent }, 
  { path: 'careers', component: CareersComponent }, 
  { path: 'contact-us', component: ContactUsComponent }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect empty path to Home
  { path: '**', component: HomeComponent }, // Wildcard route for unmatched paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
