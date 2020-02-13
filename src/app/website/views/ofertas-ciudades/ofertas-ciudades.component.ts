import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../services/website.service';
import { Filtros } from 'src/app/models/filtros.model';
import {
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
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
        this.router.navigate(["/filtro-ciudades"]).then(result=>{window.location.href = 'http://localhost:4200/administrar-solicitud-candidato';});
      }
    })
  }
  
  ngOnInit() {
    this.website.filtroCiudades().subscribe(res=> this.ofertaCiudades=  JSON.parse(res));
  }

}
