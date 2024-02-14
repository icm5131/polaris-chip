import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {

    static get tag() {
        return 'counter-app';
    }

    constructor() {
        super();

        this.number = 0;
        this.countermax = 10;
        this.countermin = 0;

        this.attachShadow({ mode: "open"});
        this.render;
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

            .counter-number {
                border: 2px solid royalblue;
                border-radius: 8px;
                background-color: hotpink;
                font-size: 64px;
                margin: 16px;
            }

            .counter-18-21 {
                color: royalblue;
            }
            
            .counter-min {
                color: green;
            }

            .counter-max {
                color: red;
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
        this.shadowRoot.innerHTML = `
            <div class="counter-card">
                <div class="counter-number">
                    ${this.number}
                </div>
                <div class="counter-btn-wrapper">
                    <button ?disabled="${this.countermin === this.number}" class="counter-btn" id="counter-subtract">-</button>
                    <button class="counter-btn" id="counter-add" ?disabled="${this.countermax === this.number}">+</button>
                </div>
            </div>
        `;

        this.shadowRoot.querySelector("#counter-add").addEventListener("click", this.onAddButtonClick);
        this.shadowRoot.querySelector("#counter-subtract").addEventListener("click", this.onSubtractButtonClick);
        this.shadowRoot.querySelector(".counter-card").addEventListener("click", this.numberAt1821);
        this.shadowRoot.querySelector(".counter-card").addEventListener("click", this.numberAtMinMax);
    }

    onAddButtonClick = () => {
        if(this.shadowRoot.querySelector('#counter-add').getAttribute('disabled') == null) {
            this.number = Math.min(this.countermax, this.number + 1);
            console.log('add');
            this.render();
        }
    }

    onSubtractButtonClick = () => {
        if (this.shadowRoot.querySelector('#counter-subtract').getAttribute('disabled') == null) {
            this.number = Math.max(this.countermin, this.number - 1);
            console.log('subtract');
            this.render();
        }
    }

    numberAt1821 = () => {
        if(this.number === 18 || this.number === 21) {
            this.shadowRoot.querySelector('.counter-number').classList.add('counter-18-21');
        }
    }

    numberAtMinMax = () => {
        if(this.number === this.countermin) {
            this.shadowRoot.querySelector('.counter-number').classList.add('counter-min');
        }
        if(this.number === this.countermax) {
            this.shadowRoot.querySelector('.counter-number').classList.add('counter-max');
        }
    }

    static get properties() {
        return {
            number: { type: Number, reflect: true, attribute: "counter"},
            countermax: { type: Number, reflect: true, attribute: "max"},
            countermin: { type: Number, reflect: true, attribute: "min"},
        };
    }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);