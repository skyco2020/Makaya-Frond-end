import { Component, OnInit, Input } from '@angular/core';
import { SkycoService } from '../services/skyco.service';
import { TaskService } from '../services/task.service';
import { HttpErrorResponse } from '@angular/common/http';
import {
  StripeService,
  Elements,
  Element as StripeElement,
  ElementsOptions,
} from 'ngx-stripe';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Token } from '../Classes/token';
import { PaymentIntentDto } from '../Classes/payment-intent-dto';
import { PaymentServiceService } from '../services/payment-service.service';

import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkycoUser } from '../Classes/skyco-user';
import { SkycoAccount } from '../Classes/skyco-account';
import { City } from '../Classes/city';
import { SkycoAddress } from '../Classes/skyco-address';
import { Country } from '../Classes/country';
import { Province } from '../Classes/province';

declare var $: any;
declare var Stripe: any;
let selecttyp: any;
let IStep2 = false;
// tslint:disable-next-line: prefer-const
let step: any;
// tslint:disable-next-line: variable-name
let current_fs;
// tslint:disable-next-line: variable-name
let next_fs;
// tslint:disable-next-line: variable-name
let previous_fs;
let opacity;

@Component({
  selector: 'app-registerpayment',
  templateUrl: './registerpayment.component.html',
  styleUrls: ['./registerpayment.component.css'],
})
export class RegisterpaymentComponent implements OnInit {
  usr = new SkycoUser();
  accout = new SkycoAccount();
  toastr: any;
  plan: any;
  priceplan: any;
  succes: any;
  token = new Token();

  @Input() precio;
  @Input() descripcion;
  @Input() nombre;

  error: any;
  errorname: any;
  errorconnection: any;
  public load: boolean;

  elements: Elements;
  card: StripeElement;
  elementoption: ElementsOptions = {
    locale: 'en',
  };
  PlanSelect: any;
  StripeTest: FormGroup;

  constructor(
    private userService: SkycoService,
    private taskser: TaskService,
    private router: Router,
    private paymentService: PaymentServiceService,
    private fb: FormBuilder,
    private stripeSvc: StripeService,
    public modalService: NgbModal
  ) {}

  ngOnInit(): void {
    // tslint:disable-next-line: only-arrow-functions
    this.GetLocation();
    funcionCustom();
    if (localStorage.getItem('mail') === null) {
      this.router.navigate(['/']);
    } else {
      $('#mail-2').val(localStorage.getItem('mail'));
      $('#confirm_mail-2').val(localStorage.getItem('mail'));
      this.EnableMail();
      this.GetPlan();
      this.errorname = undefined;
      $('.cardhidden').show();
      $('.hiddenfooter').hide();
      this.GetFormStripe();
    }
  }

  EnableMail() {
    $('#mail-2').attr('readonly', true);
    $('#confirm_mail-2').attr('readonly', true);
  }
  // TODO:form card company
  GetFormStripe() {
    this.StripeTest = this.fb.group({
      name: ['', Validators.required],
    });

    this.stripeSvc.elements(this.elementoption).subscribe((elements) => {
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
                color: '#CFD7E0',
              },
            },
          },
        });
        this.card.mount('#card-element');
      }
    });
  }

  GetLocation() {
    // tslint:disable-next-line: only-arrow-functions
    $.getJSON('https://ipapi.co/jsonp?callback=?', function (data) {
      $('#country').val(data.country_name);
      $('#code_country').val(data.country_code);
      $('#province').val(data.region);
      $('#city').val(data.city);
      $('#latitude').val(data.latitude);
      $('#longitude').val(data.longitude);
      console.log(JSON.stringify(data, null, 2));
    });
  }

  GetSelectPlan() {
    if (selecttyp === undefined) {
      $('.error_plan').html('You have to select a plan');
    } else {
      this.LoadData(true);
      $('.ste2').val(2);
      this.LoadDataObject();
      // this.GetNextPage();
    }
  }

  buy() {
    const name = this.StripeTest.get('name').value;
    if (name === '') {
      $('.error_fullname').html('Full name');
      // return false;
    } else {
      /* lo comemtamos para no mostrar el loading */
      this.LoadData(true);
      this.stripeSvc.createToken(this.card, { name }).subscribe(
        (result) => {
          this.GetNextPage();
          /* lo comemtamos para que pueda hacer lo de front-end sin bombadear la base de datos */
          if (result.token) {
            console.log(result.token);
            const paymentIntentDto: PaymentIntentDto = {
              // tslint:disable-next-line: radix
              AccountId: parseInt(localStorage.getItem('IdUser')),
              CardId: result.token.card.id,
              Description: this.PlanSelect.nickname,
              Email: localStorage.getItem('mail'),
              IDStripePrice: this.PlanSelect.id,
              fullname: name,
              idPaymentIntent: 0,
              state: 1,
              stripeTokenId: result.token.id,
            };

            this.paymentService.Post(paymentIntentDto).subscribe(
              (data: any) => {
                this.LoadData(false);
                this.succes = data;
                this.GetNextPage();
                this.LoadRedirect();
              },
              (err: HttpErrorResponse) => {
                this.LoadData(false);
                this.error = err.error.ErrorDescription;
              }
            ),
              // tslint:disable-next-line: no-unused-expression
              (err: HttpErrorResponse) => {
                this.LoadData(false);
                this.error = err.error.ErrorDescription;
              };
            this.error = undefined;
          } else if (result.error) {
            this.LoadData(false);
            this.error = result.error.message;
          }
        },
        (err: HttpErrorResponse) => {
          this.error = err.error.ErrorDescription;
        }
      );
    }
  }
  HideMessage(msg) {
    $('.' + msg).html('');
    this.errorconnection = undefined;
  }

  OnSubmit() {
    if (this.validateField() === true) {
      // this.LoadData(true);
      this.usr = new SkycoUser();
      //#region User
      // tslint:disable-next-line: radix
      this.usr.UserId = parseInt(localStorage.getItem('IdUser'));
      this.usr.Firstname = $('#name-2').val();
      this.usr.Lastname = $('#surname-2').val();
      this.usr.EmailAddress = $('#mail-2').val();
      this.usr.UpdatedAt = new Date();
      this.usr.UpdatedBy = $('#name-2').val() + ' ' + $('#surname-2').val();
      this.usr.Country = $('#country').val();
      this.usr.province = $('#province').val();
      this.usr.city = $('#city').val();
      //#endregion

      //#region Adrress
      const Address = new SkycoAddress();
      Address.CreatedAt = new Date();
      Address.CreatedBy = $('#name-2').val() + ' ' + $('#surname-2').val();
      Address.Voided = 1;
      this.usr.Skyco_Address.push(Address);
      //#endregion

      //#region Account
      const Account = new SkycoAccount();
      // tslint:disable-next-line: radix
      Account.UserId = parseInt(localStorage.getItem('IdUser'));
      Account.EmailAddress = $('#mail-2').val();
      Account.Username = $('#mail-2').val();
      Account.PasswordHash = $('#password-2').val();
      Account.CreatedAt = new Date();
      Account.CreatedBy = $('#name-2').val() + ' ' + $('#surname-2').val();
      Account.AccountTypeId = 3;
      Account.Voided = 1;

      //#region Location
      Account.location.Latitude = $('#latitude').val();
      Account.location.Longitude = $('#longitude').val();
      Account.location.CreatedBy =
        $('#name-2').val() + ' ' + $('#surname-2').val();
      Account.location.CreatedAt = new Date();
      Account.location.Voided = 1;
      //#endregion

      //#region Country
      Account.location.Country.CountryCode =
        $('#code_country').val() != null
          ? $('#code_country').val()
          : 'None identificate';
      Account.location.Country.CountryName =
        $('#country').val() != null ? $('#country').val() : 'None identificate';
      Account.location.Country.CreatedBy =
        $('#name-2').val() + ' ' + $('#surname-2').val();
      Account.location.Country.CreatedAt = new Date();
      Account.location.Country.Voided = 1;

      //#region Province
      const Prove = new Province();
      Prove.ProvinceName =
        $('#province').val() != null
          ? $('#province').val()
          : 'None identificate';
      Prove.CreatedBy = $('#name-2').val() + ' ' + $('#surname-2').val();
      Prove.CreatedAt = new Date();
      Prove.Voided = 1;

      //#region City
      const cit = new City();
      cit.CityName =
        $('#city').val() != null ? $('#city').val() : 'None identificate';
      cit.CreatedBy = $('#name-2').val() + ' ' + $('#surname-2').val();
      cit.CreatedAt = new Date();
      cit.Voided = 1;

      Prove.City.push(cit);
      //#endregion
      Account.location.Country.Province.push(Prove);
      //#endregion

      //#endregion

      this.usr.Skyco_Account.push(Account);
      //#endregion
      this.GetNextPage();
      /* lo comemtamos para que pueda hacer lo de front-end sin bombadear la base de datos */
      // this.userService.Put(this.usr).subscribe(
      //   (data: any) => {
      //     // tslint:disable-next-line: no-debugger
      //     this.usr = this.usr;
      //     IStep2 = true;
      //     this.GetNextPage();
      //   },
      //   (err: HttpErrorResponse) => {
      //     this.LoadData(false);
      //     this.errorconnection = 'Error occured while trying to proxy.';
      //   }
      // );
    }
  }
  LoadData(val) {
    setTimeout(() => {
      this.load = val;
    }, 0);
  }
  GetPlan() {
    const filter = '?count=3';
    this.paymentService.GetAll(filter).subscribe((data: any) => {
      this.plan = data.Result.Result.data;
    });
  }

  CarSubmit(item, index) {
    const divselect = $('.card-plan').eq(index)[0];
    for (let val = 0; val < $('.card-plan').length; val++) {
      const divUnselect = $('.card-plan').eq(val)[0];
      $(divUnselect).css({
        display: 'block',
        position: 'relative',
        borderColor: 'initial',
        borderStyle: 'initial',
      });
    }

    $(divselect).css({
      display: 'block',
      position: 'relative',
      border: '3px dotted black',
    });
    $('.error_plan').html('');
    this.PlanSelect = item;
    selecttyp = item;
    $('.ste2').val(2);
    this.error = undefined;
  }

  validateField() {
    if ($('#name-2').val() === '') {
      $('.error_name-2').html('First name');
      return false;
    } else if ($('#surname-2').val() === '') {
      $('.error_surname-2').html('Last name');
      return false;
    } else if ($('#mail-2').val() === '') {
      $('.error_mail-2').html('E_mail');
      return false;
    } else if (this.isValid($('#mail-2').val() === false)) {
      $('.error_mail-2').html('Incorrect E_mail');
      return false;
    } else if ($('#confirm_mail-2').val() === '') {
      $('.confirm_error_mail-2').html('Confirm E_mail');
      return false;
    } else if (this.isValid($('#confirm_mail-2').val() === false)) {
      $('.confirm_error_mail-2').html('Incorrect confirm E_mail');
      return false;
    } else if ($('#mail-2').val() !== $('#confirm_mail-2').val()) {
      $('.error_mail-2').html('Diference E_mail');
      return false;
    } else if ($('#password-2').val() === '') {
      $('.error_password-2').html('password');
    } else if ($('#confirm-2').val() === '') {
      $('.error_confirm-2').html('Confirm Password');
      return false;
    } else if ($('#password-2').val() !== $('#confirm-2').val()) {
      $('.error_password-2').html('diference password');
      return false;
    } else if ($('#password-2').val().length < 6) {
      $('.error_password-2').html(
        "The password can't be less than 6 characters"
      );
      return false;
    } else if (selecttyp === undefined && $('.ste2').val() === '2') {
      $('.error_plan').html('You have to select a plan');
      return false;
    } else {
      return true;
    }
  }

  GetNextPage() {
    this.LoadData(false);
    $('#progressbar li').eq($('fieldset').index(next_fs)).addClass('active');
    next_fs.show();
    current_fs.css({
      display: 'none',
      position: 'relative',
    });
  }

  isValid(email) {
    const cad = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = cad.test(email);
    if (!result) {
      $('.input_e_mail').val('');
      return false;
    } else {
      return true;
    }
  }
  LoadDataObject() {
    setTimeout(() => {
      this.GetNextPage();
      this.LoadData(false);
    }, 5000);
  }
  LoadRedirect() {
    setTimeout(() => {
      this.router.navigate(['/account']);
    }, 30000);
  }
}

function funcionCustom() {
  // tslint:disable-next-line: only-arrow-functions
  $(document).ready(function () {
    $('.next').click(function () {
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      if (selecttyp === undefined && IStep2 === true) {
        if ($('.ste2').val() === '') {
          $('.error_plan').html('You have to select a plan');
          current_fs.addClass('disabled');
        }
      }
    });

    $('.previous').click(function () {
      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();
      $('#progressbar li')
        .eq($('fieldset').index(current_fs))
        .removeClass('active');

      // show the previous fieldset
      previous_fs.show();

      // hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step(now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
              display: 'none',
              position: 'relative',
            });
            previous_fs.css({ opacity });
          },
          duration: 600,
        }
      );
    });
  });
}
