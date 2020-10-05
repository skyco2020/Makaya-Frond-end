import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Perfil} from '../Classes/perfil'

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  public url = `/api/Perfils`;
  constructor(readonly http: HttpClient) { }

  public GetAll(filters: string){
    const conect = `${this.url}${filters}`;
    return this.http.get(conect);
  }

  public GetById(id){
      const conect = `${this.url}/${id}`;
      return this.http.get(conect);
  }

  Post(modal: Perfil){
    const conect = `${this.url}`;
    return this.http.post(conect, modal);
  }
  Delete(Id: number){
    const conect = `${this.url}/${Id}`;
    return this.http.delete(conect,
      {headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        // tslint:disable-next-line: object-literal-key-quotes
        'Authorization': localStorage.getItem('userToken')})});
  }
  Put(modal: Perfil){
    const conect = `${this.url}`;
    return this.http.put(conect, modal);
  }
}
