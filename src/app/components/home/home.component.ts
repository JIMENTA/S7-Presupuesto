import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/interfaces/orders.interface';
import { PanelService } from 'src/app/services/panel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  orders : Orders[]= [
    {id:1, task: 'Una pagina web (500€)', price: 500, selected: false},
    {id:2, task: 'Una consultoria SEO (300€)', price: 300, selected: false},
    {id:3, task: 'Una campaña de Google Ads (200€)', price: 200, selected: false},
  ];

  total = 0

  constructor( private miServicio : PanelService) { }

  ngOnInit(): void {
  }
  sumarATotal(e){
  this.total += 1;
  console.log(e)
  }
  
  calcular(event){
    this.miServicio.addToBudget(event)
    
  }
}
