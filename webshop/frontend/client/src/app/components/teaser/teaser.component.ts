/* Author: jm114 */
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-teaser',
  styleUrls: ['./teaser.component.scss'],
  templateUrl: './teaser.component.html'
})
export class TeaserComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
