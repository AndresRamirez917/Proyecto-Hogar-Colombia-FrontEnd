import { Component, OnInit } from '@angular/core';
import { ModeloEmpleado } from 'src/app/modelos/empleado.modelo';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-buscar-empleado',
  templateUrl: './buscar-empleado.component.html',
  styleUrls: ['./buscar-empleado.component.css']
})
export class BuscarEmpleadoComponent implements OnInit {
  p: number = 1;
  listadoregistros: ModeloEmpleado[] = [];

  constructor(private empleadoservicio: EmpleadoService) { }

  ngOnInit(): void {
    //ENSEÑO EL FORMULARIO DE MOSTRAR EMPLEADOS EN LA PAGINA MAESTRA
    this.obtenerlistadoproductos();
  }

obtenerlistadoproductos(){
  this.empleadoservicio.obtenerregistros().subscribe((datos: ModeloEmpleado[])=>{
    this.listadoregistros=datos;
  })
}


verificareliminacion(id?:string, nombre?:string){
  if(window.confirm("Realmente desea eliminar el registro " + nombre)){
    let modelo = new ModeloEmpleado();
   modelo.id=id;
   modelo.nombre=nombre;
    this.empleadoservicio.eliminarempleado(modelo).subscribe(
      (datos) =>{
        alert("el registro " + nombre + " ha sido eliminado");
        this.listadoregistros = this.listadoregistros.filter(x => x.id != id);
      },
      (error)=>{
        alert("No se pudeo eliminar el registro")
      }
    )
  }
}
}