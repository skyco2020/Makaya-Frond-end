export class PaymentIntentDto {
  public idPaymentIntent: number;
  public AccountId: number;
  public iDPlanPrice: string;
  public fullname: string;
  public TypePlan: string;
  public email: string;
  public description: string;  
  public cardnumber: string;
  public expirationDate: string;
  public month: string;
  public year: string;
  public cvc: string;
  public state: number;
}
