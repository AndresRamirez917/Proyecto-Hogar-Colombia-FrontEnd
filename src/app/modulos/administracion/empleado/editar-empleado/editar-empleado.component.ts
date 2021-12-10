import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloEmpleado } from 'src/app/modelos/empleado.modelo';
import { EmpleadoService } from 'src/app/servicios/empleado.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
id:string='';
  fgValidador: FormGroup = this.fb.group({
    'id':['', [Validators.required, Validators.minLength(7)]],
    'nombre':['', [Validators.required, Validators.minLength(7)]],
    'cargo':['', [Validators.required, Validators.minLength(6)]],
    'usuario':['', [Validators.required, Validators.minLength(7)]],
    'contrasena':['', [Validators.required, Validators.minLength(7)]],
    'email':['', [Validators.required, Validators.minLength]],
  })

  constructor(private fb:FormBuilder,
    private servicioempleado:EmpleadoService,
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
    this.buscarproducto();
  }

buscarproducto(){
  this.servicioempleado.obtenerregistrosporid(this.id).subscribe((datos:ModeloEmpleado)=>{
    this.fgValidador.controls['id'].setValue(this.id);
    this.fgValidador.controls['nombre'].setValue(datos.nombre);
    this.fgValidador.controls['cargo'].setValue(datos.cargo);
    this.fgValidador.controls['usuario'].setValue(datos.usuario);
    this.fgValidador.controls['contrasena'].setValue(datos.contrasena);
    this.fgValidador.controls['email'].setValue(datos.email);

  });
}

  editarempleado(){
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
    p.id = this.id;
    this.servicioempleado.actualizarempleado(p).subscribe((datos:ModeloEmpleado)=>{
      alert("Empleado Actualizado Satisfactoriamente");
      this.router.navigate(["administracion/buscar-empleado"]);
    }, (error : any)=>{
      alert("Error Al Actualizar El Empleado");
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
