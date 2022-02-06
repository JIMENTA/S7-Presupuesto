import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {

  // cantidadesForm = new FormGroup ({
  //  paginas : new FormControl(''),
  //  idiomas :new FormControl('')
  // })
  pags = 0;
  idiomas = 0;
  cantidad = 0;
  total = 0;
  cantidadesForm: FormGroup;

  constructor(private builder: FormBuilder) { 
    this.cantidadesForm = this.builder.group({
      paginas:[],
      idiomas:[]
    })
  }

  ngOnInit(): void {
  }


  aumentarPag(){
    let cantidad = ++this.pags
    let total = cantidad * 500
    // if(this.cantidadesForm.value == this.idiomas){
    //   let cantidad = ++this.pags
    //   let total = cantidad * 500
    // }
    console.log(this.total)
    return total
  }
     disminuirPags(){
      let cantidad = --this.pags
      let total = cantidad * 500
      console.log(total)
      return total
     }
    aumentarIdiomas(){
      let cantidad = ++this.idiomas
      let total = cantidad * 30
      console.log(total)
      return total
    }

   disminuirIdiomas(){
    let cantidad = --this.idiomas
    let total = cantidad * 30
    console.log(total)
    return total
   }
   calculoExtras(){
     console.log(this.cantidad * this.total)
   }
}
