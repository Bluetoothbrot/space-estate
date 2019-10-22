import { trigger, animate, transition, style, query } from '@angular/animations';

export const PageTransition =

  trigger('pageTransition', [

    transition( '* => *', [
      query(':leave', style({
        position: 'absolute',
        left: 0,
        right: 0,
        opacity: 1,
        transform: 'translateY(0)'
      }),{ optional: true }),
      query(':enter', style({
        position: 'absolute',
        left: 0,
        right: 0,
        opacity: 0,
        transform: 'translateY(3%)'
      }),{ optional: true }),
      query(':leave', animate('0.25s ease-out', style({ opacity: 0, transform: 'translateY(-3%)' })), { optional: true }),
      query(':enter', animate('0.25s ease-in', style({ opacity: 1, transform: 'translateY(0%)' })), { optional: true })
    ])

  ]);
