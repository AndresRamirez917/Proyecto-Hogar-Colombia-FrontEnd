import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorsesionGuard } from 'src/app/guardianes/validadorsesion.guard';
//import { ClientRequest } from 'http';
import { BuscarClienteComponent } from './cliente/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { BuscarEmpleadoComponent } from './empleado/buscar-empleado/buscar-empleado.component';
import { CrearEmpleadoComponent } from './empleado/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './empleado/editar-empleado/editar-empleado.component';
import { EliminarEmpleadoComponent } from './empleado/eliminar-empleado/eliminar-empleado.component';
import { FiltrarNombreComponent } from './filtros/filtrar-nombre/filtrar-nombre.component';
import { BuscarInmuebleComponent } from './inmueble/buscar-inmueble/buscar-inmueble.component';
import { CrearInmuebleComponent } from './inmueble/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './inmueble/editar-inmueble/editar-inmueble.component';
import { EliminarInmuebleComponent } from './inmueble/eliminar-inmueble/eliminar-inmueble.component';

//INICIO CREACION FUTAS PARA EL CRUD DE LAS ENTIDADES
const routes: Routes = [
  {
    path:'crear-cliente',
    component: CrearClienteComponent,
    canActivate:[ValidadorsesionGuard]
  },
  {
    path: 'editar-cliente',
    component: EditarClienteComponent,
    canActivate:[ValidadorsesionGuard]
  },
  {
    path: 'eliminar-cliente',
    component: EliminarClienteComponent,
    canActivate:[ValidadorsesionGuard]
  },
  {
    path: 'buscar-cliente',
    component: BuscarClienteComponent,
    canActivate:[ValidadorsesionGuard]
  },
  {
    path:'crear-empleado',
    component: CrearEmpleadoComponent,
    canActivate:[ValidadorsesionGuard]
  },
  {
    path:'listar-empleado',
    component: BuscarEmpleadoComponent,
    canActivate:[ValidadorsesionGuard]
  },
  {
    path:'editar-empleado/:id',
    component: EditarEmpleadoComponent,
    canActivate:[ValidadorsesionGuard]
  },
    {
    path:'eliminar-empleado/:id',
    component: EliminarEmpleadoComponent,
    canActivate:[ValidadorsesionGuard]
  },
  {
    path:'buscar-empleado',
    component: BuscarEmpleadoComponent,
    canActivate:[ValidadorsesionGuard]
  },
  {
    path:'filtrar-nombre/:nombre',
    component: FiltrarNombreComponent,
    canActivate:[ValidadorsesionGuard]
  },
  {
    path:'crear-inmueble',
    component: CrearInmuebleComponent,
    canActivate:[ValidadorsesionGuard]
  },
  {
    path:'editar-inmueble/:id',
    component: EditarInmuebleComponent,
    canActivate:[ValidadorsesionGuard]
  },
  {
    path:'eliminar-inmueble/:id',
    component: EliminarInmuebleComponent,
    canActivate:[ValidadorsesionGuard]
  },
  {
    path:'buscar-inmueble',
    component: BuscarInmuebleComponent,
    canActivate:[ValidadorsesionGuard]
  }
  //FIN DE LA CREACION DE RUTAS
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
