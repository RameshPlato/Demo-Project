import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../shared/Services/modal.service';
import { JobApplicationComponent } from "../shared/shared-components/job-application/job-application.component";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule, MaterialModule, FormsModule, JobApplicationComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent implements OnInit {
  contact_list = [
    { id: 1, name: 'Email', value: 'hello@thinksource.com', icon: '<i class="fa fa-envelope"></i>' },
    { id: 2, name: 'Phone', value: '+1-2345-6789', icon: '<i class="fa fa-phone"></i>' },
    { id: 3, name: 'Location', value: '123 Ave, New York, USA', icon: '<i class="fas fa-location-dot"></i> ' },
  ];

  constructor(
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  onFindJobClick(type:string) {
    this.modalService.openDialog(type);
  }

}
