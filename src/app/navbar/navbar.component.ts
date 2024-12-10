import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,MaterialModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  toggleDrawer() {
    // Logic for toggling the drawer in mobile view
  }
  isNavbarCollapsed = true; // Initially collapsed
  jobForm: FormGroup ;

  
  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.jobForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      workExperience: ['', Validators.required],
      skills: ['', Validators.required],
    });
  }
  
  ngOnInit(){

  }

  onSubmit(): void {
    if (this.jobForm.valid) {
      // Handle the form submission, like sending the data to a backend
      console.log(this.jobForm.value);
      // this.dialogRef.close();
    }
  }
  onModalClose(): void {
    this.jobForm.reset();
  }
  
  getService(service_id: number) {
    this.router.navigate([`service/${service_id}`]);
  }
}
