import { Component, OnInit } from '@angular/core';
import { Filtros } from 'src/app/models/filtros.model';
import { WebsiteService } from '../../services/website.service';
import {
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ofertas-puesto',
  templateUrl: './ofertas-puesto.component.html',
  styleUrls: ['./ofertas-puesto.component.scss']
})
export class OfertasPuestoComponent implements OnInit {
  oferta={
    oferta:''
  }
  Usuario=localStorage.getItem('Usuario')
  ofertaTrabajo:Array<Filtros>
  faCalendarAlt = faCalendarAlt;
  faClock = faClock;
  faMapMarkerAlt = faMapMarkerAlt;
  faBuilding = faBuilding;

  todasLasCiudadesImgPath = '../../../../assets/images/todas-las-ciudades.jpg';
  ciudadImgPath = '../../../../assets/images/ciudad.jpg';
  destacadosImgPath = '../../../../assets/images/destacados.jpg';
  puestoTrabajoImgPath = '../../../../assets/images/puesto-trabajo.jpg';
  constructor(private website:WebsiteService) { }

  buscarPuesto(){
    // console.log('hola')
    this.website.filtroPuesto(this.oferta.oferta).subscribe(res=>this.ofertaTrabajo=JSON.parse(res));
    // console.log(this.ofertaTrabajo)
  }

  solicitarOferta(num){
    this.website.solicitarOferta(num, this.Usuario).subscribe(res => console.log(res));

  }

  ngOnInit() {
  }

}
