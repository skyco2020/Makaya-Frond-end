import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentIntentDto } from '../Classes/payment-intent-dto';

const header = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {
  stripeURL = '/api/StripeCard';
  constructor(private httpClient: HttpClient) { }

  public Post(paymentIntentDto: PaymentIntentDto) {
    const conect = `${this.stripeURL}`;
    return this.httpClient.post(conect, paymentIntentDto);
    // return this.httpClient.post(this.stripeURL + paymentIntentDto, header);
  }

  public GetAll(filters: string){
    const conect = `${this.stripeURL}${filters}`;
    return this.httpClient.get(conect);
  }

  public RetrieveCard(id: number) {
    return this.httpClient.get(this.stripeURL + `/RetrieveCard?accoutId=${id}`);
  }

  public RetrieveSubscription(id: number) {
    return this.httpClient.get(this.stripeURL + `/Retrievesubscription?accoutId=${id}`);
  }

  public cancelar(id: string) {
    return this.httpClient.post(this.stripeURL + `cancel/${id}`, {}, header);
  }
}
