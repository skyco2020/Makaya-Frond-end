import { Component, OnInit } from '@angular/core';
import { SkycoService } from '../services/skyco.service';
import { TaskService } from '../services/task.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { SkycoUser } from '../Classes/skyco-user';

declare var $: any;
const urljs = '../../assets/js/user.js';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  isLoginError = false;
  user: SkycoUser;
  countryid = 0;
  provinceid = 0;
  cityid = 0;
  Movies: any;
  constructor(
    private userService: SkycoService,
    private taskser: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    localStorage.removeItem('mail');
    this.taskser.doLogoutUser();
    this.loadScript();
    this.GetMovies();
    // this.Probar();
  }
  GetMovies() {
    this.userService.GetMovie().subscribe((data: any) => {
      this.Movies = data;
    });
  }
  loadScript() {
    const node = document.createElement('script');
    node.src = urljs;
    node.type = 'text/javascript';
    node.async = true;
    // tslint:disable-next-line: deprecation
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  Probar() {
    this.Movies = [
      {
        name: 'Vertigo',
        age: 'Alfred Hitchcock, USA 1958',
        description:
          'A former detective with a fear of heights is hired to follow a woman apparently possessed by the past in Alfred Hitchcock’s timeless thriller about obsession.',
        picture: '../../assets/img/vertigo.jpg',
      },
      {
        name: 'Citizen Kane',
        age: 'Orson Welles, USA 1941',
        description:
          'Cerbero es un perro con mucha energia, necesita un hogar donde tenga mucho espacio',
        picture: '../../assets/img/citizen-kane.jpg',
      },
      {
        name: 'Tokyo Story',
        age: 'Ozu Yasujiro, Japan 1953',
        description:
          'The final part of Yasujiro Ozu’s loosely connected ‘Noriko’ trilogy is a devastating story of elderly grandparents brushed aside by their self-involved family.',
        picture: '../../assets/img/tokyo-story-1953.jpg',
      },
      {
        name: 'TOUSSAINT LOUVERTURE',
        age: 'May 2013',
        description:
          'Toussaint L’Ouverture Mini-Series, France. Rococopunk is – like Dieselpunk – a sibling of Steampunk, set in the earlier Renaissance era, primarily in the high-class French community of the time.',
        picture: '../../assets/img/TOUSSAINT_LOUVERTURE.jpg',
      },
      {
        name: 'Heading South',
        age: 'Heading South 2005',
        description:
          'Three female tourists have their eyes opened while visiting the poverty-stricken and dangerous world of 1980s Haiti.',
        picture: '../../assets/img/Heading_South.jpg',
      },
      {
        name: 'Voodoo Possession',
        age: 'Voodoo Possession (2014)',
        description:
          'For believers and skeptics alike, there is nothing in this world or the next to rival the relentless evil of a Voodoo Possession.',
        picture: '../../assets/img/Voodoo.jpg',
      },
      {
        name: " Pluie d'espoir",
        age: 'Jacque Roc 2005',
        description:
          "Pluie d'Espoir is a movie based on the story of a young peasant named Toussaint from the Haitian Provinces. His instinct for survival is strong.",
        picture: '../../assets/img/Pluie _d_espoir.jpg',
      },
      {
        name: 'Lakay',
        age: 'Brian T. Lee 2009',
        description:
          'A powerful and engaging social issue documentary investigating the living situations and treatment of Haitian immigrants and their children in the Bahamas.',
        picture: '../../assets/img/Lakay.jpg',
      },
      {
        name: 'La Règle du jeu',
        age: 'Jean Renoir, France 1939',
        description:
          'Made on the cusp of WWII, Jean Renoir’s satire of the upper-middle classes was banned as demoralising by the French government for two decades after its release.',
        picture: '../../assets/img/regle-du-jeu-la-1939.jpg',
      },
      {
        name: 'The Searchers',
        age: 'John Ford, USA 1956',
        description:
          'John Ford created perhaps the greatest of all westerns with this tale of a Civil War veteran doggedly hunting the Comanche who have kidnapped his niece.',
        picture: '../../assets/img/searchers-e1956.jpg',
      },
      {
        name: '2001: A Space Odyssey',
        age: 'Stanley Kubrick, UK/USA 1968',
        description:
          'Stanley Kubrick took science fiction cinema in a grandly intelligent new direction with this epic story of man’s quest for knowledge.',
        picture: '../../assets/img/space-odyssey-1968.jpg',
      },
      {
        name: 'Sunrise: A Song of Two Humans',
        age: 'F.W. Murnau, USA 1927',
        description:
          'Lured to Hollywood by producer William Fox, German Expressionist filmmaker F.W. Murnau created one of the silent cinema’s last and most luminous masterpieces.',
        picture: '../../assets/img/sunrise-1927.jpg',
      },
    ];
  }

  OnSubmit(userName) {
    if (userName === '') {
      $('.error_username').html('Enter your email');
      this.isLoginError = true;
    } else if (this.isValid(userName) === false) {
      $('.error_username').html('Mail invalid');
      this.isLoginError = true;
    } else {
      this.user = new SkycoUser();
      this.user.CreatedBy = userName;
      this.user.EmailAddress = userName;
      this.user.CreatedBy = 'Automatic';
      this.user.CreatedAt = new Date();
      this.user.Voided = 1;

      this.userService.Post(this.user).subscribe(
        (data: any) => {
          if (data.toString().length !== 0) {
            localStorage.setItem('IdUser', data.UserId);
            localStorage.setItem('mail', userName);
            this.router.navigate(['/registerpayment']);
          }
        },
        (err: HttpErrorResponse) => {
          if (err.error.ErrorDescription === 'Welcome to Sky co') {
            localStorage.setItem('IdUser', err.error.ErrorCode);
            localStorage.setItem('mail', userName);
            localStorage.setItem('back', 'Welcome to Sky co');
            this.router.navigate(['/registerpayment']);
          } else if (err.error.ErrorDescription === 'Welcome Back at Sky co') {
            localStorage.setItem('back', 'Welcome Back at Sky co');
            localStorage.setItem('IdUser', err.error.ErrorCode);
            localStorage.setItem('mail', userName);
            this.router.navigate(['/account']);
          } else if (
            err.error.ErrorDescription ===
            'There is already an account with this email'
          ) {
            localStorage.setItem('IdUser', err.error.ErrorCode);
            localStorage.setItem('mail', userName);
            this.router.navigate(['/account']);
          }
        }
      );
    }
  }

  HideError() {
    $('.error_username').html('');
    this.isLoginError = false;
  }
  isValid(email) {
    const phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    const digits = email.replace(/\D/g, '');
    const phone = phoneRe.test(digits);

    const cad = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = cad.test(email);
    // if (cad.test(email) === false){
    if (!result) {
      $('.input_e_mail').val('');
      return false;
    } else {
      return true;
    }
    // }
    // else{
    //   return true;
    // }
  }
}
