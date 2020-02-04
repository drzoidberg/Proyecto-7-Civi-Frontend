import { Component, OnInit } from '@angular/core';
import { Filtros } from 'src/app/models/filtros.model';
import { WebsiteService } from '../../services/website.service';

@Component({
  selector: 'app-ofertas-anuncio',
  templateUrl: './ofertas-anuncio.component.html',
  styleUrls: ['./ofertas-anuncio.component.scss']
})
export class OfertasAnuncioComponent implements OnInit {
ofertaAnuncio:Array<Filtros>
  constructor(private website:WebsiteService) { }

  ngOnInit() {
    this.website.filtroCiudades().subscribe(res=> this.ofertaAnuncio= JSON.parse(res));
  }

}
