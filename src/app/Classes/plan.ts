import {SkycoAccount} from '../Classes/skyco-account';
import { Product } from './product';
export class Plan {
  public PlanId: number;
  public AccountId: number;
  public  Price: number;
  public Description: string;
  public TypePlan: string;
  public PlanDate: Date;
  public state: number;

  public Accounts = new Array<SkycoAccount>();
  public Products = new Array<Product>();
}
