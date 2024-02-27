import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { Service } from '../../services/servicio';
import { Empleado } from '../model/empleado.model';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-listado-empleados',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listado-empleados.component.html',
  styleUrl: './listado-empleados.component.css'
})
export default class ListadoEmpleadosComponent implements AfterViewInit{
  private service = inject(Service);
  private router = inject(Router);
  
  empleados: any[] = [];

  ngAfterViewInit(): void {
    this.obtenerEmpleados();
  }


  obtenerEmpleados(): void {
    this.service.obtenerEmpleados().subscribe((data: any) => {
      if (data.status) {
        this.empleados = data.data;
      } else {
        console.error(data.msg); 
      }
    });
  }

  eliminarEmpleado(id: number) {
    this.service.eliminarEmpleado(id).subscribe(() => {
      this.ngAfterViewInit();
    });
  }


 
}
