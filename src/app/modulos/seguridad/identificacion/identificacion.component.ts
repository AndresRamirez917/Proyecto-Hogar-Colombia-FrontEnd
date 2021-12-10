//declare var require: any
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { crypto } from 'crypto-js/sha256';
//import crypto from 'crypto-js/hmac-sha512';
//import cryptoJS from 'crypto-js/enc-base64';
//IMPORTACION DE EL PAQUETE CRYPTOJS
//const cryptoJS = require('cryptojs');
//import * as cryptoJS from 'crypto-js';
//var CryptoJS = require("crypto-js");

//para que este funcione hay que instalar npm i @types/crypto-js
import * as cryptoJS from 'crypto-js';
import { get } from 'http';
import { GeneralData } from 'src/app/config/general-data';
import { SeguridadService } from 'src/app/servicios/seguridad.service';


//declaracion de la funcion del archivo funcionesmodal.js
declare const opengenerallmessagemodal:any;

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {
  //SE USA EL BUILDER PARA CREAR UN GRUPO
  //CON EL FGVALIDADOR SE VALIDA E INTERCAMBIA INFORMACION CON LA PARTE GRAFICA 
  fgValidador: FormGroup = this.fb.group({
    //EL PRIMER PARAMETRO ES VALOR VACIO, LUEGO QUE ES REQUERIDO Y POR ULTIMO QUE TENDRA FORMATO EMAIL
    'usuario':['',[Validators.required, Validators.email]],
    //EL PRIMER PARAMETRO VACIO Y QUE ES REQUERIDO
    'contrasena':['',[Validators.required]]
  });

  //SE INYECTA UN FORM BUILDER
  constructor(private fb:FormBuilder, 
    private servicioseguridad:SeguridadService) { }

  ngOnInit(): void {
    //this.identificarusuario();
  }
    //SE CREA EL METODO QUE SE VA A LLAMAR DESDE EL FORMULARIO
    //SE CREAN LAS VARIABLE QUE VAN A ALMACENAR LOS DATOS DE USUARIO Y CONTRASEÑA DESDE
    //EL FORMULARIO
    identificarusuario(){
      let usuario = this.fgValidador.controls["usuario"].value;
      let contrasena = this.fgValidador.controls["contrasena"].value;
      //Estos alert sirven de prueba para mostrar que el formulario esta capturando datos 
      //alert(usuario)
      //alert(contrasena)
      //CIFRADO DE CONTRASEÑA CON EL PAQUETE CRYPTOJS EN MD5
      let contrasenacifrada = cryptoJS.MD5(contrasena).toString();
      this.servicioseguridad.identificar(usuario, contrasena).subscribe((datos:any)=>{
        this.servicioseguridad.Almacenarsesion(datos);
        //llamdado de los mensajes que se encuentran en el archivo general-data a traves de la funcion opengenerallmessagemodal
        opengenerallmessagemodal(GeneralData.VALID_FORM_MESSAGE);
      },(error:any)=>{
        //llamdado de los mensajes que se encuentran en el archivo general-data a traves de la funcion opengenerallmessagemodal
        opengenerallmessagemodal(GeneralData.INVALID_FORM_MESSAGE);
      })

     

    }
    
    //esta funcion se usa para validar a traves de un mensaje en rojo cuando lo campos del formulario
    //login no son diligenciados
    get GetForm(){
      return this.fgValidador.controls;
    }

}
