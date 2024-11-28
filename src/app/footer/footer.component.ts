import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
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

  // <p>DA/DE with GenAI</p>
  //                <p>DS with genie</p>
  //                <p>Network Security</p>
  //                <p>Salesforce with Data Cloud</p>

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getService(service_id: number) {
    this.router.navigate([`service/${service_id}`]);
  }

  getSkillDetails(skill: any) {
    if (skill.status) {
      this.router.navigate([`technology/${skill.id}`]);
    }
  }
}
