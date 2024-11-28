import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './shared/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    
  ],
  imports: [
    ReactiveFormsModule, 
    MaterialModule,
    CommonModule,
    HomeComponent // Import standalone component
  ],
  bootstrap: []
})
export class AppModule { }
