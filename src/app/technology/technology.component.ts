import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [FooterComponent, NavbarComponent,CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent implements OnInit {
  id:number | undefined;

  technology_list = [
    {
      id: 1,
      name: 'Java Fullstack',
      status:false
    },
    {
      id: 2,
      name: 'DevOps',
      status:false
    },
    {
      id: 3,
      name: 'Azure & AWS',
      status:false
    },
    {
      id: 4,
      name: 'Android & IOS',
      status:false
    },
    {
      id: 5,
      name: 'Python',
      status:false
    },
    {
      id: 6,
      name: 'MuleSoft',
      status:false
    }
  ];
   
  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadService(this.id)  
  }

  loadService(id:number){
    this.technology_list.map(res=>{
      res.status = false
      if(res.id == id){
        res.status = true;
      }
    })
  }
}
