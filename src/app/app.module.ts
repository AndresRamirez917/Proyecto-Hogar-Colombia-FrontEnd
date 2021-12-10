import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './plantilla/barra-navegacion/barra-navegacion.component';
import { PiePaginaComponent } from './plantilla/pie-pagina/pie-pagina.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';
//ESTE IMPORT SE HIZO MANUALMENTE POR QUE EL ANGULAR NO LO TOMO
//EL PARAMETRO HTTPCLIENTEMODULE LO COLOCO AUTOMATICAMENTE LAS SUGERENCIAS DE ANGULAR
import { HttpClientModule } from '@angular/common/http';
import { CrearEmpleadoComponent } from './modulos/administracion/empleado/crear-empleado/crear-empleado.component';
//SE IMPORTA PARA EL USO DE LOS FORMULARIOS?
//23/11/2021 MODULO PARA LA PAGINACION, PRIMERO SE INSTALA EL PAQUETE NGX-PAGINATION
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//estos dos ultimos tres son los imports para el datepicker
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule} from '@angular/material/input';
import { MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    PiePaginaComponent,
    InicioComponent,
    //CrearEmpleadoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    //estos tres ultimos son los modulos para el datepicker
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
    //HttpClient
    //SE DECLARA REACTIVEFORMSMODULE,ESTE VA LIGADO CON EL IMPORT DEL MISMO NOMBRE
    //ReactiveFormsModule,
    //FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
