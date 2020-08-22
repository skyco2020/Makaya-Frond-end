import {Province} from '../Classes/province';
export class Country {
  //#region Properties
  public CountryId: number;

  public CountryCode: string;

  public CountryName: string;

  public CreatedAt: Date;

  public CreatedBy: string;

  public UpdatedAt: Date;

  public UpdatedBy: string;

  public VoidedAt: Date;
  public Voided: number;

  public VoidedBy: string;

  Province = new Array<Province>();
  //#endregion
}
