import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { GlobalFunctionService } from '../Function/global-function.service';

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
  videoslist;
  constructor(private userService: TaskService, private router: Router,
    private gbfuncservice: GlobalFunctionService) {}
  // TODO:hay que llamar la function aca siempre
  ngOnInit() {
    stopPlay();
    Carousel();
    FullScreen();
    this.Probar();
    this.principal = this.Movies[2];
    this.gbfuncservice.loadScript(urljs);
    this.video(dat => {
      this.videoslist = dat;
      debugger;
    });
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
      }
    ];
  }

  Logout() {
    this.userService.logout().subscribe((success) => {
      if (success) {
        this.router.navigate(['/browse']);
      }
    });
  }

   video(callback){
    var API_KEY = '19225679-589718ac01031a964104548e7';
    var URL = "https://pixabay.com/api/videos/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
    $.getJSON(URL, function(data){
    if (parseInt(data.totalHits) > 0)
      callback(data.hits);       
    });
  }
  return(){
    this.router.navigate(['/perfil']);
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
    var v = document.getElementsByTagName('video')[1];
    v.play();
  });

  // $('.modal-close').on('click', function () {
  //   var media = document.getElementsByTagName('video')[1];
  //   media.pause();
  //   let curent = media.currentTime;
  //   media.currentTime = 0;
  //   //  $('.modal').modal();
  //   // $('.modal').hide();
  // });
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

  // $('.play-video-principal').on('click', function () {
  //   var vp = document.getElementsByTagName('video')[0];
  //   vp.play();
  //   $('.stop-video-principal').toggle();
  //   $('.play-video-principal').toggle();
  // });

  // $('.modal-close').on('click', function () {
  //   debugger;
  //   var media = document.getElementsByTagName('video')[1];
  //   media.pause();
  //   let curent = media.currentTime;
  //   media.currentTime = 0;
  //   //  $('.modal').modal();
  //   // $('.modal').hide();
  // });
}

function FullScreen(){

  $("#video-principal-modal").on("dblclick", function(){
    toggleFullScreen();
  });

  document.addEventListener("keydown", function(e) {
    debugger;
    if (e.keyCode == 13) {     
      toggleFullScreen();
    }
  }, false);

  $(document).bind('fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange', function (e) {
    var fullscreenElement = document.fullscreenElement
    if (!fullscreenElement) {
      Block();
    } 
  });
  
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    None();
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      Block();
      document.exitFullscreen(); 
    }
  }

  $("#video-principal-modal").mouseover(function() {
    FedeIn();
  });

  $("#video-principal-modal").mouseleave(function() {
    FedeOut();
  });
}

function FedeOut(){
  $(".DelAdv").fadeOut(3000);
}

function FedeIn(){
  $(".DelAdv").fadeIn();
}

function None(){
  FedeOut();
  $(".btn-flat").css({
    display: "none"
  });
}

function Block(){
  FedeIn();
  $(".btn-flat").css({
    display: "block"
  });
}
