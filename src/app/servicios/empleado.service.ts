import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloEmpleado } from '../modelos/empleado.modelo';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
url = "http://localhost:3000";
  constructor(private http: HttpClient) { }
  
  obtenerregistros(): Observable<ModeloEmpleado[]>{
    return this.http.get<ModeloEmpleado[]>(`${this.url}/empleados`);

  }

  obtenerregistrosporid(id:string): Observable<ModeloEmpleado>{
    return this.http.get<ModeloEmpleado>(`${this.url}/empleados/${id}`);

  }

  crearempleado(empleado:ModeloEmpleado):Observable<ModeloEmpleado>{
    return this.http.post<ModeloEmpleado>(`${this.url}/empleados`, empleado)
  }

actualizarempleado(empleado:ModeloEmpleado):Observable<ModeloEmpleado>{
  return this.http.put<ModeloEmpleado>(`${this.url}/empleados/${empleado.id}`, empleado)
}

//eliminarempleado(id:number):Observable<any>{
//  return this.http.delete<any>(`${this.url}/empleados/${id}`)
//}

eliminarempleado(modelo:ModeloEmpleado):Observable<any>{
  return this.http.delete<any>(`${this.url}/empleados/${modelo.id}`);
}

}
