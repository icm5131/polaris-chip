import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

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
    this.imageurl = "https://www.telegraph.co.uk/content/dam/films/2016/04/28/tonystark2_trans_NvBQzQNjv4BqeuRHplZSizlnIpEPA_wgci-oMky92GODLj7YayikDrk.jpg";
    this.description = "This is the highest tier of meme when it comes to relatability and humour.";
    this.btnlink = "https://hax.psu.edu";
    this.fancy = false;
    this.toptext = "the moment"
    this.bottomtext = "when your code works"
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        flex-wrap: wrap;
      }

      :host([fancy]) {
        background-color: hotpink;
        border: 4px solid royalblue;
        border-radius: 8px;
        box-shadow: 10px 5px 5px darkslateblue;
        width: 416px;
        margin: 32px;
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
        border: 4px solid royalblue;
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

      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details div {
        border: 2px solid royalblue;
        border-radius: 8px;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }

      details[open] summary {
        font-weight: bold;
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

  // put this anywhere on the MyCard class; just above render() is probably good
  openChanged(e) {
    console.log(e);
    if (e.target.getAttribute("open") !== null) {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div class="base">
        <div class="Title">
          <header class="card-title">${this.cardtitle}</header>
        </div>
        <!-- <img class="img" src="${this.imageurl}" width="280"> -->
        <meme-maker image-url="${this.imageurl}" top-text="${this.toptext}" bottom-text="${this.bottomtext}" class="img"></meme-maker>
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>Description</summary>
          <div>
            <slot>${this.description}</slot>
          </div>
        </details>
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
      fancy: { type: Boolean, reflect: true },
      toptext: { type: String, reflect: true, attribute: "top-text" },
      bottomtext: {type: String, reflect: true, attribute: "bottom-text"}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
