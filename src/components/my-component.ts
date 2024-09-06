import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-component")
export class MyComponent extends LitElement {
  static override styles = css`
    :host {
      display: block;
      background-color: lightgray;
      padding: 10px;
    }
  `;

  @property() name = "Somebody";

  override render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
