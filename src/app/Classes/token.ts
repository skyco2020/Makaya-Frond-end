import {Card} from '../Classes/card';
export class Token {
  public idtoken: number;
  public id: string;
  // tslint:disable-next-line: variable-name
  public client_ip: string;
  public created: number;
  public livemode: boolean;
  public objectcart: string;
  public type: string;
  public used: boolean;
  public state: number;

  public card = new Card();
}
