import { Component, OnInit } from '@angular/core';
import { ModeloInmueble } from 'src/app/modelos/inmueble.modelo';
import { InmuebleService } from 'src/app/servicios/inmueble.service';

@Component({
  selector: 'app-buscar-inmueble',
  templateUrl: './buscar-inmueble.component.html',
  styleUrls: ['./buscar-inmueble.component.css']
})
export class BuscarInmuebleComponent implements OnInit {
  i: number = 1;
  listadoregistros: ModeloInmueble[] = [];

  constructor(private inmuebleservicio: InmuebleService) { }

  ngOnInit(): void {
    //ENSEÑO EL FORMULARIO DE MOSTRAR EMPLEADOS EN LA PAGINA MAESTRA
    this.obtenerlistadoproductos();
  }

obtenerlistadoproductos(){
  this.inmuebleservicio.obtenerregistros().subscribe((datos: ModeloInmueble[])=>{
    this.listadoregistros=datos;
  })
}


verificareliminacion(id?:string, nombre?:string){
  if(window.confirm("Realmente desea eliminar el registro " + nombre)){
    let modelo = new ModeloInmueble();
   modelo.id=id;
   modelo.nombre=nombre;
    this.inmuebleservicio.eliminarinmueble(modelo).subscribe(
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