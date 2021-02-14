import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { PerfilService } from '../../services/perfil.service';
import{Perfil} from '../../Classes/perfil';

import decode from 'jwt-decode';
declare var $: any;

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
  profils: any;
  prof = new Perfil();
  constructor(
    private userService: TaskService,
    private serperfil: PerfilService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const tokenPayload = decode(this.userService.getJwtToken());
    let filter = '?AccountId=' + tokenPayload.Idaccount;

    this.serperfil.GetAll(filter).subscribe((data: any) => {
      debugger;
      this.profils = data.ResourceList;
      let p = this.prof;
      debugger;
      if(this.profils.length >= 5){
        $('.add').css({
          display:'none'
        });
      }
    });
  }
  Add(){
    $('.profiles').css({
      display:'none'
    })
    $('.addprofile').css({
      display:'block'
    })
  }
  Cancel(){
    $('.profiles').css({
      display:'flex'
    })
    $('.addprofile').css({
      display:'none'
    })
  }
  Save(){
    if($('#name').val() == ""){
      $('#errorname').css({
        display:'block'
      })
    }
    else{
      // let prof = new Perfil();
      // prof.idPerfil = $('#idprofil').val();
      // prof.name =$('#name').val();
      // prof.complete = $('#complete').val()

      // this.serperfil.Post(prof).
      // subscribe((data: any) => {
      //   this.ngOnInit();
      //   this. Cancel();
      // })
    }
  }
  ShowHome(profil) {
    debugger;
    if(profil.passperfil == null){
      this.SetPerfil(profil);
    }
    else{
      $('.profiles').css({
        display:'none'
      })
      $('.profilloggin').css({
        display:'flex'
      })
      this.prof.name = "";
      this.prof.passperfil = "";
    }
   
  }
  SetPerfil(profil){
    if (profil.typeperfil == 1) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/kids']);
    }
  }
  CancelLogin(){
    $('.profiles').css({
      display:'flex'
    })
    $('.profilloggin').css({
      display:'none'
    })
  }
  LogginPerfil(){
    if(this.prof.name === ""){
      $('#errorname').css({
        display:'block'
      })
    }
    else  if(this.prof.passperfil === ""){
      $('#errorpassperfil').css({
        display:'block'
      })
    }
    else{
      debugger;
      let userprofil = this.profils.filter(per => per.name === this.prof.name && per.passperfil === this.prof.passperfil);
      if(userprofil.length > 0){
        this.SetPerfil(userprofil[0]);
      }
      else{
        $('#errorincorrectlog').css({
          display:'block'
        })        
      }
    }
  }
  
  hiddenErrorMessage(id: string){
    $('#'+id).css({
      display:'none'
    })
    $('#errorincorrectlog').css({
      display:'none'
    })
  }
}
