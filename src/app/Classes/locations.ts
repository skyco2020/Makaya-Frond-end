import {City} from '../Classes/city';
import {Province} from '../Classes/province';
import {Country} from '../Classes/country';

export class Locations {
  //#region Properties
  public LocationId: number;

  public CountryId: number;

  public CityId: number;

  public ProvinceId: number;

  public AddressName: string;

  public AddressNumber: string;

  public Appartement: string;

  public Longitude: number;

  public Latitude: number;

  public CreatedAt: Date;

  public CreatedBy: string;

  public UpdatedAt: Date;

  public UpdatedBy: string;

  public VoidedAt: Date;
  public Voided: number;

  public VoidedBy: string;

  City = new City();
  Province = new Province();
  Country = new Country();
  //#endregion
}
