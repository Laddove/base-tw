import { LitElement } from "lit";

export class BaseDom extends LitElement {

    protected override createRenderRoot(): HTMLElement | DocumentFragment {
        return this;
    }
}