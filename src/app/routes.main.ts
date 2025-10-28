
/*---------------------------------------------------------------------------------------------
 *  Copyright (c)Laddove. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Route } from "@vaadin/router";
import "./pages/page.home"

export const routes:Route[] = [
    {
        path : "/",
        component : "ldv-home"
    }
]
