import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product } from '../Classes/product';

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
    public url = `/api/Products`;
    constructor(readonly http: HttpClient) { }
  
    public GetAll(filters: string){
      const conect = `${this.url}${filters}`;
      return this.http.get(conect);
    }
    
    Post(modal: Product){
      const conect = `${this.url}`;
      return this.http.post(conect, modal);
    }

    Delete(id: number){
      const conect = `${this.url}/${id}`;
      return this.http.delete(conect,
        {headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          // tslint:disable-next-line: object-literal-key-quotes
          'Authorization': localStorage.getItem('JWT_TOKEN')})});
    }

    Put(modal: Product){
      const conect = `${this.url}`;
      return this.http.put(conect, modal);
    }
}