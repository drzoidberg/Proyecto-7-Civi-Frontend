import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empresa } from 'src/app/models/empresa.model';
import { Usuario } from '../../models/usuario.model'
@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  
  constructor(private http:HttpClient ) { }
   
//Usuarios y Empresas
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

  logoutEmpresa(empresa):Observable<any>{
   let desconectarEmpresa=JSON.parse(empresa);
    console.log(empresa)
  //  let prueba={ responseType:'text' as 'json', 'Authorization':desconectarempresa[0].remember_token }
    // console.log(empresa)
    const httpOptions = {
      headers: new HttpHeaders({  'Authorization':empresa[0].remember_token })
    };
    return this.http.post('http://localhost:8000/empresa/desconectarempresa', desconectarEmpresa[0] , {responseType:'text' as 'json'});

  }


  logoutUsuario(Usuario):Observable<any>{
    let desconectarUsuario=JSON.parse(Usuario);
     console.log(desconectarUsuario[0].remember_token)
   //  let prueba={ responseType:'text' as 'json', 'Authorization':desconectarUsuario[0].remember_token }
     // console.log(Usuario)
     const httpOptions = {
       headers: new HttpHeaders({  'Authorization': desconectarUsuario[0].remember_token })
     };
     return this.http.post('http://localhost:8000/usuario/desconectarusuario', desconectarUsuario[0]);
 
   }




   solicitarOferta(num, Usuario):Observable<any>{
    let desconectarUsuario=JSON.parse(Usuario);
    let solicitud = {
      id_oferta_trabajo:num,
      id_usuario:desconectarUsuario[0].id
    }
    //  console.log(desconectarUsuario[0].remember_token)
  
     const httpOptions = {
       headers: new HttpHeaders({ 'Content-Type':'application/json', 'Authorization': desconectarUsuario[0].remember_token })
     };
     return this.http.post('http://localhost:8000/usuario/solicitaroferta', solicitud, httpOptions);
    }

// Filtros
  todasOfertas():Observable<any>{
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

