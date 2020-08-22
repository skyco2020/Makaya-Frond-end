import {City} from '../Classes/city';
export class Province {
  //#region Properties
  public ProvinceId: number;

  public CountryId: number;

  public ProvinceName: string;

  public CreatedAt: Date;

  public CreatedBy: string;

  public UpdatedAt: Date;

  public UpdatedBy: string;

  public VoidedAt: Date;
  public Voided: number;

  public VoidedBy: string;

  City = new Array<City>();
  //#endregion
}

