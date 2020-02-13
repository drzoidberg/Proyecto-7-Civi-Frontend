import { Component, OnInit } from '@angular/core';
import  { Ofertastrabajos } from '../../../models/ofertastrabajos.model'
import { CmsService } from '../../service/cms.service';
import { log } from 'util';
import { Ofertastrabajoscrear } from 'src/app/models/ofertastrabajoscrear.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard-empresa-oferta',
  templateUrl: './dashboard-empresa-oferta.component.html',
  styleUrls: ['./dashboard-empresa-oferta.component.scss']
})
export class DashboardEmpresaOfertaComponent implements OnInit {

  f = new Date();
  fecha= ( this.f.getFullYear() +"-" + (this.f.getMonth() +1) + "-" +  this.f.getDate() );


  Empresa= localStorage.getItem('Empresa');
  AlmacenarID= JSON.parse(this.Empresa)
  ofertas:Array<Ofertastrabajos>=[];
  nuevaOferta:Ofertastrabajoscrear={
    "titulo":'',
    "descripcion_oferta":'',
    "popularidad":0,
    "anuncio":false,
    "salario":0,
    "id_empresa":this.AlmacenarID[0].id,
    // this.Empresa[0].id,
    "id_categoria":0,
    "id_ciudad":0,
    "fecha_publicacion":this.fecha,
    "remember_token":this.AlmacenarID[0].remember_token
  }
  constructor(private cms:CmsService) { }
  borrarOferta(num){
    console.log(num)
    this.cms.borrarOferta(num, this.Empresa).subscribe(res => {console.log(res), location.reload(true)})

  }

  crearOferta(){
    console.log(this.nuevaOferta)
    this.cms.crearOferta(this.nuevaOferta).subscribe(res=> {
      // console.log('aa')
      let respuesta= res
      // console.log(respuesta)
      // alert(respuesta.Mensaje)
      let mensaje1=  "No se ha encontrado esa categoria";
      let mensaje2=  "No se ha encontrado esa ciudad";

      let mensaje3=  "Dato invalido";
     
      if((respuesta.Mensaje !== mensaje1 && respuesta.Mensaje !== mensaje2 && respuesta.Mensaje !== mensaje3 ) ){
        Swal.fire({
          icon: 'success',
          title: 'Registro',
          text: 'Te has registrado correctamente',

        })
        location.reload(true);
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: respuesta.Mensaje,
      // footer: '<a href>Why do I have this issue?</a>'
    })

    
  }
    })}

  ngOnInit() {
this.cms.verOfertas(this.Empresa).subscribe(res=> this.ofertas = res )
  }

}
