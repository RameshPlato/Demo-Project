import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-our-specialty',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FooterComponent,MaterialModule,FormsModule],
  templateUrl: './our-specialty.component.html',
  styleUrl: './our-specialty.component.scss'
})
export class OurSpecialtyComponent implements OnInit{

  blogs = [
    {
      image:
        '../../assets/images/Startup1.png',
      time: '27 Nov 2024',
      title: 'Sarah M., HR Manager',
      content:
        'Their commitment to diversity and inclusion is truly inspiring. Partnering with them brought fresh perspectives and exceptional talent to our organization.',
    },
    {
      image:
        '../../assets/images/Social.png',
      time: '27 Nov 2024',
      title: 'Mark R., COO, Veteran Ventures',
      content:'The veteran-focused support programs are outstanding. We’ve seen firsthand how their expertise empowers veterans to succeed in the tech industry.'
    },
    {
      image:
        '../../assets/images/Apps.png',
      time: '27 Nov 2024',
      title: 'Emily T., Director of Recruitment',
      content:'Working with New Tech Global has been a game-changer for us. They consistently deliver top-notch candidates who fit perfectly with our team culture.'
    },
    // {
    //   image:
    //     '../../assets/images/Apps.png',
    //   time: '27 Nov 2024',
    //   title: 'David L., CTO, Enterprise Solutions',
    //   content:'Their proven industry expertise is unmatched. From start to finish, the process was seamless, and the results exceeded our expectations.'
    // },
    
  ];

  our_specialties = [
    {
      id: 1,
      icon: "🛠️",
      title: "DATA Staffing Specialist",
      description: "Experts in delivering top-tier data staffing solutions."
    },
    {
      id: 2,
      icon: "💡",
      title: "Tailored IT Solutions",
      description: "Custom technology strategies to meet your business needs."
    },
    {
      id: 3,
      icon: "🏆",
      title: "Proven Industry Expertise",
      description: "Decades of experience across diverse industries."
    },
    {
      id: 4,
      icon: "🎖️",
      title: "Veteran-Focused Support",
      description: "Supporting veterans through specialized services and opportunities."
    },
    {
      id: 5,
      icon: "🌍",
      title: "Commitment to Diversity and Inclusion",
      description: "Promoting a culture of equality and respect."
    },
    {
      id: 6,
      icon: "📍",
      title: "US Map with Pins",
      description: "Visualize candidate placements across the United States."
    }
  ];
  


  constructor(){}


  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
