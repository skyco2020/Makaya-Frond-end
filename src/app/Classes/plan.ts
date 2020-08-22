import {SkycoAccount} from '../Classes/skyco-account';
export class Plan {
  public PlanId: number;
  public AccountId: number;
  public  Price: number;
  public Description: string;
  public TypePlan: string;
  public PlanDate: Date;
  public state: number;

  public Accounts = new Array<SkycoAccount>();
  // public List<PaymentDTO> Payments { get; set; }
}
