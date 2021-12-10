import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { ModeloInmueble } from '../modelos/empleado.modelo';
import { ModeloInmueble } from '../modelos/inmueble.modelo';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {
  url = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  obtenerregistros(): Observable<ModeloInmueble[]>{
    return this.http.get<ModeloInmueble[]>(`${this.url}/inmuebles`);

  }

  obtenerregistrosporid(id:string): Observable<ModeloInmueble>{
    return this.http.get<ModeloInmueble>(`${this.url}/inmuebles/${id}`);

  }

  obtenerregistrospornombre(nombre:string): Observable<ModeloInmueble>{
    return this.http.get<ModeloInmueble>(`${this.url}/inmuebles/${nombre}`);

  }

  crearinmueble(inmueble:ModeloInmueble):Observable<ModeloInmueble>{
    return this.http.post<ModeloInmueble>(`${this.url}/inmuebles`, inmueble)
  }

actualizarinmueble(inmueble:ModeloInmueble):Observable<ModeloInmueble>{
  return this.http.put<ModeloInmueble>(`${this.url}/inmuebles/${inmueble.id}`, inmueble)
}

//eliminarempleado(id:number):Observable<any>{
//  return this.http.delete<any>(`${this.url}/empleados/${id}`)
//}

eliminarinmueble(modelo:ModeloInmueble):Observable<any>{
  return this.http.delete<any>(`${this.url}/inmuebles/${modelo.id}`);
}

}
