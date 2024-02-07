import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.cardtitle = "THE BEST MEME";
    this.imageurl = "https://i.pinimg.com/originals/fb/30/d0/fb30d0ef2fd6304ebcb837a59afb8817.jpg";
    this.description = "This is the highest tier of meme when it comes to relatability and humour.";
    this.btnlink = "https://hax.psu.edu";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        flex-wrap: wrap;
      }

      :host([fancy]) {
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }

      .link {
        text-decoration: none;
      }

      .base {
        width: 300px;
        padding: 16px;
        margin: 32px;
        border-radius: 8px;
        color: white;
        background-color: var(--bgcolor);
        transition: transform 0.3s ease;
        border-style: solid;
        border-width: 4px;
        border-color: royalblue;
        text-align: center;
        box-shadow: 8px 8px 4px darkslateblue;
      }

      .change-color {
        background-color: royalblue;
      }

      .img {
        margin: 0px 0px 8px 0px;
      }

      .btn-wrapper {
        border-style: hidden;
        margin: 0;
        padding: 0;
        border-width: 0;
        text-align: center;
      }

      .btn {
        background-color: royalblue;
        color: white;
        font-size: 17px;
        border-radius: 8px;
        padding: 8px;
        margin: 8px;
      }

      .btn:focus,
      .btn:hover {
        background-color: hotpink;
      }

      .base .description {
        text-align: center;
        background-color: hotpink;
        margin: 0px 8px 8px 8px;
        font-size: 17px;
        padding: 8px;
        border-style: solid;
        border-width: 1px;
        border-color: black;
        border-radius: 8px;
      }

      .base .Title {
        /*text*/
        margin: 16px;
        padding: 8px;
        text-align: center;
        font-size: 28px;
        background-color: hotpink;
        border-style: solid;
        border-width: 1px;
        border-color: black;
        border-radius: 8px;
      }

      @media (max-width: 800px) and (min-width: 501px) {
        .btn {
          display: none;
        }
      }

      @media (max-width: 500px) {
        .base {
          transform: scale(0.6);
        }
      }
    `;
  }

  render() {
    return html`
      <div class="base">
        <div class="Title">
          <header class="card-title">${this.cardtitle}</header>
        </div>
        <img class="img" src="${this.imageurl}" width="280">
        <div class="description">
          <p>
            ${this.description}
          </p>
        </div>
        <div class="btn-wrapper">
          <a class="link" href="${this.btnlink}">
            <button class="btn">Details</button>
          </a>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      cardtitle: { type: String, reflect: true, attribute: "card-title"},
      imageurl: { type: String, attribute: "image-url", reflect: true },
      description: {type: String},
      btnlink: {type: String, attribute: "btn-link"},
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
