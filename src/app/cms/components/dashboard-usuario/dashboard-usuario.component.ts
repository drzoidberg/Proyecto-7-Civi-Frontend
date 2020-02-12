import { Component, OnInit } from '@angular/core';
import { Solicitudesusuario } from 'src/app/models/solicitudesusuario.model';
import { CmsService } from '../../service/cms.service';
import Swal from 'sweetalert2';
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
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Esta acción no se podrá revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Ha sido borrado correctamente'
          ,''
          ,'success'

          )
          this.cms.rechazarSolicitud(num, this.Usuario).subscribe(res => {console.log(res), location.reload(true)});
      }
    })
  }

  borrarSolicitud(num){
    console.log(num); 

    Swal.fire({
      title: '¿Estás seguro?',
      text: "Esta acción no se podrá revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Se ha borrado correctamente!',
          '',
          'success'
        )
        this.cms.borrarSolicitudUsuario(num, this.Usuario).subscribe(res => {console.log(res), location.reload(true)});
      }
    })
  }
  ngOnInit() {
    console.log('He arrancado')
    this.cms.VerSolicitudesUsuario(this.Usuario).subscribe(res => this.solicitudes.push(res));
    console.log(this.solicitudes)
  }

}
