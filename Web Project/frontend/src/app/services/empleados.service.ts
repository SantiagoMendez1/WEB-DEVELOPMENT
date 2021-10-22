import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleados } from '../models/empleados';

@Injectable({
  providedIn: 'root',
})

export class EmpleadosService {
  selectedEmpleados: Empleados;
  empleados: Empleados[];

  readonly URL_API = 'http://localhost:4000/api/empleados';

  constructor(public http: HttpClient) {
    this.selectedEmpleados = new Empleados();
  }

  postEmpleados(empleados: Empleados) {
    return this.http.post(this.URL_API, empleados);
  }

  getEmpleados() {
    return this.http.get<Empleados[]>(this.URL_API);
  }

  putEmpleados(empleados: Empleados) {
    return this.http.put(this.URL_API + `/${empleados._id}`, empleados);
  }

  deleteEmpleados(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
