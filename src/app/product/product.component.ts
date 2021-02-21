import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../Classes/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalFunctionService } from '../Function/global-function.service';
import { HttpErrorResponse } from '@angular/common/http';

declare var $: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  attachementimg: string;
  products = new Array<Product>();
  productForm: FormGroup;

  constructor(private productservice:ProductService, private fb:FormBuilder,
    private gbfuncservice: GlobalFunctionService) { }

  ngOnInit(): void {
    this.GetAll();
    this.initForm();
    document.querySelector('.close-modal').addEventListener('click',()=>{
      $('.modal-plan').css({
        display : 'none'
      })
    });
    document.querySelector('.btn-add-plan').addEventListener('click',()=>{
      $('.modal-plan').css({
        display : 'block'
      })
    });

    document.querySelectorAll('.fa-pen-square').forEach(elem =>{
      elem.addEventListener('click',()=>{
        $('.modal-plan').css({
          display : 'block'
        })
      });
    })
  }
  
  GetAll() {
    const filter = '?top=12';
    this.productservice.GetAll(filter).subscribe((data: any) => {
      debugger;
      this.products = data;
    });
  }

  private initForm():void{
    this.productForm = this.fb.group({
      idProduct: [''],
      AccountId: [this.gbfuncservice.Decrypt(localStorage.getItem('accountId'))],
      name: ['',[Validators.required, Validators.maxLength(150)]],
      description:  ['',[Validators.maxLength(250)]],
      urlimg: [''],
      active: true
    });
  }

  isValidField(field: string): string{
    const validatedField = this.productForm.get(field);
    return(!validatedField.valid && validatedField.touched) ?
      'is-invalid': validatedField.touched ? 'is-valid':'';
  }

  fileEvent(fileInput: Event){
    debugger;
    let file = (<HTMLInputElement>fileInput.target).files[0];
    if(file.type =="image/jpeg" ||  file.type =="image/png"){
      var reader = new FileReader();
      reader.onload=this._handleReaderLoader.bind(this);  
      reader.readAsBinaryString(file);
    }
  }
  _handleReaderLoader(readerEvent){
    var binaryString=readerEvent.target.result;
    this.attachementimg=btoa(binaryString);
  }

  CreateProduct(){
    if(this.productForm.valid){
      this.productservice.Post(this.productForm.value).subscribe(
        (success) => {
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

  DeletePlan(idproduct){   
    debugger;
      this.productservice.Delete(idproduct).subscribe(
        (success) => {
          this.GetAll();
         
        },
        (err: HttpErrorResponse) => {
         
        }
      );
  }
}
