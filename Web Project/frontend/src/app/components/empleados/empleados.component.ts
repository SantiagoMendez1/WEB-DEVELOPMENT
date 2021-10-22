import { Component, OnInit } from '@angular/core';
import {EmpleadosService} from '../../services/empleados.service';
import { NgForm } from "@angular/forms";
import {Empleados} from '../../models/empleados';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [EmpleadosService],
})
export class EmpleadosComponent implements OnInit {

  constructor(public empleadosService: EmpleadosService) { }

  ngOnInit(){
    this.getEmpleados();  
  }
  getEmpleados() {
    this.empleadosService.getEmpleados().subscribe((res) => {
      this.empleadosService.empleados = res;
    });
  }
  addEmpleados(form?: NgForm) {
    if (form.value._id) {
      this.empleadosService.putEmpleados(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getEmpleados();
      });
    } else {
      this.empleadosService.postEmpleados(form.value).subscribe((res) => {
        this.getEmpleados();
        this.resetForm(form);
      });
    }
  }
  editEmpleados(empleados: Empleados) {
    this.empleadosService.selectedEmpleados = empleados;
  }

  deleteEmpleados(_id: string, form: NgForm) {
    if (confirm("¿Esta seguro que desea eliminar al empleado?")) {
      this.empleadosService.deleteEmpleados(_id).subscribe((res) => {
        this.getEmpleados();
        this.resetForm(form);
      });
    }
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.empleadosService.selectedEmpleados = new Empleados();
    }
  }
}
