export class PaymentIntentDto {
  public idPaymentIntent: number;
  public AccountId: number;
  public stripeTokenId: string;
  public CardId: string;
  public fullname: string;
  public Email: string;
  public Description: string;

  public IDStripePrice: string;
  public state: number;
}
