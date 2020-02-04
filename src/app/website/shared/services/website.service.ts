import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  constructor(private http:HttpClient) { }

  loginUsuario(usuario:Login):Observable<any>{
    return this.http.post('http://localhost:8000/usuario/login', usuario, {responseType:'text' as 'json'} );
  }
  loginEmpresa(empresa:Login):Observable<any>{
    return this.http.post('http://localhost:8000/empresa/login', empresa, {responseType:'text' as 'json'} );
  }
}
