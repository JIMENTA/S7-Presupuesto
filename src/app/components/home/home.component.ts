import { Component, OnInit } from '@angular/core';
import { PanelService } from 'src/app/services/panel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private miServicio : PanelService) { }

  ngOnInit(): void {
  }

  calcular(event){
    console.log(event.source.id)
    this.miServicio.addToBudget(event)
    
  }
}
