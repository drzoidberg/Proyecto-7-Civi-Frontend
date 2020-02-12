import { Component, OnInit } from '@angular/core';
// import { WebsiteService } from '../../shared/services/website.service';
import { Login } from 'src/app/models/login.model';
import { WebsiteService } from '../../services/website.service';
import { Router } from '@angular/router';
import { isArray, isObject } from 'util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-empresa',
  templateUrl: './login-empresa.component.html',
  styleUrls: ['./login-empresa.component.scss']
})
export class LoginEmpresaComponent implements OnInit {
  empresa:Login={
    "email":'',
    "contrasenia":''
  }
  constructor(private website:WebsiteService, private router:Router) { }

  conectarEmpresa(){
    this.website.loginEmpresa(this.empresa).subscribe(res=> 
      // console.log(res))
      {
        // console.log('aa')
        let mensaje=  'Contrasenia o correo invalido';
       
        if((res !== mensaje) ){
          Swal.fire({
            icon: 'success',
            title: 'Login',
            text: 'Te has conectado correctamente',
            // footer: '<a href>Why do I have this issue?</a>'
          })
        localStorage.setItem('Empresa', res), setTimeout(() => {
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
