import {Locations} from '../Classes/locations';
export class SkycoAccount {
   //#region Properties
   public AccountId: number;
   public UserId: number;
   public AccountTypeId: number;
   public Username: string;
   public EmailAddress: string;
   public ConfirmEmailAddress: string;

   public PhoneNumber: string;
   public PasswordHash: string;
   public ConfirmPasswordHash: string;
   public NumberAddress: string;
   public AccountState: number;

   public AccountImage: ImageData;
   public AccountImageUrl: string;
   public LastLoginDate: Date;
   // tslint:disable-next-line: ban-types
   public IsLoggedIn: Boolean;

   public CreatedAt: Date;
   public CreatedBy: string;

   public UpdatedAt: Date;
   public UpdatedBy: string;

   public VoidedAt: Date;
   public VoidedBy: string;

   public Voided: number;

  location = new Locations();
   //#endregion
}
