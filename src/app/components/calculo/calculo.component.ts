import { Component,  Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Orders } from 'src/app/interfaces/orders.interface';



@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent  {

  @Output () calculo : EventEmitter<number> = new EventEmitter();

  subtotal:number = 0;
  pags:number = 500;
  idiomas:number = 30;
  cantidadPags:number = 0;
  cantidadIdiomas:number =0;


  cantidadesForm: FormGroup;

  constructor(private builder: FormBuilder) { 
    this.cantidadesForm = this.builder.group({
      paginas:[],
      idiomas:[]
    })
  }



  aumentoPags(valor:number){
    this.subtotal += valor;
    this.cantidadPags++
  }
  disminuirPags(valor:number){
    this.subtotal += valor;
    this.cantidadPags--
  }
  aumentarIdiomas(valor:number){
    this.subtotal += valor;
    this.cantidadIdiomas++
  }
  disminuirIdiomas(valor:number){
    this.subtotal += valor;
    this.cantidadIdiomas--
  }

  calculoExtras(subtotal:number){
    this.calculo.emit(this.subtotal)
    return this.subtotal  
  }
}
