import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Service } from '../../services/servicio';
import { EmptyError } from 'rxjs';

@Component({
  selector: 'app-empleados-form',
  standalone: true,
  imports: [ RouterModule, ReactiveFormsModule],
  templateUrl: './empleados-form.component.html',
  styleUrl: './empleados-form.component.css'
})
export default class EmpleadosFormComponent implements OnInit{
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private servicio = inject(Service);

  form?: FormGroup;
  textoTitulo :any;

  /**/

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if(id){
        this.textoTitulo = 'Editar empleado'
        this.servicio.obtenerEmpleadoPorId(parseInt(id)).
          subscribe(empleado => {
            this.form = this.fb.group({
              nombre: [empleado.nombre, Validators.required],
              apellido: [empleado.apellido, Validators.required],
              fechaNacimiento: [empleado.fechaNacimiento, Validators.required],
              sueldo: [empleado.sueldo, Validators.required],
              puesto: [empleado.puesto, Validators.required],
            })
          });
      }else{
        this.textoTitulo = 'Nuevo empleado'
        this.form = this.fb.group({
          nombre: ['', Validators.required],
          apellido: ['', Validators.required],
          fechaNacimiento: ['', Validators.required],
          sueldo: ['', Validators.required],
          puesto: ['', Validators.required],
        })
      }
      
      
  }

  


  crearEmpleado() {
    const empleado = this.form!.value;

    if(this.textoTitulo == 'Nuevo empleado'){
      this.servicio.guardarEmpleado(empleado).subscribe(()=>{
        this.router.navigate([''])
      })
    }else{
      
      this.servicio.actualizarEmpleado(empleado, this.route.snapshot.paramMap.get('id')).subscribe(()=>{
        this.router.navigate([''])
      })
    }

    
  }
}
