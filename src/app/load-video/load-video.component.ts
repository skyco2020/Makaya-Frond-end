import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-load-video',
  templateUrl: './load-video.component.html',
  styleUrls: ['./load-video.component.scss']
})
export class LoadVideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.querySelector('.close-modal').addEventListener('click',()=>{
      $('.modal-upload-video').css({
        display : 'none'
      })    
      $('.modal-upload-video-delete').css({
        display : 'none'
      })  
      // this.initForm();
      // this.iscreated = true;
    });
    document.querySelector('.fa-times-circle').addEventListener('click',()=>{   
      console.log('estoy en delete..');
      $('.modal-upload-video-delete').css({
        display : 'none',
        background: 'red'

      })  
      // this.initForm();
      // this.iscreated = true;
    });

    document.querySelector('.btn-add-upload-video').addEventListener('click',()=>{
      $('.modal-upload-video').css({
        display : 'block'
      })
     
      // this.iscreated = true;
      // this.initForm();
      // $('#type-plan').focus();
    });
    // document.querySelectorAll('.fa-pen-square').forEach(elem =>{
    //   elem.addEventListener('click',()=>{
    //     $('.modal-upload-video').css({
    //       display : 'block'
    //     })
    //     // this.iscreated = true;
    //     // this.initForm();
    //   });
    // });

    document.querySelectorAll('.fa-trash').forEach(el =>{
      el.addEventListener('click',()=>{
        console.log('modal upload-video delte');
        $('.modal-upload-video-delete').css({
          display : 'block'
        });
        // this.iscreated = true;
        // this.initForm();
      });
    })
  }
  CloseModal(){
    $('.modal-plan-delete').css({
      display : 'none'
    })
    // this.initDeleteForm();
  }

}
