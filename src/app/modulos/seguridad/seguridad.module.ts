import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { CambiarclaveComponent } from './cambiarclave/cambiarclave.component';
import { RecuperarclaveComponent } from './recuperarclave/recuperarclave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';


@NgModule({
  declarations: [
    IdentificacionComponent,
    CambiarclaveComponent,
    RecuperarclaveComponent,
    CerrarSesionComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    //FormsModule y ReactiveFormsModule se agregan
    //para el formulario de login?
    //VALIDAN DATOS E INTERCAMBIAN DATOS ENTRE LA INTERFAZ GRAFICA Y LA LOGICA DE NEGOCIO
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class SeguridadModule { }
