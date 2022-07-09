import { Itens } from './../models/itens';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItensService {
  private objetos: Itens[] = [];
  
  constructor(private http: HttpClient) { 
    
  }

  criaObjetos(){
    
  }


  getUrl(id: any){
    
    
    const result = this.http.post<any>(`https://39q8x2sgp7.execute-api.us-east-1.amazonaws.com/dev/augmented-reality/get`, id);
    return result;
  }

  getObjetos(){
    return this.objetos;
  }
  getObjetosId(id: number){
    this.criaObjetos();
    
    for (let i = 0; i < this.objetos.length; i++) {
      if (this.objetos[i].Id == id){
        return this.objetos[i]
      }
      
    }
    return false;
  }
}
