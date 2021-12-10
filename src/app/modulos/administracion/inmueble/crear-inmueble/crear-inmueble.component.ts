//import { Component, OnInit } from '@angular/core';
//import { FormBuilder,  Validators } from '@angular/forms';
//import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloInmueble } from 'src/app/modelos/inmueble.modelo';
import { InmuebleService } from 'src/app/servicios/inmueble.service';
//declare const  mostrarmensaje:any;


@Component({
  selector: 'app-crear-inmueble',
  templateUrl: './crear-inmueble.component.html',
  styleUrls: ['./crear-inmueble.component.css']
})
export class CrearInmuebleComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre':['', [Validators.required, Validators.minLength(7)]],
    'estado':['', [Validators.required, Validators.minLength(6)]],
    'fecha_solicitud':['', [Validators.required, Validators.minLength(7)]],
    'imagen':['', [Validators.required, Validators.minLength(7)]],
  })

  constructor(private fb:FormBuilder,
    private servicioinmueble:InmuebleService,
     private router:Router) { }
    //22/11/2021 AGREGO ROUTER QUE NO TENIA, TOMADO DE OTRO EJEMPLO
    //CONEL ROUTER LE DIGO AL PROGRAMA QUE CUANDO HAGA ALGO ME REDIRIJA A ADMINISTRACION/BUSCAR-EMPLEADO
    //LINEA 51

  ngOnInit(): void {
    //22/11/2021
    this.guardarinmueble
    //this.constructorformulario
  }
  guardarinmueble(){
    let nombre = this.fgValidador.controls['nombre'].value;
    let estado = this.fgValidador.controls['estado'].value;
    let fecha_solicitud= this.fgValidador.controls['fecha_solicitud'].value;
    let imagen = this.fgValidador.controls['imagen'].value;
    let i = new ModeloInmueble();
    i.nombre = nombre;
    i.estado = estado;
    i.fecha_solicitud = fecha_solicitud;
    i.imagen = imagen;
    this.servicioinmueble.crearinmueble(i).subscribe((datos:ModeloInmueble)=>{
      alert("Nuevo inmueble Registrado Satisfactoriamente");
      this.router.navigate(["administracion/buscar-inmueble"]);
    }, (error : any)=>{
      alert("Error Al Registrar El Inmueble");
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

  get GetForm(){
    return this.fgValidador.controls;
  }
  
}

