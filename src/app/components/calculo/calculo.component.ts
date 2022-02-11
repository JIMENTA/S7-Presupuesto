import { Component,  Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent  {
 
  @Output () calculo : EventEmitter<number> = new EventEmitter();

  total:number = 0;
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
 // cantidadesForm = new FormGroup ({
  //  paginas : new FormControl(''),
  //  idiomas :new FormControl('')
  // })



  aumentoPags(valor:number){
    this.total += valor;
    this.cantidadPags++
    console.log(this.total)
  }
  disminuirPags(valor:number){
    this.total += valor;
    this.cantidadPags--
    console.log(this.total)
  }
  aumentarIdiomas(valor:number){
    this.total += valor;
    this.cantidadIdiomas++
    console.log(this.total)
  }
  disminuirIdiomas(valor:number){
    this.total += valor;
    this.cantidadIdiomas--
    console.log(this.total)
  }

  calculoExtras(){
    this.calculo.emit(this.total)
    return this.total  
  }
}
