export class Empleado {
    id: null;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    puesto: string;
    sueldo: number;
  
    constructor(id: null, nombre: string, apellido: string, fechaNacimiento: Date, puesto: string, sueldo: number) {
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.fechaNacimiento = fechaNacimiento;
      this.puesto = puesto;
      this.sueldo = sueldo;
    }
  }