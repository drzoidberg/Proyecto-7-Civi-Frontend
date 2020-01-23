import { Component, OnInit } from '@angular/core';
import { OfertasFiltrosService } from 'src/app/services/ofertas-filtros.service';
import { OfertasPorCiudades } from "../../models/OfertasPorCiudades.model";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  prueba: Array<OfertasPorCiudades> = [];

  constructor(private oCiudades: OfertasFiltrosService) { }

  ngOnInit() {
    this.oCiudades.filtroCiudades()
      .subscribe(res => this.prueba.push(res));
  }
}
