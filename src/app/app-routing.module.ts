import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

//ASIGNACION DE RUTAS DE LA APLICACION
const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent
  },

  {
    path: 'seguridad',
    loadChildren: () => import('./modulos/seguridad/seguridad.module').then(x => x.SeguridadModule)
  },

  {
    path: 'administracion',
    loadChildren: () => import('./modulos/administracion/administracion.module').then(x => x.AdministracionModule)
  },

  {
    path: 'alquiler',
    loadChildren: () => import('./modulos/alquiler/alquiler.module').then(x => x.AlquilerModule)
  },

  {
    path: 'solicitud',
    loadChildren: () => import('./modulos/solicitudes/solicitudes.module').then(x => x.SolicitudesModule)
  },

  {
    path: 'venta',
    loadChildren: () => import('./modulos/venta/venta.module').then(x => x.VentaModule)
  },

  {
    path: "",
    pathMatch: 'full',
    redirectTo: '/inicio'
  },

  {
    path:'**',
    component: ErrorComponent
  }
  //FIN ASIGNACION DE RUTAS
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
