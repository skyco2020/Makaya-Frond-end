import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { PerfilService } from '../../services/perfil.service';

import decode from 'jwt-decode';

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
    });
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
