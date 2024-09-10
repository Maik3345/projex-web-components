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

  @property({ type: Number }) number1 = 0;
  @property({ type: Number }) number2 = 0;
  @property({ type: Number }) sum = 0;
  @property({ attribute: false }) handleOnSumNumber: (sum: number) => void =
    () => {};

  private sumNumbers() {
    this.sum = this.number1 + this.number2;
    if (this.handleOnSumNumber) {
      this.handleOnSumNumber(this.sum);
    }
  }

  override updated(changedProperties) {
    if (changedProperties.has("handleOnSumNumber")) {
      const handlerName = this.getAttribute("handleOnSumNumber");
      if (handlerName && typeof window[handlerName] === "function") {
        this.handleOnSumNumber = window[handlerName];
      }
    }
  }

  override render() {
    return html`
      <p>Number 1: ${this.number1}</p>
      <p>Number 2: ${this.number2}</p>
      <p>Sum: ${this.sum}</p>
      <button @click="${this.sumNumbers}">Sum Numbers</button>
    `;
  }
}
