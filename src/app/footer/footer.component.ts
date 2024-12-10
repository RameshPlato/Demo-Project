import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JobApplicationComponent } from '../shared/shared-components/job-application/job-application.component';
import { MaterialModule } from '../shared/material.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  mail = 'hello@thinksource.com';

  technology_list = [
    {
      id: 1,
      name: 'Java Fullstack',
      status: true,
    },
    {
      id: 2,
      name: 'DevOps',
      status: true,
    },
    {
      id: 3,
      name: 'Azure & AWS',
      status: true,
    },
    {
      id: 4,
      name: 'Android & IOS',
      status: true,
    },
    {
      id: 5,
      name: 'Python',
      status: true,
    },
    {
      id: 6,
      name: 'MuleSoft',
      status: true,
    },
    {
      id: 7,
      name: 'DA/DE with GenAI',
      status: false,
    },
    {
      id: 8,
      name: 'DS with genie',
      status: false,
    },
    {
      id: 9,
      name: 'Network Security',
      status: false,
    },
    {
      id: 10,
      name: 'Salesforce with Data Cloud',
      status: false,
    },
  ];

  services_list = [
    {
      id:1,
      title: 'Workforce Consulting',
      image: '../../assets/images/img_1.jpg',
      description: 'Customized strategies to build resilient teams',
      link: '#'
    },
    {
      id:2,
      title: 'IT Career Training',
      image: '../../assets/images/img_2.jpg',
      description: 'Comprehensive training for career advancement in tech.',
      link: '#'
    },
    {
      id:3,
      title: 'Staffing Solutions',
      image: '../../assets/images/img_3.jpg',
      description: 'Connecting top talent with the right opportunities.',
      link: '#'
    },
    {
      id:4,
      title: 'Resume and Career Coaching',
      image: '../../assets/images/img_1.jpg',
      description: 'Guidance to craft standout professional profiles.',
      link: '#'
    }
  ];

  jobForm: FormGroup ;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private fb: FormBuilder,
  ) {
    this.jobForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      workExperience: ['', Validators.required],
      skills: ['', Validators.required],
    });
  }
  

  ngOnInit(): void {}

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
  
  // openJobApplicationDialog(): void {
  //   this.dialog.open(JobApplicationComponent);
  //   const dialogRef = this.dialog.open(JobApplicationComponent, {
  //     data: { payload: null, mode: 'add' },
  //     height: 'auto',  // Adjust height if needed
  //     width: '350px',
  //     position: { top: '20px' },  // Position the dialog above the footer
  //     panelClass: 'custom-modalbox'  // Custom class to manage z-index
  //   });
  
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }
  

  getService(service_id: number) {
    this.router.navigate([`service/${service_id}`]);
  }

  getSkillDetails(skill: any) {
    if (skill.status) {
      this.router.navigate([`technology/${skill.id}`]);
    }
  }
}
