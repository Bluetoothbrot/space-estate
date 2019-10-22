/* Author: mk303 */
import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MessageService} from "../../services/message.service";
import {MessageLevel} from "../../helpers/messageLevel";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations: [
    trigger('openClose', [

      state('openState', style({
        transform: 'translateY(0%)',
        opacity: '1',
        visibility: 'visible'
      })),

      state('closedState', style({
        transform: 'translateY(-100%)',
        opacity: '0',
        visibility: 'hidden'
      })),

      transition('openState => closedState', [
        animate('0.25s')
      ]),

      transition('closedState => openState', [
        animate('0.25s')
      ]),
    ])
  ]
})

export class MessageComponent {

  constructor(public messageService: MessageService) { }

  messageLevel = MessageLevel;

}
