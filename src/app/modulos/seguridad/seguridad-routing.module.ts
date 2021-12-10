import { identifierModuleUrl } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { CambiarclaveComponent } from './cambiarclave/cambiarclave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { ValidadorsesionGuard } from 'src/app/guardianes/validadorsesion.guard';

const routes: Routes = [
  {
    path:"identificar",
    component: IdentificacionComponent
   
  },

  {
    path:"cambiar-clave",
    component: CambiarclaveComponent,
    canActivate:[ValidadorsesionGuard]
  },

  {
    //este path se agrego para crear el link a cerrarsesion
    //se hizo de forma manual, no recuerdo si asi se crearon todos
    path:"cerrar-sesion",
    component: CerrarSesionComponent,
    canActivate:[ValidadorsesionGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
