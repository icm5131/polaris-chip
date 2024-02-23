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

        this.alertMessage = "This is the message.";
    }

    static get styles() {
        return css`
          .alert-wrapper {
            margin: 32px;
            padding: 8px;
          }

          .date-time {
            background-color: darkorange;
            color: lightgray;
            padding: 8px;
          }

          .alert-message {
            background-color: orange;
            padding: 8px;
          }
    `;
    }


    render() {
        return html`
          <div class="alert-wrapper">
            <div class="date-time">0000 monday 1 2024</div>
            <div class="alert-message">${this.alertMessage}</div>
            <div class="close"></div>
          </div>
    `;
    }

    static get properties() {
        return {
            alertMessage: { type: String, attribute: "alert-message"},
        };
    }
}

globalThis.customElements.define(AlertApp.tag, AlertApp);