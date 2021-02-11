import { Component, OnInit } from '@angular/core';
import { StripeService, Elements, Element as StripeElement, 
  ElementsOptions } from 'ngx-stripe';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Token } from '../Classes/token';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { PaymentServiceService } from '../services/payment-service.service';
import { PaymentIntentDto } from '../Classes/payment-intent-dto';

declare var $: any;
let selecttyp: any;
let IStep2 = false;
let step: any;
let current_fs;
let next_fs;
let previous_fs;
let opacity;

@Component({
  selector: 'app-finishpayment',
  templateUrl: './finishpayment.component.html',
  styleUrls: ['./finishpayment.component.css']
})
export class FinishpaymentComponent implements OnInit {

  toastr: any;
  plan: any;
  priceplan: any;
  succes: any;
  token = new Token();

  error: any;
  errorname: any;
  errorconnection: any;
  public load: boolean;

  elements: Elements;
  card: StripeElement;
  elementoption: ElementsOptions = {
    locale: 'en'
  };
  PlanSelect: any;
  StripeTest: FormGroup;

  constructor(
    private router: Router,
    private paymentService: PaymentServiceService,
    private fb: FormBuilder,
    private stripeSvc: StripeService) {
      funcionCustom();
    }

  ngOnInit(): void {
    if (localStorage.getItem('mail') === null) {
      this.router.navigate(['/']);
    }
    else {
    // localStorage.removeItem('mailpay');
    this.GetPlan();
    this.GetFormStripe();
    }

  }

  GetFormStripe(){
    this.StripeTest = this.fb.group({
      name: ['', Validators.required]
    });

    this.stripeSvc.elements(this.elementoption)
      .subscribe(elements => {
        this.elements = elements;
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                iconColor: '#666EE8',
                color: '#31325F',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                  color: '#CFD7E0'
                }
              }
            }
          });
          this.card.mount('#card-element');
        }
      });
  }

  GetPlan() {
    this.LoadData(true);
    const filter = '?count=3';
    this.paymentService.GetAll(filter).
      subscribe((data: any) => {
        this.plan = data.Result.Result.data;
        this.LoadData(false);
      });
  }
  CarSubmit(item, index) {
    const divselect = $('.cardaddwith').eq(index)[0];
    for (let val = 0; val < $('.cardaddwith').length; val++) {
      const divUnselect = $('.cardaddwith').eq(val)[0];
      $(divUnselect).css({
        display: 'block',
        position: 'relative',
        'border-color': 'initial',
        'border-style': 'initial'
      });
    }

    $(divselect).css({
      display: 'block',
      position: 'relative',
      'border-color': '#EF7F1A',
      'border-style': 'dotted'
    });
    $('.error_plan').html('');
    this.PlanSelect = item;
    selecttyp = item;
    $('.ste2').val(2);
    this.error = undefined;
  }

  GetNextPage() {
    this.LoadData(false);
    $('#progressbar li').eq($('fieldset').index(next_fs)).addClass('active');
    next_fs.show();
    current_fs.css({
      display: 'none',
      position: 'relative'
    });
  }

  LoadData(val){
    setTimeout(() => {
      this.load = val;
    }, 0);
   }

   LoadDataObject(){
    setTimeout(() => {
      this.GetNextPage();
      this.LoadData(false);
    }, 5000);
   }

   GetSelectPlan() {
    if (selecttyp === undefined) {
      $('.error_plan').html('You have to select a plan');
    }
    else {
      this.LoadData(true);
      $('.ste2').val(2);
      this.LoadDataObject();
    }
  }

  HideMessage(msg) {
    $('.' + msg).html('');
    this.errorconnection = undefined;
  }

  buy() {
    // const name = this.StripeTest.get('name').value;
    // if (name === '') {
    //   $('.error_fullname').html('Full name');
    //   // return false;
    // }
    // else {
    //   $('.hidden_button').prop( "disabled", true );
    //   $(".hidden_button").attr('disabled','disabled');
    //   this.LoadData(true);
    //   this.stripeSvc
    //     .createToken(this.card, { name })
    //     .subscribe(result => {
    //       if (result.token) {
    //         console.log(result.token);
        //     const paymentIntentDto: PaymentIntentDto = {
        //       // tslint:disable-next-line: radix
        //       AccountId: parseInt(localStorage.getItem('IdUser')),
        //       // CardId: result.token.card.id,
        //       description: this.PlanSelect.nickname,
        //       email: localStorage.getItem('mail'),
        //       iDPlanPrice: this.PlanSelect.id,
        //       fullname: name,
        //       idPaymentIntent: 0,
        //       state: 1,
        //     };

        //     this.paymentService.Post(paymentIntentDto).subscribe(
        //       (data: any) => {
        //         this.LoadData(false);
        //         this.succes = data;
        //         this.GetNextPage();
        //         this.LoadRedirect();
        //       },
        //       (err: HttpErrorResponse) => {
        //         this.LoadData(false);
        //         $(".hidden_button").removeAttr('disabled');
        //         this.error = err.error.ErrorDescription;
        //       }
        //     ),
        //     // tslint:disable-next-line: no-unused-expression
        //     (err: HttpErrorResponse) => {
        //       this.LoadData(false);
        //       $(".hidden_button").removeAttr('disabled');
        //       this.error = err.error.ErrorDescription;
        //     };
        //     this.error = undefined;
        //   } else if (result.error) {
        //     this.LoadData(false);
        //     $(".hidden_button").removeAttr('disabled');
        //     this.error = result.error.message;
        //   }
        // },
        //   (err: HttpErrorResponse) => {
        //     $(".hidden_button").removeAttr('disabled');
        //     this.error = err.error.ErrorDescription;
        //   });
    // }

  }

  LoadRedirect(){
    setTimeout(() => {
      this.router.navigate(['/account']);
    }, 30000);
   }

  Logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('IdUser');
    localStorage.removeItem('mailpay');
    localStorage.removeItem('mail');
    localStorage.removeItem('back');
    this.router.navigate(['/login']);
  }
}

function funcionCustom() {
  // tslint:disable-next-line: only-arrow-functions
  $(document).ready(function() {
    $('.next').click(function() {
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();

      if (selecttyp === undefined && IStep2 === true) {
        if ($('.ste2').val() === '') {
          $('.error_plan').html('You have to select a plan');
          current_fs.addClass('disabled');
        }
      }
    });

    $('.previous').click(function() {
      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();
      $('#progressbar li').eq($('fieldset').index(current_fs)).removeClass('active');

      // show the previous fieldset
      previous_fs.show();

      // hide the current fieldset with style
      current_fs.animate({ opacity: 0 }, {
        step(now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: 'none',
            position: 'relative'
          });
          previous_fs.css({ opacity });
        },
        duration: 600
      });
    }
    );
  });
}
