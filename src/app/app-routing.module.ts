import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/home/home.component';
import { CalculoComponent } from './components/calculo/calculo.component';



const routes: Routes = [
  {
    path:'',
    component: InicioComponent
    
  },
  {
    path:'presupuesto',
    component:  HomeComponent
  },
  {
    path:'calculo',
    component: CalculoComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
