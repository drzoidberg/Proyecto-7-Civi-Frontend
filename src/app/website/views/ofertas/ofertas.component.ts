import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../services/website.service';
import { Filtros } from 'src/app/models/filtros.model';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss']
})
export class OfertasComponent implements OnInit {
  todasOfertas:Array<Filtros>
  Usuario=localStorage.getItem('Usuario')
  constructor(private website:WebsiteService) { }

  ngOnInit() {
    this.website.todasOfertas().subscribe(res=> this.todasOfertas= JSON.parse(res));
  }

}
