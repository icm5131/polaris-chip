import { html, css } from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class HaxcmsPartyUI extends DDD {

    static get tag() {
        return 'haxcms-party-ui';
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
                    background-color: var(--ddd-theme-default-slateMaxLight);
                }

                .user-button {
                    background-color: var(--ddd-theme-default-pughBlue);
                    border-color: var(--ddd-theme-default-beaverBlue);

                }
            `
        ];
    }

    render() {
        return html`
            <div class="party-ui-wrapper">
                <div class="input-wrapper">
                    <input type="text" class="username-add">
                    <button id="useradd-button" class="user-button b-md">Add User</button>
                </div>
                <div class="users-panel">
                    
                </div>
            </div>
        `;
    }

    static get properties() {
        return {
            ...super.properties,
            title: { type: String }
        }
    }
}

globalThis.customElements.define(HaxcmsPartyUI.tag, HaxcmsPartyUI);