import {
  AfterViewInit,
  Component,
  Inject,
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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  chart: Chart | undefined;

  services_list = [
    {
      id:1,
      title: 'ManPower RPO',
      image: 'https://achevers-file-manager.s3.ap-south-1.amazonaws.com/uploads/ai-removebg-preview.png',
      description: 'Lorem ipsum dolor sit amet',
      link: '#'
    },
    {
      id:2,
      title: 'BPO',
      image: 'https://achevers-file-manager.s3.ap-south-1.amazonaws.com/uploads/ai-removebg-preview.png',
      description: 'Lorem ipsum dolor sit amet',
      link: '#'
    },
    {
      id:3,
      title: 'HR Services',
      image: 'https://achevers-file-manager.s3.ap-south-1.amazonaws.com/uploads/ai-removebg-preview.png',
      description: 'Lorem ipsum dolor sit amet',
      link: '#'
    }
  ];

  skills_list = [
    {
      id: 1,
      image: 'https://static.vecteezy.com/system/resources/previews/048/332/150/non_2x/java-programming-language-java-logo-free-png.png',
      name: 'Java Fullstack'
    },
    {
      id: 2,
      image: 'https://marvel-b1-cdn.bc0a.com/f00000000236551/dt-cdn.net/wp-content/uploads/2021/07/13429_ILL_DevOpsLoop.png',
      name: 'DevOps'
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxwQ-HcqYWYmiAhAfrCni-OWbht4XRpIrHQ&s',
      name: 'Azure & AWS'
    },
    {
      id: 4,
      image: 'https://techterms.com/img/lg/android_841.png',
      name: 'Android & IOS'
    },
    {
      id: 5,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
      name: 'Python'
    },
    {
      id: 6,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSckhKOYhktJvsIFaKqSN__XwOGRQ3vT3lDUA&s',
      name: 'MuleSoft'
    }
  ];

  blogs = [
    {
      image:
        'https://img.freepik.com/vector-premium/concepto-web-servicio-blogs-estilo-dibujos-animados_9209-4759.jpg',
      time: '27 Nov 2024',
      title: 'Startups',
      content:
        'Tech startup news that breaks down the funding, growth, and long-term trajectory of companies across every stage and industry. Startup coverage includes climate, crypto, fintech, SaaS, transportation, and consumer tech.',
    },
    {
      image:
        'https://img.freepik.com/vector-premium/concepto-web-servicio-blogs-estilo-dibujos-animados_9209-4759.jpg',
      time: '27 Nov 2024',
      title: 'Social',
      content:
        'Social networking shapes society and our news coverage reflects and directs that. We keep tabs on all the biggest social companies, including TikTok, Facebook, Instagram, Twitter, Snapchat and Reddit, as well as funding and acquisitions of new social startups.',
    },
    {
      image:
        'https://img.freepik.com/vector-premium/concepto-web-servicio-blogs-estilo-dibujos-animados_9209-4759.jpg',
      time: '27 Nov 2024',
      title: 'Apps',
      content:
        'The app economy continues to grow, having produced a record number of downloads and consumer spending across both the iOS and Google Play stores. Keep up with this fast-moving industry in one place, with the latest from the world of apps, including news, updates, and much more.',
    },
    
  ];

  customers_types = [
    {id:1,name:"Automation & Robotics"},
    {id:2,name:"Pharma"},
    {id:1,name:"eCTD"},
    {id:2,name:"HealthCare"},
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

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router:Router
  ) {}

  ngOnInit(): void {
    Chart.register(
      LinearScale,
      CategoryScale,
      BarElement,
      LineElement, // Register LineElement
      PointElement, // Register PointElement
      Title,
      Tooltip,
      Legend,
      BarController,
      LineController // Register LineController
    );
    this.getCustomers(1)
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
    // Ensure code that accesses the DOM only runs in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.createChart();
    }
  }

  createChart(): void {
    if (isPlatformBrowser(this.platformId)) {
      const canvas = document.getElementById('talentChart') as HTMLCanvasElement;
      const ctx = canvas?.getContext('2d');
  
      // Destroy the previous chart instance if it exists
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
        { x: 4, y: 5 },
        { x: 5, y: 8 },
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
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                showLine: true, // Connect the points with a line
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              x: {
                type: 'linear',
                position: 'bottom',
                ticks: {
                  callback: function (value, index) {
                    return xAxisLabels[index] || ''; // Map X-axis numeric value to labels
                  },
                },
              },
              y: {
                type: 'linear',
                min: 0,
                max: yAxisLabels.length - 1, // Ensure Y-axis covers all labels
                ticks: {
                  stepSize: 1, // Ensure all labels are displayed
                  callback: function (value:any) {
                    return yAxisLabels[value] || ''; // Map Y-axis numeric value to labels
                  },
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
