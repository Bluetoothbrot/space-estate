import {AfterViewInit, Component} from '@angular/core';
import anime from 'animejs/lib/anime.es';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements AfterViewInit {

  constructor(private router: Router) { }

  ngAfterViewInit() {

    anime.timeline({
      duration: 7000
    }).add({
      targets: '.astro',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInSine',
      duration: 2000,
    }).add({
      targets: '.astro',
      easing: 'easeInSine',
      duration: 3000,
      fill: 'rgba(68,68,68, .8)',
    },'-=2000').add({
      targets: '.horizon',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeOutSine',
      duration: 2000,
    },'-=2500').add({
      targets: '.horizon',
      easing: 'easeOutSine',
      duration: 1000,
      fill: 'rgba(68,68,68, 1)',
    },'-=500').add({
      targets: '.slogan',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInSine',
      duration: 4000,
    },'-=2000').add({
      targets: '.slogan',
      easing: 'easeInSine',
      duration: 1000,
      fill: '#49A1EB',
    },'-=3000');

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 5000);

  }

}
