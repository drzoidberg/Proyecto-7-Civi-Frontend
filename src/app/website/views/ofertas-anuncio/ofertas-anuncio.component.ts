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
  constructor(private website:WebsiteService, private cms:CmsService) {}

  solicitarOferta(num){
    this.website.solicitarOferta(num, this.Usuario).subscribe(res => console.log(res));
  }



  ngOnInit() {
    // this.cms.VerSolicitudesUsuario(this.Usuario).subscribe(res=> localStorage.setItem('Solicitudes', res))
    this.website.filtroCiudades().subscribe(res=> this.ofertaAnuncio= JSON.parse(res));
  }

}

