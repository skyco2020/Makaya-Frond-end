import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public url = '/api/Movies';
  constructor(readonly http: HttpClient) { }

  public GetAll(){
    const conect = `${this.url}/GetAllMovie`;
    return this.http.get(conect);
  }
  GetAllImagen(){
    const conect = `${this.url}?state=1`;
    return  this.http.get(conect);
  }
  public GetById(id){
      const conect = `${this.url}/${id}`;
      return this.http.get(conect);
  }
}