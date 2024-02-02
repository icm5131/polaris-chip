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
    this.title = "THE BEST MEME";
    this.imageurl = "https://i.pinimg.com/originals/fb/30/d0/fb30d0ef2fd6304ebcb837a59afb8817.jpg";
    this.description = "This is the highest tier of meme when it comes to relatability and humour.";
    this.btnlink = "https://hax.psu.edu";
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        flex-wrap: wrap;
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
        background-color: grey;
        transition: transform 0.3s ease;
        border-style: solid;
        border-width: 4px;
        border-color: #2b2b2b;
        text-align: center;
        box-shadow: 8px 8px 4px darkslategray;
      }

      .change-color {
        background-color: black;
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
        background-color: black;
        color: white;
        font-size: 17px;
        border-radius: 8px;
        padding: 8px;
        margin: 8px;
      }

      .btn:focus,
      .btn:hover {
        background-color: dimgrey;
      }

      .cardlist {
        display: flex;
        flex-wrap: wrap;
      }

      .base .description {
        text-align: center;
        background-color: dimgrey;
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
        background-color: dimgrey;
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
        <div class="cardlist">
          <div class="base">
            <div class="Title">
              <header class="card-title">${this.title}</header>
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
        </div>
      `;
  }

  static get properties() {
    return {
      title: { type: String },
      imageurl: { type: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
