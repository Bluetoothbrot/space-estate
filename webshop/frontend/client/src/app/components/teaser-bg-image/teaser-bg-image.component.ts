/* Author: mk303 */
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-teaser-bg-image',
  templateUrl: './teaser-bg-image.component.html',
  styleUrls: ['./teaser-bg-image.component.scss']
})
export class TeaserBgImageComponent implements OnInit {

  @Input() data;

  constructor() {}

  ngOnInit() {
  }

}
