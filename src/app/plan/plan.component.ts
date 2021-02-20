import { Component, OnInit } from '@angular/core';
import { PlanService } from '../services/plan.service';
import { Plan } from '../Classes/plan';
import { ProductService } from '../services/product.service';
import { Product } from '../Classes/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalFunctionService } from '../Function/global-function.service';
import { HttpErrorResponse } from '@angular/common/http';

declare var $: any;
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
 plans= new Array<Plan>();
 products = new Array<Product>();
 planForm: FormGroup;
 iscreated: boolean = true;

  constructor(private planservice: PlanService, private productservice:ProductService, 
              private fb:FormBuilder,private gbfuncservice: GlobalFunctionService) { }

  ngOnInit(): void {
    this.GetAllProduc();
    this.GetAll();
    this.initForm();
    document.querySelector('.close-modal').addEventListener('click',()=>{
      $('.modal-plan').css({
        display : 'none'
      })      
      this.initForm();
      this.iscreated = true;
    });
    // document.querySelector('.close-modal').addEventListener('click',()=>{
    //   $('.modal-plan-delete').css({
    //     display : 'none'
    //   })      
    // });
    document.querySelector('.btn-add-plan').addEventListener('click',()=>{
      $('.modal-plan').css({
        display : 'block'
      })
      this.iscreated = true;
      this.initForm();
      $('#type-plan').focus();
    });
    document.querySelectorAll('.fa-pen-square').forEach(elem =>{
      elem.addEventListener('click',()=>{
        $('.modal-plan').css({
          display : 'block'
        })
        this.iscreated = true;
        this.initForm();
      });
    });
   console.log(document.querySelectorAll('.fa-pen-square').length);
   console.log((document.querySelectorAll('.delete-modal')));
    document.querySelectorAll('.fa-trash').forEach(el =>{
      el.addEventListener('click',()=>{
        console.log('modal plan delte');
        $('.modal-plan-delete').css({
          display : 'block'
        });
        this.iscreated = true;
        this.initForm();
      });
    })
    
    // document.getElementById('fa-pen-square').addEventListener('click',()=>{
    //   $('.modal-plan').css({
    //     display : 'block'
    //   })
    // });
  }

  GetAll() {
    const filter = '?top=12';
    this.planservice.GetAll(filter).subscribe((data: any) => {
      this.plans = data.ResourceList;
    });
  }
  
  GetAllProduc() {
    const filter = '?top=12';
    this.productservice.GetAll(filter).subscribe((data: any) => {
      debugger;
      this.products = data;
    });
  }

  private initForm():void{
    this.planForm = this.fb.group({
      PlanID: [''],
      idProduct: ['',[Validators.required]],
      AccountId: [this.gbfuncservice.Decrypt(localStorage.getItem('accountId'))],
      TypePlan: ['',[Validators.required]],
      Price: ['',[Validators.required]],
      Description: ' ',
      PlanDate: [new Date()],
      state: [1]
    });
  }

  isValidField(field: string): string{
    const validatedField = this.planForm.get(field);
    return(!validatedField.valid && validatedField.touched) ?
      'is-invalid': validatedField.touched ? 'is-valid':'';
  }

  CreatePlan(){
    debugger;
    if(this.planForm.valid){

      this.planservice.Post(this.planForm.value).subscribe(
        (success) => {
          this.iscreated = true;
          this.GetAll();
          $('.modal-plan').css({
            display : 'none'
          })
        },
        (err: HttpErrorResponse) => {
         
        }
      );
    }
  }

  UpdatePlan(){
    debugger;
    if(this.planForm.valid){
      this.planservice.Put(this.planForm.value).subscribe(
        (success) => {
          this.iscreated = true;
          this.GetAll();
          $('.modal-plan').css({
            display : 'none'
          })
        },
        (err: HttpErrorResponse) => {
         
        }
      );
    }
  }
  DeletePlan(){
    debugger;
    if(this.planForm.valid){
      this.planservice.Put(this.planForm.value).subscribe(
        (success) => {
          this.iscreated = true;
          this.GetAll();
          $('.modal-plan-delete').css({
            display : 'none'
          })
        },
        (err: HttpErrorResponse) => {
         
        }
      );
    }
  }
  UpdateModal(item){
    this.iscreated = false;
    this.planForm.patchValue(item);
    $('.modal-plan').css({
      display : 'block'
    })
    $('.btn-action').html('Update Plan')
  }
}
