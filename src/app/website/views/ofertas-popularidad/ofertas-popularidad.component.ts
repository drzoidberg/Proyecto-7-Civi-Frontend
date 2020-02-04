import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../services/website.service';
import { Filtros } from 'src/app/models/filtros.model';

@Component({
  selector: 'app-ofertas-popularidad',
  templateUrl: './ofertas-popularidad.component.html',
  styleUrls: ['./ofertas-popularidad.component.scss']
})
export class OfertasPopularidadComponent implements OnInit {
ofertaPopularidad:Array<Filtros>
  constructor(private website:WebsiteService) { }

  ngOnInit() {
    this.website.filtroPopularidad().subscribe(res=> this.ofertaPopularidad=  JSON.parse(res));
  }

}
