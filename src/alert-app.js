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
  }

  static get styles() {
    return css`
          :host([notice]) .alert-message{
            background-color: lightblue;
          }

          :host([notice]) .toggle{
            background-color: darkblue;
          }
          
          :host([notice]) .date-time{
            background-color: darkblue;
          }

          :host([warning]) .alert-message{
            background-color: gold;
          }

          :host([warning]) .toggle{
            background-color: darkgoldenrod;
          }
          
          :host([warning]) .date-time{
            background-color: darkgoldenrod;
          }

          :host([alert]) .alert-message{
            background-color: lightcoral;
          }

          :host([alert]) .toggle{
            background-color: darkred;
          }
          
          :host([alert]) .date-time{
            background-color: darkred;
          }

          :host([])

          .alert-wrapper {
            display: flex;
            width: 100%;
            margin: 0px;
          }

          .date-time {
            background-color: darkgoldenrod;
            color: white;
            padding: 8px;
            width: 10%;
            flex: 1;
            margin: 0px;
          }

          .alert-message {
            background-color: gold;
            padding: 8px;
            width: 80%;
            margin: 0px;
          }

          .toggle {
            color: white;
            background-color: darkgoldenrod;
            padding: 8px;
            width: 10%;
            margin: 0px;
          }
    `;
  }

  toggleAlert() {
    this.open = !this.open;
  }

  render() {
    return html`
          <div class="alert-wrapper">
            <div class="date-time">${this.date}</div>
            <div class="alert-message">
              <slot>${this.alertMessage}</slot>
            </div>
            </details>
            <div class="toggle" ?open="${this.open}" @click="${this.toggleAlert}">X</div>
          </div>
    `;
  }

  static get properties() {
    return {
      date: { type: String },
      alertMessage: { type: String, attribute: "alert-message" },
      open: { type: Boolean },
    };
  }
}

globalThis.customElements.define(AlertApp.tag, AlertApp);