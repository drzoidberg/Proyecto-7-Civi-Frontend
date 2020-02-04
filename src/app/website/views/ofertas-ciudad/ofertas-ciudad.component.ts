import { Component, OnInit } from '@angular/core';
import { Filtros } from 'src/app/models/filtros.model';
import { WebsiteService } from '../../services/website.service';

@Component({
  selector: 'app-ofertas-ciudad',
  templateUrl: './ofertas-ciudad.component.html',
  styleUrls: ['./ofertas-ciudad.component.scss']
})
export class OfertasCiudadComponent implements OnInit {
oferta={
  ciudad:''
}
ofertaCiudad:Array<Filtros>

  constructor(private website:WebsiteService) { }
  
  buscarCiudad(){
    this.website.filtroCiudad(this.oferta.ciudad).subscribe(res=>this.ofertaCiudad= JSON.parse(res));
  }
  ngOnInit() {

  }

}
