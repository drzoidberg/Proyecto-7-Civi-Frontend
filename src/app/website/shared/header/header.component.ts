import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../services/website.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo = '../../../../assets/images/logo.png';

  constructor(private website:WebsiteService, private router:Router) { }
  Usuario = localStorage.getItem('Usuario')
  Empresa = localStorage.getItem('Empresa');



  desconectarUsuario(){
    console.log('Hola')
    this.website.logoutUsuario(this.Usuario).subscribe(res =>  {
      console.log('Hola');
      console.log(res),
      localStorage.removeItem('Usuario'), setTimeout(() => {
    location.reload(true);
  }, 1000),  setTimeout(() => {
    this.router.navigate(['/'])
  }, 999)})

  }


  desconectarEmpresa(){
    console.log('Hola')
    this.website.logoutEmpresa(this.Empresa).subscribe(res =>  {
      console.log(res),
      localStorage.removeItem('Empresa'), setTimeout(() => {
    location.reload(true);
  }, 1000),  setTimeout(() => {
    this.router.navigate(['/'])
  }, 999)})

  }
  ngOnInit() {
  }

}
