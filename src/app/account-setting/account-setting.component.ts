import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { PaymentServiceService } from '../services/payment-service.service';
import { GlobalFunctionService } from '../Function/global-function.service';
>>>>>>> e76f8b81268e08142e0336de71d57ccf50cc55d2
// import { $ } from 'protractor';
declare var $: any;
@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.scss']
})
export class AccountSettingComponent implements OnInit {
<<<<<<< HEAD
 
  constructor() { }

  ngOnInit(): void {
    
  }

}
=======
  subscription:any;
  card:any;
  username:any;
  constructor(private stripeservice: PaymentServiceService,private gbfuncservice: GlobalFunctionService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('mail');
    this.RetrieveCard();
    this.RetrieveSubscription();
  }
 RetrieveCard(){
  const id = parseInt(this.gbfuncservice.Decrypt(localStorage.getItem('accountId')));
  this.stripeservice.RetrieveCard(id).subscribe((data: any) => {
    debugger;
    this.card = data.Result;
  });
 }

 RetrieveSubscription(){
  const id = parseInt(this.gbfuncservice.Decrypt(localStorage.getItem('accountId')));
  this.stripeservice.RetrieveSubscription(id).subscribe((data: any) => {
    debugger;
    // current_period_end
    let fecha = new Date(data.Result.current_period_end).toLocaleString();
    this.subscription = data.Result;
  });
 }

}
>>>>>>> e76f8b81268e08142e0336de71d57ccf50cc55d2
