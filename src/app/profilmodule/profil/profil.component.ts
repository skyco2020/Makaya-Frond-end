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
  constructor(
    private userService: TaskService,
    private serperfil: PerfilService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const tokenPayload = decode(this.userService.getJwtToken());
    let filter = '?AccountId=' + tokenPayload.Idaccount;

    this.serperfil.GetAll(filter).subscribe((data: any) => {
      this.profils = data.ResourceList;
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
      let prof = new Perfil();
      prof.idPerfil = $('#idprofil').val();
      prof.name =$('#name').val();
      prof.complete = $('#complete').val()

      // this.serperfil.Post(prof).
      // subscribe((data: any) => {
      //   this.ngOnInit();
      //   this. Cancel();
      // })
    }
  }
  ShowHome(profil) {
    debugger;
    if (profil.typeperfil == 1) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/kids']);
    }
  }
}
