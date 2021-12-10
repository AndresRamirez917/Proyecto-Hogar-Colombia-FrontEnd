import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloInmueble } from 'src/app/modelos/inmueble.modelo';
import { InmuebleService } from 'src/app/servicios/inmueble.service';

@Component({
  selector: 'app-filtrar-nombre',
  templateUrl: './filtrar-nombre.component.html',
  styleUrls: ['./filtrar-nombre.component.css']
})
export class FiltrarNombreComponent implements OnInit {

  id:string='';
  nombre:string='';
    fgValidador: FormGroup = this.fb.group({
      'id':['', [Validators.required, Validators.minLength(7)]],
      'nombre':['', [Validators.required, Validators.minLength(7)]],
      'estado':['', [Validators.required, Validators.minLength(6)]],
      'fecha_solicitud':['', [Validators.required, Validators.minLength(7)]],
      'imagen':['', [Validators.required, Validators.minLength(7)]],
    })

    constructor(private fb:FormBuilder,
      private servicioinmueble:InmuebleService,
       private router:Router,
       private ruta: ActivatedRoute) { }
      //22/11/2021 AGREGO ROUTER QUE NO TENIA, TOMADO DE OTRO EJEMPLO
      //CONEL ROUTER LE DIGO AL PROGRAMA QUE CUANDO HAGA ALGO ME REDIRIJA A ADMINISTRACION/BUSCAR-EMPLEADO
      //LINEA 51
  
    ngOnInit(): void {
      //22/11/2021
      //this.editarempleado
      //this.constructorformulario
      this.id=this.ruta.snapshot.params['id'];
      this.nombre=this.ruta.snapshot.params['nombre'];
      this.buscarproducto();
      this.buscarproductonombre();
    }

    buscarproductonombre(){
      this.servicioinmueble.obtenerregistrospornombre(this.nombre).subscribe((datos:ModeloInmueble)=>{
        this.fgValidador.controls['nombre'].setValue(datos.nombre);
        this.fgValidador.controls['id'].setValue(this.id);
        this.fgValidador.controls['estado'].setValue(datos.estado);
        this.fgValidador.controls['fecha_solicitud'].setValue(datos.fecha_solicitud);
        this.fgValidador.controls['imagen'].setValue(datos.imagen);
      });
    }
  
    buscarproducto(){
      this.servicioinmueble.obtenerregistrosporid(this.id).subscribe((datos:ModeloInmueble)=>{
        this.fgValidador.controls['id'].setValue(this.id);
        this.fgValidador.controls['nombre'].setValue(datos.nombre);
        this.fgValidador.controls['estado'].setValue(datos.estado);
        this.fgValidador.controls['fecha_solicitud'].setValue(datos.fecha_solicitud);
        this.fgValidador.controls['imagen'].setValue(datos.imagen);
      });
    }


}
