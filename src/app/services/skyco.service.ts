import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SkycoUser} from '../Classes/skyco-user';

@Injectable({
  providedIn: 'root'
})
export class SkycoService {
  public url = '/api/Users';
  constructor(readonly http: HttpClient) { }

  public GetAll(filters: string){
    const conect = `${this.url}/${filters}`;
    return this.http.get(conect);
  }

  public GetById(id){
      const conect = `${this.url}/${id}`;
      return this.http.get(conect);
  }

  Post(modal: SkycoUser){
    const conect = `${this.url}`;
    return this.http.post(conect, modal);
  }
  Delete(Id: SkycoUser){
    const conect = `${this.url}/${Id.UserId}`;
    return this.http.delete(conect,
      {headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        // tslint:disable-next-line: object-literal-key-quotes
        'Authorization': localStorage.getItem('userToken')})});
  }
  Put(modal: SkycoUser){
    const conect = `${this.url}/RegisterUserCompletely`;
    return this.http.put(conect, modal);
  }
}
