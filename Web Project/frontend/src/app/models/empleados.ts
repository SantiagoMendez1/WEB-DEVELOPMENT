
export class Empleados {
    constructor(_id = "", name = "", apellido = "", td ="", documento = 0, ciudad = "",
    birthday=new Date(2020,2,27), email = "", telefono = 0, usuario = "", password = "") {
        this._id = _id;
        this.name = name;
        this.apellido = apellido;
        this.td = td;
        this.documento = documento;
        this.ciudad = ciudad;
        this.birthday = birthday;
        this.email = email;
        this.telefono = telefono;
        this.usuario = usuario;
        this.password = password;
      }
    
      _id: string;
      name: string;
      apellido: string;
      td: String;
      documento: number;
      ciudad: string;
      birthday: Date;
      email: string;
      telefono: number;
      usuario: string;
      password: string;
    }
