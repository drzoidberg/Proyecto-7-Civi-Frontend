import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa.model';
import { WebsiteService } from '../../services/website.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-empresa',
  templateUrl: './register-empresa.component.html',
  styleUrls: ['./register-empresa.component.scss']
})
export class RegisterEmpresaComponent implements OnInit {
  f = new Date();
  fecha= (this.f.getDate() + "/" + (this.f.getMonth() +1) + "/" + this.f.getFullYear());
  
  empresa:Empresa={
    'nif':'',
    'email':'',
    'contrasenia':'',
    'foto':'',
    'nombre_empresa':'',
    'descripcion_empresa':'',
    'id_categoria':0
  }
  
  constructor(private website:WebsiteService, private router:Router) { }
  crearEmpresa(){
    console.log(JSON.parse(JSON.stringify(this.empresa)))
    this.website.registroEmpresa(this.empresa).subscribe(res=>{
      // console.log('aa')
      let respuesta= JSON.parse(res)
      // console.log(respuesta)
      // alert(respuesta.Mensaje)
      let mensaje1=  "No existe esa categoria";
      let mensaje2=  "La contraseña tiene que ser mayor de 8 caracteres";
      let mensaje3= "El email ya existe";
      let mensaje4=  "Dato invalido";
     
      if((respuesta.Mensaje !== mensaje1 && respuesta.Mensaje !== mensaje2 && respuesta.Mensaje !== mensaje3 && respuesta.Mensaje !== mensaje4) ){
        Swal.fire({
          icon: 'success',
          title: 'Registro',
          text: 'Te has registrado correctamente',
          // footer: '<a href>Why do I have this issue?</a>'
        })
       setTimeout(() => {
    location.reload(true);
  }, 1000),  setTimeout(() => {
    this.router.navigate(['/login-empresa'])
  }, 999)}else{
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: respuesta.Mensaje,
      // footer: '<a href>Why do I have this issue?</a>'
    })
  }});
  }
  ngOnInit() {
  }

}
