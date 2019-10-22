/* Author: mk303 */
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-h2-text',
  templateUrl: './h2-text.component.html',
  styleUrls: ['./h2-text.component.scss']
})
export class H2TextComponent implements OnInit {

  @Input() data = {
    headline: 'No value set',
    text: 'No value set'
  };

  constructor() {}

  ngOnInit() {
  }

}
