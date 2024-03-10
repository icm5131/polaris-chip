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

    this.alertDate = "00/00/00";

    this.alertMessage = "SOMETHING IS GOING ON READ THIS FIRST WHILE YOU ARE HERE";

    this.open = true;
    if (localStorage.getItem('alert-app-open-state') == "false") {
      this.open = false;
    }

    this.alertTitle = "Attention!";

    this.sticky = false;
  }

  static get styles() {
    return css`

      button {
        border: hidden;
        font-size: 16px;
        background-color: transparent
      }

      /* Base alert styles */
      .alert-wrapper {
        display: flex;
        width: 100vw;
        margin: 0px;
        background-color: var(--alertDefaultBgColor);
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
        display: flex;
        color: black;
        padding: 32px;
        margin: 0px;
        background-color: white;
      }

      .alert-title {
        text-align: center;
        background-color: white;
        padding: 32px;
        width: 100vw;
        margin: 0px;
        font-size: 32px;
      }

      .alert-icon {
        height: 3.35rem;
        position: relative;
        stroke: black;
      }

      .alert-wrapper .message-wrap {
        display: none;
        transform: skew(20deg);
        background-color: var(--alertDefaultMsgColor);
      }

      .message-wrap:before {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        bottom: 2rem;
        left: -2rem;
        border-left: 35px solid transparent;
        border-right: 0px solid transparent;
        border-bottom: 25px solid var(--alertDefaultMsgColor);
      }

      :host([sticky]) .fixed{
        position: sticky;
        top: 0px;
        z-index: 100px;
      }

      .toggle-button:focus,
      .toggle-button:hover {
        border: 2px dashed black;
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

      :host([notice]) .toggle {
        background-color: lightblue;
        color: black;
      }

      :host([notice]) .alert-wrapper:before {
        border-bottom: 25px solid lightblue;
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

      :host([warning]) .toggle {
        background-color: gold;
        color: black;
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

      :host([alert]) .toggle {
        background-color: lightcoral;
        color: black;
      }

      /* open vs close elements */
      :host([open]) .alert-message {
        display: flex;
      }

      :host([open]) .message-wrap {
        display: flex;
        width: 70vw;
      }

      :host([open]) .date-time {
        display: flex;
        width: 15vw;
      }

      :host([open]) .toggle {
        display: flex;
        width: 15vw;
        background-color: transparent;
      }

      :host([open]) .toggle .toggle-button {
        color: white;
      }

      :host([open]) .alert-title {
        display: none;
      }

      :host([sticky]) .alert-wrapper {
        position: sticky;
        top: 0;
      }
    `;
  }

  toggleAlert() {
    this.open = !this.open;
    localStorage.setItem("alert-app-open-state", this.open);
  }

  render() {
    return html`
      <div class="alert-wrapper">
        <div class="alert-title" ?open="${this.open}" @click="${this.toggleAlert}">
          <svg class="alert-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 82 82">
            <g transform="translate(-350.099 -428.714)">
              <g transform="translate(350.099 428.714)" fill="none" stroke-width="6">
                <circle cx="41" cy="41" r="41" stroke="none"></circle>
                <circle cx="41" cy="41" r="38" fill="none"></circle>
               </g>
               <g transform="translate(384.41 448.566)">
                <rect width="10.381" height="7.786" transform="translate(0.919 34.336)"></rect>
                <path d="M6520.672,2327.554h-5.854l-3.21-23.669V2299.2h11.81v4.681Z" transform="translate(-6511.607 -2299.203)"></path>
              </g>
            </g>
          </svg>
          ${this.alertTitle}
        </div>
        <div class="date-time">${this.alertDate}</div>
        <div class="message-wrap" ?open="${this.open}">      
          <div class="alert-message" ?open="${this.open}">
            <slot>${this.alertMessage}</slot>
          </div>
        </div>
        <div class="toggle" ?open="${this.open}" @click="${this.toggleAlert}">
          <button class="toggle-button">
            ${this.open ? "X Close" : "^ Open"} Alert
          </button>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      alertDate: { type: String, attribute: "alert-date", reflect: true },
      alertMessage: { type: String, attribute: "alert-message", reflect: true },
      open: { type: Boolean, reflect: true },
      alertTitle: { type: String, attribute: "alert-title" },
      sticky: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(AlertApp.tag, AlertApp);