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

      /* Base alert styles */
      .alert-wrapper {
        display: flex;
        width: 100vw;
        margin: 0px;
        background-color: var(--alertBgColor);
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
        width: 100vw;
        margin: 0px;
      }

      .alert-wrapper .message-wrap {
        display: none;
        transform: skew(20deg);
        background-color: var(--alertMsgColor);
      }

      :host([sticky]) {
        position: fixed;
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
        position: fixed;
        z-index: 100;
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
      }

      :host([open]) .message-wrap {
        display: flex;
        width: 70vw;
      }

      .message-wrap::before {
        content: " ";
        width: 0;
        height: 0;
        position: absolute;
        bottom: 2rem;
        left: -2rem;
        border-left: 35px solid transparent;
        border-right: 0px solid transparent;
      }

      :host([open]) .date-time {
        display: flex;
        width: 15vw;
      }

      :host([open]) .toggle {
        display: flex;
        width: 15vw;
      }

      :host([open]) .alert-title {
        display: none;
      }
    `;
  }

  toggleAlert() {
    this.open = !this.open;
    localStorage.setItem("alert-app-open-state", this.open);
  }

/*   $(window).scroll(function(e){ 
    var $el = $('.fixedElement'); 
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > 200 && !isPositionFixed){ 
      $el.css({'position': 'fixed', 'top': '0px'}); 
    }
    if ($(this).scrollTop() < 200 && isPositionFixed){
      $el.css({'position': 'static', 'top': '0px'}); 
    } 
  }); */

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
      date: { type: String },
      alertMessage: { type: String, attribute: "alert-message", reflect: true },
      open: { type: Boolean, reflect: true },
      alertTitle: { type: String, attribute: "alert-title" }
    };
  }
}

globalThis.customElements.define(AlertApp.tag, AlertApp);