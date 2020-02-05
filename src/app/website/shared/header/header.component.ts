import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../services/website.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private website:WebsiteService) { }
  Usuario = localStorage.getItem('Usuario')
  Empresa = localStorage.getItem('Empresa')


  desconectarEmpresa(){
    this.website.logoutEmpresa(this.Empresa).subscribe(res => console.log(res))

  }
  ngOnInit() {
  }

}
