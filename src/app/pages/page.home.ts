/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Laddove. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


import { customElement } from "lit/decorators.js";
import { html } from "lit";
import { BaseDom } from "../../utils/dom";

@customElement("ldv-home")
export class HomePage extends BaseDom{

    protected render(): unknown {
        return html`
        <div class="vcl-container">
            <h2 class="text-3xl font-bold ">LaddoveApp </h2>
        </div>
        `
    }
}