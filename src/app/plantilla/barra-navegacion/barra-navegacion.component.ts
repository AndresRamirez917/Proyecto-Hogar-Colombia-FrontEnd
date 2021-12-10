import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  seiniciosesion: boolean=false;
  sesioniniciada:boolean=false;

  subs: Subscription = new Subscription();

  constructor(private seguridadservice: SeguridadService,
    private router:Router) { }

  ngOnInit(): void {
  this.subs=this.seguridadservice.obtenerdatosusuarioensesion().subscribe((datos:ModeloIdentificar)=>{
  this.seiniciosesion=datos.estaidentificado;
  this.router.navigate(["/inicio"]);
  })
  }

}
