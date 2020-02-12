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
  selector: 'app-ofertas-ciudad',
  templateUrl: './ofertas-ciudad.component.html',
  styleUrls: ['./ofertas-ciudad.component.scss']
})
export class OfertasCiudadComponent implements OnInit {
oferta={
  ciudad:''
}
Usuario=localStorage.getItem('Usuario')
ofertaCiudad:Array<Filtros>
faCalendarAlt = faCalendarAlt;
  faClock = faClock;
  faMapMarkerAlt = faMapMarkerAlt;
  faBuilding = faBuilding;

  todasLasCiudadesImgPath = '../../../../assets/images/todas-las-ciudades.jpg';
  ciudadImgPath = '../../../../assets/images/ciudad.jpg';
  destacadosImgPath = '../../../../assets/images/destacados.jpg';
  puestoTrabajoImgPath = '../../../../assets/images/puesto-trabajo.jpg';

  constructor(private website:WebsiteService) { }

  buscarCiudad(){

    this.website.filtroCiudad(this.oferta.ciudad).subscribe(res=>this.ofertaCiudad= JSON.parse(res));
  }
  
  solicitarOferta(num){
    this.website.solicitarOferta(num, this.Usuario).subscribe(res => console.log(res));
  }

  ngOnInit() {

  }

}
