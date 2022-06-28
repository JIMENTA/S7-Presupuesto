import { Component } from '@angular/core';
import { Orders } from 'src/app/interfaces/orders.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  orders : Orders[]= [
    {id:1, task: 'Una pagina web (500€)', price: 500, selected: false},
    {id:2, task: 'Una consultoria SEO (300€)', price: 300, selected: false},
    {id:3, task: 'Una campaña de Google Ads (200€)', price: 200, selected: false},
  ];

  total = 0
  seo:number = 300; 
  ads:number = 200;

  sumaTotal(sumaSub : number){
    this.total = sumaSub
    console.log(this.total)
    return this.total
  }


  suma(sumaSub : number){
    this.total+= sumaSub
    return this.total
  }

}
