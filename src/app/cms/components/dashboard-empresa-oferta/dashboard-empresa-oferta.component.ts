import { Component, OnInit } from '@angular/core';
import  { Ofertastrabajos } from '../../../models/ofertastrabajos.model'
import { CmsService } from '../../service/cms.service';
import { log } from 'util';
@Component({
  selector: 'app-dashboard-empresa-oferta',
  templateUrl: './dashboard-empresa-oferta.component.html',
  styleUrls: ['./dashboard-empresa-oferta.component.scss']
})
export class DashboardEmpresaOfertaComponent implements OnInit {
  Empresa= localStorage.getItem('Empresa');
  ofertas:Array<Ofertastrabajos>=[];
  constructor(private cms:CmsService) { }
  borrarOferta(num){
    console.log(num)
    this.cms.borrarOferta(num, this.Empresa).subscribe(res => {console.log(res), location.reload(true)})

  }
  ngOnInit() {
this.cms.verOfertas(this.Empresa).subscribe(res=> this.ofertas = res )
  }

}
