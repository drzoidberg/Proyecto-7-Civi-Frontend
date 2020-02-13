import { Component, OnInit } from '@angular/core';
import { Filtros } from 'src/app/models/filtros.model';
import { WebsiteService } from '../../services/website.service';
import { CmsService } from 'src/app/cms/service/cms.service';
import {
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';
import { Solicitudesusuario } from 'src/app/models/solicitudesusuario.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ofertas-anuncio',
  templateUrl: './ofertas-anuncio.component.html',
  styleUrls: ['./ofertas-anuncio.component.scss']
})
export class OfertasAnuncioComponent implements OnInit {
  ofertaAnuncio: Array<Filtros>;
  Usuario = localStorage.getItem('Usuario');
  faCalendarAlt = faCalendarAlt;
  faClock = faClock;
  faMapMarkerAlt = faMapMarkerAlt;
  faBuilding = faBuilding;

  todasLasCiudadesImgPath = '../../../../assets/images/todas-las-ciudades.jpg';
  ciudadImgPath = '../../../../assets/images/ciudad.jpg';
  destacadosImgPath = '../../../../assets/images/destacados.jpg';
  puestoTrabajoImgPath = '../../../../assets/images/puesto-trabajo.jpg';
  constructor(private website:WebsiteService, private cms:CmsService, private router:Router) {}

  solicitarOferta(num){
    Swal.fire({
      title: '¿Seguro?',
      text: "¿Quieres solicitar está oferta?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Se ha procesado correctamente!',
          '',
          'success'
        )
        this.website.solicitarOferta(num, this.Usuario).subscribe(res => console.log(res));
        this.router.navigate(["/filtro-destacados"]).then(result=>{window.location.href = 'http://localhost:4200/administrar-solicitud-candidato';});
      }
    })
  }



  ngOnInit() {
    // this.cms.VerSolicitudesUsuario(this.Usuario).subscribe(res=> localStorage.setItem('Solicitudes', res))
    this.website.filtroCiudades().subscribe(res=> this.ofertaAnuncio= JSON.parse(res));
  }

}

