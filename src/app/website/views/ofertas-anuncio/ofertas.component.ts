import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../services/website.service';
import { Filtros } from 'src/app/models/filtros.model';
import {
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';
import { log } from 'util';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss']
})
export class OfertasComponent implements OnInit {
  todasOfertas: Array<Filtros>;
  Usuario = localStorage.getItem('Usuario');
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
    console.log(num);
    this.website.solicitarOferta(num, this.Usuario).subscribe(res => console.log(res));
  }
  ngOnInit() {
    this.website.todasOfertas().subscribe(res=> this.todasOfertas= JSON.parse(res));
  }

}
