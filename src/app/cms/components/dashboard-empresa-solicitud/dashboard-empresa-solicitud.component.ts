import { Component, OnInit } from '@angular/core';
import { Solicitudesempresa } from 'src/app/models/solicitudesempresa.model';
import { CmsService } from '../../service/cms.service';

@Component({
  selector: 'app-dashboard-empresa-solicitud',
  templateUrl: './dashboard-empresa-solicitud.component.html',
  styleUrls: ['./dashboard-empresa-solicitud.component.scss']
})
export class DashboardEmpresaSolicitudComponent implements OnInit {

Empresa= localStorage.getItem('Empresa');
solicitudes:Array<Solicitudesempresa>=[];
  constructor(private cms:CmsService) { }
  borrarSolicitud(id){
    console.log('boton pulsado')
    this.cms.borrarSolicitud(id, this.Empresa).subscribe(res=> {console.log(res), location.reload(true);})
  }
  cambiarSolicitud(respuesta, numeroSolicitud){
    console.log(respuesta, numeroSolicitud);
    this.cms.administrarSolicitud(respuesta, numeroSolicitud, this.Empresa).subscribe(res=>{
      console.log(res); location.reload(true);})
  }
  ngOnInit() {
    this.cms.VerSolicitudesEmpresa(this.Empresa).subscribe(res => this.solicitudes.push(res));
  }

}
