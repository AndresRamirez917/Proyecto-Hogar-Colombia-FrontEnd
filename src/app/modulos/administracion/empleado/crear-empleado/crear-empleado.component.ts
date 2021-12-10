//import { Component, OnInit } from '@angular/core';
//import { FormBuilder,  Validators } from '@angular/forms';
//import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloEmpleado } from 'src/app/modelos/empleado.modelo';
import { EmpleadoService } from 'src/app/servicios/empleado.service';
//declare const  mostrarmensaje:any;



@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre':['', [Validators.required, Validators.minLength(7)]],
    'cargo':['', [Validators.required, Validators.minLength(6)]],
    'usuario':['', [Validators.required, Validators.minLength(7)]],
    'contrasena':['', [Validators.required, Validators.minLength(7)]],
    'email':['', [Validators.required, Validators.minLength]],
  })

  constructor(private fb:FormBuilder,
    private servicioempleado:EmpleadoService,
     private router:Router) { }
    //22/11/2021 AGREGO ROUTER QUE NO TENIA, TOMADO DE OTRO EJEMPLO
    //CONEL ROUTER LE DIGO AL PROGRAMA QUE CUANDO HAGA ALGO ME REDIRIJA A ADMINISTRACION/BUSCAR-EMPLEADO
    //LINEA 51

  ngOnInit(): void {
    //22/11/2021
    this.guardarempleado
    //this.constructorformulario
  }
  guardarempleado(){
    let nombre = this.fgValidador.controls['nombre'].value;
    let cargo = this.fgValidador.controls['cargo'].value;
    let usuario= this.fgValidador.controls['usuario'].value;
    let contrasena = this.fgValidador.controls['contrasena'].value;
    let email = this.fgValidador.controls['email'].value;
    let p = new ModeloEmpleado();
    p.nombre = nombre;
    p.cargo = cargo;
    p.usuario = usuario;
    p.contrasena = contrasena;
    p.email = email;
    this.servicioempleado.crearempleado(p).subscribe((datos:ModeloEmpleado)=>{
      alert("Nuevo Empleado Registrado Satisfactoriamente");
      this.router.navigate(["administracion/buscar-empleado"]);
    }, (error : any)=>{
      alert("Error Al Registrar El Empleado");
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
