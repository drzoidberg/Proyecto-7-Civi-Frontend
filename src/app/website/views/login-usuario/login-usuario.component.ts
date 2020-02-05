import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
// import { WebsiteService } from '../../shared/services/website.service';
import { WebsiteService } from '../../services/website.service';
import { Router } from '@angular/router';

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
      localStorage.setItem('usuario', res), setTimeout(() => {
    location.reload(true);
  }, 1000),  setTimeout(() => {
    this.router.navigate(['/'])
  }, 999)}else{
    alert('Los datos no coinciden')
  }});
  }
  ngOnInit() {
  }

}
