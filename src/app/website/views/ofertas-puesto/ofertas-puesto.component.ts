import { Component, OnInit } from '@angular/core';
import { Filtros } from 'src/app/models/filtros.model';
import { WebsiteService } from '../../services/website.service';

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
  constructor(private website:WebsiteService) { }

  buscarPuesto(){
    this.website.filtroPuesto(this.oferta.oferta).subscribe(res=>this.ofertaTrabajo= JSON.parse(res));
  }
  ngOnInit() {
  }

}
