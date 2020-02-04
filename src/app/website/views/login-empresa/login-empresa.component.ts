import { Component, OnInit } from '@angular/core';
// import { WebsiteService } from '../../shared/services/website.service';
import { Login } from 'src/app/models/login.model';
import { WebsiteService } from '../../services/website.service';

@Component({
  selector: 'app-login-empresa',
  templateUrl: './login-empresa.component.html',
  styleUrls: ['./login-empresa.component.scss']
})
export class LoginEmpresaComponent implements OnInit {
  empresa:Login={
    "email":'',
    "contrasenia":''
  }
  constructor(private website:WebsiteService) { }

  conectarEmpresa(){
    this.website.loginEmpresa(this.empresa).subscribe(res=> console.log(res));
  }
  ngOnInit() {
  }

}
