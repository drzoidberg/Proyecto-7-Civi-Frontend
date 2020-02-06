import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../services/website.service';
import { Filtros } from 'src/app/models/filtros.model';

@Component({
  selector: 'app-ofertas-ciudades',
  templateUrl: './ofertas-ciudades.component.html',
  styleUrls: ['./ofertas-ciudades.component.scss']
})
export class OfertasCiudadesComponent implements OnInit {
  ofertaCiudades:Array<Filtros>
  Usuario=localStorage.getItem('Usuario')
  constructor(private website:WebsiteService) { }

  ngOnInit() {
    this.website.filtroCiudades().subscribe(res=> this.ofertaCiudades=  JSON.parse(res));
  }

}
