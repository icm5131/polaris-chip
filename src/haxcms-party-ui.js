import { html, css } from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";

export class HaxcmsPartyUI extends DDD {

    static get tag() {
        return 'haxcms-party-ui';
    }

    constructor() {
        super();

        this.users = [];
        this.userName = "Name";
    }

    static get styles() {
        return [
            super.styles,
            css`
                :host {
                    display: block;
                }

                .party-ui-wrapper {
                    padding: var(--ddd-spacing-5);
                    margin: auto;
                    width: 95%;
                    text-align: center;
                    border: var(--ddd-border-lg);
                    border-color: var(--ddd-theme-default-coalyGray);
                    background-color: var(--ddd-theme-default-limestoneLight);
                }

                .user-button {
                    background-color: var(--ddd-theme-default-pughBlue);
                    border-color: var(--ddd-theme-default-beaverBlue);

                }

                .user-card {
                    margin: var(--ddd-spacing-1);
                    display: inline-flex;
                    flex-wrap: wrap;
                    text-align: center;
                    border: var(--ddd-border-sm);
                    border-color: var(--ddd-theme-default-potentialMidnight);
                }

                .userName {
                    width: 100%;
                }

                .close {
                    color: var(--ddd-theme-default-original87Pink);
                    
                }
            `
        ];
    }

     updateName(event) {
        this.userName = event.target.value;
    }

    addUser(e) {
        const randomNumber = globalThis.crypto.getRandomValues(new Uint32Array(1))[0];
        

        const user = {
          id: randomNumber,
          title: this.userName,
          content: "Some content of some kind",
          coolness: 7
        }
        console.log(user);
        // push by itself is not a mutating operation
        this.users.push(user);
        this.requestUpdate();
        //this.items = [...this.items, item];
        console.log(this.users);
      }

    render() {
        return html`
            <div class="party-ui-wrapper">
                <div class="input-wrapper">
                    <input type="text" class="username-add" id="username-input" @input="${this.updateName}"/>
                    <button class="user-button b-md" @click="${this.addUser}">Add User</button>
                </div>
                <div class="users-panel">
                    ${this.users.map((user) => html`
                        <div class="user-card">
                            <rpg-character seed="${user.title}"></rpg-character>
                            X
                            <p class="userName">
                                ${user.title}
                            </p>
                        </div>
                    `)}
                </div>
            </div>
        `;
    }

    static get properties() {
        return {
            ...super.properties,
            users: { type: Array },
            userName: { type: String, attribute: "user-name"}
        }
    }
}

globalThis.customElements.define(HaxcmsPartyUI.tag, HaxcmsPartyUI);