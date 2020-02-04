import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
// import { WebsiteService } from '../../shared/services/website.service';
import { WebsiteService } from '../../services/website.service';

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

  constructor(private website:WebsiteService) { }

  crearUsuario(){
    this.website.loginUsuario(this.usuario).subscribe(res=> console.log(res));
  }
  ngOnInit() {
  }

}
