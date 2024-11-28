import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  toggleDrawer() {
    // Logic for toggling the drawer in mobile view
  }
  isNavbarCollapsed = true; // Initially collapsed
  constructor(private router: Router) {}
  
  ngOnInit(){

  }
  getService(service_id: number) {
    this.router.navigate([`service/${service_id}`]);
  }
}
