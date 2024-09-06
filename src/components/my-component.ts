// src/my-component.ts
import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-component")
export class MyComponent extends LitElement {
  static override styles = css`
    :host {
      display: block;
      background-color: lightgray;
      padding: 10px;
    }
  `;

  override render() {
    return html`<h1>Hello from My Component!</h1>`;
  }
}
