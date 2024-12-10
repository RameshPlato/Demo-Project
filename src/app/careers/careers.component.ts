import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);  
  }

}
