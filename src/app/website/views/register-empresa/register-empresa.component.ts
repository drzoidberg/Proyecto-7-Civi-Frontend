import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa.model';
import { WebsiteService } from '../../services/website.service';

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
  
  constructor(private website:WebsiteService) { }
  crearEmpresa(){
    this.website.registroEmpresa(this.empresa).subscribe(res=>console.log(res))
  }
  ngOnInit() {
  }

}
