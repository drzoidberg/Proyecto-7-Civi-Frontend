import { Component, OnInit } from '@angular/core';
import { Perfilempresa } from 'src/app/models/perfilempresa.model';
import { ThrowStmt } from '@angular/compiler';
import { CmsService } from '../../service/cms.service';

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrls: ['./perfil-empresa.component.scss']
})
export class PerfilEmpresaComponent implements OnInit {
  Empresa=JSON.parse(localStorage.getItem('Empresa'));
  nuevoUsuario:Perfilempresa={
    id:this.Empresa[0].id,
    nif:''  ? 'vacio': this.Empresa[0].nif,
    foto:'' ? 'vacio': this.Empresa[0].foto,
    id_categoria:'' ? 'vacio': this.Empresa[0].id_categoria,
    descripcion_empresa:'' ? 'vacio': this.Empresa[0].descripcion_empresa,
    nombre_empresa:'' ? 'vacio': this.Empresa[0].nombre_empresa ,
    remember_token:this.Empresa[0].remember_token
  }
  
  
  constructor(private cms:CmsService) { }
  cambiarPerfilUsuario(){
    console.log(this.nuevoUsuario)

    this.cms.cambiarPerfilEmpresa(this.nuevoUsuario ).subscribe(res=>{

      alert(res.Mensaje);

    });
  }
  ngOnInit() {
  }

}
