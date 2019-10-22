/* Author: mk303 */
import {Injectable} from '@angular/core';
import {MessageLevel} from "../helpers/messageLevel";

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  constructor() { }

  public message: string;
  public show: boolean;
  public messageLevel: MessageLevel = MessageLevel.Info;

  /**
   * Calls showMessage to show the provided string as message.
   * Sets the current message level to Success.
   * @param message to show
   */
  showSuccessMessage(message: string): void {
    // Set message level to success and show message
    this.messageLevel = MessageLevel.Success;
    this.showMessage(message);
  }

  /**
   * Calls showMessage to show the provided string as message.
   * Sets the current message level to Info.
   * @param message to show
   */
  showInfoMessage(message: string): void {
    // Set message level to info and show message
    this.messageLevel = MessageLevel.Info;
    this.showMessage(message);
  }

  /**
   * Calls showMessage to show the provided string as message.
   * Sets the current message level to Error.
   * @param message to show
   */
  showErrorMessage(message: string): void {
    // Set message level to error and show message
    this.messageLevel = MessageLevel.Error;
    this.showMessage(message);
  }

  /**
   * Sets the provided message as the current message and trigger the animation to show the message.
   * @param message to show
   */
  private showMessage(message: string): void {
    console.log('Show message: '+message);

    // Set message
    this.message = message;

    // Trigger animation and show message
    this.show = true;

    // Trigger animation and hide message after 5s
    setTimeout(() => {
      this.show = false;
      console.log('Hide message');
    }, 5000,);
  }

}
