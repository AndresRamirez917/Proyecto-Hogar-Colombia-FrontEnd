import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { RealizarSolicitudComponent } from './realizar-solicitud/realizar-solicitud.component';


@NgModule({
  declarations: [
    RealizarSolicitudComponent
  ],
  imports: [
    CommonModule,
    SolicitudesRoutingModule
  ]
})
export class SolicitudesModule { }
