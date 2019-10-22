/* Author: mk303 */
import {Component, Input, OnInit} from '@angular/core';
import {HeadlineText, HeadlineTextAdapter} from "../../models/headline-text";

@Component({
  selector: 'app-no-items-added-to-order',
  templateUrl: './no-items-added-to-order.component.html',
  styleUrls: ['./no-items-added-to-order.component.scss']
})
export class NoItemsAddedToOrderComponent implements OnInit {

  @Input() data: HeadlineText;

  constructor() { }

  ngOnInit() {

  }

}
