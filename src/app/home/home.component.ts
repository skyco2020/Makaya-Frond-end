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
  constructor(private userService: TaskService, private router: Router) {}
  // TODO:hay que llamar la function aca siempre
  ngOnInit() {
    playStop();
    mut();
    let role = this.userService.getUserRole().toLowerCase();
    if (role === 'user'.toLowerCase()) {
      this.loadScript();
      Carousel();
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/error']);
    }
  }
  public loadScript() {
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
    var v = document.getElementsByTagName('video')[0];
    v.play();
  });

  $('.modal-close').on('click', function () {
    debugger;
    var media = document.getElementsByTagName('video')[0];
    media.pause();
    let curent = media.currentTime;
    media.currentTime = 0;
    //  $('.modal').modal();
    // $('.modal').hide();
  });
}
function mut() {
  $('.muted-video').prop('muted', true);
}
function playStop() {
  $('.fa-stop-circle').click(function () {
    $('.fa-play').toggle();
    $('.fa-stop-circle').toggle();
    $('#video-principal').pause();
  });
  $('.fa-play').click(function () {
    $('.fa-play').toggle();
    $('.fa-stop-circle').toggle();
    $('#video-principal').play();
  });
}
