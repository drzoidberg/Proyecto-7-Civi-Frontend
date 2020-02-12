import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
// import { WebsiteService } from '../../shared/services/website.service';
import { WebsiteService } from '../../services/website.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.scss']
})
export class LoginUsuarioComponent implements OnInit {

  usuario:Login={
    "email":'',
    "contrasenia":''
  }

  constructor(private website:WebsiteService , private router:Router) { }

  crearUsuario(){
    this.website.loginUsuario(this.usuario).subscribe(res=>   {
      let mensaje= 'Contrasenia o correo invalido';
      if((res !== mensaje) ){
        Swal.fire({
          icon: 'success',
          title: 'Login',
          text: 'Te has conectado correctamente',
          // footer: '<a href>Why do I have this issue?</a>'
        })
      localStorage.setItem('Usuario', res), setTimeout(() => {
    location.reload(true);
  }, 1000),  setTimeout(() => {
    this.router.navigate(['/'])
  }, 999)}else{
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Contraseña o correo invalido',
      // footer: '<a href>Why do I have this issue?</a>'
    })
  }});
  }
  ngOnInit() {
  }

}
