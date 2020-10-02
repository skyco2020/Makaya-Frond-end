import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';
// import {Glide} from '@glidejs/glide';
import Glide, {
  Controls,
  Breakpoints,
} from '@glidejs/glide/dist/glide.modular.esm';
import { DOCUMENT } from '@angular/common';
import * as sld from '../../assets/js/sliderhome.js';
// new Glide('.glide').mount({ Controls, Breakpoints });

declare var $: any;
const urljs = '../../assets/js/sliderhome.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userClaims: any;
  Movies: any;
  principal;
  constructor(private userService: TaskService, private router: Router) {}
  // TODO:hay que llamar la function aca siempre
  ngOnInit() {
    stopPlay();
    this.loadScript();
    Carousel();
    this.Probar();
    this.principal = this.Movies[2];
    // this.GetAllMovie();
    // this.router.navigate(['/home']);
  }
  GetAllMovie() {
    this.userService.GetAllMovie().subscribe((data: any) => {
      this.principal = data[4];
      this.Movies = data;
    });
  }
  Probar() {
    this.Movies = [
      {
        name: 'Vertigo',
        age: 'Alfred Hitchcock, USA 1958',
        description:
          'A former detective with a fear of heights is hired to follow a woman apparently possessed by the past in Alfred Hitchcock’s timeless thriller about obsession.',
        picture: '../../assets/video/agenord.mp4',
      },
      {
        name: 'Citizen Kane',
        age: 'Orson Welles, USA 1941',
        description:
          'Cerbero es un perro con mucha energia, necesita un hogar donde tenga mucho espacio',
        picture: '../../assets/video/VID-20200705-WA0050.mp4',
      },
      {
        name: 'Tokyo Story',
        age: 'Ozu Yasujiro, Japan 1953',
        description:
          'The final part of Yasujiro Ozu’s loosely connected ‘Noriko’ trilogy is a devastating story of elderly grandparents brushed aside by their self-involved family.',
        picture: '../../assets/video/agenord.mp4',
      },
      {
        name: 'TOUSSAINT LOUVERTURE',
        age: 'May 2013',
        description:
          'Toussaint L’Ouverture Mini-Series, France. Rococopunk is – like Dieselpunk – a sibling of Steampunk, set in the earlier Renaissance era, primarily in the high-class French community of the time.',
        picture: '../../assets/video/Tropical.mp4',
      },
      {
        name: 'Heading South',
        age: 'Heading South 2005',
        description:
          'Three female tourists have their eyes opened while visiting the poverty-stricken and dangerous world of 1980s Haiti.',
        picture: '../../assets/video/VID-20200705-WA0050.mp4',
      },
      {
        name: 'Voodoo Possession',
        age: 'Voodoo Possession (2014)',
        description:
          'For believers and skeptics alike, there is nothing in this world or the next to rival the relentless evil of a Voodoo Possession.',
        picture: '../../assets/video/agenord.mp4',
      },
      {
        name: " Pluie d'espoir",
        age: 'Jacque Roc 2005',
        description:
          "Pluie d'Espoir is a movie based on the story of a young peasant named Toussaint from the Haitian Provinces. His instinct for survival is strong.",
        picture: '../../assets/video/VID-20200705-WA0050.mp4',
      },
      {
        name: 'Lakay',
        age: 'Brian T. Lee 2009',
        description:
          'A powerful and engaging social issue documentary investigating the living situations and treatment of Haitian immigrants and their children in the Bahamas.',
        picture: '../../assets/video/VID-20200705-WA0050.mp4',
      },
      // {
      //   name: 'La Règle du jeu',
      //   age: 'Jean Renoir, France 1939',
      //   description:
      //     'Made on the cusp of WWII, Jean Renoir’s satire of the upper-middle classes was banned as demoralising by the French government for two decades after its release.',
      //   picture: '../../assets/img/regle-du-jeu-la-1939.jpg',
      // },
      // {
      //   name: 'The Searchers',
      //   age: 'John Ford, USA 1956',
      //   description:
      //     'John Ford created perhaps the greatest of all westerns with this tale of a Civil War veteran doggedly hunting the Comanche who have kidnapped his niece.',
      //   picture: '../../assets/img/searchers-e1956.jpg',
      // },
      // {
      //   name: '2001: A Space Odyssey',
      //   age: 'Stanley Kubrick, UK/USA 1968',
      //   description:
      //     'Stanley Kubrick took science fiction cinema in a grandly intelligent new direction with this epic story of man’s quest for knowledge.',
      //   picture: '../../assets/img/space-odyssey-1968.jpg',
      // },
      // {
      //   name: 'Sunrise: A Song of Two Humans',
      //   age: 'F.W. Murnau, USA 1927',
      //   description:
      //     'Lured to Hollywood by producer William Fox, German Expressionist filmmaker F.W. Murnau created one of the silent cinema’s last and most luminous masterpieces.',
      //   picture: '../../assets/img/sunrise-1927.jpg',
      // },
    ];
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
  Logout() {
    this.userService.logout().subscribe((success) => {
      debugger;
      if (success) {
        this.router.navigate(['/browse']);
      }
    });
  }
}

function Carousel() {
  // tslint:disable-next-line: variable-name
  let index_first = 0;
  // tslint:disable-next-line: variable-name
  let index_option = 0;
  // tslint:disable-next-line: only-arrow-functions
  $(document).ready(function () {
    $('.carousel').carousel({
      duration: 1,
      dist: 10,
      shift: 0,
      padding: 0,
      fullWidth: true,
      noWrap: false,
      numVisible: 3,
    });

    // tslint:disable-next-line: only-arrow-functions
    $('.dramanext').on('click', function () {
      if (index_first <= $('.first').length) {
        $('.first').carousel('next');
        index_first++;
      }
    });

    // tslint:disable-next-line: only-arrow-functions
    $('.dramaprev').on('click', function () {
      if (index_first !== 0) {
        $('.first').carousel('prev');
        index_first--;
      }
    });

    // tslint:disable-next-line: only-arrow-functions
    $('.optnext').on('click', function () {
      if (index_option <= $('.option').length) {
        $('.option').carousel('next');
        index_option++;
      }
    });

    // tslint:disable-next-line: only-arrow-functions
    $('.optprev').on('click', function () {
      if (index_option !== 0) {
        $('.option').carousel('prev');
        index_option--;
      }
    });
  });

  $(document).ready(function () {
    $('.modal').modal({
      backdrop: 'static',
      keyboard: false,
    });
  });

  $('.play').on('click', function () {
    debugger;
    var v = document.getElementsByTagName('video')[1];
    v.play();
  });

  $('.modal-close').on('click', function () {
    debugger;
    var media = document.getElementsByTagName('video')[1];
    media.pause();
    let curent = media.currentTime;
    media.currentTime = 0;
    //  $('.modal').modal();
    // $('.modal').hide();
  });
}

function stopPlay() {
  $('.stop-principal').on('click', function () {
    var v = document.getElementsByTagName('video')[1];
    v.parentElement;
    v.pause();
    $('.stop-principal').toggle();
    $('.play-principal').toggle();
    var p = document.getElementsByClassName('stop-principal');
    console.log(p);
  });

  $('.play-principal').on('click', function () {
    var v = document.getElementsByTagName('video')[1];
    v.play();
    $('.stop-principal').toggle();
    $('.play-principal').toggle();
  });

  $('.stop-video-principal').on('click', function () {
    var vp = document.getElementsByTagName('video')[0];
    vp.pause();
    $('.stop-video-principal').toggle();
    $('.play-video-principal').toggle();
  });

  $('.play-video-principal').on('click', function () {
    var vp = document.getElementsByTagName('video')[0];
    vp.play();
    $('.stop-video-principal').toggle();
    $('.play-video-principal').toggle();
  });

  $('.modal-close').on('click', function () {
    debugger;
    var media = document.getElementsByTagName('video')[1];
    media.pause();
    let curent = media.currentTime;
    media.currentTime = 0;
    //  $('.modal').modal();
    // $('.modal').hide();
  });
}
