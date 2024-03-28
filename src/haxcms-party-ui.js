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
                    margin: var(--ddd-spacing-4);
                    width: 95%;
                    text-align: center;
                    border: var(--ddd-border-lg);
                    border-color: var(--ddd-theme-default-potentialMidnight);
                    border-radius: 5px;
                    background-color: var(--ddd-theme-default-limestoneLight);
                }

                .add {
                    background-color: var(--ddd-theme-default-link);
                    border: none;
                    color: var(--ddd-theme-default-white);
                    border-radius: 5px;
                    font-size: 16px;
                    font-weight: var(--ddd-font-primary-medium);
                    padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
                    margin: var(--ddd-spacing-3);
                }

                .add:focus,
                .add:hover {
                    background-color: var(--ddd-theme-default-nittanyNavy);
                }

                .user-card {
                    margin: var(--ddd-spacing-4);
                    display: inline-flex;
                    flex-wrap: wrap;
                    text-align: center;
                    border: var(--ddd-border-md);
                    border-radius: 5px;
                    border-color: var(--ddd-theme-default-potentialMidnight);
                    padding: var(--ddd-spacing-2);
                }

                .user-char {
                    margin: auto;
                }

                .userName {
                    width: 100%;
                }

                .remove {
                    background-color: var(--ddd-theme-default-limestoneLight);
                    border-color: var(--ddd-theme-default-potentialMidnight);
                    margin: auto;
                    border-radius: 5px;
                    width: 50%;
                    font-size: 16px;
                    font-weight: var(--ddd-front-primary-medium);
                    padding: var(--ddd-spacing-2);
                }

                .remove:hover,
                .add:focus {
                    background-color: var(--ddd-theme-default-potentialMidnight);
                    color: var(--ddd-theme-default-limestoneLight);
                }
            `
        ];
    }

     inputScrub(e) {
        const inputVal = e.target.value;
        const scrubVal = inputVal.replace(/[^a-z0-9]+$/g, "");
        e.target.value = scrubVal.slice(0, 10);
    }

    updateName(event) {
        this.userName = event.target.value;
    }

    addUser(e) {
        const randomNumber = globalThis.crypto.getRandomValues(new Uint32Array(1))[0];
        

        const user = {
          id: randomNumber,
          name: this.userName,
          
        }
        console.log(user);
        this.users.push(user);
        this.requestUpdate();
        console.log(this.users);
    }

    removeUser(e) {
        this.shadowRoot.querySelectorAll('div').forEach((user) => {
            if (user === e.target.closest('div')) {
                console.log(user);
                user.remove();
            }
        });
    }

    render() {
        return html`
            <div class="party-ui-wrapper">
                <div class="input-wrapper">
                    <input type="text" class="username-add" id="username-input" @keyup="${this.inputScrub}" @input="${this.updateName}"/>
                    <button class="add" @click="${this.addUser}">Add User</button>
                </div>
                <div class="users-panel">
                    ${this.users.map((user) => html`
                        <div class="user-card ${user.name}">
                            <rpg-character class="user-char" seed="${user.name}"></rpg-character>
                            <p class="userName">
                                ${user.name}
                            </p>
                            <button class="remove" @click="${this.removeUser}">Remove User</button>
                        </div>
                    `)}
                </div>
                <button class="save-users">Save Users</button>
                <p>
                    
                </p>
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