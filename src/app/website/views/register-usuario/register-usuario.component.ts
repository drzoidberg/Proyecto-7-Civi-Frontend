import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { WebsiteService } from '../../services/website.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  constructor(private website:WebsiteService, private router:Router) { }
  crearUsuario(){
    this.website.registroUsuario(this.usuario).subscribe(res=> {
      // console.log('aa')
      let respuesta= JSON.parse(res)
    
      let mensaje1 ="El email ya existe";
      let mensaje2=  "La contraseña tiene que ser mayor de 8 caracteres";
      let mensaje3=  "Dato invalido";
     
      if((respuesta.Mensaje !== mensaje1 && respuesta.Mensaje !== mensaje2 && respuesta.Mensaje !== mensaje3 ) ){
        Swal.fire({
          icon: 'success',
          title: 'Registro',
          text: 'Te has registrado correctamente',
          // footer: '<a href>Why do I have this issue?</a>'
        })
       setTimeout(() => {
    location.reload(true);
  }, 1000),  setTimeout(() => {
    this.router.navigate(['/login-candidato'])
  }, 999)}else{
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: respuesta.Mensaje,
      // footer: '<a href>Why do I have this issue?</a>'
    });
  }});
}
  ngOnInit() {
  }

}
