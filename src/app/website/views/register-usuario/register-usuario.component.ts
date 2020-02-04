import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { WebsiteService } from '../../services/website.service';

@Component({
  selector: 'app-register-usuario',
  templateUrl: './register-usuario.component.html',
  styleUrls: ['./register-usuario.component.scss']
})
export class RegisterUsuarioComponent implements OnInit {
usuario:Usuario={
  'nombre_usuario':'',
  'apellido':'',
  'email':'',
  'contrasenia':'',
  'dni':'',
  'descripcion':'',
  'telefono':'',
  'direccion':'',
  'foto':'',
  'fecha_nacimiento':''

}
  constructor(private website:WebsiteService) { }
  crearUsuario(){
    this.website.registroUsuario(this.usuario).subscribe(res=> console.log(res));
  }
  ngOnInit() {
  }

}
