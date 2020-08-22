import {SkycoAccount} from '../Classes/skyco-account';
import {SkycoAddress} from '../Classes/skyco-address';
import {SkycoPhone} from '../Classes/skyco-phone';

export class SkycoUser {
  //#region Properties
  public UserId: number;
  public Firstname: string;
  public Lastname: string;

  public Gender: number;
  public Address: string;
  public EmailAddress: string;
  public NumberAddress: string;
  public DateOfBirth: Date;

  public CreatedAt: Date;
  public CreatedBy: string;

  public UpdatedAt: Date;
  public UpdatedBy: string;

  public VoidedAt: Date;
  public VoidedBy: string;

  public Voided: number;

  public  Country: string;

  public  province: string;

  public  city: string;

  public CountryCode: string;

  // tslint:disable-next-line: variable-name
  Skyco_Account = new Array<SkycoAccount>();
  // tslint:disable-next-line: variable-name
  Skyco_Address = new  Array<SkycoAddress>();
  // tslint:disable-next-line: variable-name
  Skyco_Phone = new Array<SkycoPhone>();
  //#endregion

}
