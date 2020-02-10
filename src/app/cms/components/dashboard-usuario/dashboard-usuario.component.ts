import { Component, OnInit } from '@angular/core';
import { Solicitudesusuario } from 'src/app/models/solicitudesusuario.model';
import { CmsService } from '../../service/cms.service';

@Component({
  selector: 'app-dashboard-usuario',
  templateUrl: './dashboard-usuario.component.html',
  styleUrls: ['./dashboard-usuario.component.scss']
})
export class DashboardUsuarioComponent implements OnInit {
  Usuario= localStorage.getItem('Usuario');
  solicitudes:Array<Solicitudesusuario>=[];
  constructor(private cms:CmsService) { }
 
  rechazarSolicitud(num){
    console.log(num); 
    this.cms.rechazarSolicitud(num, this.Usuario).subscribe(res => {console.log(res), location.reload(true)});
  }

  borrarSolicitud(num){
    console.log(num); 
    this.cms.borrarSolicitudUsuario(num, this.Usuario).subscribe(res => {console.log(res), location.reload(true)});
  }
  ngOnInit() {
    console.log('He arrancado')
    this.cms.VerSolicitudesUsuario(this.Usuario).subscribe(res => this.solicitudes.push(res));
    console.log(this.solicitudes)
  }

}
