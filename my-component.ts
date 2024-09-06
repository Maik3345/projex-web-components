import { LitElement, html, css } from "lit";

class MyComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: lightgray;
      padding: 10px;
    }
  `;

  render() {
    return html`<h1>Hola desde MyComponent!</h1>`;
  }
}

customElements.define("my-component", MyComponent);
