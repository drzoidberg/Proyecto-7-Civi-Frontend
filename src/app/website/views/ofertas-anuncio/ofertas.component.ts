import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../services/website.service';
import { Filtros } from 'src/app/models/filtros.model';
import Swal from 'sweetalert2';
import {
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';
import { log } from 'util';
import { Router } from '@angular/router';

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

  constructor(private website:WebsiteService, private router:Router) { }

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
      }
    })
  }
  ngOnInit() {
    this.website.todasOfertas().subscribe(res=> this.todasOfertas= JSON.parse(res));
  }

}
