import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { title } from 'process';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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
  services_list = [
    {id:1,title:"Manpower RPO",status:false},
    {id:2,title:"BPO Solutions",status:false},
    {id:3,title:"HR Services",status:false},
  ]
   
  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
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
  }


}
