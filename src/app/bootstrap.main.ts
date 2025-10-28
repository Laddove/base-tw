/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Laddove. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { customElement } from "lit/decorators.js";
import { html } from "lit";
import { PXRouterFactory } from "../utils/router";
import { routes } from "./routes.main";
import { BaseDom } from "../utils/dom";


/**
 * The MainApp Area.
 */
@customElement("ldv-app")
export class MainApp extends BaseDom {

      override firstUpdated() {
        this.intialize()
      
    }

    /**
     * Initialize the Application
     */
    async intialize() {

      try {
            this.intializeTheRouter();
        } catch (error) {
            if(error instanceof Error) {

                console.log("[ERROR-AT-STARTUP]",error.message)
            }else{
                console.log("[ERROR-AT-STARTUP]",error)

            }
        }

    };


    /**
     * Initalize the Router
     */

    intializeTheRouter() {
        const router = PXRouterFactory();
        const pageContainer = this.querySelector("#cm-ptr")! as HTMLElement;
        router.intializeWebRouter(pageContainer,routes)
    }

    protected render(): unknown {
        return html`
            <div class="__listme">
                <main>
                    <div id="cm-ptr"></div>
                </main>
            </div>
        `
    }
}


