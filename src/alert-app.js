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
      }

      .date-time {
        background-color: darkgoldenrod;
        color: white;
        padding: 8px;
        width: 30%;
        flex: 1;
        margin: 0px;
      }

      .alert-message {
        display: none;
        background-color: gold;
        padding: 8px;
        width: 40%;
        margin: 0px;
      }

      .toggle {
        color: white;
        background-color: darkgoldenrod;
        padding: 8px;
        width: 30%;
        margin: 0px;
      }

      .alert-title {
        background-color: gold;
        padding: 8px;
        width: 40%;
        margin: 0px;
      }

      /* Varied Alert types */
      :host([notice]) .alert-message {
        background-color: lightblue;
      }

      :host([notice]) .toggle {
        background-color: darkblue;
      }
      
      :host([notice]) .date-time {
        background-color: darkblue;
      }
      
      :host([notice]) .alert-title {
        background-color: lightblue;
      }

      :host([warning]) .alert-message {
        background-color: gold;
      }

      :host([warning]) .toggle {
        background-color: darkgoldenrod;
      }
      
      :host([warning]) .date-time {
        background-color: darkgoldenrod;
      }

      :host([alert]) .alert-message {
        background-color: lightcoral;
      }

      :host([alert]) .toggle {
        background-color: darkred;
      }
      
      :host([alert]) .date-time {
        background-color: darkred;
      }

      /* open vs close elements */
      :host([open]) .alert-message {
        display: flex;
        width: 80%;
      }

      :host([open]) .date-time {
        width: 10%;
      }

      :host([open]) .toggle {
        width: 10%;
      }

      :host() .
    `;
  }

  toggleAlert() {
    this.open = !this.open;
    console.log(this.open);
  }

  render() {
    return html`
          <div class="alert-wrapper">
            <div class="date-time">${this.date}</div>
            <div class="alert-message" ?open="${this.open}">
              ${this.alertMessage}
            </div>
            <div class="alert-title" ?open="${this.open}">
              ${this.alertTitle}
            </div>
            </details>
            <div class="toggle" ?open="${this.open}" @click="${this.toggleAlert}">
              ${this.open ? "Open" : "Close"} Alert
              <!-- <button id="toggleAlert" class="alertbtn"></button> -->
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