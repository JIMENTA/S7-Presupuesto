import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {

  cantidadesForm : FormGroup
  suma = 0;

  constructor(private builder: FormBuilder) { 
    this.cantidadesForm = this.builder.group({
      paginas:[1],
      idiomas:[1]
    })
  }

  ngOnInit(): void {
  }
 
  calculoExtras(values){
   console.log(values.paginas)
     //   console.log((this.cantidadesForm.get('cantidad').value * this.cantidadesForm.get('idioma').value)*30)
  }
}
