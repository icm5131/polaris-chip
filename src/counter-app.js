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
    }

    static get styles() {
        return css`
            :host {
                display: inline-flex;
                flex-wrap: wrap;
            }

            :host([number="18"]) .counter-number {
                color: royalblue;
            }

            :host([number="21"]) .counter-number {
                color: royalblue;
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
                font-size: 128px;
                margin: 16px;
            }

            .max-hit {
                color: red;
            }

            .min-hit {
                color: green;
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

            button:disabled {
                background-color: grey;
                cursor: not-allowed;
            }
        `;
    }

    onAddButtonClick = () => {
        //if(this.shadowRoot.querySelector('#counter-add').getAttribute('disabled') == null) {
            this.number = Math.min(this.countermax, this.number + 1);
            this.requestUpdate();
        //}
    }

    onSubtractButtonClick = () => {
        //if (this.shadowRoot.querySelector('#counter-subtract').getAttribute('disabled') == null) {
            this.number = Math.max(this.countermin, this.number - 1);
            this.requestUpdate();
        //}
    }

    updated(changedProperties) {
        if (changedProperties.has('number') && this.number == 21) {
          // do your testing of the value and make it rain by calling makeItRain
            this.makeItRain();
        }
      }
      
    makeItRain() {
        import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
            (module) => {
                setTimeout(() => {
                this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
            }, 0);
          }
        );
    }

    render() {
        return html `
            <div class="counter-card">
                <confetti-container id="confetti">
                    <div class="counter-number ${this.number === this.countermax ? 'max-hit' : ''}
                        ${this.number === this.countermin ? 'min-hit' : ''}"
                    >
                        ${this.number}
                    </div>
                    <div class="counter-btn-wrapper">
                        <button class="counter-btn" id="counter-subtract" 
                            @click="${this.onSubtractButtonClick}" ?disabled="${this.countermin === this.number}"
                        >-</button>
                        <button class="counter-btn" id="counter-add" 
                            @click="${this.onAddButtonClick}" ?disabled="${this.countermax === this.number}"
                        >+</button>
                    </div>
                </confetti-container>
            </div>
            
        `;
    }

    static get properties() {
        return {
            number: { type: Number, reflect: true},
            countermax: { type: Number, reflect: true},
            countermin: { type: Number, reflect: true},
        };
    }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);