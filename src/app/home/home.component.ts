import {
  AfterViewInit,
  Component,
  HostListener,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import {
  Chart,
  LinearScale,
  CategoryScale,
  BarElement,
  LineElement, 
  PointElement, 
  Title,
  Tooltip,
  Legend,
  BarController,
  LineController, 
} from 'chart.js';

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FooterComponent,MaterialModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  chart: Chart | undefined;
  



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

  skills_list = [
    {
      id: 1,
      image: '../../assets/icons/Java Fullstack.svg',
      name: 'Java Fullstack'
    },
    {
      id: 2,
      image: '../../assets/icons/DevOps.png',
      name: 'DevOps'
    },
    {
      id: 3,
      image: '../../assets/icons/Azure&AWS.png',
      name: 'Azure & AWS'
    },
    {
      id: 4,
      image: '../../assets/icons/Android&IOS.png',
      name: 'Android & IOS'
    },
    {
      id: 5,
      image: '../../assets/icons/Python.png',
      name: 'Python'
    },
    {
      id: 6,
      image: '../../assets/icons/Mulesoft.png',
      name: 'MuleSoft'
    }
  ];

  blogs = [
    {
      image:
        '../../assets/images/Startup1.png',
      time: '27 Nov 2024',
      title: 'Startups',
      content:
        'Tech startup news that breaks down the funding, growth, and long-term trajectory of companies across every stage and industry. Startup coverage includes climate, crypto, fintech, SaaS, transportation, and consumer tech.',
    },
    {
      image:
        '../../assets/images/Social.png',
      time: '27 Nov 2024',
      title: 'Social',
      content:
        'Social networking shapes society and our news coverage reflects and directs that. We keep tabs on all the biggest social companies, including TikTok, Facebook, Instagram, Twitter, Snapchat and Reddit, as well as funding and acquisitions of new social startups.',
    },
    {
      image:
        '../../assets/images/Apps.png',
      time: '27 Nov 2024',
      title: 'Apps',
      content:
        'The app economy continues to grow, having produced a record number of downloads and consumer spending across both the iOS and Google Play stores. Keep up with this fast-moving industry in one place, with the latest from the world of apps, including news, updates, and much more.',
    },
    
  ];

  customers_types = [
    {id:1,name:"Automation & Robotics", class:"col-sm-3"},
    {id:2,name:"Pharma",class:"col-sm-2"},
    {id:1,name:"eCTD",class:"col-sm-1"},
    {id:2,name:"HealthCare",class:"col-sm-2"},
  ]

  customers_list = [
    {id:1,image:"https://mms.businesswire.com/media/20240625252542/en/2047942/5/metlife_eng_logo_rgb.jpg"},
    {id:1,image:"https://mms.businesswire.com/media/20240625252542/en/2047942/5/metlife_eng_logo_rgb.jpg"},
    {id:1,image:"https://mms.businesswire.com/media/20240625252542/en/2047942/5/metlife_eng_logo_rgb.jpg"},
    {id:1,image:"https://mms.businesswire.com/media/20240625252542/en/2047942/5/metlife_eng_logo_rgb.jpg"},
    {id:2,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0UX_2LTOvxlc0AhWoECS9tDNuB6Ko8PrbvHkrHlzKxkpiOwfN2IoFu6sTFs-ak1K8MM&usqp=CAU"},
    {id:2,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0UX_2LTOvxlc0AhWoECS9tDNuB6Ko8PrbvHkrHlzKxkpiOwfN2IoFu6sTFs-ak1K8MM&usqp=CAU"},
    {id:2,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0UX_2LTOvxlc0AhWoECS9tDNuB6Ko8PrbvHkrHlzKxkpiOwfN2IoFu6sTFs-ak1K8MM&usqp=CAU"},
    {id:2,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0UX_2LTOvxlc0AhWoECS9tDNuB6Ko8PrbvHkrHlzKxkpiOwfN2IoFu6sTFs-ak1K8MM&usqp=CAU"},
  ]

  happy_customers_list: { id: number; image: string }[] = [];
  columnClass: string = 'col-lg-2';

  technologies: { name: string }[] = [
    { name: 'DA/DE with GenAI, Azure & AWS' },
    { name: 'DS with GenAI' },
    { name: 'Devops & Python' },
    { name: 'Java FullStack' },
    { name: 'Android & IOS' },
    { name: 'Salesforce with Data Cloud' },
    { name: '.Net Developer Fullstack' },
    { name: 'Network Engineer/Security' },
    { name: 'MuleSoft' },
    { name: 'SAP' },
    { name: 'Boomi' },
    { name: 'Service Now' },
    { name: 'Data Bricks' },
    { name: 'Snow Flake' },
    { name: 'BigData/ Hadoop' },
    { name: 'Salesforce with Agent Force' }
  ];

  locations: { name: string, lat: number, lon: number }[] = [
    { name: 'Washington', lat: 47.24672144330764, lon: -121.21555194485947 },
    { name: 'San Francisco', lat: 37.7749, lon: -122.4194 },
    { name: 'London', lat: 51.5074, lon: -0.1278 },
    { name: 'Sydney', lat: -33.8688, lon: 151.2093 },
    { name: 'Tokyo', lat: 35.6762, lon: 139.6503 },
    { name: 'Berlin', lat: 52.52, lon: 13.4050 },
    { name: 'Paris', lat: 48.8566, lon: 2.3522 },
    { name: 'Mumbai', lat: 19.0760, lon: 72.8777 },
    { name: 'Dubai', lat: 25.276987, lon: 55.296249 },
    { name: 'Hyderabad', lat: 17.401456573052947, lon: 78.40518030212908 }
  ];

  experiences: { name: string }[] = [
    { name: '0-1 Years' },
    { name: '1-3 Years' },
    { name: '3-5 Years' },
    { name: '5-7 Years' },
    { name: '7-10 Years' },
    { name: '10+ Years' }
  ];

  roles: { name: string }[] = [
    { name: 'Developer' },
    { name: 'Team Lead' },
    { name: 'Manager' },
    { name: 'Architect' },
    { name: 'Tester' },
    { name: 'Data Scientist' }
  ];

  selectedTechnology: string | undefined;
  selectedLocation: string | undefined;
  selectedExperience: string | undefined;
  selectedRole: string | undefined;

  isOpenTechnology = false;
  isOpenLocation = false;
  isOpenExperience = false;
  isOpenRole = false;

  searchQueryTechnology: string = '';
  searchQueryLocation: string = '';
  searchQueryExperience: string = '';
  searchQueryRole: string = '';

  filteredTechnologies = this.technologies;
  filteredLocations = this.locations;
  filteredExperiences = this.experiences;
  filteredRoles = this.roles;


  mapUrl: SafeResourceUrl = '';  


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router:Router,
    private sanitizer: DomSanitizer
  ) {
    const defaultUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46830151.11795828!2d-119.8093025!3d44.24236485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1732760839892!5m2!1sen!2sin`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(defaultUrl);
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    Chart.register(
      LinearScale,
      CategoryScale,
      BarElement,
      LineElement, 
      PointElement, // Register PointElement
      Title,
      Tooltip,
      Legend,
      BarController,
      LineController 
    );
    this.getCustomers(1);
  }


  getService(service:any){
     this.router.navigate([`service/${service.id}`])
  }
  getSkillDetails(skill_id:number){
    this.router.navigate([`technology/${skill_id}`])
 }

  getCustomers(id:number){
    this.happy_customers_list = this.customers_list.filter(customer=>{
      return customer.id == id;
    })
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.createChart();
    }
  }
  
  toggleDropdown(type: 'technology' | 'location' | 'experience' | 'role'): void {
    this.closeAllDropdowns();
    if (type === 'technology') this.isOpenTechnology = !this.isOpenTechnology;
    else if (type === 'location') this.isOpenLocation = !this.isOpenLocation;
    else if (type === 'experience') this.isOpenExperience = !this.isOpenExperience;
    else if (type === 'role') this.isOpenRole = !this.isOpenRole;
  }

  closeAllDropdowns(): void {
    this.isOpenTechnology = false;
    this.isOpenLocation = false;
    this.isOpenExperience = false;
    this.isOpenRole = false;
  }

  filterOptions(type: 'technology' | 'location' | 'experience' | 'role'): void {
    if (type === 'technology') {
      this.filteredTechnologies = this.technologies.filter(option =>
        option.name.toLowerCase().includes(this.searchQueryTechnology.toLowerCase())
      );
    } else if (type === 'location') {
      this.filteredLocations = this.locations.filter(option =>
        option.name.toLowerCase().includes(this.searchQueryLocation.toLowerCase())
      );
    } else if (type === 'experience') {
      this.filteredExperiences = this.experiences.filter(option =>
        option.name.toLowerCase().includes(this.searchQueryExperience.toLowerCase())
      );
    } else if (type === 'role') {
      this.filteredRoles = this.roles.filter(option =>
        option.name.toLowerCase().includes(this.searchQueryRole.toLowerCase())
      );
    }
  }

  selectOption(type: 'technology' | 'location' | 'experience' | 'role', option: any): void {
    if (type === 'technology') {
      this.selectedTechnology = option.name;
      this.isOpenTechnology = false;
    } else if (type === 'location') {
      this.selectedLocation = option.name;
      this.isOpenLocation = false;
      this.updateMapUrl(option.lat, option.lon);
    } else if (type === 'experience') {
      this.selectedExperience = option.name;
      this.isOpenExperience = false;
    } else if (type === 'role') {
      this.selectedRole = option.name;
      this.isOpenRole = false;
    }
  }

  updateMapUrl(lat: number, lon: number): void {
    const url = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46830151.11795828!2d${lon}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1732760839892!5m2!1sen!2sin`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  createChart(): void {
    if (isPlatformBrowser(this.platformId)) {
      const canvas = document.getElementById('talentChart') as HTMLCanvasElement;
      const ctx = canvas?.getContext('2d');
      
      if (this.chart) {
        this.chart.destroy();
      }
  
      // X-axis and Y-axis labels
      const xAxisLabels = [
        'Pharma',
        'Automation & Robotics',
        'Asana, Veeva - PMs pharma',
        'Spectometry',
        'eCTD',
        'GLP',
        'HealthCare',
        'Medical Billing',
      ];
  
      const yAxisLabels = [
        'DA/DE with GenAI, Azure & AWS',
        'DS with GenAI',
        'Devops & Python',
        'Java FullStack',
        'Android & IOS',
        'Salesforce with Data Cloud',
        '.Net Developer Fullstack',
        'Network Engineer/Security',
        'MuleSoft',
        'SAP',
        'Boomi',
        'Service Now',
        'Data Bricks',
        'Snow Flake',
        'BigData/ Hadoop',
        'Salesforce with Agent Force',
      ];
  
      // Numeric data (index-based for Y-axis)
      const data = [
        { x: 0, y: 2 },
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 2, y: 6 },
        { x: 3, y: 12 },
        { x: 4, y: 4 },
        { x: 4, y: 9 },
        { x: 5, y: 2 },
        { x: 6, y: 7 },
        { x: 7, y: 9 },
      ];
  
      // Create the chart if the canvas context is valid
      if (ctx) {
        this.chart = new Chart(ctx, {
          type: 'line', // Scatter to map custom Y-axis labels
          data: {
            datasets: [
              {
                label: 'Talent Analysis',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'white',
                borderWidth: 2,
                showLine: true, 
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                labels: {
                  color: 'white', 
                  font: {
                    size: 14, 
                  },
                },
              },
            },
            scales: {
              x: {
                type: 'linear',
                position: 'bottom',
                ticks: {
                  color: 'white', 
                  callback: function (value, index) {
                    return xAxisLabels[index] || ''; // Map X-axis numeric value to labels
                  },
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.2)', 
                },
              },
              y: {
                type: 'linear',
                min: 0,
                max: yAxisLabels.length - 1, // Ensure Y-axis covers all labels
                ticks: {
                  stepSize: 1, 
                  color: 'white',
                  callback: function (value:any) {
                    return yAxisLabels[value] || ''; // Map Y-axis numeric value to labels
                  },
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.2)', 
                },
              },
              
            },
          },
        });
      } else {
        console.error('Canvas context is null.');
      }
    }
  }
  
  
}
