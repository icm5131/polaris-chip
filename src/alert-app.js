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

    this.status = "none";
  }

  static get styles() {
    return css`
      :host([status="none"]) {
        --darkBg: darkgrey;
        --lightBg: white;
        --textColor: white;
      }
      /* Varied Alert types */
      /* Notices */
      :host([status="notice"]) {
        --darkBg: darkblue;
        --lightBg: lightblue;
        --textColor: black;
      }

      /* Warnings */
      :host([status="warning"]) {
        --darkBg: darkgoldenrod;
        --lightBg: gold;
        --textColor: black;
      }

      /* Alerts */
      :host([status="alert"]) {
        --darkBg: darkred;
        --lightBg: lightcoral;
        --textColor: black;
      }

      button {
        border: hidden;
        font-size: 24px;
        background-color: transparent
      }

      /* Base alert styles */
      .alert-wrapper {
        display: flex;
        width: 100vw;
        margin: 0px;
        background-color: var(--darkBg);
      }

      .date-time {
        display: none;
        color: white;
        padding: 32px;
        flex: 1;
        margin: 0px;
        font-size: 24px;
      }

      .alert-message {
        display: none;
        padding: 32px;
        margin: 0px;
        transform: skew(-20deg);
      }

      .toggle {
        display: flex;
        padding: 32px;
        margin: 0px;
        background-color: var(--lightBg);
      }

      .alert-title {
        text-align: center;
        background-color: var(--lightBg);
        padding: 32px;
        width: 100vw;
        margin: 0px;
        font-size: 32px;
      }

      .alert-icon {
        height: 3.35rem;
        position: relative;
        stroke: black;
        padding: 16px;
      }

      .alert-wrapper .message-wrap {
        display: none;
        transform: skew(20deg);
        background-color: var(--lightBg);
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
        border-bottom: 25px solid var(--lightBg);
      }

      .toggle-button:focus,
      .toggle-button:hover {
        border: 2px dashed black;
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
        z-index: 100;
      }

      @media (max-width: 800px) {
        .message-wrap:before {
          display:none;
        }

        .alert-title {
          font-size: 16px;
          padding: 8px;
        }

        .toggle {
          padding: 8px;
        }

        .alert-icon {
          transform: scale(50%);
        }

        .toggle-button {
          font-size: 16px;
        }

        .date-time {
          padding: 8px;
          font-size: 16px;
        }

        .alert-message {
          padding: 8px;
        }

        :host([open]) .alert-wrapper{
          display: block;
        }

        :host([open]) .alert-message {
          transform: skew(0deg);
        }

        :host([open]) .message-wrap {
          width: 100vw;
          transform: skew(0deg);
        }

        :host([open]) .date-time {
          width: 50vw;
        }

        :host([open]) .toggle {
          width: 50vw;
          background-color: transparent;
        }
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
      sticky: { type: Boolean, reflect: true },
      status: { type: String, reflect: true }
    };
  }
}

globalThis.customElements.define(AlertApp.tag, AlertApp);