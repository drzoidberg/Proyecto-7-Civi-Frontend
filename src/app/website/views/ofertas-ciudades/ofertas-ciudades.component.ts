import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../services/website.service';
import { Filtros } from 'src/app/models/filtros.model';
import {
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ofertas-ciudades',
  templateUrl: './ofertas-ciudades.component.html',
  styleUrls: ['./ofertas-ciudades.component.scss']
})
export class OfertasCiudadesComponent implements OnInit {
  ofertaCiudades:Array<Filtros>
  Usuario=localStorage.getItem('Usuario')
  faCalendarAlt = faCalendarAlt;
  faClock = faClock;
  faMapMarkerAlt = faMapMarkerAlt;
  faBuilding = faBuilding;

  todasLasCiudadesImgPath = '../../../../assets/images/todas-las-ciudades.jpg';
  ciudadImgPath = '../../../../assets/images/ciudad.jpg';
  destacadosImgPath = '../../../../assets/images/destacados.jpg';
  puestoTrabajoImgPath = '../../../../assets/images/puesto-trabajo.jpg';
  constructor(private website:WebsiteService) { }


  solicitarOferta(num){
    this.website.solicitarOferta(num, this.Usuario).subscribe(res => console.log(res));
  }
  
  ngOnInit() {
    this.website.filtroCiudades().subscribe(res=> this.ofertaCiudades=  JSON.parse(res));
  }

}
