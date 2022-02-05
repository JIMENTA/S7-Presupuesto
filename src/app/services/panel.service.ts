import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanelService {
  total = 0;

  constructor() { }


  addToBudget($event){
    


    console.log($event.checked)
    // const id = $event.target.value;
    // const isChecked = $event.target.checked;

    // this.orders.map((element) =>{
    
    //   if(element.id == id &&  element.selected !== isChecked){
    //     this.total +=element.price
    //   }
    //   if(element.id == id &&  element.selected === isChecked){
    //     this.total -=element.price
    //   } 
    //   console.log(this.total)
    //   console.log(isChecked)
    // }); 

  }
  
  
}
