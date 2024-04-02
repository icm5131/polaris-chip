import { html, css, _$LE } from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";

export class HaxcmsPartyUI extends DDD {

    static get tag() {
        return 'haxcms-party-ui';
    }

    constructor() {
        super();

        this.users = [];
        this.printUsers = [];
        this.userName = null;
        this.success = false;
    }

    static get styles() {
        return [
            super.styles,
            css`
                :host {
                    display: block;
                    font-family: "Press Start 2P", system-ui;
                    --font-size-5xs: 12px;
                    --font-size-6xs: 10px;
                }

                button{
                    font-family: "Press Start 2P", system-ui;
                }

                input {
                    font-family: "Press Start 2P", system-ui;
                }

                pre {
                    white-space: pre-line;
                    text-align: left;
                }

                .party-ui-wrapper {
                    padding: var(--ddd-spacing-5);
                    margin: var(--ddd-spacing-4);
                    text-align: center;
                    background-color: var(--ddd-theme-default-limestoneLight);
                }

                .users-panel {
                    height: 50vh;
                    overflow-x: hidden;
                    overflow-y: auto;
                }

                .ui-button {
                    background-color: var(--ddd-theme-default-link);
                    border: none;
                    color: var(--ddd-theme-default-white);
                    border-radius: var(--ddd-radius-xs);
                    font-size: var(--ddd-font-size-5xs);
                    font-weight: var(--ddd-font-primary-medium);
                    padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
                    margin: var(--ddd-spacing-3);
                    padding: var(--ddd-spacing-2);
                }

                .ui-button:focus,
                .ui-button:hover {
                    background-color: var(--ddd-theme-default-nittanyNavy);
                }

                button:disabled {
                    background-color: var(--ddd-theme-default-disabled);
                    color: var(--ddd-theme-default-limestoneGray);
                    cursor: not-allowed;
                }

                .user-card {
                    margin: var(--ddd-spacing-4);
                    padding: var(--ddd-spacing-2);
                    display: inline-flex;
                    flex-wrap: wrap;
                    text-align: center;
                    border: var(--ddd-border-md);
                    border-radius: var(--ddd-radius-xs);
                    border-color: var(--ddd-theme-default-potentialMidnight);
                    box-shadow: 10px 5px 5px var(--ddd-theme-default-limestoneGray);
                }

                .rpg {
                    width: 100%;
                }

                .user-char {
                    margin: auto;
                }

                .card-ui {
                    margin: auto;
                }

                .userName {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: clip;
                    width: 100%;
                }

                .card-button {
                    background-color: var(--ddd-theme-default-limestoneLight);
                    border-color: var(--ddd-theme-default-potentialMidnight);
                    margin: auto;
                    padding: var(--ddd-spacing-2);
                    border-radius: var(--ddd-radius-xs);
                    width: 100%;
                    font-size: var(--font-size-5xs);
                    font-weight: var(--ddd-front-primary-medium);
                    padding: var(--ddd-spacing-2);
                }

                .card-button:hover,
                .card-button:focus {
                    background-color: var(--ddd-theme-default-potentialMidnight);
                    color: var(--ddd-theme-default-limestoneLight);
                }

                .success {
                    width: 25%;
                    margin: auto;
                    padding: var(--ddd-spacing-4);
                    background-color: var(--ddd-theme-default-success);
                    color: var(--ddd-theme-default-successLight);
                    font-size: var(--ddd-font-size-s);
                    border-radius: var(--ddd-radius-xs);
                }

                .success:hidden {
                    display: none;
                }

                .array-display {
                    width: 80%;
                    margin: auto;
                    text-align: center;
                }

                .array-text {
                    margin: auto;
                    background-color: transparent;
                    overflow-x: hidden;
                    overflow-y: auto;
                    border: var(--ddd-border-md);
                    border-color: var(--ddd-theme-default-potentialMidnight);
                }

                .array-display:hidden {
                    display: none;
                }

                @media (max-width: 768px) {
                    .users-panel {
                        transform: scale(.8);
                    }

                    .user-card {
                        margin: var(--ddd-spacing-1);
                        //font-size: var(--font-size-6xs);
                    }

                    .rpg {
                        width: 50%;
                    }

                    .card-ui {
                        width: 50%;
                    }

                    .card-button {
                        //font-size: var(--font-size-6xs);
                        margin: var(--ddd-spacing-1);
                    }

                    .user-char {
                        float: left;
                        transform: scale(.8);
                        margin: var(--ddd-spacing-1);
                    }

                    .userName {
                        margin: var(--ddd-spacing-1);
                    }

                    .ui-button {
                        //font-size: var(--font-size-6xs);
                    }

                    .success {
                        transform: scale(.8);
                        //font-size: var(--font-size-6xs);
                    }

                    .array-text {
                        //font-size: var(--font-size-6xs);
                    }
                }
            `
        ];
    }

    checkRun(e) {
        if (e.key === "Enter") {
            const button = document.querySelector('haxcms-party-ui').shadowRoot.getElementById("add-button");
            button.focus();
            button.click();
        }
    }

    updateName(e) {
        const inputVal = e.target.value;
        const scrubVal = inputVal.toLowerCase().replace(/[^a-z0-9]+$/g, "");
        e.target.value = scrubVal.slice(0, 10);
        this.userName = e.target.value;
    }

    addUser(e) {
        if (!this.users.filter(e => e.name === this.userName).length > 0) {
            const randomNumber = globalThis.crypto.getRandomValues(new Uint32Array(1))[0];


            const user = {
                id: randomNumber,
                name: this.userName,

            }
            this.users.push(user);
            this.userName = "";
            document.querySelector('haxcms-party-ui').shadowRoot.getElementById("user-input").value = "";
            this.requestUpdate();
            document.querySelector('haxcms-party-ui').shadowRoot.getElementById("user-input").focus();
        }
        else {
            window.alert("USER ALREADY ADDED")
            document.querySelector('haxcms-party-ui').shadowRoot.getElementById("user-input").select();
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

    removeUser(e) {
        this.users = this.users.filter(user => user.id !== parseInt(e.target.getAttribute('data-user-id')));
    }

    displayUsers(e) {
        if (this.users.length !== 0) {
            this.printUsers = JSON.stringify(this.users, null, 2);
            this.makeItRain();0
            this.success = true;
        }
    }

    render() {
        return html`
            <div class="party-ui-wrapper">
                <confetti-container id="confetti">
                    <div class="input-wrapper">
                        <input type="text" class="username-add" id="user-input" value="${this.userName}" @keypress="${this.checkRun}" @input="${this.updateName}" />
                        <button class="add ui-button" id="add-button" @click="${this.addUser}" ?disabled="${this.userName == null || this.userName == ""}">Add</button>
                    </div>
                    <div class="users-panel">
                        ${this.users.map((user) => html`
                            <div class="user-card ${user.name}">
                                <div class="rpg">
                                    <rpg-character class="user-char" seed="${user.name}"></rpg-character>
                                </div>
                                <div class="card-ui">
                                    <div class="userName">
                                        ${user.name}
                                    </div>
                                    <button class="card-button remove" data-user-id="${user.id}" @click="${this.removeUser}">Remove</button>
                                </div>
                            </div>
                        `)}
                    </div>
                    <button class="save-users ui-button" @click="${this.displayUsers}" ?disabled="${this.users.length == 0}">Save</button>
                    <div class="success" ?hidden="${!this.success}">
                        SUCCESS!!
                    </div>
                    <div class="array-display" ?hidden="${!this.success}">
                        <pre class="array-text">
                            ${this.printUsers}
                        </pre>
                    </div>
                </confetti-container>
            </div>
        `;
    }

    static get properties() {
        return {
            ...super.properties,
            users: { type: Array },
            userName: { type: String, attribute: "user-name", reflect: true },
            printUsers: { type: Array, attribute: "print-users", reflect: true },
            success: { type: Boolean }
        }
    }
}

globalThis.customElements.define(HaxcmsPartyUI.tag, HaxcmsPartyUI);