import { HttpClient } from '@angular/common/http';

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Empleado } from '../app/model/empleado.model';
@Injectable({
  providedIn: 'root'
})
export class Service {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8080/api/empleados'; 
    obtenerEmpleados(): Observable<Empleado[]> {
        return this.http.get<Empleado[]>(this.apiUrl);
      }
    
      guardarEmpleado(empleado: any): Observable<Empleado> {
        return this.http.post<any>(this.apiUrl, empleado);
      }
    
      actualizarEmpleado(empleado: Empleado, id: any): Observable<Empleado> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.put<Empleado>(url, empleado);
      }
    
      eliminarEmpleado(id: number): Observable<void> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<void>(url);
      }

      obtenerEmpleadoPorId(id: number): Observable<any> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<void>(url);
      }
}