import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanelService {
  total = 0;

  constructor() { }


  addToBudget($event){
    this.total = 200

  }
  
  
}
