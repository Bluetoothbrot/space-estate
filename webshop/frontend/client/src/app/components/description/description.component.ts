/* Author: mk303, jm114 */
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-description',
  styleUrls: ['./description.component.scss'],
  template: '<section *ngIf="data != null" [ngStyle]="{ \'background-image\': \'url(\' + data.image + \')\'}">' +
              '<div class="narrow-wrapper">\n' +
              '  <h1>{{data.headline}}</h1>\n' +
              '  <p>{{data.text}}</p>\n' +
              '  <app-button [buttonText]="data.button" [ngClass]="\'description\'" routerLink="/products"></app-button>' +
              '</div>' +
            '</section>'
})
export class DescriptionComponent implements OnInit {

  @Input() data;

  constructor() {}

  ngOnInit() {
  }

}
