/* Author: mk303 */
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-h1-text',
  templateUrl: './h1-text.component.html',
  styleUrls: ['./h1-text.component.scss']
})
export class H1TextComponent implements OnInit {

  @Input() data = {
    headline: 'No value set',
    text: 'No value set'
  };

  constructor() {}

  ngOnInit() {
  }

}
