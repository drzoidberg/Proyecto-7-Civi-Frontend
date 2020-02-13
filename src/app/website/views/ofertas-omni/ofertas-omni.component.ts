import { Component, OnInit } from '@angular/core';
import { Filtrosomni } from 'src/app/models/filtrosomni.model';
import { WebsiteService } from '../../services/website.service';
import {
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ofertas-omni',
  templateUrl: './ofertas-omni.component.html',
  styleUrls: ['./ofertas-omni.component.scss']
})
export class OfertasOmniComponent implements OnInit {
  ofertaTrabajo:Array<Filtrosomni>=[]
  Usuario=localStorage.getItem('Usuario')

  oferta={
    oferta:''
  }
  constructor(private website:WebsiteService, private router:Router) { }
  faCalendarAlt = faCalendarAlt;
  faClock = faClock;
  faMapMarkerAlt = faMapMarkerAlt;
  faBuilding = faBuilding;
  buscarPuesto(){
    this.website.filtroOmni(this.oferta.oferta).subscribe(res=> this.ofertaTrabajo = res);
  }

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
        this.router.navigate(["/ofertas-omni"]).then(result=>{window.location.href = 'http://localhost:4200/administrar-solicitud-candidato';});
      }
    })
    
  }
  ngOnInit() {
   let buscador=localStorage.getItem('buscador');

    this.website.filtroOmni(buscador).subscribe(res=> this.ofertaTrabajo = res);

  }

}
