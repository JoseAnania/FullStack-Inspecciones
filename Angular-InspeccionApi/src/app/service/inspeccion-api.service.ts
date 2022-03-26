/* Servicio creado para manejar la lógica de las peticiones API */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InspeccionApiService {
  // dirección URL de la api del Backend
  readonly inspeccionApiUrl = 'https://localhost:7244/api';

  // inyectamos el Módulo que nos permite trabajar con las peticiones
  constructor(private http: HttpClient) {}

  // METODOS PARA LA TABLA INSPECCIONES (obtenemos las direcciones API desde Swagger)

  // método GET para mostrar la lista de Inspecciones
  getInspeccionList(): Observable<any[]> {
    return this.http.get<any>(this.inspeccionApiUrl + '/inspecciones');
  }

  // método POST para agregar una Inspeccion
  addInspeccion(data: any) {
    return this.http.post(this.inspeccionApiUrl + '/inspecciones', data);
  }

  // método PUT para modificar una Inspeccion
  updateInspeccion(id: number | string, data: any) {
    return this.http.put(this.inspeccionApiUrl + `/inspecciones/${id}`, data);
  }

  // método DELETE para eliminar una Inspeccion
  deleteInspeccion(id: number | string) {
    return this.http.delete(this.inspeccionApiUrl + `/inspecciones/${id}`);
  }

  // METODOS PARA LA TABLA TIPOINSPECCIONES (obtenemos las direcciones API desde Swagger)

  // método GET para mostrar la lista de Tipo de Inspecciones
  getTipoInspeccionList(): Observable<any[]> {
    return this.http.get<any>(this.inspeccionApiUrl + '/tipoinspecciones');
  }

  // método POST para agregar un Tipo de Inspeccion
  addTipoInspeccion(data: any) {
    return this.http.post(this.inspeccionApiUrl + '/tipoinspecciones', data);
  }

  // método PUT para modificar un Tipo de Inspeccion
  updateTipoInspeccion(id: number | string, data: any) {
    return this.http.put(this.inspeccionApiUrl + `/tipoinspecciones/${id}`, data);
  }

  // método DELETE para eliminar un Tipo de Inspeccion
  deleteTipoInspeccion(id: number | string) {
    return this.http.delete(this.inspeccionApiUrl + `/tipoinspecciones/${id}`);
  }

  // METODOS PARA LA TABLA ESTADOS (obtenemos las direcciones API desde Swagger)

  // método GET para mostrar la lista de Estados
  getEstadoList(): Observable<any[]> {
    return this.http.get<any>(this.inspeccionApiUrl + '/estados');
  }

  // método POST para agregar un Estado
  addEstado(data: any) {
    return this.http.post(this.inspeccionApiUrl + '/estados', data);
  }

  // método PUT para modificar un Estado
  updateEstado(id: number | string, data: any) {
    return this.http.put(this.inspeccionApiUrl + `/estados/${id}`, data);
  }

  // método DELETE para eliminar un Estado
  deleteEstado(id: number | string) {
    return this.http.delete(this.inspeccionApiUrl + `/estados/${id}`);
  }
}
