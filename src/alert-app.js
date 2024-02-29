import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class AlertApp extends LitElement {

  static get tag() {
    return 'alert-app';
  }

  constructor() {
    super();

    this.date = "00/00/00";
    this.alertMessage = "This is the message.";
    this.open = false;
    this.alertTitle = "Attention!";
  }

  static get styles() {
    return css`

      /* Base alert styles */
      .alert-wrapper {
        display: flex;
        width: 100%;
        margin: 0px;
        background-color: darkgrey;
      }

      .date-time {
        display: none;
        color: white;
        padding: 32px;
        flex: 1;
        margin: 0px;
      }

      .alert-message {
        display: none;
        padding: 32px;
        margin: 0px;
        transform: skew(-20deg);
      }

      .toggle {
        display: none;
        color: white;
        padding: 32px;
        margin: 0px;
      }

      .alert-title {
        text-align: center;
        background-color: white;
        padding: 32px;
        width: 100%;
        margin: 0px;
      }

      .alert-wrapper .message-wrap {
        display: none;
        transform: skew(20deg);
        background-color: white;
      }

      /* Varied Alert types */
      /* Notices */
      :host([notice]) .alert-wrapper {
        background-color: darkblue;
      }

      :host([notice]) .alert-title {
        background-color: lightblue;
      }

      :host([notice]) .message-wrap {
        background-color: lightblue;
      }

      /* Warnings */
      :host([warning]) .alert-wrapper {
        background-color: darkgoldenrod;
      }

      :host([warning]) .alert-title {
        background-color: gold;
      }

      :host([warning]) .message-wrap {
        background-color: gold;
      }

      /* Alerts */
      :host([alert]) .alert-wrapper {
        background-color: darkred;
      }

      :host([alert]) .alert-title {
        background-color: lightcoral;
      }

      :host([alert]) .message-wrap {
        background-color: lightcoral;
      }

      /* open vs close elements */
      :host([open]) .alert-message {
        display: flex;
        width: 70%;
      }

      :host([open]) .message-wrap {
        display: flex;
        width: 70%;
      }

      :host([open]) .date-time {
        display: flex;
        width: 15%;
      }

      :host([open]) .toggle {
        display: flex;
        width: 15%;
      }

      :host([open]) .alert-title {
        display: none;
      }
    `;
  }

  toggleAlert() {
    this.open = !this.open;
    console.log(this.open);
  }

  render() {
    return html`
          <div class="alert-wrapper">
            <div class="alert-title" ?open="${this.open}" @click="${this.toggleAlert}">
              ${this.alertTitle}
            </div>
            <div class="date-time">${this.date}</div>
            <div class="message-wrap" ?open="${this.open}">
              <div class="alert-message" ?open="${this.open}">
                ${this.alertMessage}
              </div>
            </div>
            <div class="toggle" ?open="${this.open}" @click="${this.toggleAlert}">
              X ${this.open ? "Close" : "Open"} Alert
            </div>
          </div>
    `;
  }

  static get properties() {
    return {
      date: { type: String},
      alertMessage: { type: String, attribute: "alert-message", reflect: true },
      open: { type: Boolean, reflect: true },
      alertTitle: { type: String, attribute: "alert-title" }
    };
  }
}

globalThis.customElements.define(AlertApp.tag, AlertApp);