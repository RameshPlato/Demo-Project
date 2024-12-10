import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { title } from 'process';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FooterComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
   id:number | undefined;
  // services_list = [
  //   {id:1,title:"Manpower RPO",status:false},
  //   {id:2,title:"BPO Solutions",status:false},
  //   {id:3,title:"HR Services",status:false},
  // ]
  services_list = [
    {
      id:1,
      title: 'Workforce Consulting',
      image: '../../assets/images/img_1.jpg',
      description: 'Customized strategies to build resilient teams',
      status:false
    },
    {
      id:2,
      title: 'IT Career Training',
      image: '../../assets/images/img_2.jpg',
      description: 'Comprehensive training for career advancement in tech.',
      status:false
    },
    {
      id:3,
      title: 'Staffing Solutions',
      image: '../../assets/images/img_3.jpg',
      description: 'Connecting top talent with the right opportunities.',
      status:false
    },
    {
      id:4,
      title: 'Resume and Career Coaching',
      image: '../../assets/images/img_1.jpg',
      description: 'Guidance to craft standout professional profiles.',
      status:false
    }
  ];
   
  constructor(
    private route:ActivatedRoute,
    private router:Router,
  ){}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadService(this.id)  
  }

  loadService(id:number){
    this.services_list.map(res=>{
      res.status = false
      if(res.id == id){
        res.status = true;
      }
    })
    this.router.navigate([`service/${id}`])
  }


}
