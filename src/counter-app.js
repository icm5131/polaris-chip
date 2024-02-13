import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {

    static get tag() {
        return 'counter-app';
    }

    constructor() {
        super();
        this.counter = 0;
        this.countermax = 10;
        this.countermin = 0;
    }

    static get styles() {
        return css`
            :host {
                display: inline-flex;
                flex-wrap: wrap;
            }

            .counter-card {
                width: 200px;
                padding: 16px;
                margin: 32px;
                border: 4px solid royalblue;
                border-radius: 8px;
                background-color: navy;
                color: white;
                text-align: center;
            }

            .counter-number-wrapper {
                border: 2px solid royalblue;
                border-radius: 8px;
                background-color: hotpink;
                font-size: 64px;
                margin: 16px;
            }

            .counter-18 {
                color: royalblue;
            }

            .counter-21 {
                color: royalblue;
            }

            .counter-btn {
                width: 64px;
                margin: 4px;
                background-color: hotpink;
                border: 1px solid royalblue;
                border-radius: 4px;
            }

            .counter-btn:focus,
            .counter-btn:hover {
                background-color: royalblue;
            }
        `;
    }

    render() {
        return html`
            <div class="counter-card">
                <div class="counter-number-wrapper">
                    <p class="counter-number">
                        ${this.counter}
                    </p>
                </div>
                <div class="counter-btn-wrapper">
                    <button class="counter-btn" id="counter-add">+</button>
                    <button class="counter-btn" id="counter-subtract">-</button>
                </div>
            </div>
        `;
    }

    static get properties() {
        return {
            counter: { type: Number, reflect: true, attribute: "counter"},
            countermax: { type: Number, reflect: true, attribute: "counter-max"},
            countermin: { type: Number, reflect: true, attribute: "counter-min"},
        };
    }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);