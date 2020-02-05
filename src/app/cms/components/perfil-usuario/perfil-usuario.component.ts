import { Component, OnInit } from '@angular/core';
import { Perfilusuario } from 'src/app/models/perfilusuario.model';
import { CmsService } from '../../service/cms.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent implements OnInit {
Usuario=JSON.parse(localStorage.getItem('Usuario'))
nuevoUsuario:Perfilusuario={
  id:this.Usuario[0].id,
  nombre_usuario:''  ? 'vacio': this.Usuario[0].nombre_usuario,
  apellido:'' ? 'vacio': this.Usuario[0].apellido,
  dni:'' ? 'vacio': this.Usuario[0].dni,
  descripcion:'' ? 'vacio': this.Usuario[0].descripcion,
  telefono:'' ? 'vacio': this.Usuario[0].telefono ,
  foto:'' ? 'vacio': this.Usuario[0].foto,
  fecha_nacimiento:''  ? 'vacio': this.Usuario[0].fecha_nacimiento ,
  remember_token:this.Usuario[0].remember_token
}




  constructor(private cms:CmsService) { }
cambiarPerfilUsuario(){
  console.log(this.nuevoUsuario)
  this.cms.cambiarPerfilUsuario(this.nuevoUsuario ).subscribe(res=>{
    alert(res.Mensaje)}
    );
}
  ngOnInit() {
  }

}
