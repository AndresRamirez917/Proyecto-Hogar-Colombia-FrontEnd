import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlquilerRoutingModule } from './alquiler-routing.module';
import { RealizarAlquilerComponent } from './realizar-alquiler/realizar-alquiler.component';


@NgModule({
  declarations: [
    RealizarAlquilerComponent
  ],
  imports: [
    CommonModule,
    AlquilerRoutingModule
  ]
})
export class AlquilerModule { }
