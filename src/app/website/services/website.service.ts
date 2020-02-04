import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Empresa } from 'src/app/models/empresa.model';
import { Usuario } from '../../models/usuario.model'
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
  registroEmpresa(empresa:Empresa):Observable<any>{
    return this.http.post('http://localhost:8000/empresa/registro', empresa, {responseType:'text' as 'json'} );
  }
  registroUsuario(usuario:Usuario):Observable<any>{
    return this.http.post('http://localhost:8000/usuario/registro', usuario, {responseType:'text' as 'json'} );
  }

  filtroPopularidad():Observable<any>{
    return this.http.get('http://localhost:8000/ofertas/ordenadas', {responseType:'text' as 'json'} );
  }
  filtroCiudades():Observable<any>{
    return this.http.get('http://localhost:8000/ofertas/ciudades', {responseType:'text' as 'json'} );
  }
  filtroCiudad(ciudad):Observable<any>{
    return this.http.get(`http://localhost:8000/ofertas/ciudad/${ciudad}`, {responseType:'text' as 'json'} );
  }

    filtroAnuncios():Observable<any>{
      return this.http.get('http://localhost:8000/ofertas/anuncio', {responseType:'text' as 'json'} );
    }
    filtroPuesto(puesto):Observable<any>{
      return this.http.get(`http://localhost:8000/ofertas/puesto/${puesto}`, {responseType:'text' as 'json'} );
    }
  }

