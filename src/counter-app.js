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

            button[disabled] {
                display: none;
            }
        `;
    }

    onAddButtonClick = () => {
        //if(this.shadowRoot.querySelector('#counter-add').getAttribute('disabled') == null) {
            this.number = Math.min(this.countermax, this.number + 1);
            this.render();
        //}
    }

    onSubtractButtonClick = () => {
        //if (this.shadowRoot.querySelector('#counter-subtract').getAttribute('disabled') == null) {
            this.number = Math.max(this.countermin, this.number - 1);
            this.render();
        //}
    }

    updated(changedProperties) {
        if (changedProperties.has('number') && this.number == 21) {
          // do your testing of the value and make it rain by calling makeItRain
            this.makeItRain();
        }
      }
      
    makeItRain() {
        // this is called a dynamic import. It means it won't import the code for confetti until this method is called
        // the .then() syntax after is because dynamic imports return a Promise object. Meaning the then() code
        // will only run AFTER the code is imported and available to us
        import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
            (module) => {
                // This is a minor timing 'hack'. We know the code library above will import prior to this running
                // The "set timeout 0" means "wait 1 microtask and run it on the next cycle.
                // this "hack" ensures the element has had time to process in the DOM so that when we set popped
                // it's listening for changes so it can react
                setTimeout(() => {
                // forcibly set the poppped attribute on something with id confetti
                // while I've said in general NOT to do this, the confetti container element will reset this
                // after the animation runs so it's a simple way to generate the effect over and over again
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