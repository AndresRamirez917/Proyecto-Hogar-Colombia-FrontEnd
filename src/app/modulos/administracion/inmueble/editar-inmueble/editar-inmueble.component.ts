import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloInmueble } from 'src/app/modelos/inmueble.modelo';
import { InmuebleService } from 'src/app/servicios/inmueble.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editar-inmueble',
  templateUrl: './editar-inmueble.component.html',
  styleUrls: ['./editar-inmueble.component.css']
})
export class EditarInmuebleComponent implements OnInit {
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

buscarproducto(){
  this.servicioinmueble.obtenerregistrosporid(this.id).subscribe((datos:ModeloInmueble)=>{
    this.fgValidador.controls['id'].setValue(this.id);
    this.fgValidador.controls['nombre'].setValue(datos.nombre);
    this.fgValidador.controls['estado'].setValue(datos.estado);
    this.fgValidador.controls['fecha_solicitud'].setValue(datos.fecha_solicitud);
    this.fgValidador.controls['imagen'].setValue(datos.imagen);
  });
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


  editarinmueble(){
    let nombre = this.fgValidador.controls['nombre'].value;
    let estado = this.fgValidador.controls['estado'].value;
    let fecha_solicitud= this.fgValidador.controls['fecha_solicitud'].value;
    let imagen = this.fgValidador.controls['imagen'].value;
    let i = new ModeloInmueble();
    i.nombre = nombre;
    i.estado = estado;
    i.fecha_solicitud = fecha_solicitud;
    i.imagen = imagen;
    i.id = this.id;
    this.servicioinmueble.actualizarinmueble(i).subscribe((datos:ModeloInmueble)=>{
      alert("Inmueble Actualizado Satisfactoriamente");
      this.router.navigate(["administracion/buscar-inmueble"]);
    }, (error : any)=>{
      alert("Error Al Actualizar El Inmueble");
    })
    
    
  }
  //registroempleadofn(){
  //  if(this.fgValidador.invalid){
  //   mostrarmensaje("Formulario Invalido");
    //  return false;
    //}
   // mostrarmensaje("Registrando......");
   // return false;
 // }

  //get formgroupvalidator(){
    //return this.fgValidador.controls;
  //}

}

