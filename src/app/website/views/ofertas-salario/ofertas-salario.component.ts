import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../services/website.service';
import { Filtros } from 'src/app/models/filtros.model';

@Component({
  selector: 'app-ofertas-salario',
  templateUrl: './ofertas-salario.component.html',
  styleUrls: ['./ofertas-salario.component.scss']
})
export class OfertasSalarioComponent implements OnInit {

  ofertaTrabajo:Array<Filtros>=[]

  constructor(private website: WebsiteService) {

  }

  ngOnInit() {
    this.website.filtroSalario(2000)
      .subscribe(res=> this.ofertaTrabajo = res);
  }

}
