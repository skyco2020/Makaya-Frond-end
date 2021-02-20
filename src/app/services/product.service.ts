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
}