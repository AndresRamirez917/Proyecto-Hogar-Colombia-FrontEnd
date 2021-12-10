import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
// DESDE AQUI LE PASAMOS LOS DATOS A TRAVES DE UNA URL AL BACKEND PARA QUE EL LOS GESTIONE
url="http://localhost:3000/";
datosusuarioensesion= new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());
  constructor(private http: HttpClient) {
    this.verificarsesionactual();
   }

// METODO QUE DEVUELVE EL NOMBRE DEL USUARIO Y EL TOKEN QUE LE PUEDA GENERAR
// EL OBSERVABLE ACTUA COMO UNA PROMESA
// ESTE METODO DEVUELVE UNA ESTRUCTURA TIPO MODELO, COMO EN ANGULAR NO EXISTEN LOS MODELOS
// SE DEBEN DE CREAR MANUALMENTE LA ESTRUCTURA
identificar(usuario: string, contrasena: string):Observable<ModeloIdentificar>{
return this.http.post<ModeloIdentificar>(`${this.url}/identificarpersona`, {
  usuario:usuario,
  contrasena:contrasena
},{
  headers: new HttpHeaders({

  })
})
}

verificarsesionactual(){
  let datos = this.obtenerinformacionsesion();
  if(datos){
    this.refrescardatossesion(datos);
  }

}

refrescardatossesion(datos:ModeloIdentificar){
  this.datosusuarioensesion.next(datos);
}

obtenerdatosusuarioensesion(){
  return this.datosusuarioensesion.asObservable();
}


//token
Almacenarsesion(datos:ModeloIdentificar){
  datos.estaidentificado=true;
  let stringdatos=JSON.stringify(datos);
  localStorage.setItem("datossesion", stringdatos);
  this.refrescardatossesion(datos);
}
//token
obtenerinformacionsesion(){
  let datosstring=localStorage.getItem("datossesion");
  if(datosstring){
    let datos=JSON.parse(datosstring);
    return datos;
  }else{
    return null;
  }
}


eliminarinformacionsesion(){
  localStorage.removeItem("datossesion");
  this.refrescardatossesion(new ModeloIdentificar());
}

sehainiciadosesion(){
  let datosstring=localStorage.getItem("datossesion")
  return datosstring;
}

}