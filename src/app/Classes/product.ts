import { SkycoAccount } from "./skyco-account";

export class Product {
    public idProduct: number;
    public AccountId: number;
    public  idproductStripe: number;
    public Description: string;
    public name: string;
    public urlimg: string;
    public active: number;

    public Accounts = new Array<SkycoAccount>();
  }