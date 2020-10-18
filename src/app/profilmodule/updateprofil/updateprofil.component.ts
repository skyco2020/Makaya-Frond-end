import { Component, OnInit } from '@angular/core';
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
    trye();
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
    $('#name').val(profil.name);
    $('#idprofil').val(profil.idPerfil);
    $('#complete').val(profil.complete)
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

      this.serperfil.Put(prof).
      subscribe((data: any) => {
        this.ngOnInit();
        this. Cancel();
      })
    }
  }
}
function trye() {
  debugger;
  //  const email = document.querySelector("profile-user");
  // $(".edit").on("click", function(){
  //   debugger;
  // })
  // document.querySelector('#edit').addEventListener('click', function (e) {
  //   debugger;
  //   // alert(this.getAttribute('data-id'));
  //   document.getElementById('profiles').style.display = 'none';
  //   document.getElementById('modal').style.height = '100vh!important';
  //   document.getElementById('modal').style.width = '100%!important';
  //   document.getElementById('modal').style.position = 'absolute';
  // });
}
