import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {

    static get tag() {
        return 'counter-app';
    }

    constructor() {
        super();
    }

    static get styles() {
        return css`
            :host {
                display: inline-flex;
                flex-wrap: wrap;
            }

            .counter-card {
                width: 150px;
                padding: 16px;
                margin: 32px;
                border: 4px solid royalblue;
                border-radius: 8px;
                background-color: navy;
                color: white;
                text-align: center;
                font-size: 32px;
            }

            .counter-btn {
                width: 32px;
            }
        `;
    }

    render() {
        return html`
            <div class="counter-card">
                <p class="counter-number">
                    21
                </p>
                <div class="counter-btn-wrapper">
                    <button class="counter-btn" id="counter-add">+</button>
                    <button class="counter-btn" id="counter-subtract">-</button>
                </div>
            </div>
        `;
    }

    static get properties() {
        return {

        };
    }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);