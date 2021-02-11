import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { PerfilService } from '../../services/perfil.service';
import{Perfil} from '../../Classes/perfil';

import decode from 'jwt-decode';
import { from } from 'rxjs';
declare var $: any;


@Component({
  selector: 'app-updateprofil',
  templateUrl: './updateprofil.component.html',
  styleUrls: ['./updateprofil.component.css'],
})
export class UpdateprofilComponent implements OnInit {
  profils: any;
  prof = new Perfil()  

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
    });
  }
  UpdateProfil(profil){
    $('.profiles').css({
      display:'none'
    })
    $('.modify').css({
      display:'flex',
      width: '100%',
      height :'100vh',
      justifyContent : 'center',
      flexFlow: 'column wrap',
      alignItems:'center',
      background: '#141414',
      margin: '0px auto'

    })
    this.prof = profil;
  }

  Cancel(){
    $('.profiles').css({
      display:'flex'
    })
    $('.modify').css({
      display:'none'
    })
  }
  Save(){
    if(this.prof.name === (undefined || "" || null)){
      $('#errorname').css({
        display:'block'
      })
    }
    else  if(this.prof.passperfil === (undefined || "" || null)){
      $('#errorpassperfil').css({
        display:'block'
      })
    }
    else{
      this.serperfil.Put(this.prof).
      subscribe((data: any) => {
        this.ngOnInit();
        this. Cancel();
      })
    }
  }
  hiddenErrorMessage(id: string){
    $('#'+id).css({
      display:'none'
    })
  }
}