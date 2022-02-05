import { Component, OnInit } from '@angular/core';
import { PanelService } from 'src/app/services/panel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  total =0;


  constructor( private miServicio : PanelService) { }

  ngOnInit(): void {
  }
  
  calcular(event){
    
    this.miServicio.addToBudget(event)
    
  }
}
