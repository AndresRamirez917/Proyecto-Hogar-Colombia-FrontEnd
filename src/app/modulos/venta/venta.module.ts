import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentaRoutingModule } from './venta-routing.module';
import { RealizarVentaComponent } from './realizar-venta/realizar-venta.component';


@NgModule({
  declarations: [
    RealizarVentaComponent
  ],
  imports: [
    CommonModule,
    VentaRoutingModule
  ]
})
export class VentaModule { }
