import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Perfilusuario } from 'src/app/models/perfilusuario.model';
import { Perfilempresa } from 'src/app/models/perfilempresa.model';
@Injectable({
  providedIn: 'root'
})
export class CmsService {

  constructor(private http:HttpClient) { }


  cambiarPerfilUsuario(UsuarioPerfil:Perfilusuario):Observable<any>{
    console.log('he entrado al cms')
     const httpOptions = {
       headers: new HttpHeaders({ 'Content-Type':'application/json', 'Authorization':UsuarioPerfil.remember_token, 'responseType':'text' as 'json' })
     };
     return this.http.post('http://localhost:8000/usuario/modificarperfil', UsuarioPerfil , httpOptions);
 
   }

   cambiarPerfilEmpresa(EmpresaPerfil:Perfilempresa):Observable<any>{
    console.log('he entrado al cms')
     const httpOptions = {
       headers: new HttpHeaders({ 'Content-Type':'application/json', 'Authorization':EmpresaPerfil.remember_token })
     };
     return this.http.post('http://localhost:8000/empresa/modificarperfil', EmpresaPerfil , httpOptions);
 
   }

   VerSolicitudesEmpresa(Empresa):Observable<any>{
    let EmpresaJson= JSON.parse(Empresa);
    console.log(EmpresaJson[0])
     const httpOptions = {
       headers: new HttpHeaders({ 'Content-Type':'application/json', 'Authorization':EmpresaJson[0].remember_token })
     };
     return this.http.get(`http://localhost:8000/empresa/versolicitudes/${EmpresaJson[0].id}` , httpOptions);
 
   }

   borrarSolicitud(id , Empresa):Observable<any>{
    let EmpresaJson= JSON.parse(Empresa);
    let datos={
      id:id,
      id_empresa:EmpresaJson[0].id,
      remember_token:EmpresaJson[0].remember_token
    }
    console.log(datos)
     const httpOptions = {
       headers: new HttpHeaders({ 'Content-Type':'application/json', 'Authorization':datos.remember_token })
     };
     return this.http.post(`http://localhost:8000/empresa/borrarsolicitud`, datos, httpOptions);
 
   }
   administrarSolicitud(respuesta , numeroSolicitud ,Empresa):Observable<any>{
    let EmpresaJson= JSON.parse(Empresa);
    let datos={
      id:numeroSolicitud,
      id_empresa:EmpresaJson[0].id,
      estado:respuesta,
      remember_token:EmpresaJson[0].remember_token
    }
    console.log(datos)
     const httpOptions = {
       headers: new HttpHeaders({ 'Content-Type':'application/json', 'Authorization':datos.remember_token })
     };
     return this.http.post(`http://localhost:8000/empresa/cambiarsolicitud`, datos, httpOptions);
 
   }


}
