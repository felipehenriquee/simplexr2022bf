import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArModelService {

  constructor(private http: HttpClient) { }
  createArModels(dados: any) {
    return this.http.post<any[]>(`${environment.api}/armodels`, dados);
  }
  createSites(dados: any) {
    return this.http.post<any[]>(`${environment.api}/sites`, dados);
  }
  getAllSitesBymodels(id: any) {
    
    return this.http.get<any[]>(`${environment.api}/sites/model/${id}`);
  }
  getOneArModels(id:string) {
    return this.http.get<any[]>(`${environment.api}/armodels/${id}`);
  }
}
