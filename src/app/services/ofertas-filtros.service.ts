import { Injectable } from '@angular/core';
import { OfertasPorCiudades } from "../models/OfertasPorCiudades.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertasFiltrosService {
  private oCiudad: OfertasPorCiudades;
  constructor(private http: HttpClient) { }

  filtroCiudades(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/ofertasporciudades');
  }
  getOCiudad(): OfertasPorCiudades {
    return this.oCiudad;
  }
}
