import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../Classes/product';

declare var $: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  attachementimg: string;
  products = new Array<Product>();
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    this.GetAll();
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
}
