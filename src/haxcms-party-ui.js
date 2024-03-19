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
                    padding: var(-ddd-spacing-5);
                    margin: var(--ddd-spacing-2);
                    color: var(--ddd-theme-default-keystoneYellow);
                }
            `
        ];
    }

    render() {
        return html`
            <div class="party-ui-wrapper">
                <div class="input-wrapper">
                    <input type="text" class="username-add">
                    <button id="useradd-button" class="button"></button>
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